import { useState } from 'react';
import backgroundImage from '../assets/images/background.jpg'; 
import Button from './UIcomponents/Button';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [gamerTag, setGamerTag] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteGame, setFavoriteGame] = useState('');

  const handleRegisterNow = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ fullName, gamerTag, email, favoriteGame });
    setIsModalOpen(false);
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center min-h-[70vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 px-4 text-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-orange-500 mb-4">
            Legends of Victory: Battle Royale Cup
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white mb-6">
            Compete for glory. Only one can win.
          </p>
          <Button onClick={handleRegisterNow}>Register Now</Button>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl max-w-lg w-full p-6 relative shadow-lg"
            >
              <button
                onClick={handleClose}
                className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Register Now</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-medium">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="font-medium">Gamer Tag</label>
                  <input
                    type="text"
                    value={gamerTag}
                    onChange={(e) => setGamerTag(e.target.value)}
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="font-medium">Favourite Game Title</label>
                  <input
                    type="text"
                    value={favoriteGame}
                    onChange={(e) => setFavoriteGame(e.target.value)}
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>

                <div className="text-center mt-4">
                  <Button>Submit</Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
