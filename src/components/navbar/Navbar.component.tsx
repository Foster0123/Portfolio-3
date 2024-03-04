import React from "react";

import NavBarLogo from './../../assets/images/icon.png';
import { GiHamburger } from "react-icons/gi";

import './navbar.component.scss';

const Navbar = () => {
    function toggleNavbar() {
        const navBar: any = document.getElementById("navbar-list");
        navBar.classList.toggle("show-navbar");
    }

    // window.onscroll = () => {
    //     const navbar : any = document.getElementById("navbar");
    //     const navList : any = document.getElementById("navbar-list");
    //     if (window.scrollY > 50) {
    //         navbar.classList.add("navbar-bg");
    //         navList.style.right = "0px";
    //         if(window.innerWidth < 600){
    //             navList.classList.add("navbar-bg")
    //         }
    //         else {
    //             navList.classList.remove("navbar-bg")
    //         }
    //     } else {
    //         navbar.classList.remove("navbar-bg");
    //         navList.style.right = "25px";
    //         if(window.innerWidth < 600){
    //             navList.classList.remove("navbar-bg")
    //         }
    //     }
    // }
    return (
        <nav className="navbar" id="navbar">
            <img className="header__logo" src={NavBarLogo} width={36} height={36} alt="Logo" />
            <h1>Foster Z</h1>
        </nav>
    )
}
export default Navbar;