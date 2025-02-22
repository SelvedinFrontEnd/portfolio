import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
        About Me
      </h2>
      
      <p className="text-lg dark:text-black leading-relaxed mb-6">
        Hi, I'm <span className="font-semibold text-black dark:text-white">Selvedin</span>, a passionate 
        <span className="text-blue-600 dark:text-blue-400 font-semibold"> Web Developer</span> from Bosnia & Herzegovina.  
        I started with <span className="font-semibold">HTML, CSS, and JavaScript</span> and later expanded my knowledge to modern frameworks like 
        <span className="text-blue-600 dark:text-blue-400 font-semibold"> React, Firebase, TailwindCSS</span> and 
        <span className="text-blue-600 dark:text-blue-400 font-semibold"> Node.js</span>.
      </p>

      <div className=" dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold mb-4">What Drives Me?</h2>
        <p class="mb-2">
            I love turning ideas into reality, crafting <span class="font-bold">clean code</span> and <span class="font-bold">smooth user experiences</span>. Problem-solving excites me, and overcoming challenges keeps me motivated. There was a point where <span class="font-bold">JavaScript nearly made me quit</span>, but my passion for coding pushed me through.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
        Fun Facts 🏆
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 px-4 py-2 rounded-lg text-lg font-medium">
          ⚡ Huge Formula 1 Fan
        </span>
        <span className="bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200 px-4 py-2 rounded-lg text-lg font-medium">
          ❤️ Lifelong Liverpool Supporter
        </span>
        <span className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-200 px-4 py-2 rounded-lg text-lg font-medium">
          📖 Always Learning New Tech
        </span>
        <span className="bg-yellow-100 dark:bg-yellow-800 text-yellow-600 dark:text-yellow-200 px-4 py-2 rounded-lg text-lg font-medium">
          💪 Loves Street Workout
        </span>
      </div>
    </section>
  );
};

export default About;
