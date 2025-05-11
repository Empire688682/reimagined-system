"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { useGlobalContext } from "../Context";
import { FaLocationDot, FaSpinner } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaToilet } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";

const allPropts = () => {
  const { route, allPropts, setSearchQuery, searchQuery, page, setPage, fireSearch, searchLoading } = useGlobalContext();

  return (
    <section className="md:px-16 px-4 pb-20 pt-15 mt-20">
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
          <button disabled={searchLoading} onClick={fireSearch} className="bg-[#23396A]">
            {
              searchLoading ? <p className="flex items-center gap-2 transition cursor-pointer text-white px-6 py-2">
                Serching <FaSpinner className="animate-spin"/>
              </p>
                :
                <p className="flex items-center gap-2 transition cursor-pointer text-white px-6 py-2">
                  Filter <CiFilter className="text-2xl" />
                </p>
            }
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allPropts && allPropts.listings?.length > 0 ? (
          allPropts.listings.map((property, id) => (
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
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No properties found
          </p>
        )}
      </div>

      {/* Load More Button */}
      {allPropts && allPropts.paging?.page > 1 && (
        <div className="flex md:justify-end mb-8 justify-center mt-10">
          <span
            className="flex items-center gap-2 bg-[#F1F9FF] px-4 py-2 text-gray-700 cursor-pointer font-semibold border border-[#23396A] rounded-sm"
            onClick={() => setPage(page + 1)}
          >
            More lists <FaArrowRight />
          </span>
        </div>
      )}
    </section>
  );
};

export default allPropts;
