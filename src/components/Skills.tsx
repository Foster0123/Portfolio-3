import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { all, frontEnd, backEnd, language, uiLibs, vcs, extra, db, fullStack, devops } from "../data/skills/skills";

const Skills = () => {
	return (
		<div className="skills-container" id="skills">
			<h2 className="section-header">Skills</h2>
			<select className="skill-section">
				<Tabs className="skill-display-pane">
					<TabList className="skill-tab-section">
						<Tab className="skill">All</Tab>
						<Tab className="skill">Frontend</Tab>
						<Tab className="skill">Backend</Tab>
						<Tab className="skill">Fullstack</Tab>
						<Tab className="skill">UI Library</Tab>
						<Tab className="skill">Languages</Tab>
						<Tab className="skill">Databases</Tab>
						<Tab className="skill">Source Control</Tab>
						<Tab className="skill">DevOps</Tab>
						<Tab className="skill">Additionals</Tab>
					</TabList>
					<TabPanel className="tech-skills">
						{all.map((data: any, index: any) => {
							return (
								<article
									key={index}
									className="skill-item"
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
										loading="lazy"
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						{frontEnd.map((data: any, index: any) => {
							return (
								<article
									key={index}
									className="skill-item"
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
										loading="lazy"
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						{backEnd.map((data: any, index: any) => {
							return (
								<article
									key={index}
									className="skill-item"
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
										loading="lazy"
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						{fullStack.map((data: any, index: any) => {
							return (
								<article
									key={index}
									className="skill-item"
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
										loading="lazy"
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						{uiLibs.map((data: any, index: any) => {
							return (
								<article
									key={index}
									className="skill-item"
									
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
										loading="lazy"
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						{language.map((data: any, index: any) => {
							return (
								<article
									key={index}
									className="skill-item"
									
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
										loading="lazy"
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						{db.map((data: any, index: any) => {
							return (
								<article
									key={index}
									className="skill-item"
									
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
										loading="lazy"
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						{vcs.map((data: any, index: any) => {
							return (
								<article
									key={index}
									className="skill-item"
									
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
										loading="lazy"
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						{devops.map((data: any, index: any) => {
							return (
								<article
									key={index}
									className="skill-item"
									
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
										loading="lazy"
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						{extra.map((data: any, index: any) => {
							return (
								<article
									key={index}
									className="skill-item"
									
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
										loading="lazy"
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
				</Tabs>
			</select>
		</div>
	);
};
export default Skills;
