import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function Leadership() {
  const members = [
    { role: 'President', name: 'Sean Grudzinski', email: 'Sean@matdogs.com' },
    { role: 'Vice President', name: 'Todd Lynch', email: 'Todd@matdogs.com' },
    { role: 'Director of Coaching', name: 'Casey Gabrielson', email: 'Casey@matdogs.com' },
    { role: 'Treasurer', name: 'John Mayberry', email: 'John@matdogs.com' },
    { role: 'Secretary', name: '', email: '' },
    { role: 'Marketing/Social Media', name: 'Tina Gabrielson', email: '' },
    { role: 'Equipment Manager', name: 'Brandon Saron', email: 'Brandon@matdogs.com' },
    { role: 'Fundraising', name: 'Tina Gabrielson', email: '' },
    { role: 'Website Administrator', name: 'Sean Grudzinski', email: 'Sean@matdogs.com' },
    { role: 'Grant Schoen Beginners Tournament', name: 'Sean Grudzinski', email: 'Sean@matdogs.com' },
    { role: 'Apparel', name: 'Brandon Saron', email: 'Brandon@matdogs.com' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Users className="text-primary mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold text-dark mb-4">Committee Members</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Club Leadership</h2>
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg"
        {...fadeInUp}
      >
        <div className="space-y-4">
          {members.map((member, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-dark">{member.role}:</h3>
                  {member.name && <p className="text-gray-700">{member.name}</p>}
                </div>
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-primary hover:underline inline-flex items-center gap-2 mt-2 md:mt-0"
                  >
                    <Mail size={18} />
                    {member.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Leadership;
