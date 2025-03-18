"use client"
import React, { useEffect, useState } from "react";
import { IoSquareOutline } from "react-icons/io5";
import { IoMdArrowDown, IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import listings from "../Data";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ListingHistory = () => {
    const [allListing, setAllListing] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchListing = async () => {
            setAllListing(listings);
        }
        fetchListing();
        setLoading(false)
    }, [listings, allListing])
    return (
        <>
        {
            loading ? (
                <LoadingSpinner />
            )
            :
            <div className="max-w-7xl mx-auto px-6 mt-24 md:mt-30 pb-15">
            <h1 className="text-center text-xl font-semibold mb-4">Listing History</h1>
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="w-full border border-gray-200 rounded-lg">
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
                        {allListing.map((listing, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="p-4">
                                    <div className="flex items-center gap-3 font-semibold">
                                        <IoSquareOutline className="text-gray-400" />
                                        {listing.id}
                                    </div>
                                </td>
                                <td className="p-4">{listing.date}</td>
                                <td className="p-4">
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${listing.status === "Cancelled"
                                            ? "bg-red-100 text-red-600 border border-red-500"
                                            : "bg-green-100 text-green-600 border border-green-500"
                                        }`}>
                                        <IoMdCheckmark className="mr-1" />
                                        {listing.status}
                                    </div>
                                </td>
                                <td className="p-4 flex items-center gap-2">
                                    <Image
                                        src={listing.image}
                                        alt={listing.customer}
                                        width={30}
                                        height={30}
                                        className="rounded-full object-cover"
                                    />
                                    <span>{listing.customer}</span>
                                </td>
                                <td className="p-4">{listing.property}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 px-4 gap-2">
                <button className="px-2 py-2 border text-sm border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                    ← 
                </button>
                <div className="flex gap-2 text-xs">
                    {[1, 2, 3, "...", 10].map((num, i) => (
                        <button
                            key={i}
                            className={`px-3 py-2 border border-gray-300 rounded-lg ${num === 1 ? "bg-gray-200 font-bold" : "hover:bg-gray-100"
                                }`}
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

export default ListingHistory;
