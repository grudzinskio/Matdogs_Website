import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Heart, FileText, ExternalLink } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function GrantSchoen() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center mb-4">
          <Trophy className="text-primary mr-4" size={48} />
          <Heart className="text-primary" size={48} />
        </div>
        <h1 className="text-4xl font-bold text-dark mb-4">Grant Schoen Beginners Tournament</h1>
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg"
        {...fadeInUp}
      >
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our Beginners Tournament is an event to give new wrestlers a chance to experience a tournament. 
          We have given our beginners tournament a new name in 2013, the Grant Schoen Beginners Tournament, 
          as way to honor the sudden loss of one of our brightest stars, Grant Schoen. He passed away unexpectedly 
          at the age of 10 on Thursday, October 17th, 2013, from Sudden Cardiac Arrest (SCA).{' '}
          <a href="https://heartsafewisconsin.org/about/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            To learn more about SCA click here
          </a>.
        </p>

        <div className="space-y-4 mt-6">
          <a 
            href="https://www.matdogs.com/wp-content/uploads/2025/10/GSBT-Beginners-Tournament-Flyer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FileText size={20} />
            2025 GSBT Beginners Tournament Flyer
            <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default GrantSchoen;
