import { useState } from "react";

const experiences = [
  {
    id: 1,
    company: "WaitPlay",
    position: "Software Engineering Intern",
    duration: "January 2025 – Current",
    location: "Kharagpur, India",
    description: [
      "Tech stack: React, MongoDB, Node.js, Express.js",
      "Developing a product using the MERN stack, handling both frontend and backend",
      "Implementing REST APIs and optimizing database queries",
      "Collaborating in an agile environment to deliver scalable solutions",
    ],
  },
  {
    id: 2,
    company: "Nezuware",
    position: "Web Developer Intern",
    duration: "August 2024 – September 2024",
    location: "Pune, India",
    description: [
      "Developed and maintained 4+ full-stack web applications using the MEAN stack, reducing development cycle time by 15%",
      "Implemented secure user authentication and authorization with JSON Web Tokens (JWT) and session management",
      "Designed and delivered a fully responsive web interface for Nezuware, improving mobile user engagement by 20% and ensuring cross-platform compatibility",
    ],
  },
];

export default function Experience() {
  const [selectedCompany, setSelectedCompany] = useState(experiences[0]);

  return (
    <div className="p-6 md:p-10 md:mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-600 text-center">
        Experience
      </h2>

      <div className="flex flex-col md:flex-row mx-auto h-auto p-6 md:p-8 w-full md:w-4/5">
        <div className="w-full md:w-1/4">
          <ul className="mt-4 space-y-2 flex md:block overflow-x-auto md:overflow-visible">
            {experiences.map((exp) => (
              <li
                key={exp.id}
                className={`p-3 rounded-lg md:rounded-l-lg cursor-pointer text-lg text-center md:text-left ${
                  selectedCompany.id === exp.id
                    ? "bg-[#BDB395] text-[#F6F0F0] font-semibold"
                    : " text-gray-600"
                } font-noto`}
                onClick={() => setSelectedCompany(exp)}
              >
                {exp.company}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-3/4 p-6 md:p-8 bg-white shadow-lg rounded-lg mt-4 md:mt-0">
          <h3 className="text-2xl font-bold text-[#BDB395] font-noto mb-1">
            {selectedCompany.position}
          </h3>
          <p className="text-gray-500">{selectedCompany.duration}</p>
          <p className="text-gray-500">{selectedCompany.location}</p>
          <ul className="mt-3 space-y-2 text-gray-700 text-lg font-noto">
            {selectedCompany.description.map((point, index) => (
              <li key={index}>➤ {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
