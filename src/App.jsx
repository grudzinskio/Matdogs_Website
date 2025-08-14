import React from 'react';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer

function App() {
  const pageData = {
    welcomeHeading: "Welcome!",
    welcomeParagraph: "We are an ALL volunteer youth organization dedicated to promoting and encouraging the sport of wrestling. Get all the up-to-date information on the Cedarburg Matdogs wrestling program– including important news, calendar of events and contact information!",
    headerImage: "https://www.matdogs.com/wp-content/uploads/2018/10/cropped-website_header_2019-01.png",
    promoImage: "https://www.matdogs.com/wp-content/uploads/2024/10/Thielke-Camp-Reschedule-Flyer-11-2-and-11-3-1038x576.jpg"
  };

  return (
    <div className="font-sans">
      <Header headerImage={pageData.headerImage} /> {/* Use the Header component */}

      <main className="container mx-auto p-8">
        {/* Welcome Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{pageData.welcomeHeading}</h1>
          <p className="text-lg text-gray-600">{pageData.welcomeParagraph}</p>
        </section>

        {/* Promo Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Jesse Thielke “Big Throw” Camp</h2>
          <img src={pageData.promoImage} alt="Jesse Thielke Camp" className="rounded-lg shadow-xl mx-auto" />
        </section>
      </main>

      <Footer /> {/* Use the Footer component */}
    </div>
  );
}

export default App;