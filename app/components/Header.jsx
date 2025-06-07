import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Header = () => {
  const backgroundImages = [
    '/slider1.jpg',
    '/slider2.jpg',
    '/slider3.jpg',
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel */}
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
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-20"></div>

      {/* Foreground Content */}
      <div className="absolute inset-0 z-40 w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4 text-white">
        
        
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
          Make money from the 7 Trillion Plus dollar market
        </h1>
        <p className="max-w-2xl mx-auto font-Ovo">
          Discover the secret strategies of everyday people who are transforming modest investments into substantial fortunes from the biggest financial market of over 7 trillion dollars.
          You can unlock a brighter financial future and revolutionize your life for the better! By learning the skill of trading the financial market.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact" id='about'
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            Take a Free Tour
            <Image src={assets.right_arrow_white} alt="Arrow icon" className="w-4" />
          </a>
          <a
            href="/sample-resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            Contact me
            <Image src={assets.right_arrow_white} alt="Arrow icon" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
