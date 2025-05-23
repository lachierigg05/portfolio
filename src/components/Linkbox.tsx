import React from "react";
import Sitelinks from "./Sitelinks";

interface props {
    widthPercentage: number, 
    heightPercentage: number
}

const Linkbox: React.FC<props> = ({widthPercentage, heightPercentage}) => {
    return (
        <section className={`flex w-full h-${heightPercentage}`}>
            <Sitelinks/>
        </section>
    )
}

export default Linkbox; 