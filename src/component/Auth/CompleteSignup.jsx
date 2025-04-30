"use client";
import React from 'react';
import { IoIosCheckmarkCircleOutline, IoMdCheckmarkCircle } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaSpinner } from 'react-icons/fa6';
import { useGlobalContext } from '../Context';
import Image from "next/image";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define available job roles
const jobs = ["Engineer", "Doctor", "Teacher", "Designer", "Developer"];
const CompleteSignup = () => {
    const {
        handleCompleteSignup,
        loading,
        handleOnchange,
        formData,
        errorMsg,
        showPassword,
        setShowPassword,
        formCondition,
        handleSkipClick,
    } = useGlobalContext();
    return (
        <div className="min-h-screen flex items-center justify-center py-30 md:px-16 px-4">
            <ToastContainer />
            <div className="flex flex-col gap-4 items-center">
                {/* Logo */}
                <Image src="/ayinla-logo-1.PNG" alt="Ayinla Logo" priority width={100} height={100} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">Complete Sign Up </h1>
                <form onSubmit={handleCompleteSignup} className="flex min-w-[300px] max-w-[500px] flex-col gap-4">
                    <div className="flex flex-col w-full gap-4">
                        <div className="flex gap-4 flex-col md:flex-row">
                            {/* First Name Field */}
                            <label className="flex text-gray-700 flex-col text-sm md:text-base">
                                First Name*
                                <input onChange={handleOnchange} type="text" name="first_name" value={formData.first_name} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1" />
                            </label>
                            {/* Last Name Field */}
                            <label className="flex text-gray-700 flex-col text-sm md:text-base">
                                Last Name*
                                <input onChange={handleOnchange} type="text" name="last_name" value={formData.last_name} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1" />
                            </label>
                        </div>
                        {/* Password Field with Toggle Visibility */}
                        <label htmlFor="password" className="flex relative text-gray-700 flex-col text-sm md:text-base">
                            Password
                            <input onChange={handleOnchange} type={showPassword ? "text" : "password"} placeholder="Enter your password" value={formData.password} name="password" id="password" className="border border-gray-300 text-gray-600 outline-none rounded-md pl-1 py-1 pr-10" />
                            {
                                showPassword ?
                                    <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="absolute bottom-1 right-2 cursor-pointer text-lg" /> :
                                    <FaEye onClick={() => setShowPassword(!showPassword)} className="absolute bottom-1 right-2 cursor-pointer text-lg" />
                            }
                        </label>
                        {/* Phone Field */}
                        <label className="flex text-gray-700 flex-col text-sm md:text-base">
                            Phone
                            <input onChange={handleOnchange} type="tel" name="phone_number" value={formData.phone_number} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1" />
                        </label>
                        {/* Job Dropdown */}
                        <label className="flex text-gray-700 flex-col text-sm md:text-base">
                            Job
                            <select name="job_title" value={formData.job_title} onChange={handleOnchange} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1">
                                <option value="" disabled>Select your job role</option>
                                {jobs.map((job) => (
                                    <option key={job} value={job}>{job}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    {/** Error Message */}
                    {
                        errorMsg && <p className="text-red-600 text-xs font-semibold">{errorMsg}</p>
                    }
                    <div className="flex flex-col gap-1">
                        {/* Password Validation Conditions */}
                        <div className="flex gap-2 items-center">
                            {formCondition.length ? <IoMdCheckmarkCircle /> : <IoIosCheckmarkCircleOutline />}
                            <p className="text-[13px] text-gray-700">Password must be at least 8 characters</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            {formCondition.character ? <IoMdCheckmarkCircle /> : <IoIosCheckmarkCircleOutline />}
                            <p className="text-[13px] text-gray-700">Password must contain at least one special character</p>
                        </div>
                    </div>
                    <button type="submit" className="flex items-center bg-[#23396A] text-sm text-white py-2 cursor-pointer text w-full justify-center border rounded-md">
                        {loading ? <FaSpinner className="animate-spin text-lg text-white" /> : "Continue"}
                    </button>
                    {/* Skip submit button */}
                    <p
                        onClick={handleSkipClick}
                        className="flex items-center gap-2 text-sm py-2 cursor-pointer text w-full justify-center"
                    >
                        Skip for now
                    </p>
                </form>
            </div>
        </div>
    )
}

export default CompleteSignup
