import React, { useEffect, useState } from 'react'; 
import NavButton from './NavButton';
import { Menu, WindArrowDown } from 'lucide-react';

export const NavBar: React.FC = () => {
    const [showNavbar, setShowNavBar] = useState(false);
    const [isMobView, setMobView] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false); 
    
    // Effect hook to handle navbar view when scrolling past 75 pixels
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY; 
            if (offset > 75) {
                setShowNavBar(true);
            } else {
                setShowNavBar(false); 
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    // Effect hook to restructure nav bar when width reaches mobile size 
    useEffect(() => {
        const checkScreenSize = () => {setMobView(window.innerWidth >= 650);};
        checkScreenSize()
        window.addEventListener("resize", checkScreenSize); 
        return(() => {window.removeEventListener("resize", checkScreenSize)}); 
    }, [])
    
    // TODO - Implement the drop down menu for the mobile hamburger menu icon
    return (
        <nav className={`fixed flex flex-row justify-center items-center t-0 h-30 w-full bg-gray-950 shadow-2xl shadow-blue-950 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-100'}`}>
            <div className="flex h-full w-1/2 ml-10 items-center mt-4">
                <h1 className={'text-white font-popsies text-4xl'}>Lachie Rigg</h1>
            </div>
            <div className={`flex h-full w-1/2 justify-end mt-6`}>
                { isMobView ? (
                    // Desktop View 
                    <div className='flex justify-end w-full h-full'>
                        <NavButton label={'Home'} onClick={function (): void {
                            const element = document.getElementById('home');
                            element?.scrollIntoView({behavior: 'smooth'});  
                        } }/>
                        <NavButton label={'Projects'} onClick={function (): void {
                            const element = document.getElementById('projects');
                            element?.scrollIntoView({behavior: 'smooth'});  
                        } }/>
                        <NavButton label={'Contact'} onClick={function (): void {
                            const element = document.getElementById('contact');
                            element?.scrollIntoView({behavior: 'smooth'});  
                        } }/>
                    </div>
                ) : (
                    // Mobile View 
                    <div className={`flex h-full w-full justify-end m-8`}>
                        <Menu size={30} color="white" onClick={() => {setMenuOpen(true)}}/>
                    </div>
                )     
            }    
            </div>
        </nav>
    )
}

export default NavBar;