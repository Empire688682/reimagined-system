"use client";
import { useGlobalContext } from "../Context";

const Verification = ({ userEmail, handleResendingEmail }) => {
    const { route } = useGlobalContext();


    return (
        <div className="text-center w-full max-w-[400px] m-auto">
            <p className="mb-4">We sent a verification pin to <span className="text-[#23396A] cursor-pointer font-semibold">{userEmail}</span></p>
            <p
                className="flex items-center bg-[#23396A] text-sm text-white py-2 cursor-pointer text w-full justify-center border rounded-md"
                onClick={() => window.location.href = "mailto:"}
            >
                Open email app
            </p>
            <p className="text-sm my-3">Dont recieve the email? <span className="text-[#23396A] cursor-pointer font-semibold" onClick={handleResendingEmail}> Click to resend</span></p>

            <p className="text-sm my-3">Already have an account? <span className="text-[#23396A] cursor-pointer font-semibold" onClick={()=>route.push("/signin")}> Log in</span></p>
        </div>
    );
};

export default Verification;
