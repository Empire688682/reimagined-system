"use client";
import React from 'react';
import { FaSpinner } from 'react-icons/fa6';
import { dummytermsData } from '../Data';
import TermsAndCondition from './TermsAndCondition/TermsAndCondition';
import { useGlobalContext } from '../Context';
import { FaHeart } from "react-icons/fa";

const BookingAddressModal = ({
  formData,
  setFormData,
  handleFormSubmit,
  errorMsg,
  formLoading
}) => {
  const {userName} = useGlobalContext()

  //Onchange handler
  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === 'checkbox'
      ? checked
      : type === 'number'
      ? parseInt(value) || ""
      : value,
  }));
};



  return (
    <div className='my-15 bg-white flex flex-col gap-3 m-auto rounded-lg p-5'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-semibold text-2xl'>Booking Details</h1>
        <p className='text-sm'>Fill in the following details to schedule your booking.</p>
        <p className='font-semibold flex gap-2 items-center'>You are on the right Track <FaHeart className='text-red-700' /><span className='font-semibold'>{userName}</span></p>
      </div>
      <hr className='text-gray-300 mb-5' />

      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 w-full items-center'>
        {/**first col */}
      <div className='min-w-[300px] shadow-md p-3 h-full rounded-md'>
      <form className='flex flex-col gap-3 w-full' onSubmit={handleFormSubmit}>
        <label htmlFor='start_date' className='flex flex-col text-gray-700 text-sm'>
          Start Date
          <input
            required
            type='date'
            id='start_date'
            name='start_date'
            value={formData.start_date}
            onChange={handleChange}
            className='border border-gray-300 text-gray-600 placeholder-black w-full outline-none rounded-md p-3'
          />
        </label>

        <label htmlFor='end_date' className='flex flex-col text-gray-700 text-sm'>
          End Date
          <input
            required
            type='date'
            id='end_date'
            name='end_date'
            value={formData.end_date}
            onChange={handleChange}
            className='border border-gray-300 text-gray-600 placeholder-black w-full outline-none rounded-md p-3'
          />
        </label>

        <label htmlFor='start_time' className='flex flex-col text-gray-700 text-sm'>
          Start Time
          <input
            required
            type='time'
            id='start_time'
            name='start_time'
            value={formData.start_time}
            onChange={handleChange}
            className='border border-gray-300 text-gray-600 placeholder-black w-full outline-none rounded-md p-3'
          />
        </label>

        <label htmlFor='end_time' className='flex flex-col text-gray-700 text-sm'>
          End Time
          <input
            required
            type='time'
            id='end_time'
            name='end_time'
            value={formData.end_time}
            onChange={handleChange}
            className='border border-gray-300 text-gray-600 placeholder-black w-full outline-none rounded-md p-3'
          />
        </label>

        <label htmlFor='crew_member_count' className='flex flex-col text-gray-700 text-sm'>
          Number of Cast and Crew
          <input
            required
            type='number'
            id='crew_member_count'
            name='crew_member_count'
            value={formData.crew_member_count}
            onChange={handleChange}
            className='border border-gray-300 text-gray-600 placeholder-black w-full outline-none rounded-md p-3'
            min='1'
          />
        </label>
        <label htmlFor='setup_day_count' className='flex flex-col text-gray-700 text-sm'>
          Setup day count
          <input
            required
            type='number'
            id='setup_day_count'
            name='setup_day_count'
            value={formData.setup_day_count}
            onChange={handleChange}
            className='border border-gray-300 text-gray-600 placeholder-black w-full outline-none rounded-md p-3'
            min='1'
          />
        </label>

        <label className='flex items-center gap-2 text-gray-700 text-sm'>
          <input
            type='checkbox'
            id='requires_cleanup'
            name='requires_cleanup'
            checked={formData.requires_cleanup}
            onChange={handleChange}
          />
          Would you like a clean-up crew?
        </label>

        <label className='flex items-center gap-2 text-gray-700 text-sm'>
          <input
            type='checkbox'
            id='requires_inspection'
            name='requires_inspection'
            checked={formData.requires_inspection}
            onChange={handleChange}
          />
          Inspecting (+₦5,000)
        </label>

        {
          errorMsg && <p className='text-red-600 text-sm'>{errorMsg}</p>
        }

        <button type='submit' disabled={formLoading} className='bg-[#23396A] text-sm text-white py-2 cursor-pointer w-full flex justify-center border rounded-md'>
          {
            formLoading ? <FaSpinner className='text-white text-xl animate-spin' /> : "Submit"
          }
        </button>
      </form>
      </div>

      {/**Second col */}
      <div className='min-w-[300px] p-3 h-full shadow-md rounded-md'>
        <TermsAndCondition termsData={dummytermsData} handleChange={handleChange} formData={formData} />
      </div>
      </div>
    </div>
  );
};

export default BookingAddressModal;
