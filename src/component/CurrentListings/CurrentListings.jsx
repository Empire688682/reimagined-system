"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const CurrentListings = () => {
  const { route, allPropts } = useGlobalContext();
  const properties = allPropts.slice(0, 4); // Get only 4 properties

  return (
    <section className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-[#23396A] text-center mb-8">
        Real Estate Current Listings
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image Wrapper */}
            <div className="relative w-full h-56">
              <Image
                src={property.images?.[0] || "/default-property.jpg"} // Use first image or fallback
                alt={property.title || "Property Image"}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform transform hover:scale-105 rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-[#23396A]">
              <h2 className="font-semibold mb-2">{property.title || "No Title Available"}</h2>
              <p className="text-gray-500 mb-3">{property.location || "Location not specified"}</p>

              {/* Price & Details */}
              <div className="flex justify-between items-center">
                <p className="text-1xl font-bold text-[#23396A]">
                  #{property.price?.toLocaleString() || "N/A"}
                </p>
                <span
                  className="flex items-center gap-2 text-gray-700 cursor-pointer hover:underline"
                  onClick={() => route.push(`/properties/${property.id}`)}
                >
                  Details <FaArrowRight />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="flex md:justify-end mb-8 justify-center mt-10">
        <span
          className="flex items-center gap-2 bg-[#F1F9FF] px-4 py-2 text-gray-700 cursor-pointer font-semibold border border-[#23396A] rounded-sm"
          onClick={() => route.push("/properties")}
        >
          Explore all <FaArrowRight />
        </span>
      </div>
    </section>
  );
};

export default CurrentListings;
