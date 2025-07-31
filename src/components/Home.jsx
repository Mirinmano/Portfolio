import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  // This useEffect hook handles the cursor light effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="hero min-h-screen" data-aos="fade-in" data-aos-delay="300">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-24">

        {/* --- Profile Picture with Floating Animation --- */}
        <div className="w-64 h-64 lg:w-80 lg:h-80 animate-subtle-float">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Mirin Mano"
            className="rounded-full w-full h-full object-cover shadow-2xl shadow-primary/20"
          />
        </div>

        <div className="text-center lg:text-left p-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Hi, I'm Mirin Mano M</h1>
          <div className="text-2xl md:text-3xl text-primary mt-2 h-10">
            <Typewriter
              options={{
                strings: [
                  'Software Developer',
                  'Full Stack Developer (MERN)',
                  'Cybersecurity Enthusiast',
                  'Problem Solver (600+ LeetCode)',
                  'Tech Explorer 🚀'
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: 'text-2xl md:text-3xl'
              }}
            />
          </div>

          <div className="flex gap-4 justify-center lg:justify-start p-2 mt-8">
            <a href="#portfolio" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-8 justify-center lg:justify-start">
            <a href="https://github.com/Mirinmano" target="_blank" className="btn btn-circle btn-ghost" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.372 0 12a12 12 0 008.207 11.387c.6.11.793-.26.793-.577v-2.234c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.755-1.333-1.755-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.835 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.603C8.92 17.57 6.118 16.54 6.118 11.944c0-1.31.469-2.381 1.236-3.221-.124-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.265 1.983-.398 3.003-.403 1.02.005 2.047.138 3.006.403 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .318.192.693.801.576A12.001 12.001 0 0024 12c0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mirin-mano-m-03708326a/" target="_blank" className="btn btn-circle btn-ghost" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://leetcode.com/u/717822y129/" target="_blank" className="btn btn-circle btn-ghost" rel="noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="Leetcode" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;