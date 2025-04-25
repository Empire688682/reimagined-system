"use client";
import ListingAddress from '@/component/AllListingModal/ListingAddress';
import ListingSent from '@/component/AllListingModal/ListingSent';
import SecondListingAddress from '@/component/AllListingModal/SecondListingAddress';
import UploadModal from '@/component/AllListingModal/UploadModal';
import AllListings from '@/component/AllListings/AllListings'
import React, { useState } from 'react'

const page = () => {
  const [modals, setModals] = useState("allList");
  const ListingUrl = "https://ayinla-api.aweayo.com.ng/api/v1/listings";
   //{
         // "name": "string",
         // "description": "string",
         // "property_type": "apartment",
         // "state": "string",
         // "local_government_area": "string",
         // "address": "string",
         // "size_sqft": 0,
         // "contact_phone_number": "string",
         // "tags": [
          //  "string"
         // ],
         // "thumbnail_url": "http://example.com",
          //"image_urls": [
          //  "http://example.com"
          //],
         // "amenity_slugs": [
         //   "string"
         // ],
         // "price_kobo": 0
        //}
        
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
    </div>
  )
}

export default page
