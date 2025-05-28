import React from 'react';

interface LinkIconProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const LinkIcon:React.FC<LinkIconProps> = ({ href, icon, label }) => {
    const isDownload = label === "Resume";
    
    return (
        <a
            href={href}
            className="flex flex-col justify-center h-9/10 items-center mx-5 group hover:transform hover:scale-105 transition-transform duration-200 ease-in-out"
            style={{ width: 'clamp(3rem, 3vw, 4rem)' }}             
            target={isDownload ? "_self" : "_blank"}
            rel={isDownload ? undefined : "noopener noreferrer"} 
            download={isDownload ? "Resume - Lachie Rigg" : undefined} 
        >
            {icon}
            <span className="text-gray-300">{label}</span>
        </a>
    );
}
export default LinkIcon;