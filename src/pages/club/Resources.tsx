import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function Resources() {
  const resources = [
    { title: 'Trackwrestling', link: 'https://www.trackwrestling.com/' },
    { title: 'Wisconsin Wrestling', link: 'https://www.wiwrestling.com/' },
    { title: 'Wisconsin Wrestling Federation', link: 'https://www.wiwrestling.com/' },
    { title: "Askren Bros. Wrestling", link: 'https://www.askrenwrestling.com/' },
    { title: "Ben Peterson's Camp Of Champs", link: 'https://www.campofchamps.org/' },
    { title: 'FloWrestling', link: 'https://www.flowrestling.org/' },
    { title: 'Cedarburg Matdogs Facebook Page', link: 'https://www.facebook.com/matdogs' },
    { title: 'The Mat - The Official Website of USA Wrestling', link: 'https://www.themat.com/' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BookOpen className="text-primary mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold text-dark mb-4">Wrestling Resources</h1>
      </motion.div>

      <div className="space-y-4">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a 
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-2 text-lg font-semibold"
            >
              {resource.title}
              <ExternalLink size={18} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
