"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { assets } from "@/assets/assets"

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 xl:px-[8%] pt-12 pb-6 font-Ovo">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-20">
        
        {/* Logo and Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src={assets.logotwt}
            alt="Logo"
            className="w-14 h-14 rounded-full mb-3"
          />
          <p className="text-sm text-gray-300 max-w-xs">
            Empowering your trading journey with clarity, tools, and signals.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h4 className="font-bold mb-2">Quick Links</h4>
          <Link href="/#top" className="hover:underline">Home</Link>
          <Link href="/#about" className="hover:underline">About Me</Link>
          <Link href="/#plans" className="hover:underline">Plans</Link>
          <Link href="/#lotcal" className="hover:underline">Lot Size Calculator</Link>
          <Link href="/#glossary" className="hover:underline">Glossary</Link>
          <Link href="/signals" className="hover:underline">Signals</Link>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-bold mb-2">Connect with Us</h4>
          <div className="flex gap-4 justify-center md:justify-start mt-2">
            <Link href="https://facebook.com" target="_blank">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
                className="invert"
              />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="invert"
              />
            </Link>
            <Link href="https://wa.me/233501234567" target="_blank">
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={20}
                height={20}
                className="invert"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} forexJesus. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
