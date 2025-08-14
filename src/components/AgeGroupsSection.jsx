import React from 'react';

function AgeGroupsSection({ ageGroups }) {
  return (
    <div className="age-groups-section">
      <h2 className="age-groups-title">
        The Matdogs include boys and girls K-8th grade
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="age-group-card">
          <div className="age-group-icon">🐕</div>
          <h3 className="age-group-name">Matpups</h3>
          <p className="age-group-description">(4K, 5K, 1st)</p>
        </div>
        
        <div className="age-group-card">
          <div className="age-group-icon">🥇</div>
          <h3 className="age-group-name">Junior Matdogs</h3>
          <p className="age-group-description">(2nd-4th)</p>
        </div>
        
        <div className="age-group-card">
          <div className="age-group-icon">🏆</div>
          <h3 className="age-group-name">Senior Matdogs</h3>
          <p className="age-group-description">(5th-8th)</p>
        </div>
      </div>
    </div>
  );
}

export default AgeGroupsSection;