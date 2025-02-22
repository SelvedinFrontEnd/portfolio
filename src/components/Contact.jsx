import React from 'react';

const Contact = () => {
  return (
    <section className=" p-6 text-center">
      <h2 className="text-2xl font-bold mb-4 dark:text-gray-200 dark:bg-gray-900">Contact Me</h2>
      <div className="flex justify-center space-x-4">
        <a href="mailto:selvedindrinic@gmail.com" className="flex items-center dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          <i className="fas fa-envelope mr-2"></i> Email
        </a>
        <a href="https://www.linkedin.com/in/selvedin-drini%C4%87-345693268/" target="_blank" rel="noopener noreferrer" className="flex items-center dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          <i className="fab fa-linkedin mr-2"></i> LinkedIn
        </a>
        <a href="https://github.com/SelvedinFrontEnd" target="_blank" rel="noopener noreferrer" className="flex items-center dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          <i className="fab fa-github mr-2"></i> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
