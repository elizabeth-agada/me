import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Portfolio({ onClose }) {
  const handleClose = () => {
    onClose();
  };

  const projects = [
    {
      title: 'Onbuddy',
      description: 'The solution from a GetlinkedAI Hackathon where I took part in the frontend team',
      image: './onbuddy.png',
      link: 'https://onbuddy.vercel.app/',
    },
    {
      title: 'Landing page for cars',
      description: 'The very first static site I built using HTML and CSS.',
      image: './cars.png',
      link: 'https://whimsical-cucurucho-d58c9c.netlify.app',
    },
    {
      title: 'To do list',
      description: 'A great way to practice my DOM manipulation skills. It also helped me with my daily goal setting.',
      image: './todo.png',
      link: 'https://to-do-liz.vercel.app/',
    },
    {
      title: 'Js Game',
      description: 'Players have to type in the correct word on time to score a point.',
      image: './jsgame.png',
      link: 'https://teal-mooncake-246a4f.netlify.app/',
    },
    {
      title: 'Google Chrome Home',
      description: 'Cloned the visual design for the Google Chrome homepage',
      image: './google.png',
      link: 'https://6376239b37dc9807438b15c1--zingy-taiyaki-91692f.netlify.app/',
    },
    {
      title: 'GDG Maiduguri Event Landing Page',
      description: 'The landing page for GDG Maiduguri I/O Extented landing page',
      image: './gdgmaid.png',
      link: 'https://gdgmaiduguri.com/',
    },
  ];

  return (
    <section id="portfolio" className="h-screen overflow-y-auto mt-20 md:mt-56 p-6 bg-gradient-to-r from-[#1E3A8A] to-[#060229e7]  text-white relative md:w-2/3">
      <div className="container mx-auto px-4 mb-10 md:mb-32">
        <button onClick={handleClose} className="absolute top-0 right-0 m-4 text-gray-200 hover:text-white z-10">
          <FaTimes />
        </button>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-white">Portfolio</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className="text-blue-500 hover:underline">View Project</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
