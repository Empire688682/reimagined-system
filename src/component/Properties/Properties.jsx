"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaToilet } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";

const Properties = () => {
  const { route, allPropts } = useGlobalContext();
  const properties = allPropts.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <p className='text-[#23396A] text-sm text-center font-semibold mb-4'>Properties</p>
      <h2 className='text-xl md:text-2xl font-bold text-[#23396A] text-center mb-4 w-[300px] md:w-[400px] m-auto'>Discover sets tailored to your vision and needs</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="shadow-lg rounded-lg overflow-hidden"  onClick={() => route.push(`/properties/${property.id}`)}>
            {/* Image Wrapper */}
            <div className="relative w-full h-56">
              <Image
                src={property.images?.[0]}
                alt={property.title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform transform hover:scale-105 rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-[#23396A]">
              <div className="flex items-center gap-2 mb-2">
              <FaLocationDot />
              <p className="text-[#23396A]">{property.location}</p>
              </div>
              <h2 className="font-semibold md:text-lg text-1xl mb-2">{property.title}</h2>
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
                  #{property.price?.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
