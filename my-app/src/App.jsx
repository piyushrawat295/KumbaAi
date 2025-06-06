import React, { useState } from 'react';
import Layout from './components/Layout';
import LandingPageContent from './components/LandingPageContent';
import TextToVideoContent from './components/TextToVideoContent';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleGetStarted = () => {
    setCurrentPage('text-to-video');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  // Function to get page title based on current page
  const getPageTitle = () => {
    switch (currentPage) {
      case 'text-to-video':
        return 'Text To Video';
      case 'landing':
      default:
        return 'Product Video Generator';
    }
  };

  // Function to render current page content
  const renderPageContent = () => {
    switch (currentPage) {
      case 'text-to-video':
        return <TextToVideoContent onBack={handleBackToLanding} />;
      case 'landing':
      default:
        return <LandingPageContent onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="w-full min-h-screen">
      <Layout title={getPageTitle()}> {/* Pass the dynamic title to Layout */}
        <div className="w-full max-w-full">
          {renderPageContent()}
        </div>
      </Layout>
    </div>
  );
};

export default App;