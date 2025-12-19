import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventsCard';
import { Event } from '../types';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function EventsPage() {
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Pre-Season Parent & Wrestler Meeting",
      date: "September 5, 2025",
      time: "7:00 PM",
      location: "Cedarburg High School Auditorium",
      description: "Annual meeting to cover the season schedule, expectations, and answer questions."
    },
    {
      id: 2,
      title: "Brewers Wrestling Day",
      date: "September 14, 2025",
      time: "1:10 PM",
      location: "American Family Field, Milwaukee",
      description: "Join the Matdogs team and families for a special outing at the ballpark."
    },
    {
      id: 3,
      title: "2025-2026 Season Start",
      date: "December 1, 2025",
      time: "6:00 PM",
      location: "Cedarburg High School Wrestling Room",
      description: "First practice of the new season. All registered wrestlers are welcome!"
    }
  ];

  const pastEvents: Event[] = [
    {
      id: 4,
      title: "2025 Season Banquet",
      date: "April 2025",
      description: "Celebrated the end of a successful 2024-2025 season with awards and recognition."
    },
    {
      id: 5,
      title: "Grant Schoen Beginners Tournament (GSBT)",
      date: "March 2025",
      description: "Hosted our annual tournament for new wrestlers, with a record number of participants."
    }
  ];

  return (
    <section className="bg-light py-16 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-dark mb-2">Events & Calendar</h1>
          <p className="text-lg text-text-gray">Stay up-to-date with all Matdogs events.</p>
        </motion.div>

        {/* Upcoming Events Section */}
        <motion.div 
          className="mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold text-dark mb-6">Upcoming Events</h2>
          <div className="grid gap-8">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </motion.div>

        {/* Calendar Integration Section */}
        <motion.div 
          className="bg-dark text-white p-8 rounded-lg text-center mb-16 shadow-lg"
          style={{ background: 'linear-gradient(135deg, var(--primary-black) 0%, var(--secondary-black) 100%)' }}
          {...fadeInUp}
        >
          <h3 className="text-2xl font-bold text-primary mb-3">Never Miss a Date!</h3>
          <p className="mb-6">Sync our official team calendar with your phone or computer.</p>
          <Link to="/events/sync" className="btn-primary inline-block">
            Sync Calendar to Your Phone
          </Link>
        </motion.div>

        {/* Past Events Section */}
        <motion.div
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold text-dark mb-6">Recent Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div 
                key={event.id} 
                className="bg-white p-6 rounded-lg border border-border-gray"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="font-semibold text-primary mb-1">{event.date}</p>
                <h3 className="text-xl font-bold text-dark mb-2">{event.title}</h3>
                <p className="text-text-gray">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default EventsPage;
