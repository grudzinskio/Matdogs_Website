import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, FileText } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function Volunteer() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeartHandshake className="text-primary mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold text-dark mb-4">Volunteer Opportunities</h1>
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg mb-8"
        {...fadeInUp}
      >
        <h2 className="text-3xl font-bold text-dark mb-6">Volunteers</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We are always looking for helpful people wanting to be involved with our program. If you have a special 
          talent that could benefit our club, let us know. Coaches, photographers, marketing, event coordinators, 
          fundraising coordinators…….
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We are currently looking for the following:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
          <li>secretary</li>
          <li>treasurer</li>
          <li>beginners tournament coordinator</li>
          <li>special event coordinator</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <a href="/contact" className="text-primary hover:underline font-semibold">Contact Us</a> to get involved.
        </p>
        <a 
          href="https://www.matdogs.com/wp-content/uploads/2019/10/volunteer-policy-2020.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <FileText size={20} />
          Volunteer Policy
        </a>
      </motion.div>
    </div>
  );
}

export default Volunteer;
