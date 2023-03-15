import React from "react";

import FooterLogo from './../../assets/images/fz-logo.png';

const Footer = () => {
	return (
		<footer className="footer">
			<section className="footer-logo">
				<img className="footer-image" src={FooterLogo} />
			</section>
			<section className="footer-detail">
				<p>&copy; Copyright 2023, Foster Z</p>
			</section>
			<section className="footer-social">
				<a href="#"><i className="fa-brands fa-github"></i></a>
				<a href="#"><i className="fa-brands fa-facebook"></i></a>
				<a href="#"><i className="fa-brands fa-google"></i></a>
				<a href="#"><i className="fa-brands fa-instagram"></i></a>
				<a href="#"><i className="fa-brands fa-twitter"></i></a>
				<a href="#"><i className="fa-brands fa-linkedin"></i></a>
			</section>
		</footer>
	)
}
export default Footer;