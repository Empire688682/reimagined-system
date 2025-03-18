"use client"
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState({});

    // Get current route
    const pathname = usePathname();

    // Change navbar background color based on route
    const navbarBg = pathname !== "/" ? "bg-[#23396A]" : "bg-transparent";

    // Change logo base on route
    const logo = pathname !== "/" ? "/ayinla-logo.png" : "/colored-ayinla-logo.png";

    const handleSubMenu = (id) => {
        setOpenSubMenu((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const isHompage = pathname === "/"

    return (
        <nav className={`pl-3 pr-3 md:pl-6 md:pr-6 py-1 absolute top-0 left-0 right-0 z-10 border-b border-blue-400 transition-all duration-300 ${navbarBg}`}>
            <div className='md:flex hidden justify-between items-center'>
                {/* Logo */}
                <Link href="/" className="relative w-[80px] h-[80px] cursor-pointer" onClick={() => setIsOpen(false)}>
                    <Image src={logo} alt="logo" fill className="object-contain" />
                </Link>

                {/* Nav Links */}
                <ul className={`flex gap-8 ${isHompage ? "text-black":"text-white"}`}>
                    <Link href="/" className={`text-black cursor-pointer ${isHompage ? "text-black":"text-white"} text-[14px]`} onClick={() => setIsOpen(false)}>Home</Link>
                    <li className={`flex relative items-center ${isHompage ? "text-black":"text-white"} cursor-pointer text-[14px]'`} onClick={() => handleSubMenu(1)}>
                        Property List
                        <IoIosArrowDown className={`ml-1 ${isHompage ? "text-black":"text-white"} text-[20px] transition-transform ${openSubMenu[1] ? 'rotate-[180deg]' : ''}`} />
                        {openSubMenu[1] && (
                            <div className={`absolute top-[100%] w-[160px] rounded-sm p-3 flex flex-col gap-3 left-0 bg-white ${isHompage ? "text-black":"text-white"} text-[13px]'`}>
                                <Link href="/properties" passHref className="text-xs cursor-pointer font-semibold" onClick={() => setIsOpen(false)}>
                                    Properties
                                </Link>
                                <Link href="/property" passHref className="text-xs cursor-pointer font-semibold" onClick={() => setIsOpen(false)}>
                                    Property
                                </Link>
                                <hr className="text-gray-300" />
                                <span className="text-xs cursor-pointer font-semibold">List Your Property</span>
                                <hr className="text-gray-300" />
                                <span className="text-xs cursor-pointer font-semibold">Listing Request Status</span>
                            </div>
                        )}
                    </li>
                    <li className={`flex relative items-center ${isHompage ? "text-black":"text-white"} cursor-pointer text-[14px]'`} onClick={() => { handleSubMenu(2); }}>
                        Booking List
                        <IoIosArrowDown className={`ml-1 ${isHompage ? "text-black":"text-white"} text-[20px] transition-transform ${openSubMenu[2] ? 'rotate-[180deg]' : ''}`}/>
                        {openSubMenu[2] && (
                            <div className={`absolute top-[100%] w-[160px] rounded-sm p-3 flex flex-col gap-3 left-0 bg-white ${isHompage ? "text-black":"text-white"} text-[13px]'`}>
                                <Link href="/booking" className="text-xs cursor-pointer font-semibold">Booking</Link>
                                <hr className="text-gray-300" />
                                <span className="text-xs cursor-pointer font-semibold">Booking Status</span>
                            </div>
                        )}
                    </li>
                    <li className={`text-black cursor-pointer ${isHompage ? "text-black":"text-white"} text-[14px]`}>About Us</li>
                    <li className={`text-black cursor-pointer ${isHompage ? "text-black":"text-white"} text-[14px]`}>FAQ'S</li>
                    <li className={`text-black cursor-pointer ${isHompage ? "text-black":"text-white"} text-[14px]`}>Contact Information</li>
                </ul>

                {/* Auth Buttons */}
                <div className='flex gap-3'>
                    <button className="px-6 py-3 text-white cursor-pointer bg-[#23396A] text-[14px]">Sign In</button>
                    <button className="px-6 py-3 cursor-pointer bg-white text-[#23396A] text-[14px]">Sign Up</button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='flex md:hidden justify-between items-center'>
                <Link href="/" className="relative w-[60px] h-[60px] cursor-pointer" onClick={() => setIsOpen(false)}>
                    <Image src={logo} alt="logo" fill className="object-contain" />
                </Link>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <IoMenuOutline className={`text-4xl ${isHompage ? "text-black":"text-white"} cursor-pointer`} />
                </div>
                {isOpen && (
                    <div className='absolute top-14 left-0 py-4 w-full h-[80vh] bg-blue-600 flex flex-col justify-center items-center z-10'>
                        <ul className='flex flex-col gap-8'>
                            <Link href="/" className='text-black text-[14px] cursor-pointer' onClick={() => setIsOpen(false)}>Home</Link>
                            <li className='flex relative items-center text-black cursor-pointer' onClick={() => handleSubMenu(1)}>
                                Property List
                                <IoIosArrowDown className={`ml-1 text-black text-[20px] transition-transform ${openSubMenu[1] ? 'rotate-[180deg]' : ''}`} />
                                {openSubMenu[1] && (
                                    <div className='absolute text-[13px] top-[100%] w-[160px] rounded-sm p-3 flex flex-col gap-3 left-0 bg-white text-black'>
                                        <Link href="/properties" passHref className="text-xs cursor-pointer font-semibold" onClick={() => setIsOpen(false)}>
                                            Properties
                                        </Link>
                                        <Link href="/property" passHref className="text-xs cursor-pointer font-semibold" onClick={() => setIsOpen(false)}>
                                            Property
                                        </Link>
                                        <hr className="text-gray-300" />
                                        <span className="text-xs cursor-pointer font-semibold">List Your Property</span>
                                        <hr className="text-gray-300" />
                                        <span className="text-xs cursor-pointer font-semibold">Listing Request Status</span>
                                    </div>
                                )}
                            </li>
                            <li className='flex relative items-center text-[14px] text-black cursor-pointer' onClick={() => handleSubMenu(2)}>
                                Booking List
                                <IoIosArrowDown className={`ml-1 text-black text-[20px] transition-transform ${openSubMenu[2] ? 'rotate-[180deg]' : ''}`} />
                                {openSubMenu[2] && (
                                    <div className='absolute text-[13px] top-[100%] w-[160px] rounded-sm p-3 flex flex-col gap-3 left-0 bg-white text-black'>
                                        <Link href="/booking" className="text-xs cursor-pointer font-semibold" onClick={() => setIsOpen(false)}>Booking</Link>
                                        <hr className="text-gray-300" />
                                        <span className="text-xs cursor-pointer font-semibold">Booking Status</span>
                                    </div>
                                )}
                            </li>
                            <li className={`text-black cursor-pointer ${isHompage ? "text-black":"text-white"} text-[14px]`}>About Us</li>
                            <li className={`text-black cursor-pointer ${isHompage ? "text-black":"text-white"} text-[14px]`}>FAQ'S</li>
                            <li className={`text-black cursor-pointer ${isHompage ? "text-black":"text-white"} text-[14px]`}>Contact Information</li>
                        </ul>
                        <div className='mt-4 flex gap-3'>
                            <button className="px-8 py-3 text-white cursor-pointer text-[14px] bg-[#23396A]">Sign In</button>
                            <button className="px-8 py-3 cursor-pointer text-[14px] bg-white text-[#23396A]">Sign Up</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
