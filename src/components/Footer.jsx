// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 px-4 text-center border-t dark:border-gray-700 mt-16">
      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://github.com/ipankaj99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-600 dark:text-gray-300 hover:text-blue-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/PankajRohilla943"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-600 dark:text-gray-300 hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rohillapankaj402@gmail.com"
          className="text-xl text-gray-600 dark:text-gray-300 hover:text-blue-600"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Pankaj Rohilla. All rights reserved.
      </p>
    </footer>
  );
}
