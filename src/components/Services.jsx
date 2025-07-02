import React from "react";
import {
  FaCode,
  FaWordpress,
  FaServer,
  FaPaintBrush,
  FaSearch,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCode className="text-4xl text-indigo-600 dark:text-indigo-400" />,
    title: "Full Stack Development",
    desc: "Scalable frontends and powerful backends using React, Node.js, MongoDB, and Python.",
  },
  {
    icon: <FaWordpress className="text-4xl text-blue-600 dark:text-blue-400" />,
    title: "WordPress Customization",
    desc: "Custom WordPress sites for blogs, portfolios, e-commerce, or businesses.",
  },
  {
    icon: <FaServer className="text-4xl text-green-600 dark:text-green-400" />,
    title: "REST API & Backend",
    desc: "RESTful APIs using Express or Flask to power your applications securely.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-pink-500 dark:text-pink-400" />,
    title: "Frontend UI/UX",
    desc: "Modern, responsive interfaces with Tailwind CSS and smooth UX workflows.",
  },
  {
    icon: <FaSearch className="text-4xl text-yellow-500 dark:text-yellow-400" />,
    title: "SEO Optimization",
    desc: "Boost search visibility and performance with clean code and best SEO practices.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          My Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          I offer a range of development services to bring your ideas to life
          with modern technologies and performance in mind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center text-center h-full">
                {service.icon}
                <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
