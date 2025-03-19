"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline, IoMdCheckmarkCircle } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
    // State to manage user input
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    // State to track password validation conditions
    const [formCondition, setFormCondition] = useState({
        length: false,
        character: false,
    });

    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Handles input changes and updates form data
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Validates password conditions whenever the password input changes
    const handleCondition = () => {
        const { password } = formData;
        setFormCondition({
            length: password.length >= 8,
            character: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        });
    };

    // Runs password validation whenever password state changes
    useEffect(() => {
        handleCondition();
    }, [formData.password]);

    // Handles form submission with validation checks
    const handleFormSubmission = (e) => {
        e.preventDefault();
        const { name, email, password } = formData;

        // Check if name is empty
        if (!name.trim()) {
            alert("Name is required");
            return;
        }

        // Validate email format
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Validate password against form conditions
        if (!formCondition.length || !formCondition.character) {
            alert("Password must be at least 8 characters long and include a special character");
            return;
        }

        console.log("Form submitted successfully", formData); // Send data to backend here
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-30 md:px-16 px-4">
            <div className="flex flex-col gap-4 items-center">
                {/* Logo */}
                <Image src="/colored-ayinla-logo.png" alt="Ayinla Logo" priority width={60} height={60} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">Create an Account</h1>
                
                {/* Signup Form */}
                <form onSubmit={handleFormSubmission} className="flex flex-col gap-4">
                    {/* Name Field */}
                    <label htmlFor="name" className="flex text-gray-700 flex-col text-sm md:text-base">
                        Name*
                        <input onChange={handleOnchange} type="text" placeholder="Enter your name" value={formData.name} name="name" id="name" className="border border-gray-300 text-gray-600 outline-none rounded-md p-1" />
                    </label>
                    
                    {/* Email Field */}
                    <label htmlFor="email" className="flex text-gray-700 flex-col text-sm md:text-base">
                        Email*
                        <input onChange={handleOnchange} type="email" placeholder="Enter your email" value={formData.email} name="email" id="email" className="border border-gray-300 text-gray-600 outline-none rounded-md p-1" />
                    </label>
                    
                    {/* Password Field with Toggle Visibility */}
                    <label htmlFor="password" className="flex relative text-gray-700 flex-col text-sm md:text-base">
                        Password*
                        <input onChange={handleOnchange} type={showPassword ? "text" : "password"} placeholder="Enter your password" value={formData.password} name="password" id="password" className="border border-gray-300 text-gray-600 outline-none rounded-md pl-1 py-1 pr-10" />
                        {
                            showPassword ? 
                                <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="absolute bottom-1 right-2 cursor-pointer text-lg" /> :
                                <FaEye onClick={() => setShowPassword(!showPassword)} className="absolute bottom-1 right-2 cursor-pointer text-lg" />
                        }
                    </label>
                    
                    {/* Password Validation Conditions */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            {formCondition.length ? <IoMdCheckmarkCircle /> : <IoIosCheckmarkCircleOutline />}
                            <p className="text-[13px] text-gray-700">Password must be at least 8 characters</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            {formCondition.character ? <IoMdCheckmarkCircle /> : <IoIosCheckmarkCircleOutline />}
                            <p className="text-[13px] text-gray-700">Password must contain at least one special character</p>
                        </div>
                    </div>
                    
                    {/* Submit Button */}
                    <button type="submit" className="bg-[#23396A] text-white text-sm py-2 cursor-pointer rounded-md">Get Started</button>
                </form>
                
                {/* Signup with Google Button */}
                <button className="flex items-center gap-2 text-sm py-2 cursor-pointer rounded-md border border-gray-300 w-full justify-center">
                    <Image src="/google-icon.png" alt="Google Logo" priority width={20} height={20} />
                    Signup with Google
                </button>
            </div>
        </div>
    );
};

export default Signup;
