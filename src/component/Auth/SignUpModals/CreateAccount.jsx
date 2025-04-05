"use client";
import React from 'react';
import Image from "next/image";

const CreateAccount = ({ handleCreateAcctFormSubmit, loading, handleGoogleSignup, handleOnchange, formData, errorMsg }) => {
    return (
        <div className='flex flex-col gap-4'>
            <form onSubmit={handleCreateAcctFormSubmit} className="flex min-w-[300px] max-w-[500px] flex-col gap-4">
                <div className="flex flex-col w-full gap-4">
                    {/* Email Field */}
                    <label htmlFor="email" className="flex text-gray-700 flex-col text-sm md:text-base">
                        Email*
                        <input onChange={handleOnchange} type="email" placeholder="Enter your email" value={formData.email} name="email" id="email" className="border border-gray-300 text-gray-600 outline-none rounded-md p-1" />
                    </label>
                </div>

                {/** Error Message */}
                {
                    errorMsg && <p className="text-red-600 text-xs font-semibold">{errorMsg}</p>
                }
                <button type='submit' className="flex items-center bg-[#23396A] text-sm text-white py-2 cursor-pointer text w-full justify-center border rounded-md">
                    {loading? "Get Started.....":"Get Started"}
                </button>
            </form>

            {
                // Signup with Google, only for create account
                <div className="flex w-full items-center justify-center border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100" onClick={handleGoogleSignup}>
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
    )
}

export default CreateAccount
