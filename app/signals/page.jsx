import React from 'react'
import Link from "next/link"
import SignalHeader from '../components/SignalHeader'

const Page = () => {
  return (
    <main className="bg-white text-black min-h-screen px-6 md:px-12 xl:px-[8%] pt-16 pb-20 font-Ovo">
      {/* Add bottom margin here */}
      <div className="mb-16">
        <SignalHeader />
      </div>

      {/* Signal Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Daily Trade Alerts",
            desc: "Receive high-probability setups straight to your inbox or WhatsApp.",
          },
          {
            title: "Market Analysis",
            desc: "Breakdowns of trending pairs, key levels, and technical outlooks.",
          },
          {
            title: "Risk Management Tips",
            desc: "Each signal includes suggested stop loss, take profit & risk ratio.",
          },
        ].map((feature, i) => (
          <div key={i} className="p-6 bg-gray-100 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Subscription CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-gray-600">
          Subscribe to a package that suits your experience level — from beginner to advanced traders.
        </p>
        <Link
          href="/#plans"
          className="inline-block bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300"
        >
          View Signal Plans
        </Link>
      </section>
    </main>
  )
}

export default Page
