"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useGlobalContext } from "../Context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
    const { route } = useGlobalContext();
    const [activeIndex, setActiveIndex] = useState(0);

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

            {/* Swiper 3D Coverflow Slider */}
            <div className=" md:max-w-[3000px] h-[70vh] mx-auto flex items-center justify-center">
                <Swiper
                    effect={"coverflow"}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={false}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className=" w-[200%] h-full rounded-xl"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {["/new-hero-img.png", "/hero-img-2.png", "/listing-yourspace-hero.png", "/ayinla-hero-img.png"].map((src, index) => (
                        <SwiperSlide key={index} className="w-[400px] relative h-[400px]">
                            <div className="relative w-full h-full">
                                <Image
                                    priority={true}
                                    fill
                                    src={src}
                                    alt={`Hero Image ${index + 1}`}
                                    style={{
                                        objectFit: "cover",
                                        transform: `scale(${activeIndex === index ? 1 : 0.4})`,
                                        filter: activeIndex === index ? "none" : "blur(5px)",
                                        transition: "all 0.5s ease"
                                    }}
                                    className="rounded-xl"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Search Box */}
                <div
                    className="absolute cursor-pointer z-10 top-[-16px] left-1/2 -translate-x-1/2 bg-white flex items-center py-1 px-4 rounded-full shadow-md min-w-[300px]"
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