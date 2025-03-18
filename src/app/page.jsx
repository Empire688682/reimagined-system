import React from 'react';
import Hero from '@/component/Hero/Hero';
import Services from '@/component/Services/Services';
import Footer from '@/component/Footer/Footer';
import Image from "next/image";
import About from '@/component/About/About';
import Properties from '@/component/Properties/Properties';
import Features from '@/component/Features/Features';
import Journey from '@/component/Journey/Journey';

const Page = () => {
  return (
    <div className="relative w-full bg-[#F1F9FF]">
      <Hero />
      <Services />
      <Properties />
      {/* Background Image Section */}
      <div className="relative w-full min-h-[300px] flex items-center justify-start mb-8">
        <Image
          priority
          src="/banner.png"
          alt="Hero Banner"
          fill
          style={{objectFit:"cover"}}
        />
      </div>

      <Features />
      <Journey />
      <Footer />
    </div>
  );
};

export default Page;
