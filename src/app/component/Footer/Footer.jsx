import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-[#23396A] text-white py-12 px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Logo & Description */}
        <div className='flex flex-col justify-center md:justify-start items-center md:items-start'>
          <Image src='/ayinla-logo.png' alt='Footer Logo' width={100} height={100} className='mb-4' />
          <p className='text-gray-300 text-sm'>Providing you with movie sets from where you want.</p>
        </div>
        
        {/* About */}
        <div className='flex flex-col justify-center md:justify-start items-center md:items-start'>
          <h3 className='text-lg font-semibold mb-3'>About</h3>
          <ul className='space-y-2 text-gray-300 text-sm'>
            <li className='cursor-pointer hover:text-white transition'>About Us</li>
            <li className='cursor-pointer hover:text-white transition'>Features</li>
            <li className='cursor-pointer hover:text-white transition'>FAQ</li>
          </ul>
        </div>
        
        {/* Categories */}
        <div className='flex flex-col justify-center md:justify-start items-center md:items-start'>
          <h3 className='text-lg font-semibold mb-3'>Categories</h3>
          <ul className='space-y-2 text-gray-300 text-sm flex flex-col justify-center md:justify-start items-center md:items-start'>
            <li className='cursor-pointer hover:text-white transition'>Book a space</li>
            <li className='cursor-pointer hover:text-white transition'>List a space</li>
            <li className='cursor-pointer hover:text-white transition'>Etc</li>
          </ul>
        </div>
        
        {/* Newsletter */}
        <div className='flex flex-col justify-center md:justify-start items-center md:items-start'>
          <h3 className='text-lg font-semibold mb-3'>Newsletter</h3>
          <p className='text-gray-300 text-sm mb-4'>Don't miss important information from us.</p>
          <div className='flex items-center bg-white overflow-hidden'>
            <input 
              type='email' 
              placeholder='Email Address' 
              className='w-full p-2 text-black outline-none'
            />
            <button className='bg-[blue] cursor-pointer text-white px-4 py-2'>Subscribe</button>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className='text-center text-gray-400 text-sm mt-8'>
        <p>&copy; {new Date().getFullYear()} Ayinla. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
