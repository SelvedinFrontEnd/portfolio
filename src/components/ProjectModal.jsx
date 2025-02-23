import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Use images array if available; fallback to main image.
  const images = project.images && project.images.length ? project.images : [project.image];
  console.log(project)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              className="rounded"
            />
          ))}
        </div>

        {/* Detailed Description */}
        <p className="mb-4">{project.description}</p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-200 flex items-center gap-1 hover:underline"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
