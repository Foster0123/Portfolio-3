import React from "react";

import AuthorLogo from "./../assets/images/user.png";

import { info } from "../data/info/info";

const Intro = () => {
	return (
		<div className="intro-container" id="intro">
			<section className="intro-header-section">
				<h2 className="section-header">Personal</h2>
			</section>
			<section className="intro-image-section">
				<img src={AuthorLogo} alt="Author Logo" />
			</section>
			<section className="intro-detail-section">
				{info.map((data: any, index: number) => {
					return (
						<article className="intro-detail" key={index}>
							<h4>{data.field}:</h4>
							<p>{data.value}</p>
						</article>
					);
				})}
			</section>
		</div>
	);
};
export default Intro;
