import React from 'react';
import { motion } from 'framer-motion';

interface PromoSectionProps {
  heading: string;
  imageSrc: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function PromoSection({ heading, imageSrc }: PromoSectionProps) {
  return (
    <motion.section 
      className="text-center"
      {...fadeInUp}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{heading}</h2>
      <motion.img 
        src={imageSrc} 
        alt="Promo" 
        className="rounded-lg shadow-xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.section>
  );
}

export default PromoSection;
