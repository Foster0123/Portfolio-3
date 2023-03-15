import React from "react";

import NavBarLogo from './../../assets/images/fz-logo.png';
import NavBarMenu from './../../assets/images/menu.svg';
const Navbar = () => {
    function toggleNavbar() {
        const navBar: any = document.getElementById("navbar-list");
        navBar.classList.toggle("show-navbar");
    }

    window.onscroll = () => {
        const navbar : any = document.getElementById("navbar");
        const navList : any = document.getElementById("navbar-list");
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-bg");
            navList.style.right = "0px";
            if(window.innerWidth < 600){
                navList.classList.add("navbar-bg")
            }
            else {
                navList.classList.remove("navbar-bg")
            }
        } else {
            navbar.classList.remove("navbar-bg");
            navList.style.right = "25px";
            if(window.innerWidth < 600){
                navList.classList.remove("navbar-bg")
            }
        }
    }
	return (
		<nav className="navbar" id="navbar">
        <img className="navbar-logo" src={NavBarLogo} />
        <ul className="navbar-list" id="navbar-list">
            <li className="nav-items"><a className="nav-link-1" href="#home">Home</a></li>
            <li className="nav-items"><a className="nav-link-2" href="#intro">Intro</a></li>
            <li className="nav-items"><a className="nav-link-3" href="#projects">Projects</a></li>
            <li className="nav-items"><a className="nav-link-4" href="#skills">Skills</a></li>
            <li className="nav-items"><a className="nav-link-5" href="#about">About</a></li>
        </ul>
        <section className="menu-button-section" id="intro">
            <button onClick={toggleNavbar}>
                <img src={NavBarMenu} />
            </button>
        </section>
</nav>
	)
}
export default Navbar;