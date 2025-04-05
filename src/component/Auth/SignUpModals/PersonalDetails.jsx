"use client";
import React from 'react';
import { IoIosCheckmarkCircleOutline, IoMdCheckmarkCircle } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Define available job roles
const jobs = ["Engineer", "Doctor", "Teacher", "Designer", "Developer"];
const PersonalDetails = ({handlePersonalDetailSubmit, handleOnchange, formData, showPassword, setShowPassword}) => {
    return (
        <div>
            {/** Personal Details Form */}
                <form onSubmit={handlePersonalDetailSubmit} className="flex min-w-[300px] max-w-[500px] flex-col gap-4">
                    <div className="flex flex-col w-full gap-4">
                        <div className="flex gap-4 flex-col md:flex-row">
                            {/* First Name Field */}
                            <label className="flex text-gray-700 flex-col text-sm md:text-base">
                                First Name*
                                <input onChange={handleOnchange} type="text" name="firstName" value={formData.firstName} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1" />
                            </label>
                            {/* Last Name Field */}
                            <label className="flex text-gray-700 flex-col text-sm md:text-base">
                                Last Name*
                                <input onChange={handleOnchange} type="text" name="lastName" value={formData.lastName} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1" />
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
                            <input onChange={handleOnchange} type="tel" name="phone" value={formData.phone} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1" />
                        </label>
                        {/* Job Dropdown */}
                        <label className="flex text-gray-700 flex-col text-sm md:text-base">
                            Job
                            <select name="job" value={formData.job} onChange={handleOnchange} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1">
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
                        Proceed
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
    )
}

export default PersonalDetails
