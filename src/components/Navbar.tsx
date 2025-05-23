import React from "react";
import Linkbox from "./Linkbox";

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-center h-40 w-full bg-lemon shadow-xl shadow-lemon/40">
            <div className="w-5/10"></div>
            <Linkbox widthPercentage={50} heightPercentage={100}></Linkbox>
        </nav>
    )
}

export default Navbar;