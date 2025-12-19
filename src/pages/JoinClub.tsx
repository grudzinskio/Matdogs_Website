import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Users, ExternalLink, DollarSign } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function JoinClub() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-dark mb-4">Join Our Club</h1>
        <p className="text-lg text-gray-600">Regular season starts December 1st, 2025</p>
      </motion.div>

      {/* 2026 Season Section */}
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg mb-8"
        {...fadeInUp}
      >
        <h2 className="text-3xl font-bold text-dark mb-6">2026 Season</h2>
        <p className="text-lg text-gray-700 mb-6">
          Registration for the 2026 season is open. Wrestling will start December 1st, 2025. 
          Please contact Sean Grudzinski at Sean@matdogs.com if you have any questions.
        </p>
        <a 
          href="https://go.teamsnap.com/forms/494116"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <FileText size={20} />
          Registration link
          <ExternalLink size={16} />
        </a>
      </motion.div>

      {/* Practices Section */}
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg mb-8"
        {...fadeInUp}
      >
        <div className="flex items-center mb-6">
          <Calendar className="text-primary mr-4" size={32} />
          <h2 className="text-3xl font-bold text-dark">Practices</h2>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          All practices are held in the Cedarburg High School Wrestling room.
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-bold text-dark mb-2">Matpups – Black (4K,5K, 1st; 1st year wrestler)</h3>
            <p className="text-gray-700">Practice Tuesday 5:30-6:45pm</p>
          </div>
          <div className="border-l-4 border-secondary-orange pl-4">
            <h3 className="text-xl font-bold text-dark mb-2">Matpups – Orange (5K and 1st grade; 1+ years experience)</h3>
            <p className="text-gray-700">Practice Tuesday 5:30-6:45pm and Thursday 5:30-6:45pm</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-bold text-dark mb-2">Junior Matdogs – Black (2nd-4th; 0-1 year experience)</h3>
            <p className="text-gray-700">Practice Monday and Wednesday 5:30-7:00pm</p>
          </div>
          <div className="border-l-4 border-secondary-orange pl-4">
            <h3 className="text-xl font-bold text-dark mb-2">Junior Matdogs – Orange (2nd-4th; 2+ years experience)</h3>
            <p className="text-gray-700">Practice Monday and Wednesday 7:00-8:30pm</p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-bold text-dark mb-2">Senior Matdogs (5th-8th)</h3>
            <p className="text-gray-700">Practice Tuesday and Thursday 7:00-8:30pm</p>
          </div>
        </div>
      </motion.div>

      {/* Program Costs */}
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg mb-8"
        {...fadeInUp}
      >
        <div className="flex items-center mb-6">
          <DollarSign className="text-primary mr-4" size={32} />
          <h2 className="text-3xl font-bold text-dark">Program Costs</h2>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-lg text-gray-700 mb-2">
              <strong>$150</strong> Matpups (Orange), Jr & Sr Matdogs
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>$100</strong> Matpups (Black) – Annual Cedarburg Matdog Registration
            </p>
            <p className="text-gray-600 mb-4">Fee includes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Cedarburg Matdogs t-shirt</li>
              <li>Over 3 months of coached practices</li>
              <li>Coaching available at optional weekend tournaments</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-lg text-gray-700">
              <strong>$60</strong> USA Wrestling Membership Card (required)
            </p>
          </div>
        </div>
      </motion.div>

      {/* Equipment Costs */}
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg mb-8"
        {...fadeInUp}
      >
        <h2 className="text-3xl font-bold text-dark mb-6">Equipment Costs</h2>
        <p className="text-lg text-gray-700">
          No equipment is necessary – we provide headgear, shoes are available first-come-first-served. 
          Singlets available upon need, for a fee.
        </p>
      </motion.div>

      {/* All Skill Levels */}
      <motion.div 
        className="bg-gradient-to-r from-primary-orange to-secondary-orange text-white p-8 rounded-lg shadow-lg mb-8"
        style={{
          background: 'linear-gradient(135deg, var(--primary-orange) 0%, var(--secondary-orange) 100%)'
        }}
        {...fadeInUp}
      >
        <h2 className="text-2xl font-bold mb-4">All Skill Levels Are Welcome</h2>
        <p className="text-lg">
          Whether your child is new to wrestling or a more seasoned wrestler, all are welcome.
        </p>
      </motion.div>

      {/* Parent Participation */}
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg"
        {...fadeInUp}
      >
        <h2 className="text-3xl font-bold text-dark mb-6">Parent Participation & Fundraising</h2>
        <p className="text-lg text-gray-700 mb-4">
          We encourage parent participation and require every family to contribute 5 hours. There is a $150 buyout, 
          however we encourage everyone to participate in fundraising events like our Grant Schoen Beginners Tournament 
          or volunteer for a club position. Check out our{' '}
          <a href="/club/volunteer" className="text-primary hover:underline">volunteer opportunities</a> or ask how you can help.
        </p>
        <p className="text-lg text-gray-700">
          Families are encouraged to assist with fundraising activities.
        </p>
      </motion.div>
    </div>
  );
}

export default JoinClub;
