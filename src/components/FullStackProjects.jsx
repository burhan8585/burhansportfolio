import React, { useEffect } from "react";
import { motion } from "framer-motion";

const fsProjects = [
  {
    title: "MERN Blog App",
    image: "https://via.placeholder.com/300x200",
    live: "#",
    github: "#",
    stack: "React, Node.js, MongoDB",
  },
  {
    title: "Task Manager",
    image: "https://via.placeholder.com/300x200",
    live: "#",
    github: "#",
    stack: "Express, MongoDB, Tailwind",
  },
];

const FullStackProjects = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 text-center">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Full Stack Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {fsProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 font-semibold text-gray-800 dark:text-white">
              {project.title}
            </h3>

            {/* Stack Info */}
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Tech: {project.stack}
            </p>

            {/* Links */}
            <div className="mt-3 flex justify-center gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FullStackProjects;
