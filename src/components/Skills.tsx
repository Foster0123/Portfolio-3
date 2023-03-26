import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { frontEnd, backEnd, language, uiLibs, vcs, extra, db, fullStack } from "../data/skills/skills";

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
						{frontEnd.map((data: any) => {
							return (
								<article
									className="skill-item"
									style={{
										background: `linear-gradient(-300deg, transparent, ${data.accent} 100%)`,
									}}
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						{backEnd.map((data: any) => {
							return (
								<article
									className="skill-item"
									style={{
										background: `linear-gradient(-300deg, transparent, ${data.accent} 100%)`,
									}}
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
					{fullStack.map((data: any) => {
							return (
								<article
									className="skill-item"
									style={{
										background: `linear-gradient(-300deg, transparent, ${data.accent})`,
									}}
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						{uiLibs.map((data: any) => {
							return (
								<article
									className="skill-item"
									style={{
										background: `linear-gradient(-300deg, transparent, ${data.accent})`,
									}}
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
						{language.map((data: any) => {
							return (
								<article
									className="skill-item"
									style={{
										background: `linear-gradient(-300deg, transparent, ${data.accent})`,
									}}
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
					{db.map((data: any) => {
							return (
								<article
									className="skill-item"
									style={{
										background: `linear-gradient(-300deg, transparent, ${data.accent})`,
									}}
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
					{vcs.map((data: any) => {
							return (
								<article
									className="skill-item"
									style={{
										background: `linear-gradient(-300deg, transparent, ${data.accent})`,
									}}
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
					<TabPanel className="tech-skills">
					{extra.map((data: any) => {
							return (
								<article
									className="skill-item"
									style={{
										background: `linear-gradient(-300deg, transparent, ${data.accent})`,
									}}
								>
									<img
										className="skill-logo"
										src={data.imgSrc}
										alt={data.imgAlt}
									/>
									<p>{data.name}</p>
								</article>
							);
						})}
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};
export default Skills;
