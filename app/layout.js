import { Outfit, Ovo } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import Head from "next/head"; // ✅ Import Head for adding scripts to <head>

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
      <Head>
        {/* ✅ Flutterwave Payment Script */}
        <script src="https://checkout.flutterwave.com/v3.js" />
      </Head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-5 overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
