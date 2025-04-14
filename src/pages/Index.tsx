
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturedCars from '../components/home/FeaturedCars';
import SpecialOffers from '../components/home/SpecialOffers';
import PopularDestinations from '../components/home/PopularDestinations';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <FeaturedCars />
        <PopularDestinations />
        <SpecialOffers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
