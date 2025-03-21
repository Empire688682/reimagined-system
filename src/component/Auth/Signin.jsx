"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline, IoMdCheckmarkCircle } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useGlobalContext } from "../Context";

// Define available states and corresponding cities
const statesAndCities = {
    "Lagos": ["Ikeja", "Surulere", "Lekki"],
    "Abuja": ["Garki", "Wuse", "Maitama"],
    "Kano": ["Kano Municipal", "Fagge", "Dala"],
    "Rivers": ["Port Harcourt", "Obio-Akpor", "Bonny"],
    "Ogun": ["Abeokuta", "Ijebu-Ode", "Sango Ota"],
    "Kogi": ["Lokoja", "Okene", "Idah", "Yagba West"]
};

// Define available job roles
const jobs = ["Engineer", "Doctor", "Teacher", "Designer", "Developer"];

const Signin = () => {
    const { route } = useGlobalContext();
    const [formCategory, setFormCategory] = useState("Create Account");
    const [errorMsg, setErrorMsg] = useState("");

    // State to manage user input
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Handles input changes and updates form data
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Handles Lingin form
    const handleFormSubmission = (e) => {
        e.preventDefault();

        const { password, email } = formData;

        // Validate required fields
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email) || password.length < 0) {
            setErrorMsg("All fields are required");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        }

        console.log("User login successfully", formData);
        alert("User Login");
        route.push("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-30 md:px-16 px-4">
            <div className="flex flex-col gap-4 items-center">
                {/* Logo */}
                <Image src="/colored-ayinla-logo.png" alt="Ayinla Logo" priority width={60} height={60} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">Login</h1>
                <p className="text-gray-700">Welcome back! Please enter your details</p>
                <form onSubmit={handleFormSubmission} className="flex w-full flex-col gap-4">
                    <div className="flex flex-col w-full gap-4">
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
                    </div>
                    <div className="flex justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="cursor-pointer" />
                            <p>Remember me</p>
                        </div>
                        <p className="text-sm text-blue-500 cursor-pointer">Forgot password</p>
                    </div>
                    <button type="submit" className="flex items-center bg-[#23396A] text-sm text-white py-2 cursor-pointer text w-full justify-center border rounded-md">
                        Sign in
                    </button>
                </form>
                {/** Error Message */}
                {
                    errorMsg && <p className="text-red-600 text-xs font-semibold">{errorMsg}</p>
                }
                <div className="flex w-full items-center justify-center border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100">
                    <Image
                        src="/google-icon.png"
                        alt="Google Logo"
                        width={20}
                        height={20}
                        className="mr-2"
                    />
                    <span className="text-gray-700 text-sm font-medium">Sign up with Google</span>
                </div>
                <div className="flex gap-2 items-center text-sm">
                    <p className="flex text-gray-700 gap-2 items-center">Don't have an account?</p>
                    <span className="text-blue-500 cursor-pointer" onClick={() => route.push("/signup")}>Sign up</span>
                </div>
            </div>
        </div>
    );
};

export default Signin;
