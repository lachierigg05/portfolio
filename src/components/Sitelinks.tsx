import React from "react";
import { Github, Linkedin, Download } from "lucide-react";

const Sitelinks: React.FC = () => {
    return (
        <div className="flex w-full h-full justify-end items-center mx-20">
            <a href="https://github.com/lachierigg05" className="flex flex-col justify-center h-full items-center mx-10 group">
                <Github className="mb-1 h-12 w-12 transform transition-all duration-300 group-hover:scale-110 group-hover:mb-2" color="black" fill="#501DAF" />
                <span className="text-black text-lg font-bold">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/lachlan-rigg-b0249b218/" className="flex flex-col justify-center h-full items-center mx-10 group">
                <Linkedin className="mb-1 h-12 w-12 transform transition-all duration-300 group-hover:scale-110 group-hover:mb-2" color="black" fill="#0077B5"/>
                <span className="text-black text-lg font-bold">LinkedIn</span>
            </a>
            <a href="https://github.com/lachierigg05" className="flex flex-col justify-center h-full items-center mx-10 group">
                <Download className="mb-1 h-12 w-12 transform transition-all duration-300 group-hover:scale-110 group-hover:mb-2" color="black"/>
                <span className="text-black text-lg font-bold">Resume</span>
            </a>
        </div>
    )
}

export default Sitelinks;