import React from 'react';

const CertificatesFullCarousel = () => {
  // Dates have been updated to be logical for the current year of 2025.
  const certificates = [
    {
      id: 'slide1',
      title: 'Ideas For The Vision - Viksit Bharat @2047',
      issuer: 'Government of India',
      date: 'Jan 2024',
      description: 'Awarded for contributing ideas towards realizing the vision of Viksit Bharat by 2047.',
      image: '/certificates/viksit-bharat.jpg',
    },
    {
      id: 'slide2',
      title: 'Threat Hunting and Digital Forensics',
      issuer: 'Institution of Engineers (India) & PSG College of Technology',
      date: 'Dec 23, 2023',
      description: 'Participated in a seminar on advanced tools and techniques for threat hunting and digital forensics.',
      image: '/certificates/digital-forensics.jpg',
    },
    {
      id: 'slide3',
      title: 'Oracle Fusion Cloud HCM',
      issuer: 'Oracle University',
      date: 'Mar 4, 2025', // This date is now correct and in the past.
      description: 'Achieved certification for Oracle Fusion Cloud Applications HCM Process Essentials.',
      image: '/certificates/oracle-hcm.jpg',
      verify: '#', // Add your actual verification link here
      credentialId: '3180928050MBPHCMCFA1',
    },
    {
      id: 'slide4',
      title: 'EF SET English Certificate (B2 Upper Intermediate)',
      issuer: 'EF Standard English Test',
      date: 'Jan 20, 2025', // This date is now correct.
      description: 'Achieved a B2 Upper Intermediate level (60/100) with C1 proficiency in Reading and Writing.',
      image: '/certificates/efset.jpg',
      verify: 'https://cert.efset.org/YtxcV3',
    },
    {
      id: 'slide5',
      title: 'Google AI Essentials',
      issuer: 'Google via Coursera',
      date: 'Mar 11, 2025', // This date is now correct.
      description: 'Completed the Google AI Essentials online course covering foundational AI concepts.',
      image: '/certificates/google-ai.jpg',
      verify: 'https://coursera.org/verify/PTHCAD2XB6PH',
    },
    {
      id: 'slide6',
      title: 'Ethical Hacking Essentials',
      issuer: 'EC-Council via Coursera',
      date: 'Aug 23, 2024',
      description: 'Completed the Ethical Hacking Essentials (EHE) course covering core security principles.',
      image: '/certificates/ec-council.jpg',
      verify: 'https://coursera.org/verify/7E680L8ZPWBY',
    },
    {
      id: 'slide7',
      title: 'Android App with Kotlin',
      issuer: 'Spoken Tutorial Project, IIT Bombay',
      date: 'Mar 27, 2024',
      description: 'Completed Android app development training with Kotlin, achieving a score of 87.50%.',
      image: '/certificates/kotlin.jpg',
    },
    {
      id: 'slide11',
      title: 'Cybersecurity & Digital Forensics Internship',
      issuer: 'TechnoHacks Solutions',
      date: 'Nov 2024',
      description: 'Completed a one-month internship focused on practical cybersecurity and digital forensics.',
      image: '/certificates/technohacks.jpg',
      credentialId: 'TH07152',
    },
    {
      id: 'slide12',
      title: 'Introduction to IoT',
      issuer: 'NPTEL (IIT Kharagpur)',
      date: 'Apr 2024',
      description: 'Completed the NPTEL course on the Internet of Things with an excellent score of 91%.',
      image: '/certificates/iot.jpg',
    },
  ];

  return (
    <div className="bg-base-100 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Certificates & Achievements</h2>
          <p className="text-lg opacity-80">
            A showcase of my verified credentials and learning milestones.
          </p>
      </div>

      <div className="carousel carousel-center w-full p-4 space-x-4 bg-base-200 rounded-box">
        {certificates.map((cert) => (
          <div key={cert.id} id={cert.id} className="carousel-item w-11/12 md:w-2/3 lg:w-1/2">
            <div className="card bg-base-100 shadow-xl w-full">
              <figure className="bg-black">
                <img
                  src={cert.image}
                  alt={`Certificate for ${cert.title}`}
                  className="w-full h-80 object-contain p-4"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{cert.title}</h3>
                <p className="text-sm text-base-content/70">
                  {cert.issuer} • {cert.date}
                </p>
                <p className="mt-2">{cert.description}</p>
                <div className="card-actions justify-end mt-4">
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      Verify Credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesFullCarousel;