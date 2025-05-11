"use client"
import React from 'react';
import { useGlobalContext } from '../Context';
import Properties from '../Properties/Properties';

const BookingTopLocation = () => {
  // Retrieve global context values
  const { route } = useGlobalContext();
  
  return (
    <section className='bg-[#F1F9FF] md:p-16 p-4'>
      {/* Section Header */}
      <div className='flex justify-between items-center'>
        <p className='md:text-lg text-base sm:text-1xl font-bold'>Top Locations</p>
        <span className='md:text-lg text-base cursor-pointer sm:text-1xl font-bold' onClick={()=>route.push("/properties")}>More Listing</span>
      </div>
      
      {/* Grid Layout for Property Listings */}
      <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Properties />
      </div>
    </section>
  )
}

export default BookingTopLocation
