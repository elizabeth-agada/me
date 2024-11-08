import './App.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Jokes from './component/jokes';
import HomePage from './page/home';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  const handleGoHome = () => {
    setIsLoading(true);
  };

  return (
    <div className="App">
      {isLoading && (
        // Loading animation with welcome message, joke, and name input form
        <div className="loading-animation h-screen bg-gradient-to-r from-[#1E3A8A] to-[#060229e7] p-6 md:p-32 text-white flex flex-col justify-center items-center">
          <div className="w-32 md:w-2/3 md:text-left flex justify-between">
            <img 
              src='./liz3.png' 
              alt="Liz"
              className="rounded-full w-40 md:w-64 h-40 md:h-64 mb-8" 
            />
            <h1 className="text-2xl md:text-3xl mb-4 text-center hidden md:block">Welcome to Liz's little Space</h1>
          </div>
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
              className="mt-4 px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Enter
            </button>
          </form>
          <p className="mt-4 text-center text-sm">Ready to explore? Just enter your name above to get started!</p>
        </div>
      )}
      {!isLoading && (
        // Render content after loading
        <>
          <HomePage isHomePage={isHomePage} handleGoHome={handleGoHome} />
        </>
      )}
    </div>
  );
}

export default App;
