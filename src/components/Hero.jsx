import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-white dark:bg-gray-900">
      <div className="relative z-10 px-4">
        <h1 className="text-7xl font-bold drop-shadow-lg text-gray-900 dark:text-white">
          Hi, I'm Selvedin
        </h1>
        <h2 className="font-bold mt-4 text-4xl mb-4 text-gray-800 dark:text-gray-300">
          <Typewriter
            options={{
              strings: [
                "FrontEnd Developer", 
                "Building Stunning Web Apps", 
                "Creating Seamless User Experiences"
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </h2>
        
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