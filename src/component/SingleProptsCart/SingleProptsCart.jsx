"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const SingleProptsCart = ({ title, location, price, oldPrice, discount, images, amenities, relatedProperties, data }) => {
  const { route } = useGlobalContext();

  return (
    <div className="md:p-16 p-4 mt-20">
      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        {/* Image Gallery */}
        <div className="w-full flex flex-col gap-3">
          <div className="w-full relative h-[300px]">
            <Image
              src={images?.[0]}
              alt={title || "Property Image"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {images?.map((img, id) => (
              <div key={id} className="relative h-[50px] w-full">
                <Image src={img} alt="Property Img" fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Property Info */}
        <div>
          <p className="text-sm text-[#23396A] pb-4">Rent * Furnished</p>
          <h1 className="md:text-3xl sm:text-2xl text-2xl font-semibold pb-3">
            {title}
          </h1>
          <p className="flex gap-4 text-gray-500 pb-3">
            {location && <span>{location}</span>}
          </p>

          <div className="flex gap-4 pb-3 items-center">
            <p className="md:text-3xl text-2xl font-semibold">
              #{price?.toLocaleString()}
            </p>
            {oldPrice && <span className="text-gray-500 text-sm line-through">#{oldPrice?.toLocaleString()}</span>}
            {discount && <span className="text-sm text-red-500">{discount}% Off</span>}
          </div>

          {/* Amenities Summary */}
          <div className="flex gap-4 items-center pb-4">
            <p className="py-3 px-6 border border-gray-200 text-gray-400 text-sm md:text-xl">{data.beds} Bed</p>
            <p className="py-3 px-6 border border-gray-200 text-gray-400 text-sm md:text-xl">{data.bathrooms} Bathroom</p>
            <p className="py-3 px-6 border border-gray-200 text-gray-400 text-sm md:text-xl">{data.size} Sq feet</p>
          </div>

          <button className="bg-[#23396A] text-sm md:text-xl cursor-pointer py-3 px-6 text-white">
            Book Now
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-15 border border-gray-200 text-gray-400 p-6 flex flex-col gap-6">
        <div className="flex gap-4 items-center justify-start flex-wrap">
          <p className="py-3 text-[10px] md:text-[15px] px-6 bg-[#23396A] border border-[#23396A] text-white">
            Overview
          </p>
          <p className="py-3 text-[10px] md:text-[15px] px-6 border border-[#23396A] text-gray-400">Gallery</p>
          <p className="py-3 text-[10px] md:text-[15px] px-6 border border-[#23396A] text-gray-400">Location</p>
          <p className="py-3 text-[10px] md:text-[15px] px-6 border border-[#23396A] text-gray-400">Agent</p>
        </div>

        {/* About Property */}
        <div>
          <h2 className="text-lg font-semibold pb-3 text-gray-700">About Property</h2>
          <p className="text-gray-500 text-[13px] md:text-[15px]">
            {data.description}
          </p>
        </div>

        {/* Amenities */}
        <div>
          <h2 className="text-lg font-semibold pb-3 text-gray-700">Property Amenities</h2>
          {amenities?.length > 0 ? (
            <div className="flex gap-4 items-center justify-start flex-wrap">
              {amenities.map((amenity, index) => (
                <p key={index} className="py-3 text-[10px] md:text-[15px] px-6 border border-gray-500 text-gray-400">
                  {amenity}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No amenities listed.</p>
          )}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-15 border border-gray-200 text-gray-700 p-6 flex flex-col gap-6">
        <h2 className="text-lg font-semibold">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {images?.map((img, id) => (
            <div key={id} className="relative w-full h-56 overflow-hidden">
              <Image src={img} alt="Gallery Image" fill style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Related Properties Section */}
      <div className="mt-15 p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-center">You may also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProperties?.map((property) => (
            <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative w-full h-56">
                <Image
                  src={property.images?.[0]}
                  alt="Property Image"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform transform hover:scale-105 rounded-lg"
                />
              </div>
              <div className="p-4 text-[#23396A]">
                <h2 className="font-semibold mb-2">{property.title}</h2>
                <p className="text-gray-500 mb-3">{property.location}</p>
                <div className="flex justify-between items-center">
                  <p className="text-1xl font-bold text-[#23396A]">#{property.price?.toLocaleString()}</p>
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
        <div className="flex md:justify-end mb-8 justify-center mt-10">
          <span className="flex items-center gap-2 bg-[#23396A] px-4 py-2 text-gray-700 cursor-pointer rounded-sm text-white"
            onClick={() => route.push("/properties")}>
            Explore All Listings <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleProptsCart;
