import React from 'react';
import Hero from './component/Hero/Hero';
import BestProps from './component/BestProps/BestProps';
import Footer from './component/Footer/Footer';
import Image from 'next/image';
import About from './component/About/About';
import CurrentListings from './component/CurrentListings/CurrentListings';

const page = () => {
  return (
    <div className='relative w-full'>
      <Hero />
      <BestProps />
      <div className="relative w-full min-h-[80vh] flex items-center justify-flex-start">
        <Image
          priority={true} fill
          src="/hero-img-2.png"
          alt="Hero Image"
          className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <About/>
      <CurrentListings/>
      <Footer />
    </div>
  )
}

export default page
