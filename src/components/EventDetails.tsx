import React from 'react';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Card from './UIcomponents/Card';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrophy,
  FaSitemap,
} from 'react-icons/fa';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};


const EventDetails = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card className="w-full p-4 sm:p-6 md:p-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left"
          variants={fadeUp}
          custom={0}
        >
          Event Details
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {[ 
            {
              icon: <FaCalendarAlt className="text-xl sm:text-2xl text-blue-600 mt-1" />,
              title: "Date & Time",
              text: "August 10, 2025 at 6PM SAST",
            },
            {
              icon: <FaMapMarkerAlt className="text-xl sm:text-2xl text-red-500 mt-1" />,
              title: "Location",
              text: "Online – Streamed live on Twitch",
            },
            {
              icon: <FaTrophy className="text-xl sm:text-2xl text-yellow-500 mt-1" />,
              title: "Prize Pool",
              text: "R50,000",
            },
            {
              icon: <FaSitemap className="text-xl sm:text-2xl text-purple-500 mt-1" />,
              title: "Format",
              text: "Round Robin, Double Elimination",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              variants={fadeUp}
              custom={i + 1}
            >
              {item.icon}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-700">{item.title}</h3>
                <p className="text-sm sm:text-base">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default EventDetails;
