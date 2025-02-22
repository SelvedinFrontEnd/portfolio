import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
        {/* Header with refined toggle button */}
        <header className="fixed top-4 right-4 z-50">
          <button 
            onClick={() => setDarkMode(!darkMode)}
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
    </div>
  );
}

export default App;