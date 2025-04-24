"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import axios from "axios";
import { FaSpinner } from 'react-icons/fa6';

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
    const [formCategory, setFormCategory] = useState("Login");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const loginUrl = "https://ayinla-api.aweayo.com.ng/api/v1/auth/login";

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

    // Handles Login form
    const handleLogin = async (e) => {
        e.preventDefault();

        const { password, email } = formData;

        // Validate required fields
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email) || password.length < 0) {
            setErrorMsg("All fields are required");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        };
        setLoading(true);
        try {
            const response = await axios.post(loginUrl, {
                email: formData.email,
                password: formData.password
            },
            {
                headers:{
                    "Content-Type": "application/json",
                    "X-API-KEY": "ApiKeyAuth",
                },
            }
        );

         // Check if the response status is 204 (No Content)
         if (response.status === 200) {
            console.log("response:", response);
            console.log("User login successfully", formData);
            alert("User Login successful");
            route.pus('/');
        } else {
            // Handle unexpected response status
            console.log("Unexpected response:", response);
        };

        } catch (error) {
            console.error("Error during login:", error);
            setErrorMsg(error.response?.data?.error_code || error.message || "An error occurred");
        }finally{
            setLoading(false);
        }
    };

    const handleForgotPassword = (e) => {
        const { email } = formData;
        e.preventDefault();
        if (!email.trim()) {
            setErrorMsg("Please enter your email address");
            return
        }
        console.log("Password reset link sent to your email");
        alert(`Password reset link sent to your email: ${email}`);
        window.location.reload();
    };

    return (
        <div className="min-h-screen flex grid grid-cols-1 gap-24 md:grid-cols-2   py-30 md:px-16 px-4">
            <div className="flex flex-col max-w-[500px] min-w-[300px] md:min-w-[350px] m-auto gap-4 items-center">
                {/* Logo */}
                <Image src="/ayinla-logo-1.PNG" alt="Ayinla Logo" priority width={100} height={100} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">{formCategory}</h1>
                {
                    formCategory === "Login" ?
                        <p className="text-gray-700">Welcome back! Please enter your details</p>
                        :
                        <p className="text-gray-700">Please enter your email to reset your password</p>
                }
                <form onSubmit={handleLogin} className="flex w-full flex-col gap-4">
                    <div className="flex flex-col w-full gap-4">
                        {/* Email Field */}
                        <label htmlFor="email" className="flex text-gray-700 flex-col text-sm md:text-base">
                            Email*
                            <input onChange={handleOnchange} type="email" placeholder="Enter your email" value={formData.email} name="email" id="email" className="border border-gray-300 text-gray-600 outline-none rounded-md p-3" />
                        </label>

                        {/* Password Field with Toggle Visibility */}
                        {
                            formCategory === "Login" && <label htmlFor="password" className="flex relative text-gray-700 flex-col text-sm md:text-base">
                                Password*
                                <input onChange={handleOnchange} type={showPassword ? "text" : "password"} placeholder="Enter your password" value={formData.password} name="password" id="password" className="border border-gray-300 text-gray-600 outline-none rounded-md p-3 pr-10" />
                                {
                                    showPassword ?
                                        <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="absolute bottom-3 right-2 cursor-pointer text-lg" /> :
                                        <FaEye onClick={() => setShowPassword(!showPassword)} className="absolute bottom-3 right-2 cursor-pointer text-lg" />
                                }
                            </label>
                        }
                    </div>
                    {
                        formCategory === "Login" &&
                        <div className="flex justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="cursor-pointer" />
                                <p>Remember me</p>
                            </div>
                            <p className="text-sm text-blue-500 cursor-pointer" onClick={() => setFormCategory("Forgotten Password")}>Forgot password</p>
                        </div>
                    }
                    {
                        formCategory === "Login" ?
                            <button type="submit" className="flex items-center bg-[#23396A] text-sm text-white p-3 cursor-pointer text w-full justify-center border rounded-md">
                                {loading ? <FaSpinner className="animate-spin text-lg text-white" />:"Sign in"}
                            </button>
                            : <p className="flex items-center bg-[#23396A] text-sm text-white p-3 cursor-pointer text w-full justify-center border rounded-md" onClick={handleForgotPassword}>
                                Resset Password
                            </p>
                    }
                </form>
                {/** Error Message */}
                {
                    errorMsg && <p className="text-red-600 text-xs font-semibold">{errorMsg}</p>
                }
                {
                    formCategory === "Login" &&
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
                }
                {
                    formCategory === "Login" &&
                    <div className="flex gap-2 items-center text-sm">
                        <p className="flex text-gray-700 gap-2 items-center">Don't have an account?</p>
                        <span className="text-blue-500 cursor-pointer" onClick={() => route.push("/signup")}>Sign up</span>
                    </div>
                }
            </div>
            <div className='relative h-[screen] hidden h-full md:block w-full'>
                <Image
                    priority={true}
                    fill
                    src="/service-img.png"
                    alt="Hero Image"
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    );
};

export default Signin;
