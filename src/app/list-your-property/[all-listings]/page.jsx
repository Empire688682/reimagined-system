"use client";
import ListingAddress from '@/component/AllListingModal/ListingAddress';
import ListingSent from '@/component/AllListingModal/ListingSent';
import SecondListingAddress from '@/component/AllListingModal/SecondListingAddress';
import UploadModal from '@/component/AllListingModal/UploadModal';
import AllListings from '@/component/AllListings/AllListings'
import Footer from '@/component/Footer/Footer'
import React, { useState } from 'react'

const page = () => {
  const [modals, setModals] = useState("allList")
  return (
    <div>
      {
        modals  === "allList"  &&
        <AllListings setModals={setModals} />
      }
      {
        modals === "address" &&
        <ListingAddress setModals={setModals} />
      }
      {
        modals === "secondAddress" &&
        <SecondListingAddress setModals={setModals} />
      }
      {
        modals === "listingSent" &&
        <ListingSent />
      }
      {
        modals === "upload" && 
        <UploadModal setModals={setModals} />
      }
      <Footer />
    </div>
  )
}

export default page
