import React from 'react';
import Image from "next/image";
import { FaLayerGroup } from "react-icons/fa6";

const Property = () => {
    return (
        <section className="relative w-full min-h-screen md:pb-20 pt-15 md:px-16">
            <div className="relative w-full min-h-[90vh] flex items-center md:items-end justify-center md:justify-start md:pb-20">
                {/* Background Image */}
                <Image
                    priority={true}
                    fill
                    src="/property-1.png"
                    alt="Hero Image"
                    style={{ objectFit: "cover" }}
                    className="absolute z-[-1] top-0 left-0 w-full h-full"
                />
                <div className='flex flex-col gap-5'>
                    <h1 className="text-2xl md:text-4xl md:max-w-[80%] font-bold text-white">
                        Earn Money For Listing Your Space
                    </h1>
                    <button className="w-full md:w-[40%] bg-[#23396A] py-3 px-6 text-white text-sm font-semibold rounded-sm cursor-pointer">
                        Get Started Now
                    </button>
                </div>
            </div>
            <div className='px-6 md:px-16 py-10 flex flex-col gap-4'>
                <p className='text-center text-[12px] border m-auto max-w-30 rounded-full border-blue-400 text-gray-500 px-2 py-3'>Dummy Text</p>
                <h1 className='text-center text-2xl font-semibold'>How it Works</h1>
                <p className='text-center pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, numquam!</p>
                {/** Two Col Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    {/** Col one */}
                    <div className='relative w-full hidden md:block min-h-[300px]'>
                        <Image
                            priority={true}
                            fill
                            src="/property-1.png"
                            alt="Hero Image"
                            className="w-full h-full"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    {/** Col two */}
                    <div className='relative w-full min-h-[300px]'>
                        <div className='flex flex-col gap-5'>
                        <div className='flex gap-3'>
                            <FaLayerGroup className='text-2xl' />
                            <div className='flex flex-2 flex-col gap-3'>
                                <h2 className='font-semibold'>Sign Up As A Host</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente laborum adipisci nemo delectus dicta libero voluptate maiores debitis maxime. Architecto voluptate eos.</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <FaLayerGroup className='text-2xl' />
                            <div className='flex flex-2 flex-col gap-3'>
                                <h2 className='font-semibold'>Sign Up As A Host</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente laborum adipisci nemo delectus dicta libero voluptate maiores debitis maxime. Architecto voluptate eos.</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <FaLayerGroup className='text-2xl' />
                            <div className='flex flex-2 flex-col gap-3'>
                                <h2 className='font-semibold'>Sign Up As A Host</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente laborum adipisci nemo delectus dicta libero voluptate maiores debitis maxime. Architecto voluptate eos.</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <FaLayerGroup className='text-2xl' />
                            <div className='flex flex-2 flex-col gap-3'>
                                <h2 className='font-semibold'>Sign Up As A Host</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente laborum adipisci nemo delectus dicta libero voluptate maiores debitis maxime. Architecto voluptate eos.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Property
