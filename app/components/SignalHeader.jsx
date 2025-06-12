"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SignalHeader = () => {
  const images = ["/fj1.jpg", "/fj2.jpg", "/fj3.jpg"];

  return (
    <header
      className="relative text-white py-16 px-6 md:px-12 xl:px-[8%] rounded-b-3xl mb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/signalsection1.jpg')" }} // Replace with your actual background image path
    >
      {/* Overlay to improve text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-80 rounded-b-3xl z-0" />

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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-Ovo mb-6 leading-none">
            Join our VIP signal room and make money on daily basis.
          </h1>
          <p className="text-gray-300 mb-6">
            Our VIP signal offers personalized trading strategies, live market updates and expert analysis to boost your trading profits.  
Don't miss out!! Join now and start making profits .
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
