"use client"
import React from 'react';
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaToilet } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import { useGlobalContext } from '../Context';

const BookingTopLocation = () => {
  // Retrieve global context values
  const { route, allPropts } = useGlobalContext();
  
  return (
    <section className='bg-[#F1F9FF] md:p-16 p-4'>
      {/* Section Header */}
      <div className='flex justify-between items-center'>
        <p className='md:text-lg text-base sm:text-1xl font-bold'>Top Locations</p>
        <span className='md:text-lg text-base cursor-pointer sm:text-1xl font-bold'>More Listing</span>
      </div>
      
      {/* Grid Layout for Property Listings */}
      <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Check if there are properties available, then display first 4 */}
        {allPropts.length > 0 && allPropts.slice(0, 4).map((property) => (
          <div key={property.id} className="shadow-lg rounded-lg overflow-hidden" 
               onClick={() => route.push(`/properties/${property.id}`)}>
            
            {/* Image Wrapper */}
            <div className="relative w-full h-56">
              <Image
                src={property.images?.[0]} // Display first image of the property
                alt={property.title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform transform hover:scale-105 rounded-lg"
              />
            </div>

            {/* Property Information */}
            <div className="p-4 text-[#23396A]">
              {/* Location */}
              <div className="flex items-center gap-2 mb-2">
                <FaLocationDot />
                <p className="text-[#23396A]">{property.location}</p>
              </div>
              
              {/* Property Title */}
              <h2 className="font-semibold text-1xl mb-2">{property.title}</h2>
              
              {/* Property Details (Beds, Bathrooms, Size) */}
              <div className="flex items-center gap-4 my-3 text-gray-400">
                <div className="flex items-center gap-1  border border-gray-300 px-1">
                  <FaBed />
                  <p className="text-sm">{property.beds}</p>
                </div>
                <div className="flex items-center gap-1 border border-gray-300 px-1">
                  <FaToilet />
                  <p className="text-sm">{property.bathrooms}</p>
                </div>
                <div className="flex items-center gap-1 border border-gray-300 px-1">
                  <MdSquareFoot />
                  <p className="text-sm">{property.size}</p>
                </div>
              </div>
              
              {/* Property Price */}
              <div className="flex justify-between items-center">
                <p className="text-1xl font-bold text-[#23396A]">
                  #{property.price?.toLocaleString()} {/* Format price with commas */}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BookingTopLocation
