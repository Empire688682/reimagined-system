"use client";
import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaCircle, FaPlusCircle } from "react-icons/fa";

const BookingHero = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center px-4">
            {/* Background Image */}
            <Image
                priority={true}
                fill
                src="/property-1.png"
                alt="Hero Image"
                className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
            />

            {/* Main Container Using Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-white pb-20 mt-40 md:mt-52 max-w-7xl mx-auto w-full">
                
                {/* Left Section - Takes 2/3 on Large Screens */}
                <div className="col-span-1 lg:col-span-2 flex flex-col items-center text-center md:text-left md:items-start min-w-[300px] max-w-[700px]">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Find the Location that Matches Your Vision Here
                    </h1>

                    {/* Search Bar */}
                    <div className="mt-10 flex flex-wrap md:flex-nowrap items-center gap-4 border border-[#23396A] p-3 bg-white text-gray-700 rounded-md w-full">
                        {/* Input Field */}
                        <label htmlFor="location" className="flex items-center gap-4 flex-1 w-full">
                            <CiSearch className="text-2xl cursor-pointer" />
                            <input
                                type="text"
                                name="location"
                                placeholder="What are you looking for"
                                id="location"
                                className="outline-none w-full bg-transparent"
                            />
                        </label>

                        {/* Vertical Divider (Hidden on Mobile) */}
                        <div className="hidden md:block w-[1px] h-[30px] bg-gray-400"></div>

                        {/* Location Dropdown (Hidden on Mobile) */}
                        <div className="hidden md:flex gap-4 items-center cursor-pointer">
                            <IoLocationOutline className="text-[22px]" />
                            <span>Location</span>
                        </div>

                        {/* Search Button */}
                        <button className="w-full md:w-auto bg-[#23396A] py-3 px-6 text-white rounded-md">
                            Search
                        </button>
                    </div>
                </div>

                {/* Right Section - Moves to Bottom Right on Large Screens */}
                <div className="col-span-1 justify-self-center flex flex-col lg:justify-end lg:items-end w-full max-w-[350px] mt-10 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-[#23396A] flex flex-col md:items-start items-center">
                        <p className="text-2xl font-bold text-center md:text-left">
                            1K+ People Got Their Desired Locations
                        </p>

                        {/* Profile Icons */}
                        <div className="flex mt-4">
                            {[...Array(5)].map((_, index) => (
                                <FaCircle
                                    key={index}
                                    className={`text-4xl text-gray-400 ${index !== 0 ? "-ml-4" : ""}`}
                                />
                            ))}
                            <FaPlusCircle className="text-4xl text-blue-300 -ml-4" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookingHero;
