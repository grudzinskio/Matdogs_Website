import React from 'react';
import EventCard from '../components/EventsCard'; // Make sure this path is correct

function EventsPage() {
  const upcomingEvents = [
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

  const pastEvents = [
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-dark mb-2">Events & Calendar</h1>
          <p className="text-lg text-text-gray">Stay up-to-date with all Matdogs events.</p>
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark mb-6">Upcoming Events</h2>
          <div className="grid gap-8">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>

        {/* Calendar Integration Section */}
        <div className="bg-dark text-white p-8 rounded-lg text-center mb-16 shadow-lg">
          <h3 className="text-2xl font-bold text-primary-orange mb-3">Never Miss a Date!</h3>
          <p className="mb-6">Sync our official team calendar with your phone or computer.</p>
          <button className="btn-primary">
            Sync Calendar
          </button>
        </div>

        {/* Past Events Section */}
        <div>
          <h2 className="text-3xl font-bold text-dark mb-6">Recent Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map(event => (
              <div key={event.id} className="bg-white p-6 rounded-lg border border-border-gray">
                <p className="font-semibold text-primary mb-1">{event.date}</p>
                <h3 className="text-xl font-bold text-dark mb-2">{event.title}</h3>
                <p className="text-text-gray">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsPage;