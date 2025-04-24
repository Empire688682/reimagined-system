"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import EmailVerification from "./EmailVerification";
import axios from "axios"
import InitialSignup from "./SignUpModals/InitialSignup";
import CompleteSignup from "./SignUpModals/CompleteSignup";

const initiateSignupUrl = "https://ayinla-api.aweayo.com.ng/api/v1/initiate-signup/"
const completeSignupUrl = "https://api.ayinlafilms.com/api/v1/auth/complete-signup/"

const Signup = () => {
    const [formCategory, setFormCategory] = useState("InitialSignup");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

    // State to manage user input
    const [formData, setFormData] = useState({
        token: "TOKEN",
        email: "user@example.com",
        password: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        job_title: "",
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
    const handleInitialSignup = async (e) => {
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
            const response = await axios.post(initiateSignupUrl, {
                email: "user@example.com",
                base_url: "http://example.com/",
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": "ApiKeyAuth",
                },
            });

            console.log("Response:", response);

            // Check if the response status is 204 (No Content)
            if (response.status === 204) {
                console.log("User signup successfully");
                alert("User registered successfully");

                // Move to CompleteSignup form
                setFormCategory("CompleteSignup");
            } else {
                // Handle unexpected response status
                console.log("Unexpected response:", response);
            }
        } catch (error) {
            console.error("Error during signup:", error);
            setErrorMsg(error.response?.data?.error_code || error.message || "An error occurred");
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
    const handleCompleteSignup = async (e) => {
        e.preventDefault();

        const { token, email, first_name, last_name, phone_number, job_title } = formData;

        // Validate required fields
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email) ||
            !first_name.trim() || !last_name.trim() ||
            !phone_number.trim() || !job_title.trim()) {
            setErrorMsg("All fields are required");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        }
        if (!formCondition.length || !formCondition.character) {
            setErrorMsg("Password must be at least 8 characters long with special character");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        }

        try {
            // Send the request with the required headers
            const response = await axios.post(completeSignupUrl, {
                token: formData.token,
                email: formData.email,
                first_name: formData.first_name,
                last_name: formData.last_name,
                phone_number: formData.phone_number,
                job_title: formData.job_title,
                password: formData.password,
                base_url: "http://localhost:3000/",
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

                // Move to EmailVerification form
                setFormCategory("EmailVerification");
            } else {
                // Handle unexpected response status
                console.log("Unexpected response:", response);
            }
        } catch (error) {
            console.error("Error during signup:", error);
            setErrorMsg(error.response?.data?.error_code || error.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    // Handles skipping CompleteSignup
    const handleSkipClick = (e) => {
        e.preventDefault();
        console.log("Form submitted successfully", formData);
        alert("User registered with half details");

        // Move to Email verification if  registration is successful
        setFormCategory("EmailVerification");
    };

    // Handles resending email
    const handleEmailVerification = () => {
        alert(`Resending email successfully to ${formData.email}`)
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-30 md:px-16 px-4">
            <div className="flex flex-col gap-4 items-center">
                {/* Logo */}
                <Image src="/ayinla-logo-1.PNG" alt="Ayinla Logo" priority width={100} height={100} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">{formCategory}</h1>
                {
                    formCategory === "InitialSignup" && (
                        <InitialSignup
                            handleInitialSignup={handleInitialSignup}
                            handleOnchange={handleOnchange}
                            formData={formData}
                            errorMsg={errorMsg}
                            loading={loading}
                        />
                    )
                }
                {
                    formCategory === "CompleteSignup" && (
                        <CompleteSignup
                            handleCompleteSignup={handleCompleteSignup}
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
                    formCategory === "EmailVerification" && (
                        <EmailVerification
                            userEmail={formData.email}
                            handleEmailVerification={handleEmailVerification}
                        />
                    )
                }


            </div>
        </div>
    );
};

export default Signup;
