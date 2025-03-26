import React from 'react';
import { CiCirclePlus } from "react-icons/ci";

const AllListings = ({setAllLists}) => {
  return (
    <section className='min-h-screen md:p-16 p-4 mt-20 flex flex-col gap-40'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold'>All Listings</h1>
        <p className='flex gap-2 items-center text-sm cursor-pointer border p-2 border-gray-300' onClick={()=>{setAllLists(false); window.scrollTo(0,0)}}>
            Add New List
            <CiCirclePlus className='text-2xl' />
        </p>
      </div>
      <p className='text-center'>No Listing available add new</p>
    </section>
  )
}

export default AllListings
