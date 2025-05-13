"use client";
import React from 'react';

const TermsAndCondition = ({ termsData, formData, handleChange }) => {

    return (
        <div className='w-full h-full'>
            <h1 className='text-2xl font-bold mb-6'>Booking Terms & Property Conditions</h1>
            <div className='gap-8 bg-white rounded-md text-gray-800'>

                <div className='space-y-4'>
                    <div>
                        <h2 className='font-semibold'>📌 Purpose of Listing</h2>
                        <p>{termsData?.purpose_of_listing}</p>
                    </div>

                    <div>
                        <h2 className='font-semibold'>📌 Host Rules</h2>
                        <p>{termsData?.host_rules}</p>
                    </div>

                    <div>
                        <h2 className='font-semibold'>📌 Usage Guidelines</h2>
                        <p>{termsData?.usage_guidelines}</p>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div>
                        <h2 className='font-semibold'>📌 Overtime Policy</h2>
                        <p>{termsData?.overtime_policy}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 mt-4'>
                    <input
                        type="checkbox"
                        name="accept_terms_condition"
                        id="accept_terms_condition"
                        onChange={handleChange}
                        checked={formData?.accept_terms_condition}
                    />
                    <label htmlFor="accept_terms_condition" className='text-sm text-gray-700'>
                        I accept the booking terms and conditions
                    </label>
                </div>
            </div>
        </div>
    );
};

export default TermsAndCondition;
