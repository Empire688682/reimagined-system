"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import Link from 'next/link';
import { useGlobalContext } from '../Context';

const Navbar = () => {
    const { route } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState({});

    // Get current route
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);
    

    // Change navbar background color based on route
    const navbarBg = pathname === "/" ? "" : "bg-[#23396A]";

    // Change logo base on route
    const logo = pathname !== "/" ? "/ayinla-logo.png" : "/colored-ayinla-logo.png";

    const handleSubMenu = (id) => {
        setOpenSubMenu((prev) => {
            if (prev === id) {
                return ''
            } else {
                return id
            }
        });
    };

    const isHompage = pathname === "/"

    return (
        <nav className={`pl-3 pr-3 md:pl-6 md:pr-6 py-0 absolute top-0 left-0 right-0 z-10 transition-all duration-300 ${navbarBg} `}>
            <div className='md:flex hidden justify-between items-center'>
                {/* Logo */}
                <Link href="/" className="relative w-[80px] h-[80px] cursor-pointer" onClick={() => setIsOpen(false)}>
                    <Image src="/ayinla-logo.png" alt="logo" fill className="object-contain" />
                </Link>

                {/* Nav Links */}
                <ul className={`flex gap-8 ${isHompage ? "text-black" : "text-white"}`}>
                    <Link href="/" className={`text-black cursor-pointer text-white p-2 rounded-sm text-[14px]`} onClick={() => setIsOpen(false)}>Home</Link>
                    <li className={`flex relative items-center text-white p-2 rounded-sm justify-cnter cursor-pointer text-[14px]`} onClick={() => handleSubMenu(1)}>
                        Property List
                        <IoIosArrowDown className={`ml-1 text-white text-[20px] transition-transform ${openSubMenu === 1 ? 'rotate-[180deg]' : ''}`} />
                        {openSubMenu === 1 && (
                            <div className={`absolute -z top-[100%] w-[160px] rounded-sm p-3 flex flex-col gap-3 left-0 bg-white ${isHompage ? "text-black" : "text-white"} text-[13px]'`}>
                                <Link href="/properties" passHref className="text-xs text-black cursor-pointer font-semibold" onClick={() => setIsOpen(false)}>
                                    Properties
                                </Link>
                                <hr className="text-gray-300" />
                                <Link href="/list-your-property" passHref className="text-xs text-black cursor-pointer font-semibold" onClick={() => setIsOpen(false)}>
                                    List your property
                                </Link>
                                <hr className="text-gray-300" />
                                <Link href="/listing-history" passHref className="text-xs cursor-pointer font-semibold text-black" onClick={() => setIsOpen(false)}>
                                    Listing history
                                </Link>
                                <hr className="text-gray-300" />
                                <span className="text-xs cursor-pointer font-semibold text-black">Listing Request Status</span>
                            </div>
                        )}
                    </li>
                    <li className={`flex relative items-center text-white p-2 rounded-sm cursor-pointer text-[14px]`} onClick={() => { handleSubMenu(2); }}>
                        Booking
                        <IoIosArrowDown className={`ml-1 text-white text-[20px] transition-transform ${openSubMenu === 2 ? 'rotate-[180deg]' : ''}`} />
                        {openSubMenu === 2 && (
                            <div className={`absolute top-[100%] w-[160px] rounded-sm p-3 flex flex-col gap-3 left-0 bg-white ${isHompage ? "text-black" : "text-white"} text-[13px]'`}>
                                <Link href="/booking" className="text-xs text-black cursor-pointer font-semibold">Booking</Link>
                                <hr className="text-gray-300" />
                                <Link href="/booking-history" onClick={() => setIsOpen(false)} className="text-xs text-black cursor-pointer font-semibold">Booking history</Link>
                            </div>
                        )}
                    </li>
                    <li className={`text-white cursor-pointertext-white p-2 rounded-sm text-[14px]`} onClick={() => setIsOpen(false)}>About Us</li>
                    <a href='#faq' className={`text-white cursor-pointertext-white p-2 rounded-sm text-[14px]`} onClick={() => setIsOpen(false)}>FAQ'S</a>
                    <a href='#contact' className={`text-white cursor-pointertext-white p-2 rounded-sm text-[14px]`} onClick={() => setIsOpen(false)}>Contact</a>
                </ul>

                {/* Auth Buttons */}
                <div className='flex gap-3'>
                    <button className="px-6 py-3 text-white cursor-pointer rounded-sm bg-[#0C111D] text-[14px]" onClick={() => { route.push("/signin"); setIsOpen(false) }}>Sign In</button>
                    <button className="px-6 py-3 cursor-pointer bg-white rounded-sm text-[#23396A] text-[14px]" onClick={() => { route.push("/signup"); setIsOpen(false) }}>Sign Up</button>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='flex md:hidden z-20 justify-between items-center'>
                <Link href="/" className="relative w-[60px] h-[60px] cursor-pointer" onClick={() => setIsOpen(false)}>
                    <Image src="/ayinla-logo.png" alt="logo" fill className="object-contain" />
                </Link>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <IoMenuOutline className={`text-4xl text-white cursor-pointer`} />
                </div>
                {isOpen && (
                    <div className='absolute top-15 left-0 py-4 w-full  min-h-screen bg-blue-400 flex flex-col justify-center items-center z-10'>
                        <ul className='flex flex-col gap-8'>
                            <Link href="/" className='text-white text-[14px] cursor-pointer' onClick={() => setIsOpen(false)}>Home</Link>
                            <li className='flex relative items-center text-white text-[14px] cursor-pointer' onClick={() => handleSubMenu(1)}>
                                Property List
                                <IoIosArrowDown className={`ml-1 text-white text-[20px] transition-transform ${openSubMenu === 1 ? 'rotate-[180deg]' : ''}`} />
                                {openSubMenu === 1 && (
                                    <div className={`absolute top-[100%] z-20 w-[160px] text-black rounded-sm p-3 flex flex-col gap-3 left-0 bg-white`}>
                                        <Link href="/properties" passHref className="text-xs cursor-pointer font-semibold" onClick={() => setIsOpen(false)}>
                                            Properties
                                        </Link>
                                        <hr className="text-gray-300" />
                                        <Link href="/list-your-property" passHref className="text-xs cursor-pointer font-semibold" onClick={() => setIsOpen(false)}>
                                            List your property
                                        </Link>
                                        <hr className="text-gray-300" />
                                        <Link href="/listing-history" passHref className="text-xs cursor-pointer font-semibold" onClick={() => setIsOpen(false)}>
                                            Listing history
                                        </Link>
                                        <hr className="text-gray-300" />
                                        <span className="text-xs cursor-pointer font-semibold">Listing Request Status</span>
                                    </div>
                                )}
                            </li>
                            <li className='flex relative items-center text-[14px] text-white cursor-pointer' onClick={() => handleSubMenu(2)}>
                                Booking
                                <IoIosArrowDown className={`ml-1 text-white text-[20px] transition-transform ${openSubMenu === 2 ? 'rotate-[180deg]' : ''}`} />
                                {openSubMenu === 2 && (
                                    <div className={`absolute top-[100%] text-black z-20 w-[160px] rounded-sm p-3 flex flex-col gap-3 left-0 bg-white`}>
                                        <Link href="/booking" className="text-xs cursor-pointer font-semibold" onClick={() => setIsOpen(false)}>Booking</Link>
                                        <hr className="text-gray-300" />
                                        <Link href="/booking-history" onClick={() => setIsOpen(false)} className="text-xs text-black cursor-pointer font-semibold">Booking history</Link>
                                    </div>
                                )}
                            </li>
                            <li className={`text-white cursor-pointer text-[14px]`} onClick={() => setIsOpen(false)}>About Us</li>
                            <a href='#faq' onClick={() => setIsOpen(false)} className={`text-white cursor-pointer text-[14px]`}>FAQ'S</a>
                            <li className={`text-white cursor-pointer text-[14px]`} onClick={() => setIsOpen(false)}>Contact</li>
                        </ul>
                        {/** Auth buttons */}
                        <div className='mt-4 flex gap-3'>
                            <button className="px-8 py-3 rounded-sm text-white cursor-pointer text-[14px] bg-[#23396A]" onClick={() => { route.push("/signin"); setIsOpen(false) }}>Sign In</button>
                            <button className="px-8 py-3 rounded-sm cursor-pointer text-[14px] bg-white text-[#23396A]" onClick={() => { route.push("/signup"); setIsOpen(false) }}>Sign Up</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
