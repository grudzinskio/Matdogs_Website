import React from 'react';
import { motion } from 'framer-motion';
import { AgeGroups } from '../types';

interface AgeGroupsSectionProps {
  ageGroups: AgeGroups;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const cardAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 }
};

function AgeGroupsSection({ ageGroups }: AgeGroupsSectionProps) {
  return (
    <motion.div 
      className="age-groups-section"
      {...fadeInUp}
    >
      <h2 className="age-groups-title">
        The Matdogs include boys and girls K-8th grade
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div 
          className="age-group-card"
          {...cardAnimation}
        >
          <div className="age-group-icon">🐕</div>
          <h3 className="age-group-name">Matpups</h3>
          <p className="age-group-description">{ageGroups.matpups}</p>
        </motion.div>
        
        <motion.div 
          className="age-group-card"
          {...cardAnimation}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="age-group-icon">🥇</div>
          <h3 className="age-group-name">Junior Matdogs</h3>
          <p className="age-group-description">{ageGroups.juniorMatdogs}</p>
        </motion.div>
        
        <motion.div 
          className="age-group-card"
          {...cardAnimation}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="age-group-icon">🏆</div>
          <h3 className="age-group-name">Senior Matdogs</h3>
          <p className="age-group-description">{ageGroups.seniorMatdogs}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AgeGroupsSection;
