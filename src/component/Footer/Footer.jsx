"use client";
import React from 'react';
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useGlobalContext } from '../Context';

const Footer = () => {
  const {route} = useGlobalContext();
  return (
    <footer className="bg-[#23396A] md:bg-[#F1F9FF] md:p-16 text-white py-12 px-6">
      <div className="max-w-7xl md:bg-[#23396A] md:rounded-2xl md:p-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col justify-center md:justify-start items-center text-center md:text-start md:items-start">
          <Image 
            src="/ayinla-logo-2.PNG" 
            alt="Footer Logo" 
            width={150} 
            height={60} 
            priority 
          />
          <p className="text-gray-300 text-sm">Providing you with movie sets from where you want.</p>
        </div>
        
        {/* Main Pages */}
        <div className="flex flex-col justify-center md:justify-start items-center text-center md:text-start md:items-start">
          <h3 className="text-[15px] font-semibold mb-3">Main Pages</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="cursor-pointer hover:text-white transition" onClick={()=>route.push("/")}>Home</li>
            <li className="cursor-pointer hover:text-white transition" onClick={()=>route.push("/")}>Contact</li>
            <li className="cursor-pointer hover:text-white transition" onClick={()=>route.push("/")}>About</li>
            <li className="cursor-pointer hover:text-white transition" onClick={()=>route.push("/")}>How It Works</li>
          </ul>
        </div>
        
        {/* Other Pages */}
        <div className="flex flex-col justify-center md:justify-start items-center text-center md:text-start md:items-start">
          <h3 className="text-[15px] font-semibold mb-3">Other Pages</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="cursor-pointer hover:text-white transition">Properties</li>
            <li className="cursor-pointer hover:text-white transition">Agent</li>
            <li className="cursor-pointer hover:text-white transition">Blogs</li>
          </ul>
        </div>
        
         {/* Follow Us */}
         <div className="flex flex-col justify-center md:justify-start items-center text-center md:text-start md:items-start">
          <h3 className="text-[15px] font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="cursor-pointer hover:text-white transition">LinkedIn</li>
            <li className="cursor-pointer hover:text-white transition">Instagram</li>
            <li className="cursor-pointer hover:text-white transition">Facebook</li>
            <li className="cursor-pointer hover:text-white transition">Twitter</li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm mt-8">
        <p>&copy; {new Date().getFullYear()} Ayinla. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
