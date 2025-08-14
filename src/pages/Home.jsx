import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import PromoSection from '../components/PromoSection';
import { homepageData } from '../data/homepageData'; // 1. Import the data

function Home() {
  // 2. The component is now clean and doesn't contain hardcoded content.
  return (
    <>
      <WelcomeSection 
        heading={homepageData.welcomeHeading} 
        paragraph={homepageData.welcomeParagraph} 
      />
      <PromoSection 
        heading={homepageData.promoHeading} 
        imageSrc={homepageData.promoImage} 
      />
    </>
  );
}

export default Home;