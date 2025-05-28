import React from "react";
import Linkbox from "./Linkbox";
import Titlebox from "./Titlebox";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "700"] });

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-end w-full bg-gray-950 shadow-md shadow-white/10 border border-gray-950 border-b-gray-600" style={{ height: 'clamp(5rem, 5vw, 7rem)' }}>
            <Titlebox widthPercentage={100} heightPercentage={100}/>
            <Linkbox widthPercentage={100} heightPercentage={100}/>
        </nav>
    )
}

export default Navbar;