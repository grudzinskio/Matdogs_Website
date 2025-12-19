import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function TournamentSchedule() {
  const tournaments = [
    { date: '01/4', name: 'West Bend Wildcats Tournament' },
    { date: '01/11', name: 'Hartford Youth Wrestling Tournament' },
    { date: '01/18', name: 'Random Lake Youth Tournament', note: 'For wrestlers not attending the Slinger Beginners tournament' },
    { date: '01/18', name: "Slinger's Beginners Tournament", note: '1st and 2nd year wrestlers with zero to little tournament experience should attend this tournament' },
    { date: '01/25', name: 'Germantown Hornets Youth Wrestling Tournament' },
    { date: '02/01', name: 'Ozaukee Youth Wrestling Tournament' },
    { date: '02/08', name: 'Union Grove Youth Wrestling Tournament' },
    { date: '02/14 – 02/15', name: 'Fox Valley Folk Style Challenge (Travel – overnight event)', note: 'Parents must book their own rooms. Book at hotels near Mineshaft in Oshkosh as that is where the team event will be after day one wrestling ends' },
    { date: '02/22', name: 'Kewaskum "Battle for the Belt" Tournament' },
    { date: '02/31', name: 'No tournaments for Matdogs', note: 'We recommend attending the WIAA High School State Finals session 5 on 2-28-26.' },
    { date: '02/26 to 02/28', name: 'WIAA High School State Tournament' },
    { date: '03/08', name: 'Cedarburg Matdogs – Grant Schoen Memorial Tournament' },
    { date: '03/14', name: 'Port Washington Youth Wrestling Tournament', note: 'Note: This is a Saturday tournament, not Sunday.' },
    { date: '03/21', name: 'Qualifier', note: 'Must place top 3 to qualify for the state tournament. For state youth tournament qualifier participants' },
    { date: '03/26 – 03/29', name: 'State Youth Tournament', note: 'Date depends on age and gender' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Calendar className="text-primary mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold text-dark mb-4">2026 Tournament Schedule</h1>
        <p className="text-sm text-gray-600 italic">*Please note subject to change</p>
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg"
        {...fadeInUp}
      >
        <div className="space-y-4">
          {tournaments.map((tournament, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
              <div className="flex flex-col md:flex-row">
                <div className="font-bold text-primary text-lg md:w-32 mb-2 md:mb-0">
                  {tournament.date}:
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-800 font-semibold">{tournament.name}</p>
                  {tournament.note && (
                    <p className="text-sm text-gray-600 italic mt-1">{tournament.note}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default TournamentSchedule;
