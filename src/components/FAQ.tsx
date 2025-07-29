import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Card from './UIcomponents/Card';

const faqData = [
  {
    question: "What is the date of the tournament?",
    answer: "The tournament will be held on August 10, 2025.",
  },
  {
    question: "How do I register for the event?",
    answer: "You can register by filling out the form in the registration section.",
  },
  {
    question: "Is there a prize for the winners?",
    answer: "Yes! The top three teams will receive cash prizes and exclusive merchandise.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.section
      className="py-12 px-4"
      id="faq"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-[90%] mx-auto">
        <Card className="p-6">
          <motion.h2
            className="text-2xl font-bold mb-6 text-center"
            variants={fadeUp}
            custom={0}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className="border-b pb-2"
                variants={fadeUp}
                custom={index + 1}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left text-lg font-medium flex justify-between items-center"
                >
                  {item.question}
                  <span>{openIndex === index ? '-' : '+'}</span>
                </button>
                {openIndex === index && (
                  <motion.p
                    className="mt-2 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </motion.section>
  );
};

export default FAQ;
