import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 }
};

function EventCard({ title, date, time, location, description }: EventCardProps) {
  return (
    <motion.div 
      className="event-card flex flex-col md:flex-row"
      {...fadeInUp}
    >
      {/* Main event details */}
      <div className="flex-grow mb-4 md:mb-0 md:pr-6">
        <h3 className="text-2xl font-bold text-dark mb-2">{title}</h3>
        <p className="text-text-gray leading-relaxed">{description}</p>
      </div>

      {/* Date, Time, and Location info */}
      <div className="flex-shrink-0 md:w-64 md:border-l md:border-border-gray md:pl-6 space-y-2">
        <div className="flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-primary" />
          <p className="font-semibold text-dark">{date}</p>
        </div>
        {time && (
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-primary" />
            <p className="text-text-gray">{time}</p>
          </div>
        )}
        {location && (
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-primary" />
            <p className="text-text-gray">{location}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default EventCard;
