import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Header = () => {

   const backgroundImages = [
    '/hero-section-images/t1.jpg',
    '/hero-section-images/t2.jpg',
    '/hero-section-images/t3.jpg',
  ];

  return (
     <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Carousel (z-0) */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="absolute inset-0 h-full w-full z-0"
      >
        {backgroundImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <Image
                src={img}
                alt={`Background ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay (z-20) */}
      {/* This will sit between the background and the foreground content */}
      <div className="absolute inset-0 bg-black opacity-80 z-20"></div> {/* Adjust opacity as needed, e.g., opacity-40 to opacity-70 */}

      {/* Foreground Content (z-40) */}
      {/* Add text-white to the container to make all text white */}
      <div className="absolute inset-0 z-40 w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4 text-white">
        <div>
          {/* Ensure profile_img is visible - it might need a background or slight border if it's too dark */}
          <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
        </div>
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
          Hi! I'm Forex Jesus
          {/* If hand_icon is black, it will disappear. You might need a white version or recolor */}
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </h3>
        <h1 className="text:3xl sm:text-6xl lg:text-[66px] font-Ovo">
          Make money from the 7 Trillion Plus dollar market
        </h1>
        <p className="max-w-2xl mx-auto font-Ovo">
          Discover the secret strategies of everyday people who are transforming modest investments into substantial fortunes from the biggest financial market of over 7 trillion dollars.
          You can unlock a brighter financial future and revolutionize your life for the better! By learning the skill of trading the financial market.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">
            Take a Free Tour
            {/* Ensure right_arrow_white is actually white, otherwise it will disappear */}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>
          {/* Note: The second button has border-full border-gray-500. With white text, this border might be too dark. Consider border-white or border-gray-300 if needed. */}
          <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
            Contact me
            {/* Ensure right_arrow_white is actually white */}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
