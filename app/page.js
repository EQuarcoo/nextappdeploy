'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import Footer from "./components/Footer";



export default function Home() {

    return (
   
    <>
    
    <Navbar />
    <Header />
    <About />
    <Plans />
    
    <Footer />
    </>
  );
}
