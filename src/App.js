import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Initiative1 from './page/initiative1';
import Initiative2 from './page/initiative2';
import Initiative3 from './page/initiative3';
import Navbar from './component/navbar';
import Hero from './page/hero';
import About from './page/about';
import Portfolio from './page/portfolio';
import Blog from './page/blog';
import Contact from './page/contact';
import Footer from './component/footer';
import Jokes from './component/jokes'; // Import TechJokes component

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');

  useEffect(() => {
    if (!isLoading) {
      // Main site loading logic after the form is submitted
      console.log('Main site loaded!');
    }
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="App">
      {isLoading ? (
        // Loading animation with welcome message, joke, and name input form
        <div className="loading-animation h-screen bg-gray-900 p-6 md:p-32 text-white flex flex-col justify-center items-center">
          <div className="w-32 md:w-2/3 md:text-left flex justify-between">
            <img 
              src='./liz3.png' 
              alt="Liz"
              className="rounded-full w-40 md:w-64 h-40 md:h-64 mb-8" 
            />
            <h1 className="text-2xl md:text-3xl mb-4 text-center hidden md:block">Welcome to Liz's little Space</h1>
          </div>
           {/* Include TechJokes component here */}
          
          <Jokes />
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Can i meet you? - Name"
              value={name}
              onChange={handleChange}
              onKeyDown={handleEnterPress}
              className="mt-4 px-4 py-2 rounded border border-white focus:outline-none text-black w-full md:w-auto"
              required
            />
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-white text-gray-900 rounded hover:bg-gray-300 focus:outline-none"
            >
              Enter
            </button>
          </form>
          <p className="mt-4 text-center text-sm">Ready to explore? Just enter your name above to get started!</p> {/* Add this line */}
        </div>
      ) : (
        // Render content after loading
        <>
          <Navbar
            aboutRef={aboutRef}
            portfolioRef={portfolioRef}
            blogRef={blogRef}
            contactRef={contactRef}
            isHomePage={isHomePage}
          />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About ref={aboutRef} />
                  <Portfolio ref={portfolioRef} />
                  <Blog ref={blogRef} />
                  <Contact ref={contactRef} />
                </>
              }
            />
            <Route path="/initiative1" element={<Initiative1 />} />
            <Route path="/initiative2" element={<Initiative2 />} />
            <Route path="/initiative3" element={<Initiative3 />} />
          </Routes>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
