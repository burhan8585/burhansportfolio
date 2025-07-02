// src/components/DarkModeToggle.jsx
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl dark:text-yellow-400 text-gray-700 hover:scale-110 transition"
      title="Toggle Dark Mode"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
