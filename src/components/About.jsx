import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiExpress } from "react-icons/si";

const About = () => {
  const techStack = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" />, desc: "Structure of every web page." },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" />, desc: "Styling and layout magic." },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" />, desc: "The language of the web." },
    { name: "React", icon: <FaReact className="text-blue-400 text-5xl" />, desc: "My favorite frontend framework." },
    {name: "Next.js, icon: <SiNextdotjs className="text-white text-5xl" />, desc: "React framework for fast, scalable web applications."},
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-5xl" />, desc: "Backend for authentication & data." },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 text-5xl" />, desc: "Rapid styling with utility classes." },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" />, desc: "Version control to track code changes." },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
        About Me
      </h2>
      
      <p className="text-lg dark:text-white leading-relaxed mb-6">
        Hi, I'm <span className="font-semibold text-black dark:text-white">Selvedin</span>, a passionate <span className="text-blue-600 dark:text-blue-400 font-semibold">FrontEnd Developer</span> from Bosnia & Herzegovina who is dedicated to building scalable and user-friendly web applications.
      </p>
      <p>
      From curious coder to dedicated developer, I’m on a journey to craft functional and efficient web solutions that make life easier. Let’s build something great together.
      </p>

      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-10">My Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group relative w-36 h-36 mx-auto"
              style={{ perspective: "1000px" }}
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front Side */}
                <div className="flip-card-front absolute w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
                  {tech.icon}
                  <p className="text-lg font-semibold mt-2 text-black dark:text-white">
                    {tech.name}
                  </p>
                </div>
                {/* Back Side */}
                <div className="flip-card-back absolute w-full h-full flex items-center justify-center bg-blue-600 dark:bg-blue-700 rounded-lg shadow-lg text-white text-center">
                  <p className="px-3">{tech.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </section>
  );
};

export default About;
