/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; 
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 text-[#68604c] font-noto">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold"></h1>

        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="hidden md:flex space-x-8 text-xl font-noto">
          <NavLinks />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-white dark:bg-gray-900 py-4 shadow-md">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => (
  <>
    <Link to="home" smooth={true} duration={500} spy={true} offset={-80} className="cursor-pointer" activeClass="active">
      Home
    </Link>
    <Link
      to="skills"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      className="cursor-pointer"
      activeClass="active"
    >
      Skills
    </Link>
    <Link
      to="experience"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      className="cursor-pointer"
      activeClass="active"
    >
      Experience
    </Link>
    <Link
      to="projects"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      className="cursor-pointer"
      activeClass="active"
    >
      Projects
    </Link>
    <Link
      to="contact"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      className="cursor-pointer"
      activeClass="active"
    >
      Contact
    </Link>
  </>
);

export default Navbar;
