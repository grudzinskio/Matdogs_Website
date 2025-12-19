import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeSectionProps {
  heading: string;
  paragraph: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function WelcomeSection({ heading, paragraph }: WelcomeSectionProps) {
  return (
    <motion.section 
      className="bg-white p-6 rounded-lg shadow-lg text-center mb-8"
      {...fadeInUp}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{heading}</h1>
      <p className="text-lg text-gray-600">{paragraph}</p>
    </motion.section>
  );
}

export default WelcomeSection;
