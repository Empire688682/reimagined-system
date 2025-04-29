"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import axios from "axios";
import { FaSpinner } from 'react-icons/fa6';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPwd = () => {
    const { route, BaseUrl, ApiUrl } = useGlobalContext();
    const [loading, setLoading] = useState(false);

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

    const handleForgotPassword = async () => {
        const { email } = formData;
        if (!email.trim()) {
            toast.error("Please enter your email address");
            return
        }
        setLoading(true);
        try {
            const response = await axios.post(`${ApiUrl}/initiate-password-recovery`, {
                email: formData.email,
                base_url: BaseUrl
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-API-KEY": "ApiKeyAuth",
                    },
                }
            );

            // Check if the response status is 204 (No Content)
            if (response.status === 204) {
                console.log("response:", response);
                console.log("Recovery link Data", formData);
                toast.success(`Recovery link sent to: ${formData.email}`);
                route.push('/');
            } else {
                // Handle unexpected response status
                toast.error("Unexpected response:", response);
            };

        } catch (error) {
            console.error("Error during PwdRecovery:", error);
            toast.error(error.response?.data?.error_code || error.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex grid grid-cols-1 gap-24 md:grid-cols-2   py-30 md:px-16 px-4">
            <ToastContainer />
            <div className="flex flex-col max-w-[500px] min-w-[300px] md:min-w-[350px] m-auto gap-4 items-center">
                {/* Logo */}
                <Image src="/ayinla-logo-1.PNG" alt="Ayinla Logo" priority width={100} height={100} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">Forgort Password</h1>
                <p className="text-gray-700">Please enter your email to reset your password</p>
                <form onSubmit={handleForgotPassword} className="flex w-full flex-col gap-4">
                    <div className="flex flex-col w-full gap-4">
                        {/* Email Field */}
                        <label htmlFor="email" className="flex text-gray-700 flex-col text-sm md:text-base">
                            Email*
                            <input onChange={handleOnchange} type="email" placeholder="Enter your email" value={formData.email} name="email" id="email" className="border border-gray-300 text-gray-600 outline-none rounded-md p-3" />
                        </label>
                    </div>
                    <button type="submit" className="flex items-center bg-[#23396A] text-sm text-white p-3 cursor-pointer text w-full justify-center border rounded-md">
                        {loading ? <FaSpinner className="animate-spin text-lg text-white" /> : "Resset Password"}
                    </button>
                </form>
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

export default ResetPwd;
