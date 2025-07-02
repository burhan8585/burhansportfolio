import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWordpress, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectsLanding = () => {
  const navigate = useNavigate();

  const projectCategories = [
    {
      title: "WordPress Projects",
      icon: <FaWordpress className="text-5xl text-blue-600 dark:text-blue-400" />,
      route: "/wordpress",
      bg: "bg-blue-100 dark:bg-blue-950",
    },
    {
      title: "Full Stack Projects",
      icon: <FaLaptopCode className="text-5xl text-green-600 dark:text-green-400" />,
      route: "/fullstack",
      bg: "bg-green-100 dark:bg-green-950",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 text-center"
    >
      <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projectCategories.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(item.route)}
            className={`cursor-pointer p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 ${item.bg}`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              {item.icon}
              <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Click to explore
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsLanding;
