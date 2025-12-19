import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShoppingBag } from 'lucide-react';
import { Season2026 } from '../types';

interface SeasonSectionProps {
  season2026: Season2026;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function SeasonSection({ season2026 }: SeasonSectionProps) {
  return (
    <motion.section 
      className="bg-white p-8 rounded-lg shadow-lg mb-8"
      {...fadeInUp}
    >
      <h2 className="text-3xl font-bold text-dark mb-6 text-center">2026 Season</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a 
          href={season2026.flyerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2"
        >
          <FileText size={20} />
          Flyer
        </a>
        <a 
          href={season2026.gearLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex items-center gap-2"
        >
          <ShoppingBag size={20} />
          Order Matdog Gear
        </a>
      </div>
    </motion.section>
  );
}

export default SeasonSection;

