"use"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useGlobalContext } from '../Context';
import axios from 'axios';

const ListingAddress = ({setModals, formData, handleChange}) => {
    const {ApiUrl} = useGlobalContext();

    const [states, setStates] = useState([]);

    const getState = async () =>{
        try {
            const res = await axios.get(`${ApiUrl}/api/v1/states`);
            if(res.status === 200){
                setStates(res.data.states);
            }
        } catch (error) {
            console.log("State error:", error)
        }
    };

    useEffect(()=>{
        getState();
    },[])

    const [errorMsg, setErrorMsg] = useState('');
    // Handle form submission for booking
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.state || !formData.description || !formData.contact_phone_number || !formData.local_government_area || !formData.address) {
            console.log("Form:", formData);
            setErrorMsg("Please fill in all fields before proceeding.");
            return;
        };
        console.log('Form Data Submitted:', formData);
        window.scrollTo(0, 0)
        setModals("upload");
    };
    
    return (
        <section className='grid relative grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-20 items-center gap-10 py-10 '>
            <span className='absolute right-6 md-right-16 top-3 text-center text-sm border py-1 px-6 border-gray-300'>
                2 of 4
            </span>
            {/** Col one */}
            <div className='bg-white flex w-full flex-col gap-3 max-w-[300px] md:max-w-[400px] m-auto rounded-lg'>
                <div>
                    <h1 className='font-semibold md:text-lg'>Details Address</h1>
                    <p className='text-sm'>Fill in the following details to schedule your booking.</p>
                </div>
                <hr className='text-gray-300' />

                <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                    <label htmlFor='name' className='flex flex-col text-gray-700 text-sm'>
                        Name
                        <input
                            required
                            type='text'
                            placeholder='2 bedroom apartment'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='border border-gray-300 text-gray-600 placeholder-gray w-full outline-none rounded-md p-1'
                        />
                    </label>

                    <label htmlFor='description' className='flex flex-col text-gray-700 text-sm'>
                        Description
                        <input
                            required
                            type='text'
                            placeholder='Water view 2 bedroom apartment'
                            id='description'
                            name='description'
                            value={formData.description}
                            onChange={handleChange}
                            className='border border-gray-300 text-gray-600 placeholder-gray w-full outline-none rounded-md p-1'
                        />
                    </label>

                    <label htmlFor='state' className='flex flex-col text-gray-700 text-sm'>
                        State
                        <select value={formData.state} onChange={handleChange} name="state" id="state" className="border border-gray-300 text-gray-600 outline-none rounded-md p-1">
                            <option value="" disabled className='text-gray'>
                                Select state
                            </option>
                            {states.map((stateObj, i) => (
                                <option key={i} value={stateObj.name} className='text-gray'>{stateObj.name}</option>
                            ))}
                        </select>
                    </label>

                    <label htmlFor='lg' className='flex flex-col text-gray-700 text-sm'>
                        LGA
                        <select value={formData.local_government_area} onChange={handleChange} name="local_government_area" id="lg" className="border border-gray-300 text-gray-600 outline-none rounded-md p-1">
                            <option value="" disabled className='text-gray'>
                                Select Lga
                            </option>
                            {
                                formData.state && states.find(state=> state.name === formData.state).lgas.map((lg, i)=>(
                                    <option key={i} value={lg.name} className='text-gray'>{lg.name}</option>
                                ))
                            }

                        </select>
                    </label>

                    <label htmlFor='contact_phone_number' className='flex flex-col text-gray-700 text-sm'>
                        Phone
                        <input
                            required
                            type='tel'
                            placeholder='+234 808080808080'
                            id='contact_phone_number'
                            name='contact_phone_number'
                            checked={formData.contact_phone_number}
                            onChange={handleChange}
                            className='border border-gray-300 text-gray-600 placeholder-gray w-full outline-none rounded-md p-1'
                            min='1'
                        />
                    </label>

                    <label htmlFor='address' className='flex flex-col text-gray-700 text-sm'>
                        Address
                        <input
                            required
                            type='text'
                            placeholder="Address"
                            id='address'
                            name='address'
                            checked={formData.address}
                            onChange={handleChange}
                            className='border border-gray-300 text-gray-600 placeholder-gray w-full outline-none rounded-md p-1'
                            min='1'
                        />
                    </label>

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
            {/** Col two */}
            <div className='relative w-full h-[300px]'>
                <Image
                    priority={true}
                    fill
                    src="/location-img.png"
                    alt="Hero Image"
                    className="rounded-2xl"
                    style={{ objectFit: "contain" }}
                />
            </div>
        </section>
    )
}

export default ListingAddress
