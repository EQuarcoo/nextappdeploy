'use client'
import React, { useState } from 'react'
import SignalHeader from '../components/SignalHeader'

const Page = () => {
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const telegramLink = 'https://t.me/Forexjesus_Assist'

  const handlePlanClick = () => {
    setShowModal(true)
  }

  const handleConfirmRedirect = () => {
    setIsLoading(true)
    // Track user click
    console.log('User clicked to redirect to Telegram.')

    setTimeout(() => {
      window.open(telegramLink, '_blank')
      setIsLoading(false)
      setShowModal(false)
    }, 1000) // optional delay to show loader
  }

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
      price: 'USD 20',
      bg: 'bg-gray-200 hover:bg-gray-300 text-black',
      icon: '🥈',
    },
    {
      name: 'Gold',
      duration: '3 Months',
      price: 'USD 50',
      bg: 'bg-yellow-400 hover:bg-yellow-500 text-black',
      icon: '🥇',
    },
    {
      name: 'Diamond',
      duration: '6 Months',
      price: 'USD 90',
      bg: 'bg-blue-500 hover:bg-blue-600 text-white',
      icon: '💎',
    },
  ]

  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/slider1.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Main content */}
      <main className="relative z-10 text-white min-h-screen px-6 md:px-12 xl:px-[8%] pt-16 pb-20 font-Ovo">
        {/* Header */}
        <div className="mb-16">
          <SignalHeader />
        </div>

        {/* CTA before features */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 animate-fade-in">What We Offer</h2>
          <p className="text-white/70 max-w-xl mx-auto animate-fade-in delay-100">
            Discover our daily signals, expert analysis and risk management tips.
          </p>
        </section>

        {/* Signal Features */}
        <section className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`p-6 w-[230px] rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 animate-fade-in delay-${i * 100} ${feature.bg}`}
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
          <h2 className="text-2xl font-bold mb-6 animate-fade-in">Ready to Get Started?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-6 animate-fade-in delay-100">
            View Signal Plans
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                onClick={handlePlanClick}
                className={`w-[200px] p-5 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in delay-${i * 150} ${plan.bg}`}
              >
                <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                  <span>{plan.icon}</span> {plan.name}
                </h3>
                <p className="text-sm mb-1">{plan.duration}</p>
                <p className="text-sm font-semibold">{plan.price}</p>
              </div>
            ))}
          </div>

          <p className="mb-6 text-white/70 animate-fade-in delay-200">
            Subscribe to a package that suits your experience level — from beginner to advanced traders.
          </p>

          <button
            onClick={handlePlanClick}
            className="inline-block bg-white text-black py-3 px-6 rounded-full hover:bg-gray-300 transition duration-300 animate-fade-in delay-300"
          >
            Make Payment Now
          </button>
        </section>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-80 text-center space-y-4">
            <h3 className="text-lg font-bold">Continue to Telegram?</h3>
            <p>You’ll be redirected to our assistant. Do you want to proceed?</p>
            {isLoading ? (
              <div className="flex justify-center py-2">
                <div className="loader border-4 border-gray-300 border-t-blue-500 rounded-full w-8 h-8 animate-spin"></div>
              </div>
            ) : (
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmRedirect}
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tailwind keyframes for fade-in */}
      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-0 { animation-delay: 0s; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .loader {
          border-top-color: #3b82f6;
        }
      `}</style>
    </div>
  )
}

export default Page
