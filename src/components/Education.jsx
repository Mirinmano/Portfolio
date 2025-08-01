import React from 'react';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const educationData = [
  {
    degree: 'B.E. in Computer Science (Cyber Security)',
    institution: 'Sri Eshwar College of Engineering, Coimbatore',
    period: '2022 - 2026',
    details: 'CGPA: 8.5',
    icon: <FaUniversity />,
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: "St. Joseph's Matric Hr. Sec. School, Trichy",
    period: '2021 - 2022',
    details: 'Score: 88.6%',
    icon: <FaSchool />,
  },
];

const Education = () => {
  return (
    <div id="education" className="px-4 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Academic Journey</h2>
        <p className="text-lg opacity-80">
          Following my educational track.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="text-4xl text-primary mr-4">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="card-title text-xl">{edu.degree}</h3>
                  <p className="text-base-content/80">{edu.institution}</p>
                </div>
              </div>

              <div className="text-base-content/70 text-sm mb-4">
                <p>{edu.period}</p>
              </div>

              <div className="card-actions justify-end">
                <div className="badge badge-primary badge-outline">{edu.details}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;