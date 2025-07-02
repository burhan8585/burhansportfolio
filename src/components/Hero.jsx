// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-28 px-6 bg-indigo-50 dark:bg-gray-900 text-center transition-colors duration-300">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-indigo-700 dark:text-white mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I'm Burhan 👋
      </motion.h1>

      <motion.p
        className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Full Stack Developer specialized in MERN Stack, Tailwind CSS & Python backend.
        Passionate about building responsive web apps and solving real-world problems.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
