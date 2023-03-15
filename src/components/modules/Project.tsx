import React from 'react';

const Project = (props: any) => {
    props.techs.map((item: any) => {
        console.log(item)
    })
    return (
        <div className="project-container" id="projects">
            <article className="project">
                <div className="project-canvas" style={{ backgroundImage: `url(${props.bgImage})` }}>
                    <a className="new-image-window" href={props.bgImage} target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i>
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
                        <li>{1}</li>
                    </ul>
                </div>
                <div className="project-skills">
                {
                    props.techs.map((tech: any, index: any) => {
                        <img className="project-tools" src={tech} key={index} alt="Skill Logo" loading="lazy" />
                    })
                }
                </div>
            </article>
        </div >
    )
}
export default Project;