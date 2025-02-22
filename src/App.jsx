import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <header className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => setDarkMode(prev => !prev)}
          className="toggle-button bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md focus:outline-none"
          title="Toggle Dark Mode"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </header>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
