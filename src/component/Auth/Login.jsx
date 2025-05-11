"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import axios from "axios";
import { FaSpinner } from 'react-icons/fa6';

const Login = () => {
    const { route, ApiUrl, googleUrl } = useGlobalContext();
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    //TODO:comming back
    const [success, setSuccess] = useState(false);

    // ✅ State to manage "Remember me" checkbox
    const [remindMe, setRemindMe] = useState(false);

    // ✅ State to manage user input
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // ✅ Toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    // ✅ OnChange handler for input fields
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // ✅ Toggle "Remember me" checkbox and save/clear from localStorage
    const remindMeClick = () => {
        const newValue = !remindMe;
        setRemindMe(newValue);

        if (typeof window !== "undefined") {
            if (newValue) {
                // Save email and password in localStorage
                localStorage.setItem("rememberedEmail", formData.email);
            } else {
                // Clear stored data
                localStorage.removeItem("rememberedEmail");
            }
        }
    };

    // ✅ On mount, load stored credentials if present
    useEffect(() => {
        if (typeof window !== "undefined") {
            const rememberedEmail = localStorage.getItem("rememberedEmail");
            if (rememberedEmail) {
                setFormData({
                    email: rememberedEmail,
                    password: "",
                });
                setRemindMe(true);
            }
        }
    }, []);

    // ✅ Handles login form submission
    const handleLogin = async (e) => {
        e.preventDefault();

        const { password, email } = formData;

        if (!email.trim() || !/\S+@\S+\.\S+/.test(email) || password.length === 0) {
            setErrorMsg("All fields are required");
            setTimeout(() => setErrorMsg(""), 2000);
            return;
        };

        setLoading(true);

        try {
            const response = await axios.post(`${ApiUrl}/api/v1/auth/login`, {
                email: formData.email,
                password: formData.password
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": "ApiKeyAuth",
                },
            });

            if (response.status === 200) {
                console.log("User login successful", response);
                setFormData({
                    email: "",
                    password: "",
                })

                if (typeof window !== "undefined" && remindMe) {
                    // Update stored values in case user edited them
                    localStorage.setItem("rememberedEmail", formData.email);
                }

                alert("User Login successful");
                setSuccess(false)
                route.push('/');
            } else {
                console.log("Unexpected response:", response);
            }

        } catch (error) {
            console.error("Error during login:", error);
            setErrorMsg(error.response?.data?.error_code || error.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    // ✅ Google Login Handler
    const googleLogin = async () => {
        try {
            const response = await axios.get(googleUrl, {
                url: "http://example.com"
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 200) {
                console.log("Google login success:", response);
                alert("Login with Google successful");
            }
        } catch (error) {
            console.error("Error during Google login:", error);
            setErrorMsg(error.response?.data?.error_code || error.message || "An error occurred");
        }
    };

    return (
        <div className="min-h-screen flex grid grid-cols-1 gap-24 md:grid-cols-2 py-30 md:px-16 px-4">
            <div className="flex flex-col max-w-[500px] min-w-[300px] md:min-w-[350px] m-auto gap-4 items-center">
                {/* Logo */}
                <Image src="/ayinla-logo-1.PNG" alt="Ayinla Logo" priority width={100} height={100} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">Login</h1>
                <p className="text-gray-700">Welcome back! Please enter your details</p>
                <form onSubmit={handleLogin} className="flex w-full flex-col gap-4">
                    <div className="flex flex-col w-full gap-4">
                        {/* Email Field */}
                        <label htmlFor="email" className="flex text-gray-700 flex-col text-sm md:text-base">
                            Email*
                            <input onChange={handleOnchange} type="email" placeholder="Enter your email" value={formData.email} name="email" id="email" className="border border-gray-300 text-gray-600 outline-none rounded-md p-3" />
                        </label>

                        {/* Password Field with Toggle Visibility */}
                        <label htmlFor="password" className="flex relative text-gray-700 flex-col text-sm md:text-base">
                            Password*
                            <input onChange={handleOnchange} type={showPassword ? "text" : "password"} placeholder="Enter your password" value={formData.password} name="password" id="password" className="border border-gray-300 text-gray-600 outline-none rounded-md p-3 pr-10" />
                            {
                                showPassword ?
                                    <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="absolute bottom-3 right-2 cursor-pointer text-lg" /> :
                                    <FaEye onClick={() => setShowPassword(!showPassword)} className="absolute bottom-3 right-2 cursor-pointer text-lg" />
                            }
                        </label>
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className="flex justify-between text-sm">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={remindMeClick}>
                            <input type="checkbox" checked={remindMe} onChange={remindMeClick} className="cursor-pointer" />
                            <p>Remember me</p>
                        </div>
                        <p className="text-sm text-blue-500 cursor-pointer" onClick={() => route.push("/reset-password")}>Forgot password</p>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="flex items-center bg-[#23396A] text-sm text-white p-3 cursor-pointer text w-full justify-center border rounded-md">
                        {loading ? <FaSpinner className="animate-spin text-lg text-white" /> : "Login"}
                    </button>
                </form>

                {/* Error Message */}
                {
                    errorMsg && <p className="text-red-600 text-xs font-semibold">{errorMsg}</p>
                }

                {/* Google Login */}
                <div onClick={googleLogin} className="flex w-full items-center justify-center border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100">
                    <Image
                        src="/google-icon.png"
                        alt="Google Logo"
                        width={20}
                        height={20}
                        className="mr-2"
                    />
                    <span className="text-gray-700 text-sm font-medium">Sign up with Google</span>
                </div>

                {/* Sign Up Redirect */}
                <div className="flex gap-2 items-center text-sm">
                    <p className="flex text-gray-700 gap-2 items-center">Don't have an account?</p>
                    <span className="text-blue-500 cursor-pointer" onClick={() => route.push("/signup")}>Sign up</span>
                </div>
            </div>

            {/* Right Side Image */}
            <div className='relative hidden h-full md:block w-full'>
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

export default Login;
