"use client";
import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useGlobalContext } from "../Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
    const { route } = useGlobalContext();

    return (
        <div className="w-full min-h-screen text-center max-w-7xl mx-auto pb-10">
            <div className="relative text-white text-flex-start pr-6 pl-6 pb-10 gap-3 flex flex-col pt-30">
                <h1 className="text-3xl text-center text-gray-900 font-medium leading-snug md:text-3xl mx-auto md:w-[350px]">
                    Discover trusted partner in
                    <span className="relative inline-block mx-2 align-middle">
                        <Image
                            src="/h1-img.png"
                            alt="Hero Image"
                            width={70}
                            height={80}
                            className="rounded-full"
                            style={{ objectFit: "cover" }}
                        />
                    </span>
                    finding the perfect film set
                </h1>
            </div>

            {/* Swiper Slider */}
            <div className="relative w-[90vw] md:max-w-[1000px] h-[80vh] mx-auto flex items-center justify-center">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={false}
                    className="w-full h-full rounded-xl"
                >
                    {/* Add Your Hero Images Here */}
                    {["/new-hero-img.png", "/hero-img-2.png", "/listing-yourspace-hero.png"].map((src, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                priority={true}
                                fill
                                src={src}
                                alt={`Hero Image ${index + 1}`}
                                style={{ objectFit: "cover" }}
                                className="rounded-xl z-0"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Search Box */}
                <div
                    className="absolute cursor-pointer z-1 top-[-16px] left-1/2 -translate-x-1/2 bg-white flex items-center py-1 px-4 rounded-full shadow-md min-w-[300px]"
                    onClick={() => route.push("/properties")}
                >
                    <p className="text-start pr-2 flex-2">Search Location</p>
                    <div className="bg-[#23396A] w-7 h-7 flex items-center justify-center rounded-full">
                        <CiSearch className="text-gray-500 font-bold text-white" />
                    </div>
                </div>
            </div>

            {/* Review Section */}
            <div className="mt-6">
                <div className="flex items-center justify-center gap-2">
                    {Array.from({ length: 5 }).map((_, id) => (
                        <Image
                            key={id}
                            priority={true}
                            width={15}
                            height={15}
                            src="/star.png"
                            alt="Hero Image"
                            style={{ objectFit: "cover" }}
                        />
                    ))}
                </div>
                <p className="mt-3 text-gray-700 max-w-[300px] md:max-w-[400px] mx-auto">
                    Guiding me through every step of the process and ensuring I found the perfect film set
                </p>
                <div className="flex items-center gap-4 mt-6 justify-center">
                    <Image
                        priority={true}
                        width={50}
                        height={50}
                        src="/Muzamal-Hussain.png"
                        alt="Hero Image"
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                    />
                    <div className="text-start">
                        <p className="font-semibold text-gray-700">Muzamal Hussain</p>
                        <span className="text-gray-500 text-sm text-start">Film Director</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
