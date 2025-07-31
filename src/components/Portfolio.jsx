import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "File Integrity Checker",
      description: "A robust security solution that continuously monitors critical system files for unauthorized modifications. Implemented real-time change detection with automated alerts and restoration capabilities. Developed machine learning models using Isolation Forest algorithm to identify suspicious patterns in file access behavior, complemented by an intuitive dashboard for visualizing security events.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Tkinter", "REST APIs"],
      period: "Jan 2025 - Current",
      isTeamProject: true,
      features: [
        "Real-time monitoring of file system changes",
        "Automated backup and restoration functionality",
        "Anomaly detection using ML algorithms",
        "Interactive visualization dashboard"
      ],
      // Added images array
      images: [
        '/portfolio/file_integrity_1.png',
        '/portfolio/file_integrity_2.png',
      ]
    },
    {
      id: 2,
      title: "WebLocker Extension",
      description: "A Chrome extension for enhanced online security and productivity. Features include website blocking during focus hours, malicious URL detection, and Browse habit analytics. Implemented with real-time content scanning and customizable blocking rules to help users maintain digital wellbeing.",
      technologies: ["JavaScript", "Chrome APIs", "HTML/CSS", "Firebase"],
      period: "Feb 2025",
      isTeamProject: false,
      features: [
        "Customizable website blocking schedules",
        "Phishing/malicious site detection",
        "Usage analytics dashboard",
        "Cross-device sync via Firebase"
      ],
      // Added images array
      images: [
        '/portfolio/weblocker_1.png',
        '/portfolio/weblocker_2.png',
      ]
    },
    {
      id: 3,
      title: "Student Portal",
      description: "A comprehensive academic management platform featuring role-based access for students and faculty. Students can track academic progress, access digital certificates, and update profiles, while administrators gain powerful tools for monitoring student performance and generating institutional reports.",
      technologies: ["React.js", "Node.js", "MongoDB", "Vercel", "Bootstrap"],
      period: "Oct 2024 - Dec 2024",
      isTeamProject: false,
      features: [
        "Role-based authentication system",
        "Interactive GPA tracker and visualizer",
        "Document management system",
        "Responsive mobile-first design"
      ],
      // Added images array
      images: [
        '/portfolio/student_portal_1.png',
        '/portfolio/student_portal_2.png',
      ]
    },
    {
      id: 4,
      title: "Department Library Management System",
      description: "Digital transformation of traditional library operations featuring automated inventory management, book reservation system, and analytics dashboard. Reduced book search time by 70% and eliminated manual record-keeping after deployment in college department.",
      technologies: ["HTML", "CSS", "Bootstrap", "PHP", "XAMPP Apache", "SQL"],
      period: "Sep 2023 - Nov 2023",
      isTeamProject: true,
      features: [
        "Barcode-based book tracking",
        "Automated overdue notifications",
        "Multi-criteria search functionality",
        "Usage statistics generation"
      ],
      // Added images array
      images: [
        '/portfolio/library_system_1.png',
        '/portfolio/library_system_2.png',
      ]
    }
  ];

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <br />
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
    </ul>
  );
};

export default Portfolio;