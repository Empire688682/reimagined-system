import React from 'react';
import Image from 'next/image';
import { AiOutlineHome } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const Hero = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-flex-start">
            <Image
                priority={true} fill
                src="/ayinla-hero-img.png"
                alt="Hero Image"
                className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
            />
            <div className="relative text-white text-flex-start p-6 gap-3 flex flex-col mt-30">
                <p>Exclusive Real Estate Platform</p>
                <h1 className="text-4xl md:text-6xl font-bold md:w-[60%]">Find the Perfect Location Monitize Your Space</h1>
                <p className="text-lg md:text-xl mt-4 md:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam dolores, reiciendis enim quos consequatur, perferendis exercitationem soluta quis culpa doloribus ducimus quam qui, sapiente neque quae eaque laboriosam dolore!</p>
                <div className="flex gap-4">
                    <button className="mt-6 px-6 flex items-center py-3 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                        List Your Property
                        <AiOutlineHome className='ml-2 text-[22px]' />
                    </button>
                    <button className="mt-6 px-6 flex items-center py-3 bg-white border border-gray-300 hover:bg-blue-600 hover:text-white text-black cursor-pointer">
                        Find a Location
                        <IoLocationOutline className='ml-2 text-[22px]' />
                    </button>
                </div>

            </div>
        </div>

    )
}

export default Hero
