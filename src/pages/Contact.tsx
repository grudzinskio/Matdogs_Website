import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function Contact() {
  const contacts = [
    {
      name: 'Casey Gabrielson',
      title: 'Director of Coaching',
      email: 'casey@matdogs.com',
      phone: '(262)-825-6774',
      icon: <User size={24} />
    },
    {
      name: 'Sean Grudzinski',
      title: 'President',
      email: 'sean@matdogs.com',
      phone: '(414) 614-5922',
      icon: <User size={24} />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-dark mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">Get in touch with the Matdogs leadership team</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {contacts.map((contact, index) => (
          <motion.div
            key={contact.name}
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary p-3 rounded-full text-white mr-4">
                {contact.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark">{contact.name}</h3>
                <p className="text-gray-600">{contact.title}</p>
              </div>
            </div>
            <div className="space-y-3">
              <a 
                href={`mailto:${contact.email}`}
                className="flex items-center text-gray-700 hover:text-primary transition"
              >
                <Mail size={20} className="mr-3" />
                {contact.email}
              </a>
              <a 
                href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center text-gray-700 hover:text-primary transition"
              >
                <Phone size={20} className="mr-3" />
                {contact.phone}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Contact;

