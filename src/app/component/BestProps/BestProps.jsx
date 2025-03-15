import React from 'react';
import Image from "next/image";

const BestProps = () => {
  return (
    <section className='pr-6 pl-6 py-16 bg-white max-w-7xl mx-auto'>
      {/* Container */}
      <div className='grid grid-cols-1 md:py-16 md:grid-cols-2 gap-12 items-center'>
        {/* Left Side - Images (Hidden on Small Screens) */}
        <div className='hidden md:grid grid-cols-2 gap-4 relative w-full'>
          <div className='relative w-full h-[400px]'>
            <Image 
              src='/best-prop-frame-1.png' 
              alt='Hero Image' 
              fill
              style={{ objectFit: "cover" }} 
            />
          </div>
          <div className='relative w-full h-[400px]'>
            <Image 
              src='/best-prop-frame-2.png' 
              alt='Hero Image' 
              fill
              style={{ objectFit: "cover" }} 
            />
          </div>
        </div>
        
        {/* Right Side - Text Content */}
        <div className='text-[#23396A] text-center md:text-left'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4 text-gray-700'>
            We Provide You with the Best Property
          </h1>
          <p className='text-lg text-gray-600 mb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sunt hic modi at sit quos! 
            Minima in quasi doloremque fuga aut voluptatum?
          </p>
          
          {/* Stats */}
          <div className='flex flex-col md:flex-row gap-6 md:gap-8 justify-center md:justify-start'>
            <div>
              <h2 className='text-4xl font-bold text-[#23396A]'>1K+</h2>
              <p className='text-gray-600'>Property List</p>
            </div>
            <div>
              <h2 className='text-4xl font-bold text-[#23396A]'>3K+</h2>
              <p className='text-gray-600'>Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestProps;
