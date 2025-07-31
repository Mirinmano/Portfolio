import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import ProblemSolvingStats from './components/ProblemSolvingStats'; // Import the new component
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black p-3 mx-auto px-4">
      <Navbar />

      <main className="flex-grow">
        <section id="home" data-aos="fade-up">
          <Home />
        </section>

        <section id="skills" data-aos="fade-up">
          <Skills />
        </section>

        <section id="problem-solving" data-aos="fade-up">
          <ProblemSolvingStats />
        </section>

        <section id="about" data-aos="fade-up">
          <About />
        </section>

        <section id="portfolio" data-aos="fade-up">
          <Portfolio />
        </section>

        <section id="certificates" >
          <Certificates />
        </section>

        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;