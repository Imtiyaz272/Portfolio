/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 text-[#68604c] font-noto">
      <div className="container mx-auto flex justify-center items-center p-4">
        <div className="space-x-8 text-xl font-noto">
          <Link to="home" smooth={true} duration={500} spy={true} offset={-80} className="cursor-pointer" activeClass="active">Home</Link>
          <Link to="skills" smooth={true} duration={500} spy={true} offset={-80}  className="cursor-pointer" activeClass="active">Skills</Link>
          <Link to="experience" smooth={true} duration={500} spy={true} offset={-80}  className="cursor-pointer" activeClass="active">Experience</Link>
          <Link to="projects" smooth={true} duration={500} spy={true} offset={-80}  className="cursor-pointer" activeClass="active">Projects</Link>
          <Link to="contact" smooth={true} duration={500} spy={true} offset={-80}  className="cursor-pointer" activeClass="active">Contact</Link>
        </div>
        {/* <DarkModeToggle /> */}
      </div>
    </nav>
  );
};

export default Navbar;
