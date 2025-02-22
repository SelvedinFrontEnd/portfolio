import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 text-center px-4">
      <h1 className="text-5xl font-bold dark:text-white drop-shadow-lg">
        Hi, I'm Selvedin
      </h1>
      <p className="mt-4 text-xl dark:text-gray-300">
        Web Developer | HTML • CSS • JavaScript • React • Firebase • Node.js • TailwindCSS 
      </p>
      <a 
        href="#projects" 
        className="mt-8 inline-block px-6 py-3 bg-black dark:bg-red-900 text-white font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition duration-300"
      >
        View Projects
      </a>
    </section>
  );
};

export default Hero;
