"use client";
import ListingAddress from '@/component/AllListingModal/ListingAddress';
import AllListings from '@/component/AllListings/AllListings'
import Footer from '@/component/Footer/Footer'
import React, { useState } from 'react'

const page = () => {
  const [allLists, setAllLists] = useState(true)
  return (
    <div>
      {
        allLists ? 
        <AllListings setAllLists={setAllLists} />
        :
        <ListingAddress/>
      }
      <Footer />
    </div>
  )
}

export default page
