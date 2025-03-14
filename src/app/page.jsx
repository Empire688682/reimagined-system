import React from 'react';
import Hero from './component/Hero/Hero';
import BestProps from './component/BestProps/BestProps';
import Footer from './component/Footer/Footer';

const page = () => {
  return (
    <div className='relative w-full'>
      <Hero/>
      <BestProps/>
      <Footer/>
    </div>
  )
}

export default page
