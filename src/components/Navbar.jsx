// components/Navbar.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import profileImage from "../../images/Pankajpp.jpg";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm dark:shadow-none sticky top-0 z-50">
      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <img
          src={profileImage}
          alt="Pankaj Rohilla"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500"
        />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Pankaj Rohilla
        </h1>
      </div>

      {/* Social Links and Theme Toggle */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/ipankaj99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/PankajRohilla943"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="mailto:rohillapankaj402@gmail.com"
          className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          Email
        </a>
        <a
          href="https://drive.google.com/file/d/13p2G4xeXxKdXZlggZGDe74SyH9E3KAGQ/view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          Resume
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-2 text-lg text-gray-700 dark:text-gray-300 hover:text-yellow-400"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
