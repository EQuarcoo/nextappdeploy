import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

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
      <p className="mb-8 leading-relaxed">FOREXJESUS is a professional forex trader with years of trading experience.
He is a dedicated mentor, passionate about guiding individuals on their transformative learning experience. He is the founder of The Winning Team Forex Academy which leads a community of over one thousand traders,
 both beginners and advanced traders, whom he trains to trade successfully and profitably. <br/>
 FOREXJESUS also offers personalized one-on-one mentorship sessions for those  eager to elevate their trading skills. He is committed to empowering young people worldwide.<br/> Forex Jesus helps youths all over the world take charge of their finances by organising free online classes. 
 Through his multifaceted approach to financial education, FOREXJESUS continues to bridge knowledge gaps and empower individuals globally, helping them navigate their personal journeys toward financial freedom and success.
 </p>
      <div className="flex justify-center">
  <a
    href="https://t.me/forexjesus01" 
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-full text-lg">
      Contact me
    </button>
  </a>
</div>

    </div>
  </div>
</section>



    </div>
  )
}

export default About
