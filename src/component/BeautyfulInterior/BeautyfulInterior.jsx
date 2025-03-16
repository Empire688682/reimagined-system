"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';
import { CiFilter } from "react-icons/ci";

const BeautyfulInterior = () => {
    const [index, setIndex] = useState(8)
    return (
        <section className=' md:p-16 p-4 mt-20'>
            {/*Header*/}
            <div className='bg-white grid grid-cols-1 gap-5 justify-items-center md:flex md:justify-between items-center mb-7'>
                <h2 className='font-semibold text-lg md:text-2xl'>Search for Beautyful Interiors</h2>
                <div className="flex min-w-[300px] max-w-[450px] md:w-[450px] items-center bg-white overflow-hidden rounded-sm border border-1 border-[#23396A]">
                    <input
                        type="email"
                        placeholder="Search for Interior "
                        className="w-full p-2 text-black outline-none"
                    />
                    <button className="hover:bg-blue-600 flex items-center gap-2 bg-[#23396A] transition cursor-pointer text-white px-6 py-2">
                        Filter
                        <CiFilter className='text-2xl' />
                    </button>
                </div>
            </div>
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: index }).map((_, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Image Wrapper */}
                        <div className="relative w-full h-56">
                            <Image
                                src="/current-listing-img-1.png"
                                alt="Property Image"
                                fill
                                style={{ objectFit: "cover" }}
                                className='transition-transform transform hover:scale-105 rounded-lg'
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 text-[#23396A]">
                            <h2 className="text-xl font-semibold mb-2">Property Name</h2>
                            <p className="text-gray-500 mb-3">Kogi Lokoja</p>

                            {/* Price & Details */}
                            <div className="flex justify-between items-center">
                                <p className="text-2xl md:text-3xl font-bold text-[#23396A]">#989K</p>
                                <span className="flex items-center gap-2 text-gray-700 cursor-pointer hover:underline">
                                    Details <FaArrowRight />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex md:justify-end mb-8 justify-center mt-10'>
                <span className="flex items-center gap-2 bg-[#F1F9FF] px-4 py-2 text-gray-700 cursor-pointer font-semibold border border-[#23396A] rounded-sm"
                onClick={()=>setIndex(index + 4)}>
                    More lists <FaArrowRight />
                </span>
            </div>
        </section>
    )
}

export default BeautyfulInterior
