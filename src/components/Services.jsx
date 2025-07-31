import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack web development with modern technologies like React, Node.js, and MongoDB.",
      icon: "💻"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Security assessments, penetration testing, and secure system design.",
      icon: "🔒"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces.",
      icon: "🎨"
    },
    {
      title: "Machine Learning",
      description: "Developing ML models for data analysis and anomaly detection.",
      icon: "🤖"
    },
    {
      title: "Digital Forensics",
      description: "Investigation and analysis of digital evidence.",
      icon: "🔍"
    },
    {
      title: "Cloud Solutions",
      description: "Designing and implementing cloud-based architectures.",
      icon: "☁️"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="card-title">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;