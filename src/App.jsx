import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import PackagesSection from './components/PackagesSection';
import AboutSection from './components/AboutSection';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ContactPage from './components/ContactPage';
import InteractiveTravelMap from './components/InteractiveTravelMap';
import ContactUs from './components/ContactUs';
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <PackagesSection />
      <InteractiveTravelMap />
      <AboutSection />
      <AchievementsSection />
      <ContactUs/>
      {/* <ContactPage /> */}
      <Footer />
      <WhatsAppButton />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default App;