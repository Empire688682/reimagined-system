"use client";
import React, { useEffect, useRef } from 'react';
import Hero from '@/component/Hero/Hero';
import Services from '@/component/Services/Services';
import Properties from '@/component/Properties/Properties';
import Features from '@/component/Features/Features';
import Journey from '@/component/Journey/Journey';
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import ContactPage from '@/component/Contact/Contact';

const Page = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('playing', () => setIsPlaying(true));
      videoRef.current.addEventListener('pause', () => setIsPlaying(false));
    }
  }, [isPlaying]);

  return (
    <div className="relative w-full bg-[#F1F9FF]">
      <Hero />
      <Services />
      <Properties />
      {/* Background Video Section */}
      <div className="w-full relative overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-[70vh] object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
          src="/building-video-compressed.mp4"
        ></video>
        <div>
          {isPlaying ? (
            <FaPauseCircle
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl cursor-pointer"
              onClick={() => videoRef.current.pause()}
            />
          ) : (
            <FaRegCirclePlay
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl cursor-pointer"
              onClick={() => videoRef.current.play()}
            />
          )}
        </div>
      </div>
      <Features />
      <Journey />
      <ContactPage />
    </div>
  );
};

export default Page;