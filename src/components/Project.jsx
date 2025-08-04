// Projects.jsx
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import codeReviewer1 from "../../images/Code.png";
import codeReviewer2 from "../../images/Code2.png";
import titleDescription1 from "../../images/TD1.png";
import titleDescription2 from "../../images/TD2.png";

const projects = [
  {
    title: "Code Reviewer",
    description:
      "Paste your code and get instant AI-powered feedback on potential issues and improvements. Features login/signup for secure access.",
    techStack: "React, Node.js, Express.js, Gemini API, JWT",
    github: "https://github.com/ipankaj99/Code-Reviewer.git",
    live: "#",
    images: [codeReviewer1, codeReviewer2],
  },
  {
    title: "Title Description",
    description:
      "Submit, manipulate, or delete webpage metadata (title & description) through a smart interface. Includes authentication system.",
    techStack: "React, Express.js, MongoDB, Cheerio, JWT",
    github: "https://github.com/ipankaj99/Title_Description.git",
    live: "#",
    images: [titleDescription1, titleDescription2],
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-2">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-48 object-cover"
                />
              ))}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {project.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Tech Stack: {project.techStack}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 flex items-center gap-1 hover:underline"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
