import React from 'react';

import Project from './modules/Project';

import { project } from '../data/projects/project';

const Projects = () => {

    return (
        <div className="project-container" id="projects">
            <h2 className="section-header">Projects</h2>
            <div className="projects">
                {
                    project.map((item: any, index: Number) => {
                        return(
                            <Project
                                key={index}
                                projectName={item.name}
                                projectDetail={item.details}
                                techs={item.tech}
                                bgImage={item.bgImage}
                                logoImage={item.logoImage}
                                skills={item.skills}
                                features={item.features}
                                accent={item.accent}
                                githubLink={item.github}
                                liveLink={item.live}
                                status={item.status}
                            />
                        )
                    })
                }      
            </div>
        </div >
    )
}
export default Projects;