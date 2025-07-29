import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Card from './UIcomponents/Card';

type Player = {
  id: number;
  username: string;
  points: number;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Leaderboard = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        const playersWithPoints: Player[] = data.slice(0, 10).map((user: any) => ({
          id: user.id,
          username: user.username,
          points: Math.floor(Math.random() * 1000),
        }));

        playersWithPoints.sort((a, b) => b.points - a.points);
        setPlayers(playersWithPoints);
      } catch (err) {
        console.error('Failed to fetch leaderboard:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card>
        <section className="py-12 px-4 bg-gray-100" id="leaderboard">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-6 text-center text-gray-800"
              variants={fadeUp}
              custom={0}
            >
               Leaderboard
            </motion.h2>

            {loading ? (
              <p className="text-center text-gray-500">Loading leaderboard...</p>
            ) : (
              <motion.div
                className="bg-white shadow-md rounded-lg overflow-hidden px-4 sm:px-8 py-4"
                variants={fadeUp}
                custom={1}
              >
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Rank</th>
                      <th className="py-3 px-4 text-left">Gamer Tag</th>
                      <th className="py-3 px-4 text-left">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {players.map((player, index) => (
                      <motion.tr
                        key={player.id}
                        className={
                          index === 0
                            ? 'bg-yellow-100'
                            : index === 1
                            ? 'bg-gray-200'
                            : index === 2
                            ? 'bg-orange-100'
                            : ''
                        }
                        variants={fadeUp}
                        custom={index + 2}
                      >
                        <td className="py-2 px-4 font-medium">{index + 1}</td>
                        <td className="py-2 px-4">{player.username}</td>
                        <td className="py-2 px-4">{player.points}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </div>
        </section>
      </Card>
    </motion.div>
  );
};

export default Leaderboard;
