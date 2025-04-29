"use client";
import React from 'react';
import Image from "next/image";
import { FaSpinner } from 'react-icons/fa6';
import { useGlobalContext } from '../Context';
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InitialSignup = () => {
    const {
        handleInitialSignup,
        loading,
        handleGoogleSignup,
        handleOnchange,
        formData,
        errorMsg,
    } = useGlobalContext();

    return (
        <div className="min-h-screen flex items-center justify-center py-30 md:px-16 px-4">
            <ToastContainer />
            <div className="flex flex-col gap-4 items-center">
                {/* Logo */}
                <Image src="/ayinla-logo-1.PNG" alt="Ayinla Logo" priority width={100} height={100} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">Initial Sign Up </h1>
                <form onSubmit={handleInitialSignup} className="flex min-w-[300px] max-w-[500px] flex-col gap-4">
                    <div className="flex flex-col w-full gap-4">
                        {/* Email Field */}
                        <label htmlFor="email" className="flex text-gray-700 flex-col text-sm md:text-base">
                            Email*
                            <input onChange={handleOnchange} type="email" placeholder="Enter your email" value={formData.email} name="email" id="email" className="border border-gray-300 text-gray-600 outline-none rounded-md p-3" />
                        </label>
                    </div>

                    {/** Error Message */}
                    {
                        errorMsg && <p className="text-red-600 text-xs font-semibold">{errorMsg}</p>
                    }
                    <button disabled={loading} type='submit' className="flex disabled:cursor-not-allowed items-center bg-[#23396A] text-sm text-white py-3 cursor-pointer text w-full justify-center border rounded-md">
                        {loading ? <FaSpinner className='text-white text-xl animate-spin' /> : "Get Started"}
                    </button>
                </form>

                {
                    // Signup with Google, only for create account
                    <div disabled={loading} className="flex w-full disabled:cursor-not-allowed items-center justify-center border border-gray-300 rounded-md p-3 cursor-pointer hover:bg-gray-100" onClick={handleGoogleSignup}>
                        <Image
                            src="/google-icon.png"
                            alt="Google Logo"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                        <span className="text-gray-700 text-sm font-medium">Sign up with Google</span>
                    </div>
                }

            </div>
        </div>
    )
}

export default InitialSignup
