"use client"
import React, { useEffect, useState } from 'react';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { allFaqs } from '../Data';
import Image from 'next/image';


const Services = () => {
  const [faqs, setFaqs] = useState([]);
  const [showQst, setShowQst] = useState({});

  const handleShowQuestion = (id) => {
    setShowQst((prev) => ({ ...prev, [id]: !prev[id] }));
  }


  const fetchFaqs = async () => {
    setFaqs(allFaqs);
  }

  useEffect(() => {
    fetchFaqs();
  }, []);



  return (
    <div className=" md:p-16 p-4 from-[#F1F9FF]" id='faq'>
      {/* Content goes here */}
      <p className='text-[#23396A] text-sm text-center font-semibold mb-4'>Services</p>
      <h2 className='text-xl md:text-2xl font-bold text-[#23396A] text-center mb-4 w-[300px] md:w-[400px] m-auto'>Explore our range of expert real estate services for film makers</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-4'>
        {/* Questions and Answers */}
        <div className='text-[#23396A] w-full flex flex-col gap-3'>
          {
            faqs.length > 0 && faqs.map((faq) => (
              <div key={faq._id} className='flex bg-white rounded-md p-4 flex-col gap-2'>
                <div className='flex justify-between gap-3'>
                  <p className='font-semibold'>{faq.question}</p>
                  {
                    showQst[faq._id] ?
                      <CiCircleMinus className='text-3xl cursor-pointer' onClick={() => handleShowQuestion(faq._id)} />
                      :
                      <CiCirclePlus className='text-3xl cursor-pointer' onClick={() => handleShowQuestion(faq._id)} />
                  }
                </div>
                {
                  showQst[faq._id] && <p>{faq.answer}</p>
                }
              </div>
            ))
          }
        </div>
        <div className='relative min-h-[300px] h-full md:block w-full'>
          <Image
            priority={true}
            fill
            src="/service-img.png"
            alt="Hero Image"
            style={{ objectFit: "cover" }}
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  )
}

export default Services
