import React from 'react';
import Image from "next/image";

const About = () => {
    return (
        <section className='pr-6 pl-6 py-16 bg-white max-w-7xl mx-auto'>
            {/* Container */}
            <div className='grid grid-cols-1 md:py-16 md:grid-cols-2 gap-12 items-start'>
                {/* Left Side - Text Content */}
                <div className='text-[#23396A] text-center md:text-left'>
                    <h1 className='text-2xl md:text-3xl font-bold mb-4 text-gray-700'>About Us</h1>
                    <h2 className='text-1xl md:text-2xl font-semibold mb-4 text-gray-700'>
                        Helping Property Owners Earn and Filmmakers Find the Perfect Location
                    </h2>
                    <p className='text-gray-600 mb-0 md:mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sunt hic modi at sit quos!
                        Minima in quasi doloremque fuga aut voluptatum?
                    </p>
                </div>

                {/* Right Side - Images */}
                <div className='hidden md:grid grid-cols-2 gap-4 relative w-full'>
                    <div className='relative w-full h-[400px]'>
                        <Image
                            src='/best-prop-frame-1.png'
                            alt='Hero Image'
                            width={300} // Adjusted width for better scaling
                            height={400}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className='relative w-full h-[400px]'>
                        <Image
                            src='/best-prop-frame-2.png'
                            alt='Hero Image'
                            width={300} // Adjusted width
                            height={400}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
