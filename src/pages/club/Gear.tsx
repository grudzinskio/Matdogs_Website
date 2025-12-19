import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function Gear() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ShoppingBag className="text-primary mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold text-dark mb-4">Matdogs Wrestling Gear</h1>
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg mb-8"
        {...fadeInUp}
      >
        <h2 className="text-2xl font-bold text-dark mb-4">Main Team Store</h2>
        <p className="text-lg text-gray-700 mb-4">
          Closes December 18th. All items will be bulk shipped to Matdogs.
        </p>
        <a 
          href="https://cedarburg-matdogs-apparel-2022.itemorder.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 mb-6"
        >
          <ShoppingBag size={20} />
          Main Team Store
          <ExternalLink size={16} />
        </a>

        <h2 className="text-2xl font-bold text-dark mb-4 mt-8">Other Gear</h2>
        <p className="text-lg text-gray-700 mb-4">
          Including singlets and two piece uniforms:
        </p>
        <a 
          href="https://www.myhousesportsgear.com/cedarburg-matdogs/ref/227/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2"
        >
          <ShoppingBag size={20} />
          Other Gear Store
          <ExternalLink size={16} />
        </a>
      </motion.div>
    </div>
  );
}

export default Gear;
