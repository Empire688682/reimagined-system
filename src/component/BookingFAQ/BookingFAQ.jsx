"use client"
import React, { useEffect, useState } from 'react';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { allFaqs } from '../Data';


const BookingFAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [showQst, setShowQst] = useState({});

  const handleShowQuestion = (id) =>{
    setShowQst((prev)=>({...prev, [id] : !prev[id]}));
    console.log("showQst:",showQst[id])
  }


  const fetchFaqs = async () => {
    setFaqs(allFaqs);
  }

  useEffect(()=>{
    fetchFaqs();
  },[]);



  return (
    <div className="bg-gradient-to-b md:p-16 p-4 from-[#F1F9FF] to-white w-full">
      {/* Content goes here */}
      <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-4'>
        <div className='text-[#23396A] text-center md:text-left md:w-[50%] w-full'>
          <h1 className='text-3xl md:text-4xl font-bold'>General FAQs</h1>
        </div>
        {/* Questions and Answers */}
        <div className='text-[#23396A] w-full flex flex-col gap-7'>
          {
            faqs.length > 0 && faqs.map((faq)=>(
              <div key={faq._id} className='flex flex-col gap-2'>
                <div className='flex justify-between gap-3'>
                  <p className='font-semibold'>{faq.question}</p>
                  {
                    showQst[faq._id] ? 
                    <CiCircleMinus className='text-3xl cursor-pointer' onClick={()=>handleShowQuestion(faq._id)} />
                    :
                    <CiCirclePlus className='text-3xl cursor-pointer' onClick={()=>handleShowQuestion(faq._id)} />
                  }
                </div>
                {
                  showQst[faq._id] && <p>{faq.answer}</p>
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BookingFAQ
