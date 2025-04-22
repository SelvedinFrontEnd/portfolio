import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const images =
    project.images && project.images.length
      ? [...project.images]
      : [project.image];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(1);

  const nextImage = () => {
    setFade(0);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(1);
    }, 500);
  };

  const prevImage = () => {
    setFade(0);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(1);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full p-6 relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-2xl cursor-pointer"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

        {/* Image Carousel */}
        <div className="relative mb-4">
          <div className="transition-opacity duration-500" style={{ opacity: fade }}>
            <img
              src={images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full rounded"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-full hover:bg-white dark:hover:bg-gray-600"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-full hover:bg-white dark:hover:bg-gray-600"
              >
                <FaChevronRight />
              </button>
            </>
          )}
        </div>

        {/* Detailed Description */}
        <div
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: project.modalDescription }}
        />

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
          >
            <button className="flex items-center cursor-pointer bg-gray-300 dark:bg-gray-700 rounded-lg px-3 py-1">
              <FaExternalLinkAlt /> Live Demo
            </button>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-200 flex items-center gap-1 hover:underline"
          >
            <button className="flex items-center cursor-pointer bg-gray-300 dark:bg-gray-700 rounded-lg px-3 py-1">
              <FaGithub /> GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
