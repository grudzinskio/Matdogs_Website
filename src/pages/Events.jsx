import React from 'react';

function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "2025-2026 Season Start",
      date: "December 1, 2025",
      time: "6:00 PM",
      location: "Cedarburg High School",
      description: "First practice of the new season. All registered wrestlers welcome!"
    },
    {
      id: 2,
      title: "Jesse Thielke Big Throw Camp",
      date: "November 2-3, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Cedarburg High School",
      description: "Special wrestling camp focusing on throwing techniques with Jesse Thielke."
    }
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Grant Schoen Beginners Tournament (GSBT)",
      date: "March 2022",
      description: "Annual tournament for beginning wrestlers to gain competition experience."
    },
    {
      id: 4,
      title: "Ben Peterson Clinic",
      date: "February 2022", 
      description: "Olympic champion Ben Peterson visited to share techniques and inspiration."
    }
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Events & Calendar</h1>
        <p className="text-lg text-gray-600">
          New! Sync with our calendars and never miss a date!
        </p>
      </div>

      {/* Upcoming Events */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Coming Up:</h2>
        <div className="grid gap-6">
          {upcomingEvents.map(event => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                </div>
                <div className="md:text-right md:ml-6">
                  <p className="text-lg font-semibold text-blue-600">{event.date}</p>
                  <p className="text-gray-500">{event.time}</p>
                  <p className="text-gray-500">{event.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Calendar Integration */}
      <section className="bg-blue-50 p-6 rounded-lg mb-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Stay Connected</h3>
        <p className="text-blue-700 mb-4">
          Sync our calendar with your phone or computer to never miss an important date!
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
          Add Calendar to Your Phone
        </button>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Events:</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pastEvents.map(event => (
            <div key={event.id} className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events;