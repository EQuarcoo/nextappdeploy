'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import Hero from "./components/Hero";



export default function Home() {

    return (
   
    <>
    
    <Navbar />
    <Header />
    <About />
    <Hero/>
    <Plans />
    
    <Footer />
    </>
  );
}
