import React, { useState, useEffect } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython, faJava, faJs, faReact, 
  faNodeJs, faHtml5, faCss3Alt, faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import { faShieldAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillsVisualization = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Radar chart data
  const radarSkills = {
    Python: 95,
    Java: 85,
    'C/C++': 80,
    JavaScript: 90,
    'HTML/CSS': 90,
    ReactJS: 90,
    NodeJS: 85,
    ExpressJS: 80,
    MongoDB: 85,
    MySQL: 85,
    GitHub: 80,
    Linux: 75,
    Cybersecurity: 85,
    Metasploit: 75,
    Hibernate: 70,
  };

  const radarData = {
    labels: Object.keys(radarSkills),
    datasets: [
      {
        label: 'Skill Level (%)',
        data: Object.values(radarSkills),
        backgroundColor: 'rgba(34, 211, 238, 0.3)',
        borderColor: 'rgba(14, 165, 233, 1)',
        pointBackgroundColor: 'rgba(14, 165, 233, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(14, 165, 233, 1)',
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent',
          color: '#64748b',
        },
        pointLabels: {
          color: 'white',
          font: { size: 12 },
        },
        grid: {
          color: '#cbd5e1',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
          font: { size: 14},
        },
      },
    },
  };

  // Honeycomb data
  const honeycombSkills = [
    { name: 'Python', level: 'expert', icon: faPython, row: 1, col: 2, description: 'Versatile scripting for automation, data, and web.' },
    { name: '  ', level: '', icon: '', row: 1, col: 4 },
    { name: 'Java', level: 'advanced', icon: faJava, row: 1, col: 4, description: 'Object-oriented programming used in enterprise apps.' },
    { name: '  ', level: '', icon: '', row: 1, col: 6 },
    { name: 'ReactJS', level: 'expert', icon: faReact, row: 1, col: 6, description: 'Frontend library for building UI components.'},
    
    { name: '  ', level: '', icon: '', row: 2, col: 1 },
    { name: 'JavaScript', level: 'expert', icon: faJs, row: 2, col: 1, description: 'Core language of the web for interactivity.' },
    { name: '  ', level: '', icon: '', row: 2, col: 3 },
    { name: 'Node.js', level: 'advanced', icon: faNodeJs, row: 2, col: 3, description: 'JavaScript runtime for backend development.' },
    { name: '  ', level: '', icon: '', row: 2, col: 5 },
    { name: 'HTML5', level: 'expert', icon: faHtml5, row: 2, col: 5, description: 'Markup language for structuring web content.' },
    { name: '  ', level: '', icon: '', row: 2, col: 7 },
    { name: 'Git', level: 'advanced', icon: faGitAlt, row: 2, col: 7, description: 'Version control system for collaboration.' },
    
    { name: '  ', level: '', icon: '', row: 3, col: 2 },
    { name: 'Cyber Security', level: 'advanced', icon: faShieldAlt, row: 3, col: 2, description: 'Protecting systems from cyber threats.' },
    { name: '  ', level: '', icon: '', row: 2, col: 4 },
    { name: 'CSS3', level: 'expert', icon: faCss3Alt, row: 3, col: 4, description: 'Styling and layout for web interfaces.' },
    { name: '  ', level: '', icon: '', row: 2, col: 6 },
    { name: 'SQL', level: 'expert', icon: faDatabase, row: 3, col: 6, description: 'Database query language for data management.' },
  ];

  const getHoneycombStyle = (level) => {
    const gradients = {
      expert: 'linear-gradient(135deg, #FFD700 0%, #D4A017 100%)',
      advanced: 'linear-gradient(135deg, #FFA500 0%, #CD853F 100%)',
      intermediate: 'linear-gradient(135deg, #F4A460 0%, #D2B48C 100%)'
    };
    
    return {
      background: gradients[level],
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      border: '1px solid rgba(255,255,255,0.3)'
    };
  };

  return (
    <div className="px-4 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Skills Visualization</h2>
        <p className="text-lg opacity-80">
          My technical proficiencies
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Honeycomb Section */}
        <div className="flex-1 bg-base-200 p-6 rounded-2xl shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-warning mb-2">Skills</h3>
            <p className="text-base-content/80">Core technologies</p>
          </div>

          <div className="relative">
            <div className="honeycomb-grid">
              {honeycombSkills.map((skill, index) => (
                skill.name !== '  ' ? (
                  <div
                    key={`${skill.name}-${index}`}
                    className="hexagon"
                    style={{
                      ...getHoneycombStyle(skill.level),
                      gridRow: skill.row,
                      gridColumn: skill.col,
                      animationDelay: `${index * 0.1}s`,
                      width: isSmallScreen ? '50px' : '80px',
                      height: isSmallScreen ? '58px' : '90px',
                      margin: isSmallScreen ? '0 -8px' : '0 -13px'
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="hexagon-content">
                      <FontAwesomeIcon 
                        icon={skill.icon} 
                        className={isSmallScreen ? "text-lg" : "text-xl mb-1"} 
                      />
                      {!isSmallScreen && (
                        <span className="text-xs font-medium">{skill.name}</span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div key={`empty-${index}`}></div>
                )
              ))}
            </div>

            {hoveredSkill && (
              <div className="mt-4 mx-auto bg-base-100 p-3 rounded-md shadow-md z-10 text-sm text-center">
                <div className="font-semibold mb-1">{hoveredSkill.name}</div>
                <div
                  className={`badge badge-sm mb-1 ${
                    hoveredSkill.level === 'expert'
                      ? 'badge-warning'
                      : hoveredSkill.level === 'advanced'
                      ? 'badge-accent'
                      : 'badge-neutral'
                  }`}
                >
                  {hoveredSkill.level}
                </div>
                <p className="text-xs text-base-content/70">{hoveredSkill.description}</p>
              </div>
            )}

            <div className="flex justify-center gap-4 flex-wrap mt-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 hexagon-small" style={getHoneycombStyle('expert')}></div>
                <span>Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 hexagon-small" style={getHoneycombStyle('advanced')}></div>
                <span>Advanced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 hexagon-small" style={getHoneycombStyle('intermediate')}></div>
                <span>Developing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Radar Chart Section */}
        <div className="flex-1 bg-base-200 p-6 rounded-2xl shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary mb-2">Spider Web Chart</h3>
            <p className="text-base-content/80">Comprehensive skill assessment across all domains</p>
          </div>
          <div className="h-96 text-3xl text-base-content">
            <Radar data={radarData} options={radarOptions} />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .honeycomb-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          grid-auto-rows: ${isSmallScreen ? 'calc(50px * 0.866)' : 'calc(80px * 0.866)'};
          width: fit-content;
          max-width: ${isSmallScreen ? '300px' : '400px'};
          margin: 0 auto;
          justify-items: center;
          gap: 0;
        }
        .hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          ${ isSmallScreen?'animation: fadeIn 0.5s forwards':'animation: fadeIn 0.5s forwards'};
          cursor: pointer;
          ${ isSmallScreen?'':'transition: all 0.3s ease'};
          position: relative;
        }
        .hexagon:hover {
          transform: scale(1.05);
          z-index: 5;
        }
        .hexagon:nth-child(odd) {
          margin-top: ${isSmallScreen ? '-12px' : '-17px'};
        }
        .hexagon-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
          padding: ${isSmallScreen ? '4px' : '8px'};
        }
        .hexagon-small {
          width: 20px;
          height: 23px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SkillsVisualization;