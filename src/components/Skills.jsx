import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-600" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-gray-800 dark:text-gray-200 font-semibold">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
