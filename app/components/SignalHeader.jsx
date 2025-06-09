"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SignalHeader = () => {
  const images = ["/fj1.webp", "/fj2.jpg", "/fj3.jpg"];

  return (
    <header
      className="relative text-white py-16 px-6 md:px-12 xl:px-[8%] rounded-b-3xl mb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/signalsection.jpg')" }} // Replace with your actual background image path
    >
      {/* Overlay to improve text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-90 rounded-b-3xl z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Image Slider */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="w-full h-64 sm:h-80 md:h-96"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`Signal Slide ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo mb-6 leading-tight">
            Get Reliable Forex Signals Daily
          </h1>
          <p className="text-gray-300 mb-6">
            Unlock consistent profits with our trusted forex trading signals.
            We help you make smarter trades with timely alerts and expert
            guidance tailored to your level.
          </p>
          <a
            href="/#plans"
            className="inline-block bg-white text-black py-3 px-8 rounded-full font-semibold transition-transform transform hover:scale-105"
          >
            View Signal Plans
          </a>
        </div>
      </div>
    </header>
  );
};

export default SignalHeader;
