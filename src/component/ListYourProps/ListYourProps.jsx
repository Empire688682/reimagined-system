"use client"
import React from 'react';
import Image from "next/image";
import { FaLayerGroup } from "react-icons/fa6";
import Link from 'next/link';

const ListYourProps = () => {

    return (
        <section className="relative w-full min-h-screen md:pb-20 pt-15">
            <div className="relative w-full min-h-[90vh] flex items-center md:items-end justify-center md:justify-start md:pb-20">
                {/* Background Image */}
                <Image
                    priority={true}
                    fill
                    src="/listing-yourspace-hero.png"
                    alt="Hero Image"
                    style={{ objectFit: "cover" }}
                    className="absolute z-[-1] top-0 left-0 w-full h-full"
                />
                <div className='flex flex-col gap-5 md:px-16 px-6 md:text-left text-center pt-45 h-screen bg-gradient-to-b from-black/40 via-black/50 to-transparent'>
                    <h1 className="text-2xl md:text-4xl md:max-w-[80%] font-bold text-white">
                        Turn your space into a set and start earning by sharing it with the creative community.

                        Book. Shoot. Create.
                        It all starts here.
                    </h1>
                    <Link href="/list-your-property/all-listing" onClick={() => {window.scrollTo(0, 0) }} className="w-full md:w-[40%] bg-[#23396A] py-3 px-6 text-white text-sm font-semibold rounded-sm cursor-pointer">
                        Get Started Now
                    </Link>
                </div>
            </div>
            <div className='px-6 md:px-16 py-10 flex flex-col gap-4'>
                <p className='text-center text-[12px] border m-auto max-w-30 rounded-full border-blue-400 text-gray-500 px-2 py-3'>DUMMY TEXT</p>
                <h1 className='text-center text-2xl font-semibold'>How it Works</h1>
                <p className='text-center pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, numquam!</p>
                {/** Two Col Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    {/** Col one */}
                    <div className='relative w-full min-h-[300px]'>
                        <Image
                            priority={true}
                            fill
                            src="/listing-yourspace-2-img.png"
                            alt="Hero Image"
                            className="rounded-2xl"
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

export default ListYourProps
