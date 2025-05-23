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
  const { route, allPropts, searchLoading } = useGlobalContext();

  return (
    <section className="max-w-7xl mx-auto p-6 pb-15">
      {/* Title */}
      <p className='text-[#23396A] text-sm text-center font-semibold mb-4'>Properties</p>
      <h2 className='text-xl md:text-2xl font-bold text-[#23396A] text-center mb-4 w-[300px] md:w-[400px] m-auto'>Discover sets tailored to your vision and needs</h2>

      {/* Unified Grid Layout for all 6 boxes */}
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
      <div className="flex mb-8 justify-center mt-10">
        <span className="flex items-center gap-2 bg-[#23396A] px-4 py-2 text-gray-700 cursor-pointer rounded-sm text-white"
          onClick={() => route.push("/properties")}>
          All Listings <FaArrowRight />
        </span>
      </div>
    </section>
  );
};

export default Properties;
