import React from 'react';
import Hero from '@/component/Hero/Hero';
import BestProps from '@/component/BestProps/BestProps';
import Footer from '@/component/Footer/Footer';
import Image from "next/image";
import About from '@/component/About/About';
import CurrentListings from '@/component/CurrentListings/CurrentListings';

const Page = () => {
  return (
    <div className="relative w-full">
      <Hero />
      <BestProps />
      
      {/* Background Image Section */}
      <div className="relative w-full min-h-[80vh] flex items-center justify-start">
        <Image
          priority
          src="/hero-img-2.png"
          alt="Hero Image"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <About />
      <CurrentListings />
      <Footer />
    </div>
  );
};

export default Page;
