import React, { useState } from 'react';

const BookingAddressModal = ({formData, setFormData, handleSubmit}) => {

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className='bg-white flex flex-col gap-3 max-w-[300px] md:max-w-[450px] m-auto rounded-lg p-5'>
      <div>
        <h1 className='font-semibold md:text-lg'>Booking Details</h1>
        <p className='text-sm'>Fill in the following details to schedule your booking.</p>
      </div>
      <hr className='text-gray-300' />

      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <label htmlFor='sDate' className='flex flex-col text-gray-700 text-sm'>
          Start Date
          <input
            required
            type='date'
            id='sDate'
            name='sDate'
            value={formData.sDate}
            onChange={handleChange}
            className='border border-gray-300 text-gray-600 placeholder-black w-full outline-none rounded-md p-1'
          />
        </label>

        <label htmlFor='eDate' className='flex flex-col text-gray-700 text-sm'>
          End Date
          <input
            required
            type='date'
            id='eDate'
            name='eDate'
            value={formData.eDate}
            onChange={handleChange}
            className='border border-gray-300 text-gray-600 placeholder-black w-full outline-none rounded-md p-1'
          />
        </label>

        <label htmlFor='sTime' className='flex flex-col text-gray-700 text-sm'>
          Start Time
          <input
            required
            type='time'
            id='sTime'
            name='sTime'
            value={formData.sTime}
            onChange={handleChange}
            className='border border-gray-300 text-gray-600 placeholder-black w-full outline-none rounded-md p-1'
          />
        </label>

        <label htmlFor='eTime' className='flex flex-col text-gray-700 text-sm'>
          End Time
          <input
            required
            type='time'
            id='eTime'
            name='eTime'
            value={formData.eTime}
            onChange={handleChange}
            className='border border-gray-300 text-gray-600 placeholder-black w-full outline-none rounded-md p-1'
          />
        </label>

        <label htmlFor='noCast' className='flex flex-col text-gray-700 text-sm'>
          Number of Cast and Crew
          <input
            required
            type='number'
            id='noCast'
            name='noCast'
            value={formData.noCast}
            onChange={handleChange}
            className='border border-gray-300 text-gray-600 placeholder-black w-full outline-none rounded-md p-1'
            min='1'
          />
        </label>

        <label className='flex items-center gap-2 text-gray-700 text-sm'>
          <input
            type='checkbox'
            id='cleanUp'
            name='cleanUp'
            checked={formData.cleanUp}
            onChange={handleChange}
          />
          Would you like a clean-up crew?
        </label>

        <label className='flex items-center gap-2 text-gray-700 text-sm'>
          <input
            type='checkbox'
            id='inspecting'
            name='inspecting'
            checked={formData.inspecting}
            onChange={handleChange}
          />
          Inspecting (+₦5,000)
        </label>

        <button type='submit' className='bg-[#23396A] text-sm text-white py-2 cursor-pointer w-full flex justify-center border rounded-md'>
          Proceed to Book
        </button>
      </form>
    </div>
  );
};

export default BookingAddressModal;
