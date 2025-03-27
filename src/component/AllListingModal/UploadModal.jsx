import React from 'react';
import { FiUploadCloud } from "react-icons/fi";

const UploadModal = ({ setModals }) => {
    return (
        <section className='h-screen md:p-16 p-4 mt-20 flex flex-col gap-40'>
            <div className='flex justify-between items-center'>
                <h1 className='md:font-semibold'>New Listing</h1>
                <p className=' text-center text-sm border py-1 px-6 border-gray-300'>
                    2
                </p>
            </div>
            <form className='flex flex-col items-center gap-10 mx-auto'>
                <div className='flex flex-col items-center gap-1'>
                <h2 className='text-1xl md:text-2xl font-semibold md:font-normal text-blue-500'>Image Upload</h2>
                <p className='text-sm md:text-base text-center'>Please upload a minimum of 4, and a maximum of 8 images</p>
                </div>
                <label htmlFor="image" className='flex border w-full p-3 rounded-sm border-gray-300 flex-col items-center gap-4 cursor-pointer'>
                <FiUploadCloud className='text-3xl text-gray-500 text-center cursor-pointer' />
                <p className='text-sm text-center'><span className='text-blue-500'>Click to upload</span> or drag and drop <br/> SVG, PNG, JPG or GIF (max. 800x400px) </p>
                </label>
                <input type="file" name="image" id="image" hidden />
            </form>
        </section>
    )
}

export default UploadModal
