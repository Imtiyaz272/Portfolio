/* eslint-disable no-unused-vars */
import React from 'react';

const Skills = () => {
  return (
    <div className="bg-white w-full md:w-4/5 rounded-lg text-center p-6 md:p-10 mx-auto mt-10">
      <h3 className="text-3xl md:text-4xl font-bold text-gray-600">Skills</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8 text-gray-800">
        
        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-lg md:text-xl">Programming Language</h4>
          <ul className="mt-2 space-y-1 font-noto text-sm md:text-base">
            <li>Java</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="border-t-2 md:border-t-0 md:border-l-2 border-[#BDB395] flex flex-col items-center pt-4 md:pt-0 md:pl-4">
          <h4 className="font-semibold text-lg md:text-xl">Technologies</h4>
          <ul className="mt-2 space-y-1 font-noto text-sm md:text-base">
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Angular</li>
            <li>Tailwind CSS</li>
            <li>Git / GitHub</li>
          </ul>
        </div>

        <div className="border-t-2 md:border-t-0 md:border-l-2 border-[#BDB395] flex flex-col items-center pt-4 md:pt-0 md:pl-4">
          <h4 className="font-semibold text-lg md:text-xl">Relevant Coursework</h4>
          <ul className="mt-2 space-y-1 font-noto text-sm md:text-base">
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
