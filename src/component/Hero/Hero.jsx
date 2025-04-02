"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useGlobalContext } from "../Context";

const Hero = () => {
    const { route } = useGlobalContext();

    return (
        <div className="w-full relative min-h-screen text-center mx-auto pb-10 overflow-hidden">
            <video
                className="w-full h-full object-cover absolute"
                autoPlay
                loop
                muted
                playsInline
                src="/building-video-compressed.mp4"
            ></video>
            {/* Swiper 3D Coverflow Slider */}
            <div className="w-full md:h-[70vh] h-[50vh] relative flex flex-col items-center justify-center pt-40 pr-6 pl-6 max-w-7xl mx-auto">
                <div className="relative text-white text-flex-start pr-6 pl-6 pb-10 mb-20 gap-3 flex flex-col pt-30">
                    <h1 className="text-3xl md:text-5xl text-white font-extrabold leading-tight tracking-wide text-center drop-shadow-5xl md:w-[600px]">
                        Discover trusted partner in
                        <span className="relative inline-block mx-2 align-middle">
                            <Image
                                src="/h1-img.png"
                                alt="Hero Image"
                                width={70}
                                height={80}
                                className="rounded-full object-cover"
                            />
                        </span>
                        finding the perfect film set
                    </h1>
                </div>
                {/* Search Box */}
                <div
                    className="cursor-pointer z-1 bg-white flex items-center py-1 px-4 rounded-full shadow-md min-w-[300px]"
                    onClick={() => route.push("/properties")}
                >
                    <p className="text-start pr-2 flex-2">Search Location</p>
                    <div className="bg-[#23396A] w-7 h-7 flex items-center justify-center rounded-full">
                        <CiSearch className="text-gray-500 font-bold text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
