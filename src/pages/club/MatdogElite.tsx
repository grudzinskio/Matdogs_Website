import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function MatdogElite() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Award className="text-primary mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold text-dark mb-4">Matdog Elite</h1>
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg"
        {...fadeInUp}
      >
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Matdog Elite wrestlers are those that work extra hard during the season and represent the very best 
          of the Cedarburg Matdogs. The requirements for becoming a Matdog Elite wrestler are below:
        </p>
        
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
          <li>Be a good sport.</li>
          <li>Assist the Junior Dogs and be a good role model.</li>
          <li>Go to 8 tournaments… one needs to be the State Tourney or a National Level Tourney (Dominate at the Dells).</li>
          <li>Wrestle at the highest skill level in tournaments.</li>
          <li>Have perfect attendance at practice (if absence is excused by a parent and a make up is performed it will not count against them).</li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed">
          The reward for Elite status will be pride, recognition, and a custom singlet! Matdog Elite wrestlers 
          will be recognized during the end of season banquet.
        </p>
      </motion.div>
    </div>
  );
}

export default MatdogElite;
