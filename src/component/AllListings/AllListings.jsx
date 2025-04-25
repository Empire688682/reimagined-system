import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import Link from 'next/link';

const AllListings = ({setModals}) => {
  return (
    <section className='min-h-screen md:p-16 p-4 mt-20 flex flex-col gap-40'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold'>All Listings</h1>
        <Link href="/list-your-property/add-listing" className='flex gap-2 items-center text-sm cursor-pointer border p-2 border-gray-300' onClick={()=>{window.scrollTo(0,0)}}>
            Add New List
            <CiCirclePlus className='text-2xl' />
        </Link>
      </div>
      <p className='text-center'>No Listing available add new</p>
    </section>
  )
}

export default AllListings
