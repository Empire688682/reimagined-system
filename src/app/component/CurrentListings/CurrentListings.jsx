import React from 'react';
import Image from "next/legacy/image";
import { FaArrowRight } from 'react-icons/fa';

const CurrentListings = () => {
  return (
    <section className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-[#23396A] text-center mb-8">
        Real Estate Current Listings
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            {/* Image Wrapper */}
            <div className="relative w-full h-56">
              <Image src="/current-listing-img-1.png" alt="Property Image" fill className="object-cover" />
            </div>

            {/* Content */}
            <div className="p-4 text-[#23396A]">
              <h2 className="text-xl font-semibold mb-2">Property Name</h2>
              <p className="text-gray-500 mb-3">Location</p>

              {/* Price & Details */}
              <div className="flex justify-between items-center">
                <p className="text-3xl font-bold text-[#23396A]">#989K</p>
                <span className="flex items-center gap-2 text-gray-700 cursor-pointer hover:underline">
                  Details <FaArrowRight />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentListings;
