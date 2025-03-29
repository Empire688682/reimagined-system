"use client";
import React from 'react';
import { useGlobalContext } from '../Context';
import { motion } from 'framer-motion';

const ListingSent = () => {
    
    const { route } = useGlobalContext();

    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className='text-center px-16 flex flex-col gap-15 min-h-screen mt-20'
        >
            <h1 className='font-semibold md:text-lg'>Listing Request Sent</h1>
            
            <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className='flex justify-center'
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-20 w-16 text-green-500" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <path d="M20 6L9 17l-5-5" />
                </svg>
            </motion.div>
            
            <p className='text-sm'>Your Listing Request has been sent. You will recieve a notification when it has been approved</p>
            
            <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className='bg-[#23396A] max-w-[300px] m-auto text-sm text-white py-2 cursor-pointer w-full flex justify-center border' 
                onClick={() => {route.push("/"); window.scrollTo(0,0)}}
            >
                Back to Home
            </motion.button>
        </motion.div>
    );
};

export default ListingSent;
