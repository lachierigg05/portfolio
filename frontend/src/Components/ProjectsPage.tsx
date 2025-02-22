import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsPage: React.FC = () => {
    return (
        <div id='projects' className="h-screen w-full flex justify-center">
            <ProjectCard/>
        </div>
    )
}

export default ProjectsPage;