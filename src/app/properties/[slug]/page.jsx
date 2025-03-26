"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/component/Footer/Footer";
import { useParams } from "next/navigation";
import SingleProptsCart from "@/component/SingleProptsCart/SingleProptsCart";
import { useGlobalContext } from "@/component/Context";
import LoadingSpinner from "@/component/LoadingSpinner/LoadingSpinner";
import BookingAddressModal from "@/component/BookingModals/BookingAddressModal";
import BookingSentModal from "@/component/BookingModals/BookingSentModal";

const Page = () => {
  const { allPropts } = useGlobalContext();
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProps, setRelatedProps] = useState([]);
  const [addressModal, setAddressModal] = useState(false);
  const [requestSentModal, setRequestSentModal] = useState(false);
  const [formData, setFormData] = useState({
    sDate: "",
    eDate: "",
    sTime: "",
    eTime: "",
    noCast: '',
    cleanUp: false,
    inspecting: false,
  });

  useEffect(() => {
    if (!slug || !allPropts.length) return;

    const fetchProptsData = () => {
      const fetchData = allPropts.find((property) => property.id === Number(slug));
      setData(fetchData || null);
      setLoading(false);
    };

    const relatedProperties = allPropts.slice(0, 4).map((property) => property);
    setRelatedProps(relatedProperties || [])

    fetchProptsData();
  }, [slug, allPropts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddressModal(false);
    setRequestSentModal(true);
    console.log('Form Data Submitted:', formData);
  };

  return (
    <>
      {loading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : data ? (
        <div>
          {
            addressModal || requestSentModal ? (
              <div>
                {
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
                  requestSentModal && <div className='md:py-10 mt-30 w-full h-screen'>
                    <BookingSentModal />
                  </div>
                }
              </div>
            )
              :
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
          <Footer />
        </div>
      ) : (
        <p className="text-center text-red-500">Property not found!</p>
      )}
    </>
  );
};

export default Page;
