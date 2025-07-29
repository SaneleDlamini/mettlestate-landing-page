import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Button from './UIcomponents/Button';
import Card from './UIcomponents/Card';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};


const EventRegistration = () => {
  const [fullName, setFullName] = useState('');
  const [gamerTag, setGamerTag] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteGame, setFavoriteGame] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, gamerTag, email, favoriteGame });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card className="w-full">
        <section className="container mx-auto p-4 max-w-2xl">
          <motion.h2
            className="text-3xl font-bold mb-6 text-center"
            variants={fadeUp}
            custom={0}
          >
            Event Registration
          </motion.h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { id: 'fullName', label: 'Full Name', value: fullName, setter: setFullName, type: 'text' },
              { id: 'gamerTag', label: 'Gamer Tag', value: gamerTag, setter: setGamerTag, type: 'text' },
              { id: 'email', label: 'Email', value: email, setter: setEmail, type: 'email' },
              { id: 'favoriteGame', label: 'Favourite Game Title', value: favoriteGame, setter: setFavoriteGame, type: 'text' },
            ].map((field, i) => (
              <motion.div key={field.id} variants={fadeUp} custom={i + 1}>
                <label htmlFor={field.id} className="text-lg font-semibold">
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  value={field.value}
                  onChange={(e) => field.setter(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
            ))}

            <motion.div
              className="text-center mt-4"
              variants={fadeUp}
              custom={5}
            >
              <Button>Register Now</Button>
            </motion.div>
          </form>
        </section>
      </Card>
    </motion.div>
  );
};

export default EventRegistration;
