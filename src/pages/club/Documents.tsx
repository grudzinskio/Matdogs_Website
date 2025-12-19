import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function Documents() {
  const documents = [
    {
      name: 'Concussion Acknowledgement',
      link: 'https://www.matdogs.com/wp-content/uploads/2019/10/ConcussionAcknowledgement_read_sign_turn-in.pdf',
    },
    {
      name: 'Hygiene Guidelines',
      link: 'https://www.matdogs.com/wp-content/uploads/2019/10/Hygiene-Guidelines.pdf',
    },
    {
      name: 'Volunteer Policy',
      link: 'https://www.matdogs.com/wp-content/uploads/2019/10/volunteer-policy-2020.pdf',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FileText className="text-primary mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold text-dark mb-4">Documents & Downloads</h1>
      </motion.div>

      <div className="space-y-6">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.name}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-dark mb-2">{doc.name}</h3>
              </div>
              <a 
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 ml-4"
              >
                <Download size={20} />
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Documents;
