import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './components/Skills';
import Certificates from './components/Certificates';




function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,      // animate only once
    });
  }, []);

  return (
    <Router>
      <div className="max-h-screen bg-black flex flex-col p-3" >
        <Navbar />
        <Home data-aos="fade-out"
    data-aos-delay="300"/>
        <Skills />
        <About />
        <Portfolio />
        <Certificates />
        <Contact />

        {/* <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;