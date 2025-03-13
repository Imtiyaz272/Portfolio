/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"; 

const projects = [
  {
    id: 1,
    title: "Cart Mingle",
    description: "A collaborative shopping platform",
    tech: "MEAN stack",
    image: "/images/cart_mingle.jpg",
    githubLink: "https://github.com/yourusername/cart-mingle",
  },
  {
    id: 2,
    title: "Bin Way",
    description: "Smart bins waste management system",
    tech: "MERN stack",
    image: "/images/bin_way.jpeg",
    githubLink: "https://github.com/yourusername/bin-way",
  },
  {
    id: 3,
    title: "Spam-classifier",
    description: "ML model to detect and filter spam messages",
    tech: "Machine Learning",
    image: "/images/spam_classifier.png",
    githubLink: "https://github.com/yourusername/spam-classifier",
  },
];

const Projects = () => {
  return (
    <div className="bg-white w-4/5 rounded-lg text-center p-10 mx-auto mt-20">
      <h3 className="text-4xl font-bold text-gray-600">Projects</h3>

      <div className="flex justify-center gap-28 p-6 mt-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-[#f5efdb] p-4 rounded-2xl shadow-lg w-64"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }} 
            viewport={{ once: false }} 
          >
            <h3 className="font-bold text-lg text-gray-600 font-noto">{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mt-2"
            />
            <p className="text-left font-noto text-gray-700 mt-2">{project.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="bg-[#a79c7e] text-white text-sm px-3 py-1 rounded-lg font-noto">
                {project.tech}
              </span>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a79c7e] hover:text-[#7d755d] transition"
              >
                <FaGithub size={22} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

