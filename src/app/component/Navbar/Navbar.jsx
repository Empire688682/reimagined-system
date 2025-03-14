"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className='p-3 md:p-6 absolute top-0 left-0 right-0 z-10'>
            {/* Full Scren Navbar */}
            <div className=' md:flex hidden justify-between items-center'>
                <div className="cursor-pointer">
                    <Image src="/colored-ayinla-logo.png" alt="logo" width={100} height={100} />
                </div>
                <ul className='flex gap-5'>
                    <li className='text-white cursor-pointer text-[20px]'>Home</li>
                    <li className=' flex items-center text-white cursor-pointer font-20px'>
                        Propperty Listing
                        <IoIosArrowDown className='ml-1 text-white text-[20px]' />
                    </li>
                    <li className='flex items-center text-white cursor-pointer font-20px'>
                        Booking
                        <IoIosArrowDown className='ml-1 text-white text-[20px]' />
                    </li>
                    <li className='text-white cursor-pointer font-20px'>About Us</li>
                    <li className='text-white cursor-pointer font-20px'>FAQ'S</li>
                    <li className='text-white cursor-pointer font-20px'>Contact Information</li>
                    <li className='text-white cursor-pointer font-20px'>FAQ'S</li>
                </ul>
                <div className='flex gap-3'>
                    <button
                        style={{ backgroundColor: "#23396A" }}
                        className="px-8 py-3 text-white cursor-pointer sm:text-xl md:text-[18px] min-h-[40px] sm:min-h-[50px] md:min-h-[54px]"
                    >
                        Sign In
                    </button>
                    <button
                        style={{ backgroundColor: "white", color: "#23396A" }}
                        className="px-8 py-3 text-white cursor-pointer sm:text-xl md:text-[18px] min-h-[40px] sm:min-h-[50px] md:min-h-[54px]"
                    >
                        Sign In
                    </button>
                </div>
            </div>

            {/* Small Screen Navbar */}
            <div className='flex md:hidden justify-between items-center'>
                <div className="">
                    <Image src="/colored-ayinla-logo.png" alt="logo" width={100} height={100} />
                </div>
                {/* Menubar Icons */}
                <div onClick={() => setIsOpen(!isOpen)}>
                    <IoMenuOutline className='text-6xl text-white cursor-pointer' />
                </div>
                {/* Menubar Content */}
                {
                    isOpen && (
                        <div className='absolute top-16 left-0 py-4 w-full h-[80vh] bg-blue-600 flex flex-col justify-center items-center z-10'>
                            <ul className='flex flex-col gap-5 justify-center items-center'>
                                <li className='text-white cursor-pointer text-[20px]'>Home</li>
                                <li className=' flex items-center text-white cursor-pointer font-20px'>
                                    Propperty Listing
                                    <IoIosArrowDown className='ml-1 text-white text-[20px]' />
                                </li>
                                <li className='flex items-center text-white cursor-pointer font-20px'>
                                    Booking
                                    <IoIosArrowDown className='ml-1 text-white text-[20px]' />
                                </li>
                                <li className='text-white cursor-pointer font-20px'>About Us</li>
                                <li className='text-white cursor-pointer font-20px'>FAQ'S</li>
                                <li className='text-white cursor-pointer font-20px'>Contact Information</li>
                                <li className='text-white cursor-pointer font-20px'>FAQ'S</li>
                            </ul>
                            <div className='mt-4 flex gap-3'>
                                <button
                                    style={{ backgroundColor: "#23396A" }}
                                    className="px-8 py-3 text-white cursor-pointer sm:text-xl min-h-[30px] sm:min-h-[30px]"
                                >
                                    Sign In
                                </button>
                                <button
                                    style={{ backgroundColor: "white", color: "#23396A" }}
                                    className="px-8 py-3 text-white cursor-pointer sm:text-xl min-h-[30px] sm:min-h-[30px]"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>

        </section>
    )
}

export default Navbar
