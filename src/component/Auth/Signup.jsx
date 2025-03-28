"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline, IoMdCheckmarkCircle } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import Verification from "./Verification";

// TO BE DELETED IF NOT NEEDED
//const statesAndCities = {
//  "Lagos": ["Ikeja", "Surulere", "Lekki"],
//  "Abuja": ["Garki", "Wuse", "Maitama"],
//  "Kano": ["Kano Municipal", "Fagge", "Dala"],
//  "Rivers": ["Port Harcourt", "Obio-Akpor", "Bonny"],
//  "Ogun": ["Abeokuta", "Ijebu-Ode", "Sango Ota"],
// "Kogi": ["Lokoja", "Okene", "Idah", "Yagba West"]
//};

// Define available job roles
const jobs = ["Engineer", "Doctor", "Teacher", "Designer", "Developer"];

const Signup = () => {
    const { route } = useGlobalContext();
    const [formCategory, setFormCategory] = useState("Create Account");
    const [errorMsg, setErrorMsg] = useState("");

    // State to manage user input
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
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

    // Handles form submission for initial account creation with Email only
    const handleCreateAcctFormSubmission = (e) => {
        e.preventDefault();
        const { email } = formData;

        // Validate required fields
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            setErrorMsg("Please enter a valid email address");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        }

         // Move to personal details form
        setFormCategory("Personal Details");
        console.log("Form submitted successfully", formData);
        alert("User pushed to Personal Details section");
    };

    // Handles Signup with google
    const handleGoogleSignup = () => {
        console.log("User signed up with Google successfully");
        alert("User signed up with Google successfully");
    }

    // Handles full form submission with additional details
    const handleFullFormSubmission = (e) => {
        e.preventDefault();

        const { email, firstName, lastName, phone, job } = formData;

        // Validate required fields
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)||
            !firstName.trim() || !lastName.trim() ||
            !phone.trim() || !job.trim()) {
            setErrorMsg("All fields are required");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        }
        if(!formCondition.length || !formCondition.character ){
            setErrorMsg("Password must be at least 8 characters long with special character");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        }

        console.log("Form submitted successfully", formData);
        alert("User registered with full details successfully");
        // Move to Email verification if  registration is successful
        setFormCategory("Check your email");
    };

    // Handles skipping personal details
    const handleSkipClick = (e) => {
        e.preventDefault();
        console.log("Form submitted successfully", formData);
        alert("User registered with half details");

        // Move to Email verification if  registration is successful
        setFormCategory("Check your email");
    };

       // Handles resending email
    const handleResendingEmail = () =>{
        alert(`Resending email successfully to ${formData.email}`)
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-30 md:px-16 px-4">
            <div className="flex flex-col gap-4 items-center">
                {/* Logo */}
                <Image src="/colored-ayinla-logo.png" alt="Ayinla Logo" priority width={60} height={60} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">{formCategory}</h1>

                <form onSubmit={handleFullFormSubmission} className="flex min-w-[300px] max-w-[500px] flex-col gap-4">
                    {
                        //Signup Form / Create an Account
                        formCategory === "Create Account" &&
                        <div className="flex flex-col w-full gap-4">
                            {/* Email Field */}
                            <label htmlFor="email" className="flex text-gray-700 flex-col text-sm md:text-base">
                                Email*
                                <input onChange={handleOnchange} type="email" placeholder="Enter your email" value={formData.email} name="email" id="email" className="border border-gray-300 text-gray-600 outline-none rounded-md p-1" />
                            </label>
                        </div>
                    }

                    {
                        //Signup Form / Personal Details
                        formCategory === "Personal Details" &&
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
                            {/* // TO BE DELETED IF NOT NEEDED */}
                            {//<label className="flex text-gray-700 flex-col text-sm md:text-base">
                                //  State
                                // <select name="state" value={formData.state} onChange={handleOnchange} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1">
                                //    <option value="" disabled>Select your state</option>
                                //    {Object.keys(statesAndCities).map((state) => (
                                //       <option key={state} value={state}>{state}</option>
                                //   ))}
                                //</select>
                                // </label>
                            }
                            {/* // TO BE DELETED IF NOT NEEDED */}
                            {//<label className="flex text-gray-700 flex-col text-sm md:text-base">
                                //City
                                //<select name="city" value={formData.city} onChange={handleOnchange} className="border border-gray-300 text-gray-600 outline-none rounded-md p-1">
                                //  <option value="" disabled>Select your city</option>
                                // {formData.state && statesAndCities[formData.state]?.map((city) => (
                                //     <option key={city} value={city}>{city}</option>
                                // ))}
                                // </select>
                                // </label>
                            }
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
                        formCategory === "Personal Details" &&
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
                        formCategory === "Create Account" &&
                        <p className="flex items-center bg-[#23396A] text-sm text-white py-2 cursor-pointer text w-full justify-center border rounded-md" onClick={handleCreateAcctFormSubmission}>
                            Get Started
                        </p>
                    }
                    {
                        formCategory === "Personal Details" &&
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
                    // Signup with Google, only for create account
                    formCategory === "Create Account" && <div className="flex w-full items-center justify-center border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100" onClick={handleGoogleSignup}>
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

                {
                    formCategory === "Check your email" && <Verification userEmail={formData.email} handleResendingEmail={handleResendingEmail}/>
                }

            </div>
        </div>
    );
};

export default Signup;
