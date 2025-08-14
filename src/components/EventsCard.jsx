import React from 'react';

// SVG Icons for better visual cues
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);


function EventCard({ title, date, time, location, description }) {
  return (
    // This uses the .event-card class from your custom CSS
    <div className="event-card flex flex-col md:flex-row">
      {/* Main event details */}
      <div className="flex-grow mb-4 md:mb-0 md:pr-6">
        <h3 className="text-2xl font-bold text-dark mb-2">{title}</h3>
        <p className="text-text-gray leading-relaxed">{description}</p>
      </div>

      {/* Date, Time, and Location info */}
      <div className="flex-shrink-0 md:w-64 md:border-l md:border-border-gray md:pl-6 space-y-2">
        <div className="flex items-center">
          <CalendarIcon />
          <p className="font-semibold text-dark">{date}</p>
        </div>
        <div className="flex items-center">
          <ClockIcon />
          <p className="text-text-gray">{time}</p>
        </div>
        <div className="flex items-center">
          <LocationIcon />
          <p className="text-text-gray">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;