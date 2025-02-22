import React from 'react';
import fensiSlika from "../images/fensi slika.jpg"
import { 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiFirebase 
} from "react-icons/si";

const Hero = () => {
  return (
    <section className="flex flex-row items-center justify-center h-screen text-center bg-white dark:bg-gray-900">
      <div className='px-4'>
        <h1 className="text-7xl font-bold drop-shadow-lg animate-gradient-text ">
          Hi, I'm Selvedin
        </h1>
        <h2 className="font-bold mt-4 text-4xl mb-4 dark:text-gray-300">
          frontend developer 
        </h2>
        <div className="flex items-center justify-center space-x-4 text-4xl">
          <SiReact className="text-black" />      {/* React */}
          <SiHtml5 className="text-black" />   {/* HTML */}
          <SiCss3 className="text-black" />      {/* CSS */}
          <SiTailwindcss className="text-black" /> {/* Tailwind */}
          <SiNodedotjs className="text-black" /> {/* Node.js */}
          <SiFirebase className="text-black" /> {/* Firebase */}
        </div>
        
        <a 
          href="#projects" 
           className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
