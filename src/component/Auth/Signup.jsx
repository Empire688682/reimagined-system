"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useGlobalContext } from "../Context";
import Verification from "./Verification";
import axios from "axios"
import CreateAccount from "./SignUpModals/CreateAccount";
import PersonalDetails from "./SignUpModals/PersonalDetails";

const Signup = () => {
    const { route, createAcctUrl } = useGlobalContext();
    const [formCategory, setFormCategory] = useState("Create Account");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

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
    const handleCreateAcctFormSubmit = async (e) => {
        e.preventDefault();
        const { email } = formData;
    
        // Validate required fields
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            setErrorMsg("Please enter a valid email address");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        }
    
        try {
            setLoading(true);
    
            // Send the request with the required headers
            const response = await axios.post(createAcctUrl, {
                email: formData.email,
                base_url: "http://example.com",
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": "ApiKeyAuth", 
                },
            });
    
            // Check if the response status is 204 (No Content)
            if (response.status === 204) {
                console.log("User signup successfully");
                alert("User registered successfully");
    
                // Move to personal details form
                setFormCategory("Personal Details");
            } else {
                // Handle unexpected response status
                console.log("Unexpected response:", response);
            }
        } catch (error) {
            console.error("Error during signup:", error);
            setErrorMsg(error.response?.data?.message || error.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };
    


    // Handles Signup with google
    const handleGoogleSignup = () => {
        console.log("User signed up with Google successfully");
        alert("User signed up with Google successfully");
    }

    // Handles full form submission with additional details
    const handlePersonalDetailSubmit = (e) => {
        e.preventDefault();

        const { email, firstName, lastName, phone, job } = formData;

        // Validate required fields
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email) ||
            !firstName.trim() || !lastName.trim() ||
            !phone.trim() || !job.trim()) {
            setErrorMsg("All fields are required");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        }
        if (!formCondition.length || !formCondition.character) {
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
    const handleResendingEmail = () => {
        alert(`Resending email successfully to ${formData.email}`)
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-30 md:px-16 px-4">
            <div className="flex flex-col gap-4 items-center">
                {/* Logo */}
                <Image src="/colored-ayinla-logo.png" alt="Ayinla Logo" priority width={60} height={60} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">{formCategory}</h1>
                {
                    formCategory === "Create Account" && (
                        <CreateAccount
                            handleCreateAcctFormSubmit={handleCreateAcctFormSubmit}
                            handleOnchange={handleOnchange}
                            formData={formData}
                            errorMsg={errorMsg}
                        />
                    )
                }
                {
                    formCategory === "Personal Details" && (
                        <PersonalDetails
                            handlePersonalDetailSubmit={handlePersonalDetailSubmit}
                            handleOnchange={handleOnchange}
                            formData={formData}
                            errorMsg={errorMsg}
                            handleSkipClick={handleSkipClick}
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                        />
                    )
                }
                {
                    formCategory === "Check your email" && (
                        <Verification
                            userEmail={formData.email}
                            handleResendingEmail={handleResendingEmail}
                        />
                    )
                }


            </div>
        </div>
    );
};

export default Signup;
