import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'


const Navbar = () => {
const [isScroll, setIsScroll ]=useState(false)
const sideMenuRef = useRef();

const openMenu = ()=>{
   sideMenuRef.current.style.transform = 'translateX(-16rem)'
}

const closeMenu = ()=>{
  sideMenuRef.current.style.transform = 'translateX(16rem)'
}

useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    if(scroll > 50){
      setIsScroll(true)

    }else{
      setIsScroll(true)
    }
  })
})
  return (
    <>
    {/* <div className='fixed top-0 right-0 z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div> */}
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm": ""}`}>
            <a href='#top' >
                <Image src = {assets.logotwt} alt='' className='w-12 h-12 cursor-pointer mr-14 rounded-full'/>
            </a>
            <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "": " bg-black shadow-sm bg-opacity-50"}`}>
                <li><a className='font-Ovo' href='#top'>Home</a></li>
                <li><a className='font-Ovo' href='#about'>About me</a></li>
                <li><a className='font-Ovo' href='#plans'>Plans</a></li>
                <li><a className='font-Ovo' href='#lotcal'>Lotsize Calculator</a></li>
                <li><a  className='font-Ovo'href='#Glossary'>Glossary</a></li>

            </ul>
            <div className='flex items-center gap-4'>
              <button >
                 <Image src={assets.moon_icon} alt='' className='w-6'/>
              </button>
              <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border font-Ovo border-gray-500 rounded-full ml-4 '>Contact <Image src={assets.arrow_icon} alt='' className='w-3'/></a>
              <button className='block md:hidden ml-3' onClick={openMenu}>
                 <Image src={assets.menu_black} alt='' className='w-6'/>
              </button>
              { /* -------- mobile menu ----------*/}

              <ul ref={sideMenuRef} className=' flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
              <div className='absolute right-6 top-6' onClick={closeMenu}>
                  <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
              </div>             
              <li><a className='font-Ovo'    onClick={closeMenu}  href='#top'>Home</a></li>
                <li><a className='font-Ovo'  onClick={closeMenu}  href='#about'>About me</a></li>
                <li><a className='font-Ovo'  onClick={closeMenu}  href='#plans'>Plans</a></li>
                <li><a className='font-Ovo'  onClick={closeMenu}  href='#lotcal'>Lotsize Calculator</a></li>
                <li><a  className='font-Ovo' onClick={closeMenu}  href='#glossary'>Glossary</a></li>
              </ul>
              
            </div>
        </nav>
    </>
      
    
  )
}

export default Navbar
