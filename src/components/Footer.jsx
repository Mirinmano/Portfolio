import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-12 text-center md:text-left">
        
        {/* Quick Links */}
        <div>
          <span className="footer-title mb-2 block">Quick Links</span>
          <a href="#about" className="link link-hover block mb-1">About Me</a>
          <a href="#projects" className="link link-hover block mb-1">Projects</a>
          <a href="#contact" className="link link-hover block mb-1">Contact</a>
          <a href="/Mirin_Mano_Resume.pdf" target="_blank" rel="noopener noreferrer" className="link link-hover block">Resume</a>
        </div>

        {/* Snapshot */}
        <div>
          <span className="footer-title mb-2 block">Snapshot</span>
          <p className="mb-1">🎓 B.E. CSE (Cyber Security)</p>
          <p className="mb-1">📍 Coimbatore, India</p>
        </div>

        {/* Contact Info */}
        <div>
          <span className="footer-title mb-2 block">Get in Touch</span>
          <p className="mb-1">mirinmano@gmail.com</p>
          <p className="mb-2">+91 93635 06419</p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="https://github.com/Mirinmano" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/mirin-mano-m-03708326a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a href="https://leetcode.com/u/717822y129/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <i className="fa-solid fa-code text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-sm">Passionate learner | Open to work | Let's build something great!</p>
        <p className="text-xs mt-1">&copy; {new Date().getFullYear()} Mirin Mano M. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
