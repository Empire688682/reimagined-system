"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
    // State to toggle the mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // State to track which submenu is open
    const [openSubMenu, setOpenSubMenu] = useState({});

    // Function to toggle submenu visibility based on its ID
    const handleSubMenu = (id) => {
        setOpenSubMenu((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <section className='p-3 md:p-6 absolute top-0 left-0 right-0 z-10'>
            {/* Desktop Navbar */}
            <div className='md:flex hidden justify-between items-center'>
                {/* Logo */}
                <div className="cursor-pointer">
                    <Image src="/colored-ayinla-logo.png" alt="logo" width={100} height={100} />
                </div>

                {/* Navigation Links */}
                <ul className='flex gap-8'>
                    <li className='text-white cursor-pointer text-[20px]'>Home</li>

                    {/* Property Listing with Dropdown */}
                    <li className='flex relative items-center text-white cursor-pointer' onClick={() => handleSubMenu(1)}>
                        Property Listing
                        <IoIosArrowDown className={`ml-1 text-white text-[20px] transition-transform ${openSubMenu[1] ? 'rotate-[180deg]' : ''}`} />
                        {
                            openSubMenu[1] && (
                                <div className='absolute top-[100%] w-[160px] rounded-sm p-3 flex flex-col gap-3 left-0 bg-white text-black'>
                                    <span className="text-xs cursor-pointer font-semibold">List Your Property</span>
                                    <hr className="text-gray-300" />
                                    <span className="text-xs cursor-pointer font-semibold">Listing Request Status</span>
                                </div>
                            )
                        }
                    </li>

                    {/* Booking with Dropdown */}
                    <li className='flex relative items-center text-white cursor-pointer' onClick={() => handleSubMenu(2)}>
                        Booking
                        <IoIosArrowDown className={`ml-1 text-white text-[20px] transition-transform ${openSubMenu[2] ? 'rotate-[180deg]' : ''}`} />
                        {
                            openSubMenu[2] && (
                                <div className='absolute top-[100%] w-[160px] rounded-sm p-3 flex flex-col gap-3 left-0 bg-white text-black'>
                                    <span className="text-xs cursor-pointer font-semibold">Book a Space Now</span>
                                    <hr className="text-gray-300" />
                                    <span className="text-xs cursor-pointer font-semibold">Booking Status</span>
                                </div>
                            )
                        }
                    </li>

                    {/* Additional Links */}
                    <li className='text-white cursor-pointer'>About Us</li>
                    <li className='text-white cursor-pointer'>FAQ'S</li>
                    <li className='text-white cursor-pointer'>Contact Information</li>
                </ul>

                {/* Authentication Buttons */}
                <div className='flex gap-3'>
                    <button className="px-8 py-3 text-white cursor-pointer bg-[#23396A] sm:text-xl">Sign In</button>
                    <button className="px-8 py-3 cursor-pointer bg-white text-[#23396A] sm:text-xl">Sign Up</button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='flex md:hidden justify-between items-center'>
                {/* Logo */}
                <Image src="/colored-ayinla-logo.png" alt="logo" width={80} height={80} />

                {/* Mobile Menu Toggle Button */}
                <div onClick={() => setIsOpen(!isOpen)}>
                    <IoMenuOutline className='text-4xl text-white cursor-pointer' />
                </div>

                {/* Mobile Menu Content */}
                {
                    isOpen && (
                        <div className='absolute top-16 left-0 py-4 w-full h-[80vh] bg-blue-600 flex flex-col justify-center items-center z-10'>
                            {/* Navigation Links */}
                            <ul className='flex flex-col gap-8'>
                                <li className='text-white cursor-pointer text-[20px]'>Home</li>

                                {/* Property Listing with Dropdown */}
                                <li className='flex relative items-center text-white cursor-pointer' onClick={() => handleSubMenu(1)}>
                                    Property Listing
                                    <IoIosArrowDown className={`ml-1 text-white text-[20px] transition-transform ${openSubMenu[1] ? 'rotate-[180deg]' : ''}`} />
                                    {
                                        openSubMenu[1] && (
                                            <div className='absolute top-[100%] w-[160px] rounded-sm p-3 flex flex-col gap-3 left-20 bg-white text-black'>
                                                <span className="text-xs cursor-pointer font-semibold">List Your Property</span>
                                                <hr className="text-gray-300" />
                                                <span className="text-xs cursor-pointer font-semibold">Listing Request Status</span>
                                            </div>
                                        )
                                    }
                                </li>

                                {/* Booking with Dropdown */}
                                <li className='flex relative items-center text-white cursor-pointer' onClick={() => handleSubMenu(2)}>
                                    Booking
                                    <IoIosArrowDown className={`ml-1 text-white text-[20px] transition-transform ${openSubMenu[2] ? 'rotate-[180deg]' : ''}`} />
                                    {
                                        openSubMenu[2] && (
                                            <div className='absolute top-[100%] w-[160px] rounded-sm p-3 flex flex-col gap-3 left-[-20px] bg-white text-black'>
                                                <span className="text-xs cursor-pointer font-semibold">Book a Space Now</span>
                                                <hr className="text-gray-300" />
                                                <span className="text-xs cursor-pointer font-semibold">Booking Status</span>
                                            </div>
                                        )
                                    }
                                </li>

                                {/* Additional Links */}
                                <li className='text-white cursor-pointer'>About Us</li>
                                <li className='text-white cursor-pointer'>FAQ'S</li>
                                <li className='text-white cursor-pointer'>Contact Information</li>
                            </ul>

                            {/* Authentication Buttons */}
                            <div className='mt-4 flex gap-3'>
                                <button className="px-8 py-3 text-white cursor-pointer bg-[#23396A] sm:text-xl">Sign In</button>
                                <button className="px-8 py-3 cursor-pointer bg-white text-[#23396A] sm:text-xl">Sign Up</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Navbar;
