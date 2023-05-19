import React from 'react';
import ExternalLogo from './../../assets/images/icons/expand-arrows.svg';
const Project = (props: any) => {
    return (
        <div className="project-container" id="projects">
            <article className="project" style={{ background: `linear-gradient(60deg, rgba(0, 0, 0, 0.1) 5%, ${props.accent} 150%)` }}>
                <div className="project-canvas" style={{ backgroundImage: `url(${props.bgImage})` }}>
                    <a className="new-image-window" href={props.bgImage} target="_blank">
                        <img className="project-image-external" src={ExternalLogo} alt="External Link To Project Preview Image Icon" />
                    </a>
                    <img className="project-image"
                        src={props.logoImage}
                        loading="lazy"
                        alt="Project Image"
                    />
                </div>
                <div className="project-links" >
                    <a className="project-demo" href={props.liveLink} target="_blank">
                        <i className="bi.bi-broadcast"></i>
                        <p>Live</p>
                    </a>
                    <a className="project-src"
                        href={props.githubLink}
                        target="_blank"
                    >
                        <i className="bi.bi-github" />
                        <p>GitHub</p>
                    </a>
                </div>
                {(() => {
                    if (props.status === "Ongoing") {
                        return (
                            <div className="project-status project-ongoing">
                                <i className="bi bi-activity"></i>
                                <p>Under Development</p>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="project-status project-finished">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>Completed</p>
                            </div>
                        )
                    }
                })()}
                <header className="project-title">{props.projectName}</header>
                <p className="project-details">{props.projectDetail}</p>
                <div className="project-features">
                    <header>Core Features</header>
                    <ul className="features-list">
                        {
                            props.features.map((feature: String, index: number) => {
                                return(
                                    <li key={index}>{index + 1} | {feature}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="project-skills">
                {
                    props.techs.map((tech: string, key: number) => {
                        return(
                            <img className="project-tools" src={tech} key={key} alt="Skill Logo" title={props.skills[key]} loading="lazy" />
                        )
                    })
                }
                </div>
            </article>
        </div >
    )
}
export default Project;