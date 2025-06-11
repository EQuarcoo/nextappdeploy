"use client" // Mark this as a client component to use hooks like useState and useEffect

import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef()

  // Open mobile side menu by sliding it in
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  // Close mobile side menu by sliding it out
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  // Add scroll listener to update navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ''
        }`}
      >
        {/* Logo linking to top of home page */}
        <Link href="/#top">
          <Image
            src={assets.logotwt}
            alt="Logo"
            className="w-12 h-12 cursor-pointer mr-14 rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? '' : 'bg-black shadow-sm bg-opacity-50 text-white'
          }`}
        >
          {/* Updated all anchors to Next.js Links with full path and hash */}
          <li>
            <Link href="/#top" className="font-Ovo">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className="font-Ovo">
              About me
            </Link>
          </li>
          <li>
            <Link href="/#plans" className="font-Ovo">
              Plans
            </Link>
          </li>
          <li>
            <Link href="/lotsize" className="font-Ovo">
              Lotsize Calculator
            </Link>
          </li>
          <li>
            <Link href="/#glossary" className="font-Ovo">
              Glossary
            </Link>
          </li>
          <li>
            <Link href="/signals" className="font-Ovo">
              Signals
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="Toggle Theme" className="w-6" />
          </button>

          {/* Contact button visible on large screens */}
          <Link
            href="/#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border font-Ovo border-gray-500 rounded-full ml-4"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </Link>

          {/* Mobile menu button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Open menu" className="w-6" />
          </button>

          {/* Mobile Side Menu */}
          <ul
            ref={sideMenuRef}
            className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
            style={{ transform: 'translateX(16rem)' }} // Start hidden
          >
            {/* Close button */}
            <div className="absolute right-6 top-6" onClick={closeMenu}>
              <Image
                src={assets.close_black}
                alt="Close menu"
                className="w-5 cursor-pointer"
              />
            </div>

            {/* Updated all links here as well with closeMenu onClick */}
            <li>
              <Link href="/#top" className="font-Ovo" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="font-Ovo" onClick={closeMenu}>
                About me
              </Link>
            </li>
            <li>
              <Link href="/#plans" className="font-Ovo" onClick={closeMenu}>
                Plans
              </Link>
            </li>
            <li>
              <Link href="/lotsize" className="font-Ovo" onClick={closeMenu}>
                Lotsize Calculator
              </Link>
            </li>
            <li>
              <Link href="/#glossary" className="font-Ovo" onClick={closeMenu}>
                Glossary
              </Link>
            </li>
            <li>
              <Link href="/signals" className="font-Ovo" onClick={closeMenu}>
                Signals
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
