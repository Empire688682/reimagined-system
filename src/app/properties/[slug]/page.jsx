"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/component/Footer/Footer";
import { useParams } from "next/navigation";
import SingleProptsCart from "@/component/SingleProptsCart/SingleProptsCart";
import { useGlobalContext } from "@/component/Context";
import LoadingSpinner from "@/component/LoadingSpinner/LoadingSpinner";
import BookingAddressModal from "@/component/BookingAddressModal/BookingAddressModal";

const Page = () => {
  const { allPropts } = useGlobalContext();
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProps, setRelatedProps] = useState([]);
  const [addressModal, setAddressModal] = useState(false);
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

    const relatedProperties = allPropts.slice(0,4).map((property)=>property);
    setRelatedProps(relatedProperties || [])

    fetchProptsData();
  }, [slug, allPropts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddressModal(false)
    console.log('Form Data Submitted:', formData);
  };

  return (
    <>
      {loading ? (
        <div>
          <LoadingSpinner/>
          </div>
      ) : data ? (
        <div className="relative">
          {
            addressModal && <div className='fixed w-full bg-gray-600 top-0 z-[9] flex items-center min-h-screen p-5'>
              <BookingAddressModal
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              setAddressModal={setAddressModal}
                />
            </div>
          }
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
          <Footer />
        </div>
      ) : (
        <p className="text-center text-red-500">Property not found!</p>
      )}
    </>
  );
};

export default Page;
