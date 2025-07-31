import React from 'react';
import Skills from '../components/Skills';

const About = () => {
  return (
    <>
      <div className="hero bg-base-200 " data-aos="fade-in"
    data-aos-delay="300">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          /> 
          <div>
            <div className="chat chat-start p-4">
              <div className="chat-bubble chat-bubble-primary text-justify">
                I'm <span className="font-semibold text-primary-content">Mirin Mano M</span>, a tech enthusiast, problem solver, and future cybersecurity expert with a relentless curiosity for how things work. By day, I'm a Computer Science Engineering student specializing in Cyber Security; by night, I'm a coder, tinkerer, and occasional hackathon warrior.
              </div>
            </div>
            <div className="chat chat p-4">
              <div className="chat-bubble chat-bubble-base italic font-serif text-justify">
                "My journey in tech began with a simple question: <span className="italic">How can we build systems that are not just powerful, but also secure?</span> This led me to dive into programming languages (Python, Java, C++), full-stack development (React, Node.js), and ethical hacking tools (Kali Linux, Metasploit)—always with a focus on bridging innovation with security".
              </div>
            </div>
            <div className="chat chat-start p-4">
              <div className="chat-bubble chat-bubble-primary text-justify">
                Whether I'm training ML models to detect anomalies, designing intuitive web apps, or competing in coding challenges, I'm driven by one mission: <span className="font-semibold">to turn complex problems into elegant, user-centric solutions</span>. And yes—I live for that <span className="text-primary-content font-bold">"Aha!"</span> moment when the code finally works!
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default About;