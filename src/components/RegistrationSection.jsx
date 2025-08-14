import React from 'react';

function RegistrationSection({ heading, text, seasonInfo }) {
  return (
    <div className="registration-section">
      <div className="registration-content text-center">
        <h2 className="registration-title">{heading}</h2>
        <p className="registration-text">{text}</p>
        <p className="registration-season">{seasonInfo}</p>
        
        <div className="space-x-4">
          <button className="btn-primary">
            Register Now
          </button>
          <button className="btn-secondary">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSection;