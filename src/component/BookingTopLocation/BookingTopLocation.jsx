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
  const { route, allPropts, searchLoading } = useGlobalContext();

  return (
    <section className='bg-[#F1F9FF] md:p-16 p-4'>
      {/* Section Header */}
      <div className='flex justify-between items-center mb-12 pt-10'>
        <p className='md:text-lg text-base sm:text-1xl font-bold'>Top Locations</p>
        <span className='md:text-lg text-base cursor-pointer sm:text-1xl font-bold' onClick={() => route.push("/properties")}>More Listing</span>
      </div>

      {
        searchLoading ?
          Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow animate-pulse bg-white">
              <div className="h-56 bg-gray-300 w-full" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="flex gap-3">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </div>
            </div>
          ))
          :

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allPropts?.listings?.map((property, id) => (
              <div key={id} className="shadow-lg rounded-lg overflow-hidden" onClick={() => route.push(`/properties/${property.slug}`)}>
                {/* Image Wrapper */}
                <div className="relative w-full h-56">
                  <Image
                    src={property.thumbnail_url}
                    alt={property.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform transform hover:scale-105 rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-[#23396A]">
                  <div className="flex items-center gap-2 mb-2">
                    <FaLocationDot />
                    <p className="text-[#23396A]">{property.state}</p>
                  </div>
                  <h2 className="font-semibold md:text-lg text-1xl mb-2">{property.name}</h2>
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
                  {/* Price & Details */}
                  <div className="flex justify-between items-center">
                    <p className="text-1xl font-bold text-[#23396A]">
                      #{property.price_kobo?.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      }
    </section>
  )
}

export default BookingTopLocation
