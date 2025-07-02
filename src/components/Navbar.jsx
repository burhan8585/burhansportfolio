import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  // Scroll to section with fallback for route change
  const handleNavClick = (targetId) => {
    setIsOpen(false);

    const scrollToSection = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");

      let attempts = 0;
      const maxAttempts = 20;

      const interval = setInterval(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          clearInterval(interval);
        } else if (attempts > maxAttempts) {
          clearInterval(interval);
        }
        attempts++;
      }, 100);
    } else {
      scrollToSection();
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <nav className="flex justify-between items-center px-7 py-5 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-white">Burhan</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-gray-700 dark:text-gray-200 font-medium">
          {links.map((link) => (
            <li key={link}>
              <span
                onClick={() => handleNavClick(link.toLowerCase())}
                className="cursor-pointer hover:text-indigo-500 transition"
              >
                {link}
              </span>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme} className="text-xl ml-2">
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-xl">
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-700 dark:text-gray-300" />
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm transition">
          {links.map((link) => (
            <li key={link}>
              <span
                onClick={() => handleNavClick(link.toLowerCase())}
                className="cursor-pointer font-semibold border-b pb-2 block"
              >
                {link}
              </span>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
