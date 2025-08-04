// components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 text-center bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Pankaj Rohilla</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-3">
          MERN Stack Developer & Lifelong Learner
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
          Passionate about building clean, scalable web apps with real-world impact.
          Continuously growing through projects and practical learning.
        </p>

        {/* Tech Stack */}
        <motion.div
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-semibold">Tech Stack:</span>{" "}
          HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, MongoDB, Machine Learning
        </motion.div>

        {/* Internship Description */}
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Internship:</span> Web Developer Intern at Cod Quotient —
          where I learned to write efficient, modular, and industry-standard code for scalable web applications.
        </p>
      </motion.div>
    </section>
  );
}
