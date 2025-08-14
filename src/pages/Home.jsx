import React, { useState, useEffect } from 'react';
import WelcomeSection from '../components/WelcomeSection';
import PromoSection from '../components/PromoSection';
import RegistrationSection from '../components/RegistrationSection';
import AgeGroupsSection from '../components/AgeGroupsSection';

function Home() {
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/homepageData.json')
      .then(response => response.json())
      .then(data => {
        setPageData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch homepage data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section with Motto */}
      <div className="hero">
        <div className="hero-content text-center">
          <h1 className="hero-title text-white">Cedarburg Wrestling</h1>
          <p className="hero-subtitle">{pageData.motto}</p>
        </div>
      </div>

      <WelcomeSection 
        heading={pageData.welcomeHeading} 
        paragraph={pageData.welcomeParagraph} 
      />
      
      <RegistrationSection
        heading={pageData.registrationHeading}
        text={pageData.registrationText}
        seasonInfo={pageData.seasonInfo}
      />

      <AgeGroupsSection ageGroups={pageData.ageGroups} />
      
      <PromoSection 
        heading={pageData.promoHeading} 
        imageSrc={pageData.promoImage} 
      />

      {/* Sponsor Section */}
      <div className="sponsor-section">
        <div className="sponsor-content">
          <h2 className="sponsor-title">{pageData.sponsorHeading}</h2>
          <p className="sponsor-text">{pageData.sponsorText}</p>
          <button className="btn-primary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;