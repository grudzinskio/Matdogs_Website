import React from 'react';
import { motion } from 'framer-motion';

interface RegistrationSectionProps {
  heading: string;
  text: string;
  seasonInfo: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function RegistrationSection({ heading, text, seasonInfo }: RegistrationSectionProps) {
  const isClosed = heading.toLowerCase().includes('closed');
  
  return (
    <motion.div 
      className={`registration-section ${isClosed ? 'registration-closed' : ''}`}
      {...fadeInUp}
    >
      <div className="registration-content text-center">
        <h2 className="registration-title">{heading}</h2>
        <p className="registration-text">{text}</p>
        <p className="registration-season">{seasonInfo}</p>
        
        {!isClosed && (
          <div className="space-x-4">
            <button className="btn-primary">
              Register Now
            </button>
            <button className="btn-secondary">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default RegistrationSection;
