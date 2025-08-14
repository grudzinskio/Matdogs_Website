import React from 'react';

function WelcomeSection({ heading, paragraph }) {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{heading}</h1>
      <p className="text-lg text-gray-600">{paragraph}</p>
    </section>
  );
}

export default WelcomeSection;