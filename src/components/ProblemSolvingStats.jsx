import rating from 'daisyui/components/rating';
import React, { useState, useEffect } from 'react';
import { SiLeetcode } from 'react-icons/si';

const ProblemSolvingStats = () => {
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const contest = {
    rating:1698,
    ranking:"93,280/725,492",
    attended:10
  }

  // Your LeetCode username
  const leetcodeUsername = 'Mirin_Mano_M';

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`);
        if (!response.ok) throw new Error('LeetCode profile not found or API is down.');
        const data = await response.json();
        if (data.status === 'success') {
          setLeetcodeStats(data);
        } else {
          throw new Error(data.message || 'Failed to fetch LeetCode stats.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, [leetcodeUsername]);

  return (
    <div className="px-4 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Problem Solving</h2>
        <p className="text-lg opacity-80">
          My real-time statistics on LeetCode.
        </p>
      </div>

      <div className="flex justify-center">
        {loading && (
          <div className="text-center p-8">
            <span className="loading loading-dots loading-lg text-primary"></span>
            <p>Fetching LeetCode Stats...</p>
          </div>
        )}

        {error && !loading && (
          <div className="alert alert-error max-w-lg">
            <span>LeetCode Error: {error}</span>
          </div>
        )}

        {!loading && !error && leetcodeStats && (
          <div className="card bg-base-200 shadow-xl w-full max-w-2xl" data-aos="fade-up">
            <div className="card-body">
              <h3 className="card-title text-3xl mb-4"><SiLeetcode className="mr-2" /> LeetCode Profile</h3>

              {/* Contest Performance Stats */}
              <div className="stats stats-horizontal shadow w-full">
                <div className="stat">
                  <div className="stat-title">Contest Rating</div>
                  <div className="stat-value text-accent">{Math.round(contest.rating)}</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Global Ranking</div>
                  <div className="stat-value">{contest.ranking?.toLocaleString()}</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Contests Attended</div>
                  <div className="stat-value">{contest.attended}</div>
                </div>
              </div>

              {/* Problem Solving Stats */}
              <div className="mt-6">
                <h4 className="font-bold text-xl mb-3">Problems Solved</h4>
                <div className="stats stats-vertical md:stats-horizontal shadow w-full">
                    <div className="stat">
                        <div className="stat-title">Total Solved</div>
                        <div className="stat-value text-primary">{leetcodeStats.totalSolved}</div>
                        <div className="stat-desc">/ {leetcodeStats.totalQuestions}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Acceptance Rate</div>
                        <div className="stat-value">{leetcodeStats.acceptanceRate}%</div>
                    </div>
                </div>
              </div>
              
              {/* Difficulty Breakdown */}
              <div className="flex justify-around mt-6 text-center bg-base-300 p-4 rounded-lg">
                <div>
                  <div className="font-bold text-green-500">Easy</div>
                  <div className="text-lg">{leetcodeStats.easySolved} / {leetcodeStats.totalEasy}</div>
                </div>
                <div>
                  <div className="font-bold text-yellow-500">Medium</div>
                  <div className="text-lg">{leetcodeStats.mediumSolved} / {leetcodeStats.totalMedium}</div>
                </div>
                <div>
                  <div className="font-bold text-red-500">Hard</div>
                  <div className="text-lg">{leetcodeStats.hardSolved} / {leetcodeStats.totalHard}</div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemSolvingStats;