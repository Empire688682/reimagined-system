"use client"
import React, { useEffect, useState } from "react";
import { IoSquareOutline } from "react-icons/io5";
import { IoMdArrowDown, IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import { bookings } from "../Data";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { IoReturnDownBack } from "react-icons/io5";
import { useGlobalContext } from "../Context";
import axios from "axios";

const BookingHistory = () => {
    const { ApiUrl } = useGlobalContext();
    // State to store all bookings
    const [allBooking, setAllBooking] = useState([]);

    // State to manage loading state
    const [loading, setLoading] = useState(true);

    const [userToken, setUserToken] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("AccessToken");
            if (token) {
                setUserToken(token);
            }
        }
    }, []);

    // Fetch listing data on component mount
    useEffect(() => {
        const fetchListing = async () => {
            if (!userToken) {
                console.log("No user token found!");
                return;
            }

            setLoading(true);

            try {
                const response = await axios.get(`${ApiUrl}/api/v1/bookings`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${userToken}`
                    }
                });
                if (response.status === 200) {
                    setAllBooking(response.data)
                }
            } catch (error) {
                console.log("BookingH-Error:", error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchListing();
    }, [userToken]);

    return (
        <>
            {
                loading ? (
                    <LoadingSpinner /> // Show loading spinner while fetching data
                )
                    :
                    <div className="max-w-7xl mx-auto px-6 mt-24 md:mt-30 pb-15">
                        <h1 className="text-center text-xl font-semibold mb-4">Booking History</h1>

                        {/* Listing table */}
                        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                            <table className="w-full m-w-[500px] border border-gray-200 rounded-lg">

                                {/* Table Header */}
                                <thead className="bg-gray-100 text-gray-700">
                                    <tr>
                                        <th className="p-4 text-left">
                                            <div className="flex items-center gap-2">
                                                <IoSquareOutline />
                                                Invoice
                                                <IoMdArrowDown className="text-gray-500" />
                                            </div>
                                        </th>
                                        <th className="p-4 text-left">Date</th>
                                        <th className="p-4 text-left">Status</th>
                                        <th className="p-4 text-left">Customer</th>
                                        <th className="p-4 text-left">Property</th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="text-gray-600">
                                    {allBooking?.bookings.map((booking, id) => (
                                        <tr key={id} className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3 font-semibold">
                                                    <IoSquareOutline className="text-gray-400" />
                                                    # {id + 1}
                                                </div>
                                            </td>
                                            <td className="p-4">{booking.created_at.split("T")[0]}</td>
                                            <td className="p-4">
                                                {/* Status badge with dynamic styling */}
                                                <div
                                                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                                                       ${booking.status === "cancelled"
                                                            ? "bg-red-100 text-red-600 border border-red-500"
                                                            : booking.status === "pending"
                                                                ? "bg-blue-100 text-blue-600 border border-blue-500"
                                                                : "bg-green-100 text-green-600 border border-green-500"
                                                        }`}
                                                >
                                                    {booking.status === "approved" ? (
                                                        <IoMdCheckmark className="mr-2" />
                                                    ) : booking.status === "Pending" ? (
                                                        <IoArrowForward className="mr-2 text-lg" />
                                                    ) : (
                                                        <IoReturnDownBack className="mr-2 text-lg" />
                                                    )}
                                                    {booking.status}
                                                </div>

                                            </td>
                                            <td className="p-4 flex items-center gap-2">
                                                <span>{booking.user.first_name}</span>
                                                <span>{booking.user.last_name}</span>
                                            </td>
                                            <td className="p-4">{booking.property}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-between items-center mt-4 px-4 gap-2">
                            <button className="px-2 py-2 border text-sm border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                                ←
                            </button>
                            <div className="flex gap-2 text-xs">
                                {[1, 2, 3, "...", 10].map((num, i) => (
                                    <button
                                        key={i}
                                        className={`px-3 py-2 border border-gray-300 rounded-lg ${num === 1 ? "bg-gray-200 font-bold" : "hover:bg-gray-100"}`}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                            <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                                →
                            </button>
                        </div>
                    </div>
            }
        </>
    );
};

export default BookingHistory;
