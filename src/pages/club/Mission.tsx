import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function Mission() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Target className="text-primary mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold text-dark mb-4">Mission</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Cedarburg Matdogs Mission:</h2>
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg"
        {...fadeInUp}
      >
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our goal is to provide an athletic and competitive opportunity for young people that will teach 
          sportsmanship and the fundamental skills of wrestling. We are dedicated to promoting and encouraging 
          the sport of wrestling in our community. It is our intention to provide an environment to help build 
          character, self-confidence and positive attitudes while developing skills in preparation for higher level 
          Cedarburg School District teams.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Through our club, we look to foster a strong family-oriented environment, where parents and children 
          are equally dedicated and committed to sharing the experience.
        </p>
      </motion.div>
    </div>
  );
}

export default Mission;
