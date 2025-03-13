/* eslint-disable no-unused-vars */
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#f3e8ff] text-gray-600 py-16 px-6 text-center">
      <h2 className=" font-bold text-gray-600 text-3xl mt-2">Connect With Me</h2>

      <div className="flex justify-center items-center gap-16 mt-5 border-t-2 border-gray-600 pt-6 max-w-2xl mx-auto">
        <a
          href="mailto:syedaimtiyaz19@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition-all"
        >
          <FaEnvelope size={40} />
          <span className="mt-2">Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/syeda-imtiyaz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition-all"
        >
          <FaLinkedin size={40} />
          <span className="mt-2">LinkedIn</span>
        </a>

        <a
          href="https://github.com/Imtiyaz272"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition-all"
        >
          <FaGithub size={40} />
          <span className="mt-2">GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
