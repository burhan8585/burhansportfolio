import React from "react";
import { motion } from "framer-motion";


const images = {
  about: "/image.jpg",
  // more images in future
};



const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
    <img
  src={images.about}
  alt="Burhan"
  className="rounded-2xl shadow-lg dark:shadow-gray-800"
/>


        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Hi, I'm <span className="font-semibold">Burhan</span> — a passionate{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            with expertise in <strong>React.js</strong>, <strong>Node.js</strong>,{" "}
            <strong>MongoDB</strong>, and <strong>Python backend</strong>. I love
            creating clean, performant, and user-friendly web applications.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-md">
            My mission is to build solutions that make a difference, solve
            real-world problems, and grow constantly as a developer. I'm always
            open to exciting collaborations and challenging opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
