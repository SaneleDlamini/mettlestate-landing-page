// components/Home.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import EventDetails from '../components/EventDetails';
import EventRegistration from '../components/EventRegistration';
import FAQ from '../components/FAQ'
import Leaderboard from '../components/Leaderboard';
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <div className="w-full p-4 bg-gray-100">
        <span className="text-2xl font-bold text-gray-600">Mettlestate</span>
      </div>
      <HeroSection />
        <div className="flex flex-row flex-wrap w-full">
          <div className="w-1/2 p-2 min-w-[300px]">
            <EventDetails />
          </div>
          <div className="w-1/2 p-2 min-w-[300px]">
            <EventRegistration />
          </div>
        </div>
        <Leaderboard />
        <FAQ />
        <Footer />
    </div>
  );
};

export default Home;