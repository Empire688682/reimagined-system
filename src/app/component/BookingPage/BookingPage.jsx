"use client"
import React from 'react'
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaCircle, FaPlusCircle } from "react-icons/fa";

const BookingPage = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center">
            {/* Background Image */}
            <Image
                priority={true}
                fill
                src="/property-1.png"
                alt="Hero Image"
                className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
            />

            {/* Grid Layout */}
            <div className="relative text-white px-6 pb-20 mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
                
                {/* Left Side (Heading + Search Bar) */}
                <div className='max-w-lg'>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Find the Location that Matches Your Vision Here
                    </h1>

                    {/* Search Bar */}
                    <div className="mt-10 flex gap-4 border border-[#23396A] p-3 bg-white text-gray-700 rounded-sm">
                        <label htmlFor="location" className='flex items-center gap-4 flex-1'>
                            <CiSearch className='text-2xl cursor-pointer' />
                            <input 
                                type="text" 
                                name='location' 
                                placeholder="What are you looking for" 
                                id="location" 
                                className='outline-none w-full bg-transparent'
                            />
                        </label>

                        {/* Vertical Divider */}
                        <div className="w-[1px] min-h-full bg-gray-400"></div>

                        {/* Location Dropdown */}
                        <div className="flex gap-4 items-center cursor-pointer">
                            <IoLocationOutline className='text-[22px]' />
                            <span>Location</span>
                        </div>

                        {/* Search Button */}
                        <button className='bg-[#23396A] py-3 px-6 text-white rounded-md'>
                            Search
                        </button>
                    </div>
                </div>

                {/* Right Side (Stats Section) */}
                <div className='bg-white p-6 text-[#23396A] rounded-lg shadow-lg max-w-md self-end ml-auto'>
                    <p className='text-2xl font-bold'>1K+ People Got Their Desired Locations</p>
                    
                    {/* Profile Icons */}
                    <div className='flex mt-4'>
                        {[...Array(5)].map((_, index) => (
                            <FaCircle 
                                key={index} 
                                className={`text-4xl text-gray-400 ${index !== 0 ? `-ml-4` : ""}`}
                            />
                        ))}
                        <FaPlusCircle className='text-4xl text-blue-300 -ml-4' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookingPage;
