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
        //must datas
        name: "",
        email: "",
        password: "",
        //Skip datas
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
            length: password.length >= 8,
            character: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        });
    };

    console.log(formData);

    // Runs password validation whenever password state changes
    useEffect(() => {
        handleCondition();
    }, [formData.password]);

    // Handles form submission with validation checks
    const handleCreateAcctFormSubmission = (e) => {
        e.preventDefault();

        const { name, email } = formData;

        if (!name.trim()) {
            setErrorMsg("Name is required");
            setTimeout(() => {
                setErrorMsg("");
            }, 2000);
            return;
        }
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            setErrorMsg("Please enter a valid email address");
            setTimeout(() => {
                setErrorMsg("");
            }, 2000);
            return;
        }
        if (!formCondition.length || !formCondition.character) {
            setErrorMsg("Password must be at least 8 characters with a special character");
            setTimeout(() => {
                setErrorMsg("");
            }, 2000);
            return;
        }
        setFormCategory("Personal Details");
        console.log("Form submitted successfully", formData);
        alert("User push to Personal section");
    };

    const handleFullFormSubmission = (e) => {
        e.preventDefault();

        const {
            name,
            email,
            firstName,
            lastName,
            phone,
            state,
            city,
            job,
        } = formData;

        if (!name.trim()) {
            setErrorMsg("Name is required");
            setTimeout(() => {
                setErrorMsg("")
            }, 2000);
            return;
        }
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            setErrorMsg("Please enter a valid email address");
            setTimeout(() => {
                setErrorMsg("")
            }, 2000);
            return;
        }
        if (!formCondition.length || !formCondition.character) {
            setErrorMsg("Password must be at least 8 characters with a special character");
            setTimeout(() => {
                setErrorMsg("")
            }, 2000);
            return;
        }
        if (!firstName.trim()) {
            setErrorMsg("firstName is required");
            return;
        }
        if (!lastName.trim()) {
            setErrorMsg("lastName is required");
            setTimeout(() => {
                setErrorMsg("")
            }, 2000);
            return;
        }
        if (!state.trim()) {
            setErrorMsg("state is required");
            setTimeout(() => {
                setErrorMsg("")
            }, 2000);
            return;
        }
        if (!city.trim()) {
            setErrorMsg("city is required");
            setTimeout(() => {
                setErrorMsg("")
            }, 2000);
            return;
        }
        if (!phone.trim()) {
            setErrorMsg("phone is required");
            setTimeout(() => {
                setErrorMsg("")
            }, 2000);
            return;
        }
        if (!job.trim()) {
            setErrorMsg("job is required");
            setTimeout(() => {
                setErrorMsg("")
            }, 2000);
            return;
        }
        route.push("/")
        console.log("Form submitted successfully", formData);
        alert("User registered with full details successfully");
        setTimeout(() => {
            route.push("/");
        }, 2000);
    }

    const handleSkipClick = (e) => {
        e.preventDefault();
        console.log("Form submitted successfully", formData);
        alert("User registered with half details");
        setTimeout(() => {
            route.push("/");
        }, 2000);
    }



    return (
        <div className="min-h-screen flex items-center justify-center py-30 md:px-16 px-4">
            <div className="flex flex-col gap-4 items-center">
                {/* Logo */}
                <Image src="/colored-ayinla-logo.png" alt="Ayinla Logo" priority width={60} height={60} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">{formCategory === "Create Account" ? "Create an Account" : "Personal Details"}</h1>

                <form className="flex min-w-[300px] flex-col gap-4">
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
                            <button type="submit" onClick={handleFullFormSubmission} className="flex items-center bg-[#23396A] text-sm text-white py-2 cursor-pointer text w-full justify-center border rounded-md">
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
            </div>
        </div>
    );
};

export default Signup;
