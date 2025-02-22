import React, { useState, useEffect } from 'react';
import NavButton from './NavButton';

export const NavBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY < 100;
            setIsScrolled(!show);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const scrollToElement = (id : string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    const toggleNavbar = () => {
        setIsVisible(!isVisible);
    }
    
    return (
        <nav 
            className={`
                group fixed top-0 left-0 right-0 z-50
                ${isScrolled ? 'h-12' : 'h-28'}
                transition-all duration-300 ease-in-out
            `}
        >
            <div className={`
                transition-all duration-300 ease-in-out
                w-full bg-gray-950 border border-gray-800 
                shadow-2xl == shadow-blue-900
                ${isScrolled ? 'transform -translate-y-full group-hover:translate-y-0' : ''}
            `}>
                <div className='flex h-28 mx-2'>
                    <div className='flex h-full w-1/2 justify-start items-center'>
                        <h1 className='text-white ml-14 mt-4 font-popsies text-3xl'>
                            Lachie Rigg
                        </h1>
                    </div>
                    <div className='w-1/2 mr-4 flex justify-end items-center'>
                        <NavButton label='Home' onClick={scrollToTop} />
                        <NavButton label='About' onClick={() => scrollToElement('about')} />
                        <NavButton label='Projects' onClick={() => scrollToElement('projects')} />
                        <NavButton label='Contact' onClick={() => scrollToElement('contact')}/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;