import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I'd love to connect with you! Here's how you can reach me:
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-500" />
              <span>bkachwala538@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-indigo-500" />
              <span>+91 96013 33708</span>
            </li>
            <li className="flex items-center gap-3">
              <FaGithub className="text-indigo-500" />
              <a
                href="https://github.com/burhan8585"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                github.com/burhan8585
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-500" />
              <span>Surat, India</span>
            </li>
          </ul>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md dark:shadow-gray-700 space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
