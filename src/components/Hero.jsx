import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-white dark:bg-gray-900">
      <div className="relative z-10 px-4">
      <h1 className="text-7xl font-bold drop-shadow-lg animate-gradient-text">
          Hi, I'm Selvedin
        </h1>
        <h2 className="font-bold mt-4 text-4xl mb-4 text-gray-800 dark:text-gray-300">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer", 
                "Crafting Clean Code", 
                "Solving Problems with Code"
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Passionate about turning ideas into reality through code.
        </p>
        
        <div className="mt-8 flex justify-center space-x-6">
          <a 
            href="https://github.com/SelvedinFrontEnd" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a 
            href="https://www.linkedin.com/in/selvedin-drini%C4%87-345693268/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        <a 
          href="#projects" 
          className="mt-8 inline-block px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;