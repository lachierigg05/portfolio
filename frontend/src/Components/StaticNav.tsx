import React, { useEffect, useState } from 'react'; 
import NavButton from './NavButton';

const StaticNav: React.FC = () => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        setInView(true);
        
        const handleScroll = () => {
            const offset = window.scrollY; 
            if (offset === 0) {
                setInView(true); 
            } else {
                setInView(false); 
            }
        }

        window.addEventListener('scroll', handleScroll); 

        return () => {
            window.removeEventListener('scroll', handleScroll); 
        }

    }, []);

    
    return (
        <nav className={`fixed flex justify-start h-30 w-full bg-gray-950 shadow-blue-500 transition-opacity duration-800 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex h-full w-1/2 ml-10 items-center">
                <h1 className={'text-white font-popsies text-4xl'}>Lachie Rigg</h1>
            </div>
            <div className={`flex h-full w-1/2 justify-end`}>
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
        </nav>
    )
}

export default StaticNav; 