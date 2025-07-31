import React from 'react';

const CertificatesFullCarousel = () => {
  const certificates = [
    {
      id: 'slide1',
      title: 'Ideas For The Vision - Viksit Bharat @2047',
      issuer: 'Government of India',
      date: '2024',
      description: 'Awarded for contributing ideas towards realizing the vision of Viksit Bharat by 2047.',
      image: '/certificates/viksit-bharat.jpg',
    },
    {
      id: 'slide2',
      title: 'Threat Hunting and Digital Forensics',
      issuer: 'Institution of Engineers (India) & PSG College of Technology',
      date: 'Dec 23, 2023',
      description: 'Participated in seminar on tools and techniques for threat hunting and digital forensics.',
      image: '/certificates/digital-forensics.jpg',
    },
    {
      id: 'slide3',
      title: 'Oracle Fusion Cloud HCM',
      issuer: 'Oracle University',
      date: 'Mar 4, 2025',
      description: 'Oracle Fusion Cloud Applications HCM Process Essentials Certified - Rel 1',
      image: '/certificates/oracle-hcm.jpg',
      verify: '#',
      credentialId: '3180928050MBPHCMCFA1',
    },
    {
      id: 'slide4',
      title: 'EF SET English Certificate',
      issuer: 'EF Standard English Test',
      date: 'Jan 20, 2025',
      description: 'Achieved B2 Upper Intermediate level (60/100) with C1 in Reading and Writing',
      image: '/certificates/efset.jpg',
      verify: 'https://cert.efset.org/YtxcV3',
    },
    {
      id: 'slide5',
      title: 'Google AI Essentials',
      issuer: 'Google via Coursera',
      date: 'Mar 11, 2025',
      description: 'Completed Google AI Essentials online course',
      image: '/certificates/google-ai.jpg',
      verify: 'https://coursera.org/verify/PTHCAD2XB6PH',
    },
    {
      id: 'slide6',
      title: 'Ethical Hacking Essentials',
      issuer: 'EC-Council via Coursera',
      date: 'Aug 23, 2024',
      description: 'Completed Ethical Hacking Essentials (EHE) course',
      image: '/certificates/ec-council.jpg',
      verify: 'https://coursera.org/verify/7E680L8ZPWBY',
    },
    {
      id: 'slide7',
      title: 'Android App with Kotlin',
      issuer: 'Spoken Tutorial Project, IIT Bombay',
      date: 'Mar 27, 2024',
      description: 'Completed Android app development training with Kotlin (Score: 87.50%)',
      image: '/certificates/kotlin.jpg',
    },
    {
      id: 'slide8',
      title: 'Linux Training',
      issuer: 'Spoken Tutorial Project, IIT Bombay',
      date: 'May 13, 2024',
      description: 'Completed Linux training (Score: 63.33%)',
      image: '/certificates/linux.jpg',
    },
    {
      id: 'slide9',
      title: 'Industry 4.0 and IIoT',
      issuer: 'NPTEL (IIT Kharagpur)',
      date: 'Oct 2024',
      description: 'Completed course with score of 72%',
      image: '/certificates/industry4.jpg',
    },
    {
      id: 'slide10',
      title: 'Cybersecurity Internship',
      issuer: 'Prompt Infotech',
      date: 'Aug 12-16, 2024',
      description: '5-day intensive internship covering network security and vulnerability assessment',
      image: '/certificates/prompt-infotech.jpg',
    },
    {
      id: 'slide11',
      title: 'Cybersecurity & Digital Forensics Internship',
      issuer: 'TechnoHacks Solutions',
      date: 'Oct-Nov 2024',
      description: 'One-month internship in cybersecurity and digital forensics',
      image: '/certificates/technohacks.jpg',
      credentialId: 'TH07152',
    },
    {
      id: 'slide12',
      title: 'Introduction to IoT',
      issuer: 'NPTEL (IIT Kharagpur)',
      date: 'Apr 2024',
      description: 'Completed course with excellent score of 91%',
      image: '/certificates/iot.jpg',
    },
    {
      id: 'slide13',
      title: 'IPv6 Fundamentals',
      issuer: 'APNIC Academy',
      date: 'Mar 6, 2024',
      description: 'Completed IPv6 Fundamentals Course',
      image: '/certificates/ipv6.jpg',
    },
    {
      id: 'slide14',
      title: 'Fintech Olympiad Participation',
      issuer: 'India FinTech Forum',
      date: '2024',
      description: 'Successfully participated in Fintech Olympiad 2024',
      image: '/certificates/fintech.jpg',
    },
    {
      id: 'slide15',
      title: 'UiPath Automation Explorer',
      issuer: 'UiPath Academy',
      date: 'Feb 27, 2025',
      description: 'Completed UiPath Academy Automation Explorer Training',
      image: '/certificates/uipath.jpg',
    },
  ];

  return (
    <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box overflow-hidden">
      {certificates.map((cert, index) => (
        <div key={cert.id} id={cert.id} className="carousel-item relative w-full max-w-4xl">
          {/* Image */}
          <div className="w-full h-[500px] bg-base-200 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src={cert.image}
              alt={cert.title}
              className="object-contain max-h-full w-full"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/certificates/placeholder.jpg';
              }}
            />
          </div>

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4">
            <h3 className="text-xl font-bold">{cert.title}</h3>
            <p className="text-sm text-gray-300">
              {cert.issuer} • {cert.date}
            </p>
            <p className="mt-2 text-sm">{cert.description}</p>

            <div className="mt-3 flex flex-wrap gap-2 items-center">
              {cert.verify && (
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  Verify
                </a>
              )}
              {cert.credentialId && (
                <span className="badge badge-outline badge-sm">
                  ID: {cert.credentialId}
                </span>
              )}
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute inset-y-1/2 left-5 flex items-center">
            <a
              href={`#${certificates[(index - 1 + certificates.length) % certificates.length].id}`}
              className="btn btn-circle btn-sm"
            >
              ❮
            </a>
          </div>
          <div className="absolute inset-y-1/2 right-5 flex items-center">
            <a
              href={`#${certificates[(index + 1) % certificates.length].id}`}
              className="btn btn-circle btn-sm"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificatesFullCarousel;
