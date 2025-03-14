import React from 'react';
import Image from "next/image";

const About = () => {
    return (
        <section className='pr-6 pl-6 py-16 bg-white max-w-7xl mx-auto'>
            {/* Container */}
            <div className='grid grid-cols-1 md:py-16 md:grid-cols-2 gap-12 items-start'>
                {/* Left Side - Images (Hidden on Small Screens) */}
                <div className='text-[#23396A] text-center md:text-left'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-4 text-gray-700'>About Us</h1>
                    <h2 className='text-2xl md:text-2xl font-semibold mb-4 text-gray-700'>Helping Property Owners Earn and Filmakers Finf Perfect Location</h2>
                    <p className='text-lg text-gray-600 mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sunt hic modi at sit quos!
                        Minima in quasi doloremque fuga aut voluptatum?
                    </p>
                </div>

                {/* Right Side - Text Content */}
                <div className='hidden md:grid grid-cols-2 gap-4 relative w-full'>
                    <div className='relative w-full z-11 h-full mb-16 absolute top-0 left-55'>
                        <Image
                            src='/best-prop-frame-1.png'
                            alt='Hero Image'
                            height={400}
                            width={100}
                            objectFit='cover'
                        />
                    </div>
                    <div className='relative w-full h-full my-16 absolute top-10 left-0'>
                        <Image
                            src='/best-prop-frame-2.png'
                            alt='Hero Image'
                            height={400}
                            width={100}
                            objectFit='cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
