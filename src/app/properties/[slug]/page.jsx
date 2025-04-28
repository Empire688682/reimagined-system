"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SingleProptsCart from "@/component/SingleProptsCart/SingleProptsCart";
import { useGlobalContext } from "@/component/Context";
import LoadingSpinner from "@/component/LoadingSpinner/LoadingSpinner";
import BookingAddressModal from "@/component/BookingModals/BookingAddressModal";
import BookingSentModal from "@/component/BookingModals/BookingSentModal";
import axios from "axios";

const Page = () => {
  // Get global properties data
  const { allPropts } = useGlobalContext();
  // Get property ID from URL params
  const { slug } = useParams();
  // Local state for managing property data, loading state, and related properties
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false)
  const [errorMsg, setErrorMsg] =  useState("");
  const [relatedProps, setRelatedProps] = useState([]);
  // Modals for booking process
  const [addressModal, setAddressModal] = useState(false);
  const [requestSentModal, setRequestSentModal] = useState(false);
  // Form data for booking
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    crew_member_count: 0,
    setup_day_count: 0,
    requires_cleanup: false,
    requires_inspection: false,
  });

  // Fetch property data and related properties on mount or when slug changes
  useEffect(() => {
    if (!slug || !allPropts.length) return;

    // Fetch the selected property based on slug
    const fetchProptsData = () => {
      const fetchData = allPropts.find((property) => property.id === Number(slug));
      setData(fetchData || null);
      setLoading(false);
    };

    // Get related properties (first 4 properties from the list)
    const relatedProperties = allPropts.slice(0, 4).map((property) => property);
    setRelatedProps(relatedProperties || [])

    fetchProptsData();
  }, [slug, allPropts]);

  // Handle form submission for booking
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(!formData.start_date || !formData.end_date || !formData.start_time || !formData.end_time || !formData.crew_member_count || !formData.setup_day_count) 
      return setErrorMsg("Please fill all fields");
    setFormLoading(true);
    try {
      const response = await axios.post(`/api/v1/listings/${slug}/bookings`, {
        start_date: formData.start_date,
        end_date: formData.end_date,
        start_time: formData.start_time,
        end_time: formData.end_time,
        crew_member_count: formData.crew_member_count,
        setup_day_count: formData.setup_day_count,
        requires_cleanup: formData.requires_cleanup,
        requires_inspection: formData.requires_inspection
      },
        {
          headers: {
            "Content-Type": "aplication/json"
          }
        }
      );
      if (response.status === 201) {
        console.log(response);
        alert("Booking successful");
        setAddressModal(false);
        setRequestSentModal(true);
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMsg(error.response?.data?.error_code || error.message || "An error occurred");
    }
    finally{
      setFormLoading(false)
    }

  };

  return (
    <>
      {loading ? (
        <div>
          <LoadingSpinner /> {/* Show loading spinner while fetching data */}
        </div>
      ) : data ? (
        <div>
          {
            // Check if any modal is active
            addressModal || requestSentModal ? (
              <div>
                {
                  // Show Booking Address Modal if active
                  addressModal && <div className='md:py-10 mt-15 w-full bg-gray-600 top-0 flex items-center min-h-screen'>
                    <BookingAddressModal
                      formData={formData}
                      setFormData={setFormData}
                      handleFormSubmit={handleFormSubmit}
                      setAddressModal={setAddressModal}
                      errorMsg={errorMsg}
                      formLoading={formLoading}
                    />
                  </div>
                }
                {
                  // Show Booking Sent Modal if active
                  requestSentModal && <div className='md:py-10 mt-30 w-full h-screen'>
                    <BookingSentModal />
                  </div>
                }
              </div>
            )
              :
              // Display property details if no modal is active
              <SingleProptsCart
                data={data}
                title={data.title}
                location={data.location}
                price={data.price}
                oldPrice={data.oldPrice}
                discount={data.discount}
                images={data.images}
                amenities={data.amenities}
                relatedProperties={relatedProps}
                setAddressModal={setAddressModal}
              />
          }
        </div>
      ) : (
        // Show error message if property is not found
        <p className="text-center text-red-500">Property not found!</p>
      )}
    </>
  );
};

export default Page;
