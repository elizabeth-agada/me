import './App.css';
import { useRef } from 'react';
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

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
