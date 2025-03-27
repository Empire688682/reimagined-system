"use client";
import ListingAddress from '@/component/AllListingModal/ListingAddress';
import UploadModal from '@/component/AllListingModal/UploadModal';
import AllListings from '@/component/AllListings/AllListings'
import Footer from '@/component/Footer/Footer'
import React, { useState } from 'react'

const page = () => {
  const [modals, setModals] = useState("upload")
  return (
    <div>
      {
        modals  === "allList"  &&
        <AllListings setModals={setModals} />
      }
      {
        modals === "address" &&
        <ListingAddress/>
      }
      {
        modals === "upload" && 
        <UploadModal />
      }
      <Footer />
    </div>
  )
}

export default page
