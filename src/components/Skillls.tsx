import React from "react";
import { Link } from "gatsby";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { frontend } from "../data/skills/skills";

const Skills = () => {
	return (
		<div className="skills-container" id="skills">
			<h2 className="section-header">Skills</h2>
			<div className="skill-section">
				<Tabs>
					<TabList className="skill-tab-section">
						<Tab className="skill">All</Tab>
						<Tab className="skill">Frontend</Tab>
						<Tab className="skill">Backend</Tab>
						<Tab className="skill">Fullstack</Tab>
						<Tab className="skill">UI Library</Tab>
						<Tab className="skill">Languages</Tab>
						<Tab className="skill">Databases</Tab>
						<Tab className="skill">Source Control</Tab>
						<Tab className="skill">Additionals</Tab>
					</TabList>
					<TabPanel className="tech-skills">
						<h2>All Skills</h2>
					</TabPanel>
					<TabPanel className="tech-skills">
						{frontend.map((data: any) => {
							return (
								<article className="skill-item">
									<img className="skill-logo" src={data.imgSrc} alt={data.imgAlt} />
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						<h2>Back End Skills</h2>
					</TabPanel>
					<TabPanel className="tech-skills">
						<h2>Fullstack Skills</h2>
					</TabPanel>
					<TabPanel className="tech-skills">
						<h2>Component Libraries</h2>
					</TabPanel>
					<TabPanel className="tech-skills">
						<h2>Programming Languages</h2>
					</TabPanel>
					<TabPanel className="tech-skills">
						<h2>Databases</h2>
					</TabPanel>
					<TabPanel className="tech-skills">
						<h2>Source Control</h2>
					</TabPanel>
					<TabPanel className="tech-skills">
						<h2>Additional Skills</h2>
					</TabPanel>
				</Tabs>
				{/* <Link
					activeClassName="active-skill-tab"
					to="/fullstack-skills"
					className="skill"
				>
					Fullstack
				</Link>
				<Link
					activeClassName="active-skill-tab"
					to="/language-skills"
					className="skill"
				>
					Languages
				</Link>
				<Link
					activeClassName="active-skill-tab"
					to="/db-skills"
					className="skill"
				>
					Databases
				</Link>
				<Link
					activeClassName="active-skill-tab"
					to="/vcs-skills"
					className="skill"
				>
					Source Control
				</Link>
				<Link
					activeClassName="active-skill-tab"
					to="/ui-library"
					className="skill"
				>
					UI Libraries
				</Link>
				<Link
					activeClassName="active-skill-tab"
					to="/extra-skills"
					className="skill"
					
				>
					Additionals
				</Link> */}
			</div>
		</div>
	);
};
export default Skills;
