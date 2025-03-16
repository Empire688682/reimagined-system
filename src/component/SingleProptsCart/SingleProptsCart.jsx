import React from 'react';
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';

const SingleProptsCart = ({ data }) => {
  return (
    <div className=' md:p-16 p-4 mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
        <div className='w-[100%] flex flex-col gap-3 '>
          <div className='w-[100%] relative h-[300px]'>
            <Image
              src="/property-1.png"
              alt='Property Img'
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className='grid grid-cols-3 gap-2'>
            {
              Array.from({ length: 3 }).map((_, id) => (
                <div key={id} className='relative h-[50px] w-[100%]'>
                  <Image
                    key={id}
                    src="/property-2.png"
                    alt='Property Img'
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <p className='text-sm text-[#23396A] pb-4'>Rent * Furnished</p>
          <h1 className='md:text-3xl sm:text-2xl text-2xl font-semibold pb-3'>Luxurious Mansion, with outdoor space</h1>
          <p className='flex gap-4 text-gray-500 pb-3'><span>Lagos</span> <span>Lekki</span></p>
          <div className='flex gap-4 pb-3 items-center'>
            <p className='md:text-3xl text-2xl font-semibold'>#2, 876,</p>
            <span className='text-gray-500 text-sm line-through'>#4,876</span>
            <span className='text-sm text-red-500'>50%Off</span>
          </div>
          <div className='flex gap-4 items-center pb-4'>
            <p className='py-3 px-6 border border-gray-200 text-gray-400 text-sm md:text-1xl'>7 Bed</p>
            <p className='py-3 px-6 border border-gray-200 text-gray-400 text-sm md:text-1xl'>7 Bathroom</p>
            <p className='py-3 px-6 border border-gray-200 text-gray-400 text-sm md:text-1xl'>987 Sq feet</p>
          </div>
          <button className='bg-[#23396A] text-sm md:text-1xl cursor-pointer py-3 px-6 text-white'>Book Now</button>
        </div>
      </div>
      <div className='mt-15 border border-gray-200 text-gray-400 p-6 flex flex-col gap-6'>
        <div className='flex gap-4 items-center justify-start flex-wrap'>
          <p className='py-3 text-[10px] md:text-[15px] px-6 bg-[#23396A] border border-[#23396A] text-white'>Overview</p>
          <p className='py-3 text-[10px] md:text-[15px] px-6 border border-[#23396A] text-gray-400'>Gallery</p>
          <p className='py-3 text-[10px] md:text-[15px] px-6 border border-[#23396A] text-gray-400'>Location</p>
          <p className='py-3 text-[10px] md:text-[15px] px-6 border border-[#23396A] text-gray-400'>Agent</p>
        </div>
        <div>
          <h2 id='overview' className='text-lg font-semibold pb-3 text-gray-700'>About Property</h2>
          <p className='text-gray-500 text-[13px] md:text-[15px]'>
            This stunning property offers a perfect blend of comfort and elegance, featuring modern architecture and thoughtfully designed interiors. Located in a prime neighborhood, it boasts spacious rooms, ample natural light, and high-end finishes. The property includes state-of-the-art amenities, a serene outdoor space, and easy access to essential facilities such as schools, shopping centers, and transportation. Whether you're looking for a dream home or a lucrative investment, this property promises an exceptional living experience.
          </p>
        </div>
        <div>
          <h2 id='overview' className='text-lg font-semibold pb-3 text-gray-700'>Property Amenities</h2>
          <div>
            <p className='text-gray-500 text-[15px] md:text-[15px] pb-3'>
              UNIT
            </p>
            <div className='flex gap-4 items-center justify-start flex-wrap'>
              <p className='py-3 text-[10px] md:text-[15px] px-6 border border-gray-500'>Air Conditioning</p>
              <p className='py-3 text-[10px] md:text-[15px] px-6 border border-gray-500 text-gray-400'>Fireplace</p>
              <p className='py-3 text-[10px] md:text-[15px] px-6 border border-gray-500 text-gray-400'>Diswasher</p>
              <p className='py-3 text-[10px] md:text-[15px] px-6 border border-gray-500 text-gray-400'>Balcony</p>
              <p className='py-3 text-[10px] md:text-[15px] px-6 border border-gray-500 text-gray-400'>Cooling Fan</p>
            </div>
          </div>
          <div className='mt-6'>
            <p className='text-gray-500 text-[15px] md:text-[15px] pb-3'>
              BuILDING
            </p>
            <div className='flex gap-4 items-center justify-start flex-wrap'>
              <p className='py-3 text-[10px] md:text-[15px] px-6 border border-gray-500'>Bussiness Center</p>
              <p className='py-3 text-[10px] md:text-[15px] px-6 border border-gray-500 text-gray-400'>Outdoor Space</p>
              <p className='py-3 text-[10px] md:text-[15px] px-6 border border-gray-500 text-gray-400'>Gym</p>
              <p className='py-3 text-[10px] md:text-[15px] px-6 border border-gray-500 text-gray-400'>Swimming Pool</p>
              <p className='py-3 text-[10px] md:text-[15px] px-6 border border-gray-500 text-gray-400'>Free WiFi</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-15 border border-gray-200 text-gray-700 p-6 flex flex-col gap-6'>
        <h2 className='text-lg font-semibold'>Gallery</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          {Array.from({ length: 6 }).map((_, id) => (
            <div key={id} className="relative w-full h-56 overflow-hidden">
              <Image
                src="/property-3.png"
                alt="Property Image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='mt-15 p-6 flex flex-col gap-6'>
        <h2 className='text-2xl font-semibold text-center'>You may also like</h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Image Wrapper */}
              <div className="relative w-full h-56">
                <Image
                  src="/current-listing-img-1.png"
                  alt="Property Image"
                  fill
                  style={{ objectFit: "cover" }}
                  className='transition-transform transform hover:scale-105 rounded-lg'
                />
              </div>

              {/* Content */}
              <div className="p-4 text-[#23396A]">
                <h2 className=" font-semibold mb-2">The Queen Inside - Type-3</h2>
                <p className="text-gray-500 mb-3">Kogi Lokoja</p>

                {/* Price & Details */}
                <div className="flex justify-between items-center">
                  <p className="text-1xl font-bold text-[#23396A]">#989K</p>
                  <span className="flex items-center gap-2 text-gray-700 cursor-pointer hover:underline">
                    Details <FaArrowRight />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex md:justify-end mb-8 justify-center mt-10'>
          <span className="flex items-center gap-2 bg-[#F1F9FF] px-4 py-2 text-gray-700 cursor-pointer font-semibold border border-[#23396A] rounded-sm"
            onClick={() => setIndex(index + 4)}>
            Explore more <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  )
}

export default SingleProptsCart
