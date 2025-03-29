"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useGlobalContext } from "../Context";

const Hero = () => {
    const { route } = useGlobalContext();
    const images = [
        "/new-hero-img.png", "/hero-img-2.png", "/listing-yourspace-hero.png", "/service-img.png"
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full min-h-screen text-center max-w-7xl mx-auto pb-10 overflow-hidden">
            <div className="relative text-white text-flex-start pr-6 pl-6 pb-10 mb-20 gap-3 flex flex-col pt-30">
                <h1 className="text-3xl text-center text-gray-900 font-medium leading-snug md:text-3xl mx-auto md:w-[350px]">
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

            {/* Swiper 3D Coverflow Slider */}
            <div className="w-full md:h-[70vh] h-[50vh] relative flex items-center justify-center pr-6 pl-6 max-w-7xl mx-auto">
                <div className="relative flex w-full md:h-[90vh] h-[60vh] max-w-7xl mx-auto items-center justify-center gap-2 overflow-hidden">
                    {/* Left Image */}
                    <div className="relative basis-[20%] min-w-[300px] h-[50%] overflow-hidden grayscale">
                        <Image
                            src={images[(activeIndex - 1 + images.length) % images.length]}
                            alt="Hero Image"
                            fill
                            className="rounded-xl object-cover"
                        />
                    </div>

                    {/* Center Image */}
                    <div className="relative basis-[60%] min-w-[300px] md:min-w-[700px] h-full overflow-hidden">
                        <Image
                            src={images[activeIndex]}
                            alt="Hero Image"
                            fill
                            className="rounded-xl object-cover"
                        />
                    </div>

                    {/* Right Image */}
                    <div className="relative basis-[20%] min-w-[300px] h-[50%] overflow-hidden grayscale">
                        <Image
                            src={images[(activeIndex + 1) % images.length]}
                            alt="Hero Image"
                            fill
                            className="rounded-xl object-cover"
                        />
                    </div>
                </div>


                {/* Search Box */}
                <div
                    className="absolute cursor-pointer z-1 top-[-34px] left-1/2 -translate-x-1/2 bg-white flex items-center py-1 px-4 rounded-full shadow-md min-w-[300px]"
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
