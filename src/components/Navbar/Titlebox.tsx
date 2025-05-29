import React from "react";
import Sitelinks from "./Sitelinks";
import Linkbox from "./Linkbox";
import PageLinks from "./PageLinks";

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
            <PageLinks widthPercentage={50} heightPercentage={100}/>
        </section>
    )
}

export default Titlebox;