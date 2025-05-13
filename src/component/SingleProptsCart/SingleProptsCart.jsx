"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaToilet } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import TermsAndCondition from "../BookingModals/TermsAndCondition/TermsAndCondition";
import { dummytermsData } from "../Data";

const SingleProptsCart = ({ title, 
   relatedProperties, 
   data,
   setAddressModal
}) => {
  const { route } = useGlobalContext();

  return (
    <div className="md:px-16 px-4 pt-16 mt-20">
      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        {/* Image Gallery */}
        <div className="w-full flex flex-col gap-3">
          <div className="w-full relative h-[300px]">
            <Image
              src={data.thumbnail_url}
              alt={data.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {data.image_urls?.map((img, id) => (
              <div key={id} className="relative h-[50px] w-full">
                <Image src={img} alt="Property Img" fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Property Info */}
        <div>
          <p className="text-sm text-[#23396A] pb-4">Rent * Furnished</p>
          <h1 className="md:text-2xl sm:text-2xl text-1xl font-semibold pb-3">
            {data.name}
          </h1>
          <p className="flex gap-4 text-gray-500 pb-3">
            {data.state && <span>{data.state}</span>}
          </p>

          <div className="flex gap-4 pb-3 items-center">
            <p className="md:text-2xl text-1xl font-semibold">
              #{data.price_kobo?.toLocaleString()}
            </p>
            {/** oldPrice && <span className="text-gray-500 text-sm line-through">#{data.price_kobo?.toLocaleString()}</span> */}
            {/**discount && <span className="text-sm text-red-500">{discount}</span> */}
          </div>

          {/* Amenities Summary */}
          <div className="flex gap-4 items-center pb-4">
            <p className="py-3 px-6 border border-gray-200 text-gray-400 text-sm">{data.beds} Bed</p>
            <p className="py-3 px-6 border border-gray-200 text-gray-400 text-sm">{data.bathrooms} Bathroom</p>
            <p className="py-3 px-6 border border-gray-200 text-gray-400 text-sm">{data.size} Size</p>
          </div>

          <button className="bg-[#23396A] text-sm cursor-pointer py-3 px-6 text-white" onClick={()=>{setAddressModal(true); window.scrollTo(0,0)}}>
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
          {data.amenities?.length > 0 ? (
            <div className="flex gap-4 items-center justify-start flex-wrap">
              {data.amenities.map((amenity, index) => (
                <p key={index} className="py-3 text-[10px] md:text-[15px] px-6 border border-gray-500 text-gray-400">
                  {amenity.name}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No amenities listed.</p>
          )}
        </div>
      </div>

      {/**Terms and condition */}
      <div className="mt-15 border border-gray-200 text-gray-700 p-6 flex flex-col gap-6">
        <TermsAndCondition termsData={dummytermsData}/>
      </div>

      {/* Gallery Section */}
      <div className="mt-15 border border-gray-200 text-gray-700 p-6 flex flex-col gap-6">
        <h2 className="text-lg font-semibold">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.image_urls?.map((img, id) => (
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
          {relatedProperties?.map((property, id) => (
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
