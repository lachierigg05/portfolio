import React from "react";
import Sitelinks from "./Sitelinks";

interface props {
    widthPercentage: number, 
    heightPercentage: number
}

const Linkbox: React.FC<props> = ({widthPercentage, heightPercentage}) => {
    return (
        <section 
            className="flex" 
            style={{ 
                width: `${widthPercentage}%`, 
                height: `${heightPercentage}%` 
            }}
        >
            <Sitelinks/>
        </section>
    )
}

export default Linkbox;