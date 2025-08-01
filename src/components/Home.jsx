import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="hero min-h-screen" data-aos="fade-in" data-aos-delay="300">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-24">

        {/* --- Profile Picture with Floating Animation --- */}
        <div className="w-64 h-64 lg:w-80 lg:h-80 animate-subtle-float">
          <img
            src=".\1000078290.jpg"
            alt="Mirin Mano"
            className="rounded-full w-max h-max object-cover shadow-2xl shadow-primary/20"
          />
        </div>

        <div className="text-center lg:text-left">
          <p className="text-2xl text-base-content/80 font-sans">I'm...</p>

          <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-base-content mt-1">
            <span className="text-8xl md:text-9xl text-gradient-vertical">M</span>irin Mano M
          </h1>
          
          <div className="text-xl md:text-2xl text-gradient-horizontal mt-4 h-8 font-semibold">
            <Typewriter
              options={{
                strings: [
                  'Software Developer',
                  'Full Stack Developer (MERN)',
                  'Cybersecurity Enthusiast',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="mt-6 max-w-xl text-base-content/70 font-sans">
            To work in a challenging environment that provides generous opportunities for learning along with company growth and advancement in my career.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start mt-8">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;