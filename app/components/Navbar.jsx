'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className="h-20" /> {/* Spacer for fixed navbar */}
      <nav
        className={`w-full fixed top-0 left-0 h-20 px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
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
          <li><Link href="/#top" className="font-Ovo">Home</Link></li>
          <li><Link href="/#about" className="font-Ovo">About me</Link></li>
          <li><Link href="/#plans" className="font-Ovo">Plans</Link></li>
          <li><Link href="/lotsize" className="font-Ovo">Lotsize Calculator</Link></li>
          <li><Link href="/glossary" className="font-Ovo">Glossary</Link></li>
          <li><Link href="/signals" className="font-Ovo">Signals</Link></li>
        </ul>

        {/* Right-side buttons */}
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="Toggle Theme" className="w-6" />
          </button>

          {/* WhatsApp Contact - Desktop */}
          <a
            href="https://wa.me/233205795321"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-3 px-6 py-2 border font-Ovo border-gray-500 rounded-full ml-4 hover:bg-green-100 transition"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>

          {/* Mobile menu toggle */}
          <button className="block md:hidden ml-3" onClick={toggleMenu}>
            <Image src={assets.menu_black} alt="Open menu" className="w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={closeMenu}>
            <Image src={assets.close_black} alt="Close menu" className="w-5" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col gap-6 px-6 text-lg font-Ovo">
          <li>
            <Link href="/#top" onClick={closeMenu} className="hover:text-rose-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" onClick={closeMenu} className="hover:text-rose-500">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/#plans" onClick={closeMenu} className="hover:text-rose-500">
              Plans
            </Link>
          </li>
          <li>
            <Link href="/lotsize" onClick={closeMenu} className="hover:text-rose-500">
              Lotsize Calculator
            </Link>
          </li>
          <li>
            <Link href="/glossary" onClick={closeMenu} className="hover:text-rose-500">
              Glossary
            </Link>
          </li>
          <li>
            <Link href="/signals" onClick={closeMenu} className="hover:text-rose-500">
              Signals
            </Link>
          </li>

          {/* WhatsApp Contact - Mobile */}
          <li>
            <a
              href="https://wa.me/233205795321"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 inline-block text-center text-white bg-green-600 px-4 py-2 rounded-full hover:bg-green-700 transition"
            >
              WhatsApp Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar

