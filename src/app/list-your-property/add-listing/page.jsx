"use client";
import ListingAddress from '@/component/AllListingModal/ListingAddress';
import ListingSent from '@/component/AllListingModal/ListingSent';
import MoreDetails from '@/component/AllListingModal/MoreDetails ';
import UploadModal from '@/component/AllListingModal/UploadModal';
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {

    const [modals, setModals] = useState("address");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("")

    const ListingUrl = "https://api.ayinlafilms.com/api/v1/listings";

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        state: "",
        local_government_area: "",
        contact_phone_number: "",
        address: "",
        property_type: "",
        size_sqft: 0,
        tags: [],
        image_urls: [],
        thumbnail_url: "",
        amenity_slugs: [],
        price_kobo: 0
    });

    //Onchange handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    console.log("formData:", formData);

    const handleFinalSubmission = async () => {
        if (
            !formData.name ||
            !formData.description ||
            !formData.state ||
            !formData.local_government_area ||
            !formData.contact_phone_number ||
            !formData.address ||
            formData.size_sqft <= 0 ||
            formData.image_urls.length === 0 ||
            !formData.thumbnail_url ||
            formData.amenity_slugs.length === 0
        ) {
            setErrorMsg("All fields are required.");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(
                ListingUrl,
                {
                    name: formData.name,
                    description: formData.description,
                    property_type: formData.property_type,
                    state: formData.state,
                    local_government_area: formData.local_government_area,
                    address: formData.address,
                    size_sqft: formData.size_sqft,
                    contact_phone_number: formData.contact_phone_number,
                    tags: formData.tags,
                    thumbnail_url: formData.thumbnail_url,
                    image_urls: formData.image_urls,
                    amenity_slugs: formData.amenity_slugs,
                    price_kobo: formData.price_kobo
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-API-KEY": "ApiKeyAuth",
                    },
                }
            );

            if (response.status === 200) {
                console.log("Listing successfully submitted", formData);
                setModals("listingSent");
            } else {
                console.log("Unexpected response:", response);
            }
        } catch (error) {
            console.error("Error during Listing:", error);
            setErrorMsg(error.response?.data?.error_code || error.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className='min-h-[70vh]'>
            {
                modals === "address" && <ListingAddress setModals={setModals} formData={formData} handleChange={handleChange} />
            }
            {
                modals === "upload" && <UploadModal setModals={setModals} formData={formData} handleChange={handleChange} />
            }
            {
                modals === "moreDetails" && <MoreDetails setFormData={setFormData} formData={formData} handleChange={handleChange} handleFinalSubmission={handleFinalSubmission} loading={loading} setErrorMsg={setErrorMsg} errorMsg={errorMsg} />
            }
            {
                modals === "listingSent" && <ListingSent />
            }
        </div>
    )
}

export default Page
