import React from 'react';
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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Skill data from your resume (1 to 100)
const skills = {
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

const SpiderWebSkills = () => {
  const data = {
    labels: Object.keys(skills),
    datasets: [
      {
        label: 'Skill Level (%)',
        data: Object.values(skills),
        backgroundColor: 'rgba(34, 211, 238, 0.3)', // sky-400 light
        borderColor: 'rgba(14, 165, 233, 1)', // sky-500
        pointBackgroundColor: 'rgba(14, 165, 233, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(14, 165, 233, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent',
          color: '#64748b', // slate-500
        },
        pointLabels: {
          color: '#0f172a', // slate-900
          font: { size: 12 },
        },
        grid: {
          color: '#cbd5e1', // slate-300
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#0f172a',
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-base-100 px-4 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Spider Web Skill Chart</h2>
        <p className="text-lg opacity-80">
          Visual overview of all my technical proficiencies in a spider web layout
        </p>
      </div>

      <div className=" mx-auto bg-base-200 p-6 rounded-2xl shadow-xl">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default SpiderWebSkills;
