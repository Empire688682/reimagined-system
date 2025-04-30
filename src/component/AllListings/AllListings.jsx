"use client";
import React, { useEffect, useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import Link from 'next/link';
import { useGlobalContext } from '../Context';
import axios from "axios";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import listings from '../Data';
import ListingHistory from '../ListingHistory/ListingHistory';

const AllListings = () => {
  const {ApiUrl} = useGlobalContext();
  const [myListings, setMyListing] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllListings = async () => {
    try {
      const response = await axios.get(`${ApiUrl}/api/v1/listings`);
      if(response.status === 200){
        console.log("response:", response);
        setMyListing(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(()=>{
    getAllListings();
  },[])



  return (
    <section className='min-h-screen md:p-16 p-4 mt-20 flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold'>All Listings</h1>
        <Link href="/add-listing" className='flex gap-2 items-center text-sm cursor-pointer border p-2 border-gray-300' onClick={()=>{window.scrollTo(0,0)}}>
            Add New List
            <CiCirclePlus className='text-2xl' />
        </Link>
      </div>
      {
        loading ? <div className='overflow-hidden max-h-[50vh] flex items-center justify-center'>
          < LoadingSpinner /> 
        </div>
        :
        <>
        {
          myListings.length || listings.length > 0 ? 
              <div className='md:overflow-x-hidden overflow-x-scroll w-full'>
                <ListingHistory />
              </div>
              : 
              <p className='font-bold text-2xl md:text-1xl text-center'>No listing found</p>
        }
        </>
      }
    </section>
  )
}

export default AllListings
