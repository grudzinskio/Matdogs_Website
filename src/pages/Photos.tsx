import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function Photos() {
  const { year } = useParams<{ year: string }>();
  const yearDisplay = year || '2022';

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center mb-4">
          <Camera className="text-primary mr-4" size={40} />
          <h1 className="text-4xl font-bold text-dark">{yearDisplay} Season Photos</h1>
        </div>
        <p className="text-lg text-gray-600">Memories from the {yearDisplay} wrestling season</p>
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg text-center"
        {...fadeInUp}
      >
        <p className="text-lg text-gray-700 mb-6">
          Photos from the {yearDisplay} season will be displayed here.
        </p>
        <p className="text-gray-600">
          Check back soon for gallery updates!
        </p>
      </motion.div>
    </div>
  );
}

export default Photos;


