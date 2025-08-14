import React, { useState, useEffect } from 'react';
import WelcomeSection from '../components/WelcomeSection';
import PromoSection from '../components/PromoSection';

function Home() {
  // 1. Set up state to hold our data and loading status
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 2. useEffect runs after the component renders
  useEffect(() => {
    // 3. Fetch data from the public folder
    fetch('/homepageData.json')
      .then(response => response.json())
      .then(data => {
        setPageData(data); // Put the loaded data into state
        setIsLoading(false); // Set loading to false
      })
      .catch(error => {
        console.error("Failed to fetch homepage data:", error);
        setIsLoading(false); // Also stop loading on error
      });
  }, []); // The empty array [] means this effect runs only once

  // 4. Show a loading message while data is being fetched
  if (isLoading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  // 5. Render the page with the fetched data
  return (
    <>
      <WelcomeSection 
        heading={pageData.welcomeHeading} 
        paragraph={pageData.welcomeParagraph} 
      />
      <PromoSection 
        heading={pageData.promoHeading} 
        imageSrc={pageData.promoImage} 
      />
    </>
  );
}

export default Home;