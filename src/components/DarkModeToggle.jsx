/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="p-2 rounded bg-gray-200 dark:bg-gray-600 text-black dark:text-white"
    >
      {darkMode ? "🌙 Dark Mode" : "🔆 Light Mode"}
    </button>
  );
};

export default DarkModeToggle;
