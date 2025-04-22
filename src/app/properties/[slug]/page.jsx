"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SingleProptsCart from "@/component/SingleProptsCart/SingleProptsCart";
import { useGlobalContext } from "@/component/Context";
import LoadingSpinner from "@/component/LoadingSpinner/LoadingSpinner";
import BookingAddressModal from "@/component/BookingModals/BookingAddressModal";
import BookingSentModal from "@/component/BookingModals/BookingSentModal";

const Page = () => {
  // Get global properties data
  const { allPropts } = useGlobalContext();
  // Get property ID from URL params
  const { slug } = useParams();
  // Local state for managing property data, loading state, and related properties
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProps, setRelatedProps] = useState([]);
  // Modals for booking process
  const [addressModal, setAddressModal] = useState(false);
  const [requestSentModal, setRequestSentModal] = useState(false);
  // Form data for booking
  const [formData, setFormData] = useState({
    sDate: "",
    eDate: "",
    sTime: "",
    eTime: "",
    noCast: '',
    cleanUp: false,
    inspecting: false,
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setAddressModal(false);
    setRequestSentModal(true);
    console.log('Form Data Submitted:', formData);
    window.scrollTo(0,0);
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
                      handleSubmit={handleSubmit}
                      setAddressModal={setAddressModal}
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
