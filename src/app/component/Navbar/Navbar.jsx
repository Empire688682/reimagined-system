"use client"
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image"; 
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState({});

    const pathname = usePathname(); // Get current route

    // Change navbar background color based on route
    const navbarBg = pathname === "/booking" ? "bg-[#23396A]" : "bg-transparent";

    // Change logo base on route
    const logo = pathname === "/booking" ? "/ayinla-logo.png" : "/colored-ayinla-logo.png";

    const handleSubMenu = (id) => {
        setOpenSubMenu((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <nav className={`pl-3 pr-3 md:pl-6 md:pr-6 md:py-3 py-2 absolute top-0 left-0 right-0 z-10 border-b border-gray-400 transition-all duration-300 ${navbarBg}`}>
            <div className='md:flex hidden justify-between items-center'>
                {/* Logo */}
                <div className="relative w-[100px] h-[50px] cursor-pointer">
                    <Image src={logo} alt="logo" fill className="object-contain" />
                </div>

                {/* Nav Links */}
                <ul className='flex gap-8'>
                    <li className='text-white cursor-pointer'>Home</li>
                    <li className='flex relative items-center text-white cursor-pointer' onClick={() => handleSubMenu(1)}>
                        Property Listing
                        <IoIosArrowDown className={`ml-1 text-white text-[20px] transition-transform ${openSubMenu[1] ? 'rotate-[180deg]' : ''}`} />
                        {openSubMenu[1] && (
                            <div className='absolute top-[100%] w-[160px] rounded-sm p-3 flex flex-col gap-3 left-0 bg-white text-black'>
                                <span className="text-xs cursor-pointer font-semibold">List Your Property</span>
                                <hr className="text-gray-300" />
                                <span className="text-xs cursor-pointer font-semibold">Listing Request Status</span>
                            </div>
                        )}
                    </li>
                    <li className='text-white cursor-pointer'>About Us</li>
                    <li className='text-white cursor-pointer'>FAQ'S</li>
                    <li className='text-white cursor-pointer'>Contact Information</li>
                </ul>

                {/* Buttons */}
                <div className='flex gap-3'>
                    <button className="px-8 py-3 text-white cursor-pointer bg-[#23396A] sm:text-xl">Sign In</button>
                    <button className="px-8 py-3 cursor-pointer bg-white text-[#23396A] sm:text-xl">Sign Up</button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='flex md:hidden justify-between items-center'>
                <div className="relative w-[80px] h-[40px]">
                    <Image src={logo} alt="logo" fill className="object-contain" />
                </div>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <IoMenuOutline className='text-4xl text-white cursor-pointer' />
                </div>
                {isOpen && (
                    <div className='absolute top-16 left-0 py-4 w-full h-[80vh] bg-blue-600 flex flex-col justify-center items-center z-10'>
                        <ul className='flex flex-col gap-8'>
                            <li className='text-white cursor-pointer'>Home</li>
                            <li className='text-white cursor-pointer'>About Us</li>
                            <li className='text-white cursor-pointer'>FAQ'S</li>
                            <li className='text-white cursor-pointer'>Contact Information</li>
                        </ul>
                        <div className='mt-4 flex gap-3'>
                            <button className="px-8 py-3 text-white cursor-pointer bg-[#23396A] sm:text-xl">Sign In</button>
                            <button className="px-8 py-3 cursor-pointer bg-white text-[#23396A] sm:text-xl">Sign Up</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
