import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcomeSection';
import PromoSection from './components/PromoSection';

function App() {
  const pageData = {
    welcomeHeading: "Welcome!",
    welcomeParagraph: "We are an ALL volunteer youth organization dedicated to promoting and encouraging the sport of wrestling...",
    headerImage: "https://www.matdogs.com/wp-content/uploads/2018/10/cropped-website_header_2019-01.png",
    promoHeading: "Jesse Thielke “Big Throw” Camp",
    promoImage: "https://www.matdogs.com/wp-content/uploads/2024/10/Thielke-Camp-Reschedule-Flyer-11-2-and-11-3-1038x576.jpg"
  };

  return (
    <div className="font-sans">
      <Header headerImage={pageData.headerImage} />

      <main className="container mx-auto p-8">
        <WelcomeSection 
          heading={pageData.welcomeHeading} 
          paragraph={pageData.welcomeParagraph} 
        />
        <PromoSection 
          heading={pageData.promoHeading} 
          imageSrc={pageData.promoImage} 
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;