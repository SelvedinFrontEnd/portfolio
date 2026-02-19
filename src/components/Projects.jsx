import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ProjectModal from './ProjectModal';

// Import images
import Crypto3 from "../images/crypto 3.jpg";
import Crypto5 from "../images/crypto 5.jpg";
import MoviesImage from "../images/MoviesProject.png";
import ShopImage from "../images/ShopProject.png";
import SocialImage from "../images/SocialProject.png";
import CryptoImage from "../images/CryptoProject.png";
import TaskImage from "../images/TaskManagerr.jpg"; 
import NewspaperImage1 from "../images/Newspaper-1.png"; 
import NewspaperImage2 from "../images/Newspaper-2.png"; 
import NewspaperImage3 from "../images/Newspaper-3.png"; 

const projects = [
  {
    title: "Newspaper Portal",
    description:
      "A modern multi-category news platform featuring dynamic data fetching, optimized loading states, reusable components, and a responsive newspaper-style UI.",
    modalDescription: `
      <p>A modern digital newspaper application built with React that delivers categorized news content through a clean, responsive interface.</p>
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>Multiple news categories (General, Formula 1, Football, NBA)</li>
        <li>Context-based state management for scalable architecture</li>
        <li>Optimized loading states with reusable skeleton components</li>
        <li>Dedicated article detail pages</li>
        <li>Responsive design</li>
      </ul>
      <p><strong>Tech Stack:</strong> React, Context API, Firebase/API Integration, Tailwind CSS, React Router</p>
    `,
    image: NewspaperImage1,
    liveLink: "https://selvedinews.netlify.app/", 
    githubLink: "https://github.com/SelvedinFrontEnd/newspaper",
    tech: ["React", "Firebase", "Tailwind CSS"],
    images: [NewspaperImage2, NewspaperImage3] 
  },
  {
    title: "Task Manager App",
    description:
      "A personal productivity tool built to manage daily tasks, track activity, and handle projects with user authentication and a dashboard.",
    modalDescription: `
      <p>A personal productivity tool built to manage daily tasks, track activity, and handle projects with user authentication and a dashboard.</p>
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>Firebase Authentication (Login & Register)</li>
        <li>Sidebar with full page navigation</li>
        <li>Task Creation (title, urgency, date, description)</li>
        <li>Dashboard with stats, upcoming tasks, and recent activity</li>
        <li>User profile editing</li>
        <li>Calendar with deadlines</li>
        <li>Dark mode, search, filter, and sort</li>
      </ul>
      <p><strong>Tech Stack:</strong> React, Firebase, Tailwind CSS</p>
    `,
    image: TaskImage,
    liveLink: "https://apptaskmanager.netlify.app/", 
    githubLink: "https://github.com/SelvedinFrontEnd/taskmanager",
    tech: ["React", "Firebase", "Tailwind CSS"],
    images: [] 
  },
  {
    title: "Crypto World",
    description:
      "A feature-rich cryptocurrency platform with real-time data, user authentication, favorites, transaction simulation, and profile editing.",
    modalDescription: `
      <p>A feature-rich cryptocurrency platform with real-time data, user authentication, favorites, transaction simulation, and profile editing.</p>
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>User Registration & Login</li>
        <li>Profile Page</li>
        <li>Favorites</li>
        <li>Simulated Deposit & Withdrawal</li>
        <li>Profile Editing</li>
      </ul>
      <p><strong>Challenges & Future Improvements:</strong></p>
      <ul>
        <li>Responsive Layout</li>
        <li>Handling Simulated Transactions</li>
        <li>Profile Editing Expansion</li>
      </ul>
    `,
    image: CryptoImage,
    liveLink: "https://cryptoscoins.netlify.app/",
    githubLink: "https://github.com/SelvedinFrontEnd/CryptoSiteCoin",
    tech: ["React", "Firebase", "API"],
    images: [Crypto5, Crypto3]
  },
  {
    title: "Social Network",
    description:
      "A simple social network where users can log in, follow others, post images, and edit their profiles.",
    image: SocialImage,
    liveLink: "https://socialselvex.netlify.app/",
    githubLink: "https://github.com/SelvedinFrontEnd/socialnetwork",
    tech: ["React", "Firebase"],
    images: []
  },
  {
    title: "Movie Explorer",
    description:
      "A movie search platform where users can browse popular movies, view details, and add favorites.",
    image: MoviesImage,
    liveLink: "https://selvexmovies.netlify.app/",
    githubLink: "https://github.com/SelvedinFrontEnd/movies",
    tech: ["React", "API"],
    images: []
  },
  {
    title: "Product Page",
    description:
      "A basic shopping cart simulation using HTML, CSS, and JavaScript, allowing users to add and remove a product from the cart.",
    image: ShopImage,
    liveLink: "https://prodpage.netlify.app/",
    githubLink: "https://github.com/SelvedinFrontEnd/ProductPageMain",
    tech: ["HTML", "CSS", "JavaScript"],
    images: []
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-black dark:text-white mb-10 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-black dark:text-white">
              {project.title}
            </h3>
            <p className="dark:text-gray-300 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="dark:text-gray-200 flex items-center gap-1 hover:underline"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
