'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";


import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";



export default function Home() {

    return (
   
    <>
    
    
    <Header />
    <About />
    <Hero/>
    <Pricing/>
    
    
    
   
    </>
  );
}
