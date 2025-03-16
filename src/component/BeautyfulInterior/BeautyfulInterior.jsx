"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { useGlobalContext } from "../Context";

const BeautyfulInterior = () => {
  const [index, setIndex] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const { route, allPropts } = useGlobalContext();

  // Filter properties based on the search query
  const filteredProperties = allPropts
    .filter((property) =>
      property.title?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, index);

  return (
    <section className="md:p-16 p-4 mt-20">
      {/* Header */}
      <div className="bg-white grid grid-cols-1 gap-5 justify-items-center md:flex md:justify-between items-center mb-7">
        <h2 className="font-semibold text-lg md:text-2xl">
          Search for Beautiful Interiors
        </h2>
        <div className="flex min-w-[300px] max-w-[450px] md:w-[450px] items-center bg-white overflow-hidden rounded-sm border border-[#23396A]">
          <input
            type="text"
            placeholder="Search for Interior"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 text-black outline-none"
          />
          <p className="flex items-center gap-2 bg-[#23396A] transition cursor-pointer text-white px-6 py-2">
            Filter <CiFilter className="text-2xl" />
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
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
                <h2 className="font-semibold mb-2">
                  {property.title}
                </h2>
                <p className="text-gray-500 mb-3">
                  {property.location}
                </p>

                {/* Price & Details */}
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[#23396A]">
                    #{property.price?.toLocaleString()}
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
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No properties found
          </p>
        )}
      </div>

      {/* Load More Button */}
      {filteredProperties.length >= index && (
        <div className="flex md:justify-end mb-8 justify-center mt-10">
          <span
            className="flex items-center gap-2 bg-[#F1F9FF] px-4 py-2 text-gray-700 cursor-pointer font-semibold border border-[#23396A] rounded-sm"
            onClick={() => setIndex(index + 4)}
          >
            More lists <FaArrowRight />
          </span>
        </div>
      )}
    </section>
  );
};

export default BeautyfulInterior;
