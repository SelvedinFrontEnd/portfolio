import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import CryptoImage from "../images/CryptoProject.png";
import MoviesImage from "../images/MoviesProject.png";
import ShopImage from "../images/ShopProject.png";
import SocialImage from "../images/SocialProject.png";

const projects = [
    {
        title: "Crypto World",
        description: "A feature-rich cryptocurrency platform with real-time data, user authentication, favorites, transaction simulation, and profile editing.",
        image: CryptoImage,
        liveLink: "https://cryptoscoins.netlify.app/",
        githubLink: "https://github.com/SelvedinFrontEnd/CryptoSiteCoin",
        tech: ["React", "Firebase", "API"]
    },
    {
        title: "Social Network",
        description: "A simple social network where users can log in, follow others, post images, and edit their profiles.",
        image: SocialImage,
        liveLink: "https://socialselvex.netlify.app/",
        githubLink: "https://github.com/SelvedinFrontEnd/socialnetwork",
        tech: ["React", "Firebase"]
    },
    {
        title: "Movie Explorer",
        description: "A movie search platform where users can browse popular movies, view details, and add favorites.",
        image: MoviesImage,
        liveLink: "https://selvexmovies.netlify.app/",
        githubLink: "https://github.com/SelvedinFrontEnd/movies",
        tech: ["React", "API"]
    },
    {
        title: "Product Page",
        description: "A basic shopping cart simulation using HTML, CSS, and JavaScript, allowing users to add and remove a product from the cart.",
        image: ShopImage,
        liveLink: "https://prodpage.netlify.app/",
        githubLink: "https://github.com/SelvedinFrontEnd/ProductPageMain",
        tech: ["HTML", "CSS", "JavaScript"]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-10 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-semibold text-black dark:text-white">{project.title}</h3>
                        <p className="dark:text-gray-300 mt-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="dark:text-gray-200 flex items-center gap-1 hover:underline">
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
