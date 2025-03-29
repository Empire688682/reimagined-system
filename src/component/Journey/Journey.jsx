"use client";
import React from 'react';
import Image from "next/image";
import { useGlobalContext } from '../Context';

const Journey = () => {
    const {route} = useGlobalContext();
    return (
        <section className="max-w-7xl mx-auto px-6 py-6 md:p-16">
            <div className='grid grid-cols-1 md:items-center md:grid-cols-2 gap-10'>
                {/** Col one */}
                <div className='w-full  md:block'>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='min-h-[400px] relative overflow-hidden rounded-lg w-full'>
                            <Image
                                priority={true}
                                fill
                                src="/journey-1.png"
                                alt="Hero Image"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className='min-h-[400px] flex flex-col gap-2 w-full'>
                            <div className='min-h-[195px] relative overflow-hidden rounded-lg w-full'>
                                <Image
                                    priority={true}
                                    fill
                                    src="/journey-2.png"
                                    alt="Hero Image"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className='min-h-[195px] relative overflow-hidden rounded-lg w-full'>
                                <Image
                                    priority={true}
                                    fill
                                    src="/journey-3.png"
                                    alt="Hero Image"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/** Col two */}
                <div className='w-full text-center md:text-left'>
                    <h2 className='md:text-2xl font-normal text-lg text-gray-800 mb-4'>
                        Your journey to finding the perfect movie starts with Ayinla Film. We are a platform that connects you with the best movie sets from where you want.
                    </h2>
                    <p className='text-[#23396A] text-sm pb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolorem soluta quibusdam officiis iure id, sunt, non odio nam ipsum accusamus nihil!</p>
                    <button onClick={() => route.push("/properties")} className="bg-[#23396A] rounded-sm text-sm cursor-pointer py-3 px-6 text-white">
                        Book Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Journey
