import { Outfit, Ovo } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import Script from "next/script"; // ✅ Correct way to load external scripts

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Website - Forex Jesus",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-5 overflow-x-hidden`}
      >
        {/* ✅ Flutterwave script loaded safely without blocking render */}
        <Script
          src="https://checkout.flutterwave.com/v3.js"
          strategy="afterInteractive"
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
