import React from "react";

import AuthorLogo from "./../assets/images/user.png";

import { info } from "../data/info/info";

const Info = () => {
	return (
		<div className="info-container">
			<section className="info-header-section">
				<h2 className="section-header">Personal</h2>
			</section>
			<section className="info-image-section">
				<img src={AuthorLogo} alt="Author Logo" />
			</section>
			<section className="info-detail-section">
				{info.map((data: any) => {
					return (
						<article className="info-detail">
							<h4>{data.field}:</h4>
							<p>{data.value}</p>
						</article>
					);
				})}
			</section>
		</div>
	);
};
export default Info;
