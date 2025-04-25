"use client";
import React from 'react';
import { FaSpinner } from 'react-icons/fa6';

const typeOfProps = ["Apartment", "House", "Condo"];
const amenities = ["Pool", "Gym", "Parking"];

const MoreDetails = ({ formData, setFormData, handleFinalSubmission, loading, setErrorMsg, errorMsg}) => {

    const toggleArrayValue = (name, value) => {
        setFormData((prevData) => {
            const arr = prevData[name];
            if (arr.includes(value)) {
                return { ...prevData, [name]: arr.filter((v) => v !== value) };
            } else {
                return { ...prevData, [name]: [...arr, value] };
            }
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic check for required fields
        if (
            !formData.property_type ||
            !formData.size_sqft.length > 0 ||
            !formData.amenity_slugs.length
        ) {
            setErrorMsg("Please fill in all fields before proceeding.");
            return;
        }

        handleFinalSubmission();
    };

    return (
        <section className="min-h-screen md:p-16 p-4 mt-20 flex flex-col gap-20">
            <div className="flex justify-between items-center">
                <h1 className="md:font-semibold">New Listing</h1>
                <p className="text-center text-sm border py-1 px-6 border-gray-300">
                    3
                </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-5 mx-auto">
                <div>
                    <h1 className='font-semibold md:text-lg'>Property Details</h1>
                    <p className='text-sm'>More detailed information about your property</p>
                </div>

                {/* Property Type */}
                <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium'>Type of Property</label>
                    <div className='flex flex-wrap gap-4'>
                        <select className="border border-gray-300 rounded-md p-2 w-full" name="property_type" value={formData.property_type} onChange={handleChange}>
                            <option disabled value="">Select Property Type</option>
                            {typeOfProps.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Size */}
                <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium' htmlFor="size_sqft">Size (sqft)</label>
                    <input
                        type="number"
                        id="size_sqft"
                        name="size_sqft"
                        value={formData.size_sqft}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Amenities */}
                <div className='flex flex-col gap-2'>
                    <label className='text-sm font-medium'>Amenities</label>
                    <div className='flex flex-wrap gap-4'>
                        {amenities.map((amenity) => (
                            <label key={amenity} className='flex items-center gap-2 text-sm'>
                                <input
                                    type="checkbox"
                                    checked={formData.amenity_slugs.includes(amenity)}
                                    onChange={() => toggleArrayValue("amenity_slugs", amenity)}
                                />
                                {amenity}
                            </label>
                        ))}
                    </div>
                </div>

                {
                    errorMsg && (
                        <p className='text-red-500 text-sm'>{errorMsg}</p>
                    )
                }

                <button
                    disabled={loading}
                    type='submit'
                    className='bg-[#23396A] text-sm text-white py-2 px-6 w-fit rounded-md mt-4'
                >
                    {
                        loading ?  <FaSpinner className='text-white text-xl animate-spin'/> : "Next"
                    }
                </button>
            </form>
        </section>
    );
};

export default MoreDetails;
