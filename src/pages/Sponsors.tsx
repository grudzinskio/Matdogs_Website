import React from 'react';
import { motion } from 'framer-motion';
import { Heart, FileText } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function Sponsors() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heart className="text-primary mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold text-dark mb-4">Sponsors</h1>
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg mb-8"
        {...fadeInUp}
      >
        <p className="text-lg text-gray-700 mb-6 text-center">
          We thank our 2024 season sponsors for the support that they provide to our families and encourage you to patronize them as well.
        </p>
        <div className="text-center text-gray-500">
          <p>Sponsor logos and information will be displayed here.</p>
        </div>
      </motion.div>

      <motion.div 
        className="bg-gradient-to-r from-primary-black to-secondary-black text-white p-8 rounded-lg shadow-lg"
        style={{
          background: 'linear-gradient(135deg, var(--primary-black) 0%, var(--secondary-black) 100%)'
        }}
        {...fadeInUp}
      >
        <div className="flex items-center mb-6">
          <Heart className="text-primary mr-4" size={32} />
          <h2 className="text-3xl font-bold">Become a Sponsor</h2>
        </div>
        <p className="text-lg mb-6">
          We are now an official non-profit organization and all donations are tax deductible. 
          Your sponsorship helps provide equipment, coaching, and tournament opportunities for our young wrestlers.
        </p>
        <a 
          href="https://www.matdogs.com/wp-content/uploads/2019/10/Donation-and-Sponsorship-Opportunity.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <FileText size={20} />
          Learn More About Sponsorship
        </a>
      </motion.div>
    </div>
  );
}

export default Sponsors;
