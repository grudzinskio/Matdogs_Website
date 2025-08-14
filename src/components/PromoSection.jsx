import React from 'react';

function PromoSection({ heading, imageSrc }) {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{heading}</h2>
      <img src={imageSrc} alt="Promo" className="rounded-lg shadow-xl mx-auto" />
    </section>
  );
}

export default PromoSection;