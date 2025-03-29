import React from 'react';
import Hero from '@/component/Hero/Hero';
import Services from '@/component/Services/Services';
import Footer from '@/component/Footer/Footer';
import Properties from '@/component/Properties/Properties';
import Features from '@/component/Features/Features';
import Journey from '@/component/Journey/Journey';

const Page = () => {
  return (
    <div className="relative w-full bg-[#F1F9FF]">
      <Hero />
      <Services />
      <Properties />
      {/* Background Video Section */}
      <div className="w-full relative overflow-hidden">
        <video 
          className="w-full h-[70vh] object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
          src="/building-video-compressed.mp4"
        ></video>
      </div>

      <Features />
      <Journey />
      <Footer />
    </div>
  );
};

export default Page;