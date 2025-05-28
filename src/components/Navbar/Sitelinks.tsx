import React from "react";
import LinkIcon from "./Linkicon";
import { Github, Linkedin, Download } from "lucide-react";

const Sitelinks: React.FC = () => {
    return (
        <div className="flex w-full h-full justify-end mx-6 lg:mx-10 xl:mx-6 2xl:mx-14">
            <LinkIcon href="https://github.com/lachierigg05" icon={<Github color="none" fill="#6e5494" className="h-8 w-8"/>} label="Github" />
            <LinkIcon href="https://www.linkedin.com/in/lachierigg" icon={<Linkedin color="none" fill="#0072b1" className="h-8 w-8"/>} label="LinkedIn" />
            <LinkIcon href="/Resume.pdf" icon={<Download color="gray" className="h-8 w-8"/>} label="Resume" />
        </div>
    )
}

export default Sitelinks;