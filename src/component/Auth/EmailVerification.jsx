"use client";
import { useGlobalContext } from "../Context";
import Image from "next/image";

const EmailVerification = ({ }) => {
    const {
        route,
        userEmail,
        handleEmailVerification
    } = useGlobalContext();

    return (
        <div className="min-h-screen flex items-center justify-center pb-15 pt-40 md:px-16 px-4">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="md:text-4xl text-3xl text-gray-700 font-semibold">Email Verification </h1>
                <p className="mb-4">We sent a verification pin to <span className="text-[#23396A] cursor-pointer font-semibold">{userEmail}</span></p>
                <p
                    className="flex items-center bg-[#23396A] text-sm text-white py-2 cursor-pointer text w-full justify-center border rounded-md"
                    onClick={() => window.location.href = "mailto:"}
                >
                    Open email app
                </p>
                <p className="text-sm my-3">Dont recieve the email? <span className="text-[#23396A] cursor-pointer font-semibold" onClick={handleEmailVerification}> Click to resend</span></p>

                <p className="text-sm my-3">Already have an account? <span className="text-[#23396A] cursor-pointer font-semibold" onClick={() => route.push("/signin")}> Log in</span></p>
            </div>
        </div>
    );
};

export default EmailVerification;
