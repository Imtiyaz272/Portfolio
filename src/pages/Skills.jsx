/* eslint-disable no-unused-vars */
import React from 'react';

const Skills = () => {
  return (
    <div className="bg-white w-4/5 rounded-lg text-center p-10 mx-auto">
      <h3 className="text-4xl font-bold text-gray-600">Skills</h3>
      <div className="grid grid-cols-3 gap-8 mt-8 text-gray-800">
        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-xl">Programming Language</h4>
          <ul className="mt-2 space-y-1 font-noto">
            <li>Java</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="border-l-2 border-[#BDB395] flex flex-col items-center">
        <h4 className="font-semibold text-xl">Technologies</h4>
          <ul className="mt-2 space-y-1 font-noto">
            <li>React.js</li>
            <li>Node.js </li>
            <li>MongoDB</li>
            <li>Angular</li>
            <li>Tailwind CSS</li>
            <li>Git / GitHub</li>
          </ul>
        </div>

        <div className="border-l-2 border-[#BDB395] flex flex-col items-center">
        <h4 className="font-semibold text-xl">Relevant Coursework</h4>
          <ul className="mt-2 space-y-1 font-noto">
            <li>Database Management System</li>
            <li>Object Oriented Programming</li>
            <li>Operating System</li>
            <li>Computer Network</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
