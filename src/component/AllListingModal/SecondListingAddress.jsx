"use client";
import React, { useState } from 'react';

const typeOfProps = ["Apartment", "House", "Condo"];
const amentities = ["Pool", "Gym", "Parking"];

const SecondListingAddress = ({ setModals }) => {
    const [formData, setFormData] = useState({
        typeOfProps: "",
        locationSize: "",
        amentities: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate empty fields
        if (!formData.typeOfProps || !formData.locationSize || !formData.amentities) {
            alert("Please fill in all fields before proceeding.");
            return;
        }

        console.log('Form Data Submitted:', formData);
        setModals("listingSent");
        window.scrollTo(0,0)
    };

    return (
        <section className="min-h-screen md:p-16 p-4 mt-20 flex flex-col gap-20">
            <div className="flex justify-between items-center">
                <h1 className="md:font-semibold">New Listing</h1>
                <p className="text-center text-sm border py-1 px-6 border-gray-300">
                    3
                </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-10 mx-auto">

                <div>
                    <h1 className='font-semibold md:text-lg'>Property Details</h1>
                    <p className='text-sm'>More detailed information about your property</p>
                </div>

                <div className='flex flex-col gap-3'>
                <label htmlFor='typeOfProps' className='flex flex-col text-gray-700 text-sm'>
                    Type of Property
                    <select value={formData.typeOfProps} onChange={handleChange} name="typeOfProps" id="typeOfProps" className="border border-gray-300 text-gray-600 outline-none rounded-md p-1">
                        <option value="" disabled className='text-gray'>
                            Select property
                        </option>
                        {typeOfProps.map((prop) => (
                            <option key={prop} value={prop} className='text-gray'>{prop}</option>
                        ))}
                    </select>
                </label>

                <label htmlFor="locationSize" className='flex flex-col text-gray-700 text-sm'>
                    Location Size
                    <input type="text" required value={formData.locationSize} onChange={handleChange} className='border border-gray-300 text-gray-600 outline-none rounded-md p-1 w-full' name="locationSize" id="locationSize" placeholder="Location" />
                </label>

                <label htmlFor='amentities' className='flex flex-col text-gray-700 text-sm'>
                    Amenities
                    <select value={formData.amentities} onChange={handleChange} name="amentities" id="amentities" className="border border-gray-300 text-gray-600 outline-none rounded-md p-1">
                        <option value="" disabled className='text-gray'>
                            Select amenities
                        </option>
                        {amentities.map((amentitie) => (
                            <option key={amentitie} value={amentitie} className='text-gray'>{amentitie}</option>
                        ))}
                    </select>
                </label>

                <button type='submit' className='bg-[#23396A] text-sm text-white py-2 cursor-pointer w-[50%] max-auto flex justify-center border rounded-md'>
                    Next
                </button>
                </div>
            </form>
        </section>
    );
}

export default SecondListingAddress;
