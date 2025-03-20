import React from 'react';
import { FiCommand } from "react-icons/fi";
import { FaMagic } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { TiBookmark } from "react-icons/ti";
import { HiOutlineCube } from "react-icons/hi2";


const Features = () => {
    return (
        <section className="max-w-7xl mx-auto p-6">
            {/* Title */}
            <p className='text-[#23396A] text-sm text-center font-semibold mb-4'>Features</p>
            <h2 className='text-xl md:text-2xl font-bold text-[#23396A] text-center mb-4 w-[300px] md:w-[400px] m-auto'>
                Why we standout in finding your new space
            </h2>

            {/* Unified Grid Layout for all 6 boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature Boxes */}
                {[
                    { icon: <FiCommand className="text-[#23396A] text-3xl" />, title: "Personalized Search" },
                    { icon: <FaMagic className="text-[#23396A] text-3xl"/>, title: "Premium Listings" },
                    { icon: <FaLayerGroup className="text-[#23396A] text-3xl"/>, title: "Expert Guidance" },
                     { icon: <GiStarsStack className="text-[#23396A] text-3xl" />, title: "Seamless Process" },
                    { icon: <TiBookmark className="text-[#23396A] text-3xl"/>, title: "Trusted Expertise" },
                    { icon: <HiOutlineCube className="text-[#23396A] text-3xl"/>, title: "Tailored Solutions" }
                ].map((feature, index) => (
                    <div key={index} className='shadow-lg border border-gray-200 border-1 p-4 bg-white flex flex-col gap-4 md:items-start items-center'>
                        <div className="text-[#23396A] text-3xl">
                            {feature.icon}
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3 text-center'>
                            <h2 className='text-[#23396A] md:text-lg'>{feature.title}</h2>
                            <p className='text-gray-600'>At HomeQuest Reality, we understand that every client has unique needs</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
