import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Sample project data
const wordpressProjects = [
  {
    title: "WP Portfolio Site",
    image: "https://via.placeholder.com/300x200",
    live: "#",
    github: "#",
  },
  {
    title: "WP Business Site",
    image: "https://via.placeholder.com/300x200",
    live: "#",
    github: "#",
  },
];

const fullStackProjects = [
  {
    title: "MERN Blog App",
    image: "https://via.placeholder.com/300x200",
    live: "#",
    github: "#",
  },
  {
    title: "Task Manager API",
    image: "https://via.placeholder.com/300x200",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("fullstack");

  const activeProjects =
    activeTab === "wordpress" ? wordpressProjects : fullStackProjects;

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
          My Projects
        </h2>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <button
            onClick={() => setActiveTab("wordpress")}
            className={`px-6 py-2 rounded-full border font-medium transition ${
              activeTab === "wordpress"
                ? "bg-indigo-600 text-white"
                : "text-gray-700 dark:text-gray-300 border-gray-400 dark:border-gray-600"
            }`}
          >
            WordPress Projects
          </button>
          <button
            onClick={() => setActiveTab("fullstack")}
            className={`px-6 py-2 rounded-full border font-medium transition ${
              activeTab === "fullstack"
                ? "bg-indigo-600 text-white"
                : "text-gray-700 dark:text-gray-300 border-gray-400 dark:border-gray-600"
            }`}
          >
            Full Stack Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {activeProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <div className="mt-3 flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
