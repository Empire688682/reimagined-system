"use client"
import React from 'react';
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useGlobalContext } from '../Context';

const Hero = () => {
    const {route} = useGlobalContext()
    return (
        <div className="w-full min-h-screen text-center max-w-7xl mx-auto pb-10">
            <div className="relative text-white text-flex-start pr-6 pl-6 pb-10 gap-3 flex flex-col pt-30">
                <h1 className="text-3xl text-center text-gray-900 font-medium leading-snug md:text-3xl mx-auto md:w-[350px]">
                    Discover trusted partner in
                    <span className='relative inline-block  mx-2 align-middle'>
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

            {/* Image Wrapper */}
            <div className='relative min-w-[300px] max-w-[600px] md:min-w-[700px] h-[400px] flex items-center justify-center mx-6 md:mx-auto'>
                <Image
                    priority={true}
                    fill
                    src="/new-hero-img.png"
                    alt="Hero Image"
                    style={{ objectFit: "cover" }}
                    className='rounded-xl'
                />

                {/* Search Box */}
                {
                    //<div className="absolute top-[-16px] left-1/2 -translate-x-1/2 bg-white flex items-center py-1 px-4 rounded-full shadow-md" onClick={()=>route.push("/properties")}>
                    //<input type="text" placeholder='Search Location' className="outline-none px-2" />
                    //<div className='bg-[#23396A] w-7 h-7 flex items-center justify-center rounded-full'>
                    //    <CiSearch className="text-gray-500 font-bold text-white" />
                   // </div>
                //</div>
                }
                {/**Place Holder */}
                <div className="absolute cursor-pointer top-[-16px] left-1/2 -translate-x-1/2 bg-white flex items-center py-1 px-4 rounded-full shadow-md min-w-[300px]" onClick={()=>route.push("/properties")}>
                    <p className=" text-start pr-2 flex-2">Search Location</p>
                    <div className='bg-[#23396A] w-7 h-7 flex items-center justify-center rounded-full'>
                        <CiSearch className="text-gray-500 font-bold text-white" />
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <div className='flex items-center justify-center gap-2'>
                    {
                        Array.from({ length: 5 }).map((_, id) => (
                            <Image
                                key={id}
                                priority={true}
                                width={15}
                                height={15}
                                src="/star.png"
                                alt="Hero Image"
                                style={{ objectFit: "cover" }}
                            />
                        ))
                    }
                </div>
                <p className='mt-3 text-gray-700 max-w-[400px] mx-auto'>Guiding me through every step of the process and ensuring i found the perfect film set</p>
                <div className='flex items-center gap-4 mt-6 justify-center'>
                    <Image
                        priority={true}
                        width={50}
                        height={50}
                        src="/Muzamal-Hussain.png"
                        alt="Hero Image"
                        style={{ objectFit: "cover" }}
                        className='rounded-full'
                    />
                    <div className='text-start'>
                        <p className='font-semibold text-gray-700'>Muzamai Hussain</p>
                        <span className='text-gray-500 text-sm text-start'>Film Director</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
