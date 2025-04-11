"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import { useGlobalContext } from "../Context";
import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
    const { route } = useGlobalContext();

    return (
        <div className="w-full relative min-h-screen pb-10 ">
            <video
                className="w-full h-full object-cover absolute"
                autoPlay
                loop
                muted
                playsInline
                src="/hero-video.mp4"
            ></video>
            {/* Text-content */}
            <div className="w-full md:min-h-[70vh] min-h-[50vh] relative flex flex-col justify-center md:justify-start bg-gradient-to-b from-black/40 via-black/50 to-transparent pt-30 md:pt-40">
                <div className="relative text-white max-w-[800px] text-flex-start pr-6 pl-6 pb-6 mb-20 gap-3 flex flex-col pt-15">
                    <h1 className="text-2xl md:text-3xl text-white font-extrabold leading-tight tracking-wide text-center md:text-left drop-shadow-5xl w-[full]">
                        Welcome to Ayinla Films Location (AFL)
                        Your go-to marketplace
                        <span className="relative inline-block mx-2 align-middle">
                            <Image
                                src="/h1-img.png"
                                alt="Hero Image"
                                width={70}
                                height={80}
                                className="rounded-full object-cover"
                            />
                        </span> for filming locations.
                    </h1>
                    <p className="text-center md:text-left">Discover unique spaces that bring your creative vision to life — from cozy homes to vibrant studios and stunning outdoor scenes. Whether you’re shooting a film, ad, music video, or content project, we make finding the perfect location simple and seamless.</p>
                </div>
        
                <div className="flex gap-3 pr-6 pl-6 items-center justify-center md:justify-start">
                    {/* List Your Property Button */}
                    <div
                        className="py-3 flex items-center text-white bg-[#23396A] cursor-pointer gap-2 px-4 rounded-md transition-all duration-300 hover:bg-[#1a2d56] hover:scale-105 hover:shadow-lg"
                        onClick={() => route.push("/list-your-property")}
                    >
                        <p className="text-[13px] md:text-[15px]">List Your Property</p>
                        <IoHome className="hidden md:block"/>
                    </div>

                    {/* Find Location Button */}
                    <div
                        className="py-3 flex items-center cursor-pointer gap-2 px-7 text-[#23396A] bg-white rounded-md transition-all duration-300 hover:bg-[#f0f4ff] hover:text-[#1a2d56] hover:scale-105 hover:shadow-lg"
                        onClick={() => route.push("/properties")}
                    >
                        <p className="text-[13px] md:text-[15px]">Find Location</p>
                        <FaLocationDot className="hidden md:block"/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
