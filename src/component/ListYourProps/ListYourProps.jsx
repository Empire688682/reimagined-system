"use client"
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { FaCheckCircle, FaCamera, FaRegHandshake, FaMoneyBillWave } from "react-icons/fa";

const ListYourProps = () => {
    return (
        <section className="w-full text-gray-800">
            {/* HERO SECTION */}
            <div className="relative w-full h-[90vh] flex items-center justify-center">
                <Image
                    priority
                    fill
                    src="/listing-yourspace-hero.png"
                    alt="Creative studio"
                    className="absolute inset-0 w-full h-full object-cover z-[-1]"
                />
                <div className="bg-black/50 w-full h-full absolute inset-0 z-[-1]" />

                <div className="z-1 text-center px-6 md:px-16 max-w-4xl mx-auto">
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
                        List Your Space. Unlock New Income.
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl mb-8">
                        Earn effortlessly by renting out your space to photographers, filmmakers, and creatives near you.
                    </p>
                    <Link
                        href="/add-listing"
                        onClick={() => window.scrollTo(0, 0)}
                        className="bg-[#23396A] hover:bg-blue-700 text-white py-3 px-8 rounded-md text-sm font-semibold transition-all duration-300"
                    >
                        Get Started for Free
                    </Link>
                </div>
            </div>

            {/* WHY LIST SECTION */}
            <section className="py-20 px-6 md:px-20 bg-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why List with Us?</h2>
                <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                    We make it simple to turn your space into a revenue-generating creative set. Whether it’s a cozy apartment, rustic backyard, or modern studio — creators are always looking for their next location.
                </p>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center gap-4">
                        <FaCamera className="text-4xl text-blue-600" />
                        <h3 className="text-xl font-semibold">Creative Visibility</h3>
                        <p className="text-gray-500">Expose your property to thousands of photographers, filmmakers, and brands.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <FaRegHandshake className="text-4xl text-blue-600" />
                        <h3 className="text-xl font-semibold">Simple Process</h3>
                        <p className="text-gray-500">Listing takes minutes. Approve bookings based on your availability and comfort.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <FaMoneyBillWave className="text-4xl text-blue-600" />
                        <h3 className="text-xl font-semibold">Earn with Ease</h3>
                        <p className="text-gray-500">Set your own pricing and get paid securely after every booking.</p>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-gray-100 py-20 px-6 md:px-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-10 text-left">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                        <h4 className="text-lg font-semibold mb-2">1. List Your Space</h4>
                        <p className="text-gray-600">Add photos, details, and availability. It only takes a few minutes.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                        <h4 className="text-lg font-semibold mb-2">2. Receive Bookings</h4>
                        <p className="text-gray-600">Creators can request to book your space for specific dates and times.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                        <h4 className="text-lg font-semibold mb-2">3. Host & Get Paid</h4>
                        <p className="text-gray-600">Approve bookings, host on your terms, and receive fast payouts.</p>
                    </div>
                </div>
            </section>

            {/* TRUST SECTION */}
            <section className="py-20 px-6 md:px-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by the Creative Community</h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                    Join a growing network of local property owners who’ve made over $500,000 combined through our platform. From home studios to industrial warehouses, your space has value.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                        <FaCheckCircle /> Verified Listings
                    </span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                        <FaCheckCircle /> Safe & Secure Payments
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                        <FaCheckCircle /> Full Booking Control
                    </span>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-[#23396A] py-20 text-center text-white px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Earning From Your Space Today</h2>
                <p className="text-lg mb-8">It's free to list, simple to manage, and your next booking could be just days away.</p>
                <Link
                    href="/add-listing"
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-white text-blue-600 py-3 px-8 rounded-md font-semibold hover:bg-gray-100 transition"
                >
                    List My Space
                </Link>
            </section>
        </section>
    );
};

export default ListYourProps;
