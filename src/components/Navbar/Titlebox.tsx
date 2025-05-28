import React from "react";
import Sitelinks from "./Sitelinks";

interface props {
    widthPercentage: number, 
    heightPercentage: number
}

const Titlebox: React.FC<props> = ({widthPercentage, heightPercentage}) => {
    return (
        <section 
            className="flex flex-start items-center mx-8" 
            style={{ 
                width: `${widthPercentage}%`, 
                height: `${heightPercentage}%` 
            }}
        >
            <div
                className="text-gray-200 text-3xl w-full"
                style={{ fontFamily: "'DaltonWhite', sans-serif" }}
            >
                Lachie Rigg
            </div>
        </section>
    )
}

export default Titlebox;