"use"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useGlobalContext } from '@/component/Context';

const ListingTerms = ({ setModals, formData, handleChange }) => {
    const { ApiUrl } = useGlobalContext();

    const [errorMsg, setErrorMsg] = useState('');
    // Handle form submission for booking
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.purpose_of_listing
            || !formData.host_rules
            || !formData.usage_guidelines
            || !formData.overtime_policy
            || !formData.afl_terms_accepted) {
            console.log("Form:", formData);
            setErrorMsg("Please fill in all fields before proceeding.");
            return;
        };
        console.log('Form Data Submitted:', formData);
        window.scrollTo(0, 0)
        setModals("address");
    };

    return (
        <section className='flex relative mt-20 items-center gap-10 py-15 '>
            <span className='absolute right-6 md-right-16 top-3 text-center text-sm border py-1 px-6 border-gray-300'>
                1 of 4
            </span>
            {/** Col one */}
            <div className='bg-white flex shadow-md p-10 w-full flex-col gap-3 max-w-[400px] md:min-w-[500px] m-auto rounded-lg'>
                <div>
                    <h1 className='font-semibold md:text-lg'>Terms and condition</h1>
                    <p className='text-sm'>Fill in the following details to schedule your listing.</p>
                </div>
                <hr className='text-gray-300' />

                <form className='flex flex-col gap-3' onSubmit={handleSubmit}>

                    <label htmlFor='purpose_of_listing' className='flex flex-col text-gray-700 text-sm'>
                        Listing Purpose
                        <textarea
                            onChange={handleChange}
                            name="purpose_of_listing"
                            id="purpose_of_listing"
                            cols="5"
                            rows="3"
                            value={formData.purpose_of_listing}
                            placeholder='E.g., Film shoot, event space, meeting sessions....'
                            className='border resize-none border-gray-300 text-gray-600 placeholder-gray w-full outline-none rounded-md p-1'>
                        </textarea>
                    </label>
                    <label htmlFor='host_rules' className='flex flex-col text-gray-700 text-sm'>
                        Host Rules
                        <textarea
                            onChange={handleChange}
                            name="host_rules"
                            id="host_rules"
                            cols="5"
                            rows="3"
                            value={formData.host_rules}
                            placeholder="E.g., No smoking, no loud music after 10 PM, respect the space..."
                            className='border resize-none border-gray-300 text-gray-600 placeholder-gray w-full outline-none rounded-md p-1'>
                        </textarea>
                    </label>

                    <label htmlFor='usage_guidelines' className='flex flex-col text-gray-700 text-sm'>
                        Usage Guidelines
                        <textarea
                            onChange={handleChange}
                            name="usage_guidelines"
                            id="usage_guidelines"
                            cols="5"
                            rows="3"
                            value={formData.usage_guidelines}
                            placeholder="E.g., Ideal for meetings or workshops. Avoid moving heavy equipment or altering room setup."
                            className='border resize-none border-gray-300 text-gray-600 placeholder-gray w-full outline-none rounded-md p-1'>
                        </textarea>
                    </label>


                    <label htmlFor='overtime_policy' className='flex flex-col text-gray-700 text-sm'>
                        Overtime Policy
                        <textarea
                            onChange={handleChange}
                            name="overtime_policy"
                            id="overtime_policy"
                            cols="5"
                            rows="3"
                            value={formData.overtime_policy}
                            placeholder="E.g., Overtime is charged at #10000/hr after the agreed time slot..."
                            className='border resize-none border-gray-300 text-gray-600 placeholder-gray w-full outline-none rounded-md p-1'>
                        </textarea>
                    </label>

                    <label className='flex flex-col text-gray-700 text-sm'>
                        Platform Terms & Conditions
                        <textarea
                            readOnly
                            value={`1. You confirm that all property information is accurate and honest.
2. The property is suitable for the purpose selected (filming, events, etc.).
3. Host Rules must be clearly provided and will be publicly visible.
4. Any overtime charges must be disclosed and pre-approved.
5. You agree that your property is legal, safe, and properly maintained.
6. You accept AFL (Access For Location) platform terms, and understand that listings may be removed if found in violation.`}
                            className='border resize-none border-gray-300 text-gray-600 bg-gray-100 w-full outline-none rounded-md p-2 text-sm'
                            rows={7}
                        />
                    </label>

                    <div className='flex items-center gap-2'>
                        <input
                            type="checkbox"
                            name="afl_terms_accepted"
                            id="afl_terms_accepted"
                            onChange={handleChange}
                            checked={formData.afl_terms_accepted}
                        />
                        <label htmlFor="afl_terms_accepted" className='text-sm text-gray-700'>
                            I accept the platform terms and conditions
                        </label>
                    </div>

                    {
                        errorMsg && (
                            <p className='text-red-500 text-sm'>{errorMsg}</p>
                        )
                    }

                    <button type='submit' className='bg-[#23396A] text-sm text-white py-2 cursor-pointer w-full flex justify-center border rounded-md'>
                        Next
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ListingTerms
