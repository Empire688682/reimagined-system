import React, { useState } from 'react';
import Image from 'next/image';

const statesCitiesAndLga = {
    "Lagos": {
      "Ikeja": ["Ikeja LGA"],
      "Surulere": ["Surulere LGA"],
      "Lekki": ["Eti-Osa LGA"]
    },
    "Abuja": {
      "Garki": ["Abuja Municipal LGA"],
      "Wuse": ["Abuja Municipal LGA"],
      "Maitama": ["Abuja Municipal LGA"]
    },
    "Kano": {
      "Kano Municipal": ["Kano Municipal LGA"],
      "Fagge": ["Fagge LGA"],
      "Dala": ["Dala LGA"]
    },
    "Rivers": {
      "Port Harcourt": ["Port Harcourt LGA"],
      "Obio-Akpor": ["Obio-Akpor LGA"],
      "Bonny": ["Bonny LGA"]
    },
    "Ogun": {
      "Abeokuta": ["Abeokuta South LGA", "Abeokuta North LGA"],
      "Ijebu-Ode": ["Ijebu-Ode LGA"],
      "Sango Ota": ["Ado-Odo/Ota LGA"]
    },
    "Kogi": {
      "Lokoja": ["Lokoja LGA"],
      "Okene": ["Okene LGA"],
      "Idah": ["Idah LGA"],
      "Yagba West": ["Yagba West LGA"]
    }
  };
  

const ListingAddress = () => {
    const [formData, setFormData] = useState({
        name: "",
        state: "",
        city: "",
        lg: "",
        apSt: '',
        phone: "",
        address: "",
    });
    //Onchange handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission for booking
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };
    return (
        <section className='grid relative grid-cols-1 md:grid-cols-2 mt-20 items-center gap-10 py-10 '>
            <span className='absolute right-6 md-right-16 top-3 text-center text-sm border py-1 px-6 border-gray-300'>
                1
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

                    {
                        statesCitiesAndLga.map((drop, i)=>(
                            <label key={i} htmlFor='eTime' className='flex flex-col text-gray-700 text-sm'>
                        {drop.key()}
                        </label>
                        ))
                    }

                    <label htmlFor='apSt' className='flex flex-col text-gray-700 text-sm'>
                        Apt, St
                        <input
                            required
                            type='text'
                            placeholder='12 Block B'
                            id='apSt'
                            name='apSt'
                            value={formData.apSt}
                            onChange={handleChange}
                            className='border border-gray-300 text-gray-600 placeholder-gray w-full outline-none rounded-md p-1'
                            min='1'
                        />
                    </label>

                    <label htmlFor='phone' className='flex flex-col text-gray-700 text-sm'>
                        Phone
                        <input
                             required
                             type='tel'
                             placeholder='+234 808080808080'
                             id='phone'
                             name='phone'
                             checked={formData.phone}
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
                    style={{ objectFit: "contain"}}
                />
            </div>
        </section>
    )
}

export default ListingAddress
