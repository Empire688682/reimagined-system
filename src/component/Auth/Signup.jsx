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

const Signup = () => {
    const { route } = useGlobalContext();
    const [formCategory, setFormCategory] = useState("Create Account");
    const [errorMsg, setErrorMsg] = useState("");

    // State to manage user input
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        state: "",
        city: "",
        job: "",
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
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            ...(name === "state" ? { city: "" } : {}), // Reset city when state changes
        }));
    };

    // Validates password conditions whenever the password input changes
    const handleCondition = () => {
        const { password } = formData;
        setFormCondition({
            length: password.length >= 8, // Checks if password is at least 8 characters long
            character: /[!@#$%^&*(),.?":{}|<>]/.test(password), // Checks if password contains a special character
        });
    };

    // Runs password validation whenever password state changes
    useEffect(() => {
        handleCondition();
    }, [formData.password]);

    // Handles form submission for initial account creation
    const handleCreateAcctFormSubmission = (e) => {
        e.preventDefault();
        const { name, email } = formData;

        // Validate required fields
        if (!name.trim()) {
            setErrorMsg("Name is required");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        }
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            setErrorMsg("Please enter a valid email address");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        }
        if (!formCondition.length || !formCondition.character) {
            setErrorMsg("Password must be at least 8 characters with a special character");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        }

        setFormCategory("Personal Details"); // Move to personal details form
        console.log("Form submitted successfully", formData);
        alert("User pushed to Personal section");
    };

    // Handles full form submission with additional details
    const handleFullFormSubmission = (e) => {
        e.preventDefault();

        const { name, email, firstName, lastName, phone, state, city, job } = formData;

        // Validate required fields
        if (!name.trim() || !email.trim() || !/\S+@\S+\.\S+/.test(email) ||
            !formCondition.length || !formCondition.character ||
            !firstName.trim() || !lastName.trim() || !state.trim() || !city.trim() ||
            !phone.trim() || !job.trim()) {
            setErrorMsg("All fields are required");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        }

        console.log("Form submitted successfully", formData);
        alert("User registered with full details successfully");
        setTimeout(() => route.push("/"), 2000);
    };

    // Handles skipping personal details
    const handleSkipClick = (e) => {
        e.preventDefault();
        console.log("Form submitted successfully", formData);
        alert("User registered with half details");
        setTimeout(() => route.push("/"), 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-30 md:px-16 px-4">
            <div className="flex flex-col gap-4 items-center">
                {/* Logo */}
                <Image src="/colored-ayinla-logo.png" alt="Ayinla Logo" priority width={60} height={60} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">{formCategory === "Create Account" ? "Create an Account" : "Personal Details"}</h1>

                <form onSubmit={handleFullFormSubmission} className="flex min-w-[300px] max-w-[400px] flex-col gap-4">
                    {
                        formCategory === "Create Account" ?
                            <div className="flex flex-col w-full gap-4">
                                {/* Signup Form / Create an Account */}
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
                            </div>
                            :
                            <div className="flex flex-col w-full gap-4">
                                {/* Signup Form / Personal Details */}
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
                                {/* Phone Field */}
                                <label className="flex text-gray-700 flex-col text-sm md:text-base">
                                    Phone
                                    <input onChange={handleOnchange} type="tel" name="phone" value={formData.phone} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1" />
                                </label>
                                {/* State Dropdown */}
                                <label className="flex text-gray-700 flex-col text-sm md:text-base">
                                    State
                                    <select name="state" value={formData.state} onChange={handleOnchange} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1">
                                        <option value="" disabled>Select your state</option>
                                        {Object.keys(statesAndCities).map((state) => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </label>
                                {/* City Dropdown (filtered based on state selection) */}
                                <label className="flex text-gray-700 flex-col text-sm md:text-base">
                                    City
                                    <select name="city" value={formData.city} onChange={handleOnchange} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1">
                                        <option value="" disabled>Select your city</option>
                                        {formData.state && statesAndCities[formData.state]?.map((city) => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
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
                    }
                    {/** Error Message */}
                    {
                        errorMsg && <p className="text-red-600 text-xs font-semibold">{errorMsg}</p>
                    }
                    {
                        formCategory === "Create Account" &&
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
                    }
                    {/* All three Submit Buttons */}
                    {
                        formCategory === "Create Account" ?
                            <p className="flex items-center bg-[#23396A] text-sm text-white py-2 cursor-pointer text w-full justify-center border rounded-md" onClick={handleCreateAcctFormSubmission}>
                                Get Started
                            </p> :
                            <button type="submit" className="flex items-center bg-[#23396A] text-sm text-white py-2 cursor-pointer text w-full justify-center border rounded-md">
                                Proceed
                            </button>
                    }
                    {/* Skip submit button */}
                    {
                        formCategory === "Personal Details" && (
                            <p
                                onClick={handleSkipClick}
                                className="flex items-center gap-2 text-sm py-2 cursor-pointer text w-full justify-center"
                            >
                                Skip for now
                            </p>
                        )
                    }

                </form>
                {
                    formCategory === "Create Account" && <div className="flex w-full items-center justify-center border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100">
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
    );
};

export default Signup;
