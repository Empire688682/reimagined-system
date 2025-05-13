"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import Link from 'next/link';
import { useGlobalContext } from '../Context';

const Navbar = () => {
    const { route, userToken } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState({});
    const [user, setUser] = useState("")

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
    const logo = pathname !== "/" ? "/ayinla-logo-2.PNG" : "/ayinla-logo-1.PNG";

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
                <Link href="/" className="relative w-[100px] h-[80px] cursor-pointer" onClick={() => setIsOpen(false)}>
                    <Image src={logo} alt="logo" fill className="object-contain" />
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
                    <a href='/booking#faqs' className={`text-white cursor-pointertext-white p-2 rounded-sm text-[14px]`} onClick={() => setIsOpen(false)}>FAQ'S</a>
                    <a href='#contact' className={`text-white cursor-pointertext-white p-2 rounded-sm text-[14px]`} onClick={() => setIsOpen(false)}>Contact</a>
                </ul>

                <div className='flex gap-3 mt-6'>
                    {
                        userToken ? <div className='flex flex-col gap-2 justify-center itmems-center'>
                            <Image src="/profile-img.png" alt="logo" width={80} height={50} className="object-contain rounded-full" />
                            <p>Juwon</p>
                        </div> :
                            <div>
                                <Link href="/signin" className="px-6 py-3 text-white cursor-pointer rounded-sm bg-[#0C111D] text-[14px]" onClick={() => { setIsOpen(false) }}>Sign In</Link>
                                <Link href="/signup" className="px-6 py-3 cursor-pointer bg-white rounded-sm text-[#23396A] text-[14px]" onClick={() => { setIsOpen(false) }}>Sign Up</Link>
                            </div>
                    }
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='flex md:hidden z-20 justify-between items-center'>
                {/* Logo */}
                <Link href="/" className="relative w-[100px] h-[80px] cursor-pointer" onClick={() => setIsOpen(false)}>
                    <Image src={logo} alt="logo" fill className="object-contain" />
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
                            <a href='/booking#faqs' onClick={() => setIsOpen(false)} className={`text-white cursor-pointer text-[14px]`}>FAQ'S</a>
                            <a href='#contact' className={`text-white cursor-pointer text-[14px]`} onClick={() => setIsOpen(false)}>Contact</a>
                        </ul>
                        {/** Auth buttons */}
                        <div className='flex gap-3 mt-6 flex items-center justify-center'>
                            {
                                userToken ? <div className='flex flex-col gap-2 justify-center items-center'>
                                    <Image src="/profile-img.png" alt="logo" width={40} height={40} className="object-contain rounded-full" />
                                    <p className='text-gray-500'>Juwon</p>
                                </div> :
                                    <div>
                                        <Link href="/signin" className="px-6 py-3 text-white cursor-pointer rounded-sm bg-[#0C111D] text-[14px]" onClick={() => { setIsOpen(false) }}>Sign In</Link>
                                        <Link href="/signup" className="px-6 py-3 cursor-pointer bg-white rounded-sm text-[#23396A] text-[14px]" onClick={() => { setIsOpen(false) }}>Sign Up</Link>
                                    </div>
                            }
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
