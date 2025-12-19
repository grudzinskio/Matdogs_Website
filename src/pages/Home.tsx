import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WelcomeSection from '../components/WelcomeSection';
import SeasonSection from '../components/SeasonSection';
import RegistrationSection from '../components/RegistrationSection';
import AgeGroupsSection from '../components/AgeGroupsSection';
import { HomepageData } from '../types';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

function Home() {
  const [pageData, setPageData] = useState<HomepageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/homepageData.json')
      .then(response => response.json())
      .then((data: HomepageData) => {
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

  if (!pageData) {
    return <div className="text-center p-10">Error loading page data</div>;
  }

  return (
    <div className="space-y-8">
      {/* Hero Section with Motto */}
      <div className="hero">
        <div className="hero-content text-center">
          <h1 className="hero-title text-white">Cedarburg Matdogs Wrestling</h1>
          <p className="hero-subtitle">{pageData.motto}</p>
        </div>
      </div>

      <WelcomeSection 
        heading={pageData.welcomeHeading} 
        paragraph={pageData.welcomeParagraph} 
      />
      
      <SeasonSection season2026={pageData.season2026} />
      
      <RegistrationSection
        heading={pageData.registrationHeading}
        text={pageData.registrationText}
        seasonInfo={pageData.seasonInfo}
      />

      <AgeGroupsSection ageGroups={pageData.ageGroups} />

      {/* Practice Info Section */}
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-lg text-center"
        {...fadeInUp}
      >
        <p className="text-lg text-gray-700 mb-4">{pageData.practiceInfo}</p>
        <p className="text-gray-600">
          For more club info and the practice schedule{' '}
          <a href="/join" className="text-primary hover:underline font-semibold">click here</a>
        </p>
      </motion.div>

      {/* Registration Link Section */}
      <motion.div 
        className="p-6 rounded-lg shadow-lg text-center"
        style={{
          background: 'linear-gradient(135deg, var(--primary-orange) 0%, var(--secondary-orange) 100%)'
        }}
        {...fadeInUp}
      >
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Join?</h3>
        <a 
          href={pageData.season2026.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dark inline-block"
        >
          Registration Link
        </a>
      </motion.div>

      {/* Sponsor Section */}
      <motion.div 
        className="sponsor-section"
        {...fadeInUp}
      >
        <div className="sponsor-content">
          <h2 className="sponsor-title">{pageData.sponsorHeading}</h2>
          <p className="sponsor-text">{pageData.sponsorText}</p>
          <a 
            href={pageData.sponsorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Click here to learn more
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
