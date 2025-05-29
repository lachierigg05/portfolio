import React from "react";
import { House, NotebookText, Phone } from 'lucide-react';

interface props {
    widthPercentage: number, 
    heightPercentage: number
}

const Linkbox: React.FC<props> = ({widthPercentage, heightPercentage}) => {
    return (
        <section 
            className="flex flex-start items-center" 
            style={{ 
                width: `${widthPercentage}%`, 
                height: `${heightPercentage}%` 
            }}
        >
        <a className="hover:cursor-pointer mx-3">
            <House style={{ width: "26px" }}/>
        </a>
        <a className="hover:cursor-pointer mx-3">
            <NotebookText/>
        </a>
        <a className="hover:cursor-pointer mx-3">
            <Phone/>
        </a>
        </section>
    )
}

export default Linkbox;