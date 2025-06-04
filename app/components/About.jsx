import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>

      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover object-center rounded" alt="" src={assets.fjesus}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">Meet your
       Mentor
      </h1>
      <p className="mb-8 leading-relaxed">FOREX JESUS is a professional, profitable and notable forex trader with over 8 years of experience, a thought leader, an investor and an international keynote speaker. He is also a kingmaker, passionate about helping humans through their “grass to grace” journeys.

He is the founder of The Winning Team Fx, Ghana's leading online forex and crypto trading academy, where he trains over one million beginners and advanced traders on how to trade profitably.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
    
      <p className="mb-8 leading-relaxed">Asides his paid mentorship , Forex Jesus helps youths all over the world take charge of their finances by making hundreds of forex videos, courses, and webinars available for FREE on both his website and YouTube Channel.

He is the founder and pioneer of the The Winning Team academy, launched in 2023, out of the need to create a haven for forex traders to learn from and connect with the industry's biggest thought leader in Africa.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" alt="hero" src={assets.house}/>
    </div>
  </div>

  
</section>


    </div>
  )
}

export default About
