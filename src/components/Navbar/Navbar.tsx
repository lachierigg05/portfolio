"use client"

import React, { useState, useEffect } from "react";
import Linkbox from "./Linkbox";
import Titlebox from "./Titlebox";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "700"] });

const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsAtTop(scrollTop === 0);
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Show navbar when mouse is within 50px of top
            const shouldShow = e.clientY <= 50;
            setIsVisible(shouldShow || isAtTop);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isAtTop]);

    return (
        <nav 
            className={`
                fixed top-0 left-0 w-full z-50
                flex justify-end bg-gray-950 shadow-md shadow-white/10 
                border border-gray-950 border-b-gray-600
                transition-transform duration-300 ease-in-out
                ${isVisible || isAtTop ? 'translate-y-0' : '-translate-y-full'}
            `}
            style={{ height: 'clamp(5rem, 5vw, 7rem)' }}
        >
            <Titlebox widthPercentage={100} heightPercentage={100}/>
            <Linkbox widthPercentage={100} heightPercentage={100}/>
        </nav>
    )
}

export default Navbar;