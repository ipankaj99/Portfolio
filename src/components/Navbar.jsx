// components/Navbar.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md dark:shadow-none">
      <h1 className="text-2xl font-bold">Pankaj Rohilla</h1>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/ipankaj99"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/PankajRohilla943"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="mailto:rohillapankaj402@gmail.com"
          className="hover:text-blue-500 text-sm font-medium"
        >
          Email
        </a>
        <a
          href="https://drive.google.com/file/d/13p2G4xeXxKdXZlggZGDe74SyH9E3KAGQ/view"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 text-sm font-medium"
        >
          Resume
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-2 text-lg"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}