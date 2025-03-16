import React from 'react';
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

const BookingTopLocation = () => {
  return (
    <section className='bg-[#F1F9FF] md:p-16 p-4'>
      <div className='flex justify-between items-center'>
        <p className='md:text-3xl text-2xl sm:text-1xl font-bold'>Top Locations</p>
        <span className='md:text-2xl text-1xl cursor-pointer sm:text-1xl font-bold'>More Listing</span>
      </div>
      {/* Grid Layout */}
            <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                  {/* Image Wrapper */}
                  <div className="relative w-full h-56">
                    <Image 
                      src="/current-listing-img-1.png" 
                      alt="Property Image" 
                      fill
                      style={{ objectFit: "cover" }}
                      className='transition-transform transform hover:scale-105 rounded-lg'
                    />
                  </div>
      
                  {/* Content */}
                  <div className="mt-5 text-[#23396A] flex flex-col gap-5">
                    <h2 className="text-xl font-semibold mb-2">Two Bedroom Studio Apartment</h2>
                    <div className="flex gap-2 items-center">
                      <CiLocationOn className='text-3xl' />
                      <p className='py-2 px-3 bg-[#F1F9FF] text-blue-600 font-semibold  w-20 flex items-center justify-center rounded-3xl'>Lagos</p>
                      <p className='py-2 px-3 bg-[#F1F9FF] text-blue-600 font-semibold  w-20 flex items-center justify-center rounded-3xl'>Lekki</p>
                    </div>
                    <div className='flex justify-between'>
                      <div className='flex gap-2 items-center'>
                      <FaBed className='md:text-2xl md:text-sm text-1xl' />
                      <p>2 Bedrooms</p>
                      </div>
                      <div className='flex gap-2 items-center'>
                      <BsCalendarDate className='md:text-2xl md:text-sm text-1xl' />
                      <p>{new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    </section>
  )
}

export default BookingTopLocation
