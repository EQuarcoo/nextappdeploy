'use client'
import React from 'react'
import Link from 'next/link'
import SignalHeader from '../components/SignalHeader'


const Page = () => {
  const features = [
    {
      title: 'Daily Trade Alerts',
      desc: 'Receive our high probability trade set-up and make money on daily basis.',
      bg: 'bg-indigo-500 hover:bg-indigo-600 text-white',
      icon: '📢',
    },
    {
      title: 'Market Analysis',
      desc: 'Breakdown of our most traded pairs by identifying key levels using our approved technical approach.',
      bg: 'bg-green-500 hover:bg-green-600 text-white',
      icon: '📈',
    },
    {
      title: 'Risk Management Tips',
      desc: 'Each signal includes suggested stop loss, take profit & risk ratio.',
      bg: 'bg-pink-500 hover:bg-pink-600 text-white',
      icon: '🛡️',
    },
  ]

  const plans = [
    {
      name: 'Silver',
      duration: '1 Month',
      price: 'GHC 400',
      bg: 'bg-gray-200 hover:bg-gray-300 text-black',
      link: 'https://paystack.com/pay/silverplan',
      icon: '🥈',
    },
    {
      name: 'Gold',
      duration: '3 Months',
      price: 'GHC 700',
      bg: 'bg-yellow-400 hover:bg-yellow-500 text-black',
      link: 'https://paystack.com/pay/goldplan',
      icon: '🥇',
    },
    {
      name: 'Diamond',
      duration: '6 Months',
      price: 'GHC 1000',
      bg: 'bg-blue-500 hover:bg-blue-600 text-white',
      link: 'https://paystack.com/pay/diamondplan',
      icon: '💎',
    },
  ]

  return (
    <div

      className="relative min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/signalbg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Main content */}
      <main className="relative z-10 text-white min-h-screen px-6 md:px-12 xl:px-[8%] pt-16 pb-20 font-Ovo">
        {/* Header */}
        <div className="mb-16">
          <SignalHeader/>
        </div>

        {/* Signal Features */}
        <section className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`p-6 w-[230px] rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 animate-fade-in ${feature.bg}`}
            >
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <span>{feature.icon}</span> {feature.title}
              </h3>
              <p className="text-sm">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* Subscription CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {plans.map((plan, i) => (
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className={`w-[200px] p-5 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 cursor-pointer ${plan.bg}`}
              >
                <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                  <span>{plan.icon}</span> {plan.name}
                </h3>
                <p className="text-sm mb-1">{plan.duration}</p>
                <p className="text-sm font-semibold">{plan.price}</p>
              </a>
            ))}
          </div>

          <p className="mb-6 text-white/70">
            Subscribe to a package that suits your experience level — from beginner to advanced traders.
          </p>

          <Link href="/#plans">
            <span className="inline-block bg-white text-black py-3 px-6 rounded-full hover:bg-gray-300 transition duration-300 cursor-pointer">
              View Signal Plans
            </span>
          </Link>
        </section>
      </main>
    </div>
  )
}

export default Page
