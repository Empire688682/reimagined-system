"use client";
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import { FaSpinner } from 'react-icons/fa6';
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from 'next/navigation';

const CompleteResetPwd = () => {
    const [loading, setLoading] = useState(false);
    const [newPassword, setNewPassword] = useState("");

    const searchParams = useSearchParams();
    const token = searchParams.get('token');

      const [formCondition, setFormCondition] = useState({
         length: false,
         character: false,
       });

       const handleCondition = () => {
        setFormCondition({
          length: newPassword.length >= 8, // Checks if newPassword is at least 8 characters long
          character: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword), // Checks if password contains a special character
        });
      };

      useEffect(()=>{
        handleCondition()
      },[newPassword])

      const handleCompleteResetPassword = async (e) => {
        e.preventDefault();
        if (!token|| !newPassword.trim()) {
          toast.error("Please enter your token and new password");
          return;
        }
        if(!formCondition.length || !formCondition.character){
          toast.error("Password must be at least 8 characters long with special character");
          return;
        }
        setLoading(true);
        try {
          const response = await axios.post(
            `${ApiUrl}/complete-password-recovery`,
            {
              token: token,
              new_password: newPassword,
            },
            {
              headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "ApiKeyAuth",
              },
            }
          );
          if (response.status === 200) {
            toast.success("Password reset successfully");
            route.push("/");
          } else {
            toast.error("Unexpected response:", response);
          }
        } catch (error) {
          toast.error("An error occurred:", error);
        } finally {
          setLoading(false);
        }
      };

    return (
        <div className="min-h-screen flex items-center justify-center py-30 md:px-16 px-4">
            <ToastContainer />
            <div className="flex flex-col gap-4 items-center">
                {/* Logo */}
                <Image src="/ayinla-logo-1.PNG" alt="Ayinla Logo" priority width={100} height={100} />
                <h1 className="md:text-2xl text-1xl text-gray-700 font-semibold">Complete Reset Password </h1>
                <form onSubmit={handleCompleteResetPassword} className="flex min-w-[300px] max-w-[500px] flex-col gap-4">
                    <div className="flex flex-col w-full gap-4">
                        {/* Password Field */}
                        <label htmlFor="new_password" className="flex text-gray-700 flex-col text-sm md:text-base">
                            New Password*
                            <input onChange={(e)=>setNewPassword(e.target.value)} type="password" placeholder="Enter your new password" value={newPassword} id="new_password" className="border border-gray-300 text-gray-600 outline-none rounded-md p-3" />
                        </label>
                    </div>

                    <button disabled={loading} type='submit' className="flex disabled:cursor-not-allowed items-center bg-[#23396A] text-sm text-white py-3 cursor-pointer text w-full justify-center border rounded-md">
                        {loading ? <FaSpinner className='text-white text-xl animate-spin' /> : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CompleteResetPwd
