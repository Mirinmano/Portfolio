import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Web Developer Intern',
    company: 'Codsoft',
    period: 'May 2024 - June 2024',
    description: 'Developed and maintained web applications using the MERN stack, gaining hands-on experience in frontend and backend development, API creation, and database management.',
    position: { top: '10%', left: '15%' },
    size: 'w-64 h-64',
  },
  {
    title: 'Cybersecurity Intern',
    company: 'TechnoHacks EduTech',
    period: 'April 2024 - May 2024',
    description: 'Assisted in vulnerability assessments and penetration testing exercises. Gained practical experience with security tools and methodologies for identifying and mitigating security risks.',
    position: { top: '40%', left: '55%' },
    size: 'w-72 h-72',
  }
];

const Experience = () => {
  return (
    <div id="experience" className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-primary mb-4">Professional Experience</h2>
        <p className="text-lg opacity-80">
          Where I've applied my skills in real-world environments.
        </p>
      </div>
      <div className="relative h-96 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`absolute flex items-center justify-center p-6 text-center text-white bg-base-300 rounded-full bubble-shadow ${exp.size}`}
            style={{ top: exp.position.top, left: exp.position.left }}
            animate={{
              y: ["-8px", "8px"],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4 + index * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div>
              <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
              <p className="font-semibold">{exp.title}</p>
              <p className="text-xs text-base-content/70 my-2">{exp.period}</p>
              <p className="text-sm text-base-content/90">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;