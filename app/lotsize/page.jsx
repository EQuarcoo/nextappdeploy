'use client'

import React, { useState } from 'react'

const LotSizeCalculator = () => {
  const [accountSize, setAccountSize] = useState('')
  const [riskPercent, setRiskPercent] = useState('')
  const [stopLossPips, setStopLossPips] = useState('')
  const [lotSize, setLotSize] = useState(null)

  const calculateLotSize = (e) => {
    e.preventDefault()

    const riskAmount = (Number(accountSize) * Number(riskPercent)) / 100
    const pipValue = riskAmount / Number(stopLossPips)
    const calculatedLotSize = pipValue / 10 // assuming $1 per pip for 0.1 lot on most pairs

    setLotSize(calculatedLotSize.toFixed(2))
  }

  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/slider1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <main className="relative z-10 min-h-screen py-20 px-6 md:px-12 xl:px-[8%] font-Ovo">
        <h1 className="text-3xl font-bold mb-8 text-center animate-fade-in">
          Lot Size Calculator
        </h1>

        <form
          onSubmit={calculateLotSize}
          className="max-w-xl mx-auto bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg space-y-6 text-black"
        >
          <div>
            <label className="block mb-1">Account Size (USD)</label>
            <input
              type="number"
              value={accountSize}
              onChange={(e) => setAccountSize(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Risk Percentage (%)</label>
            <input
              type="number"
              value={riskPercent}
              onChange={(e) => setRiskPercent(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Stop Loss (Pips)</label>
            <input
              type="number"
              value={stopLossPips}
              onChange={(e) => setStopLossPips(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-yellow-400 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Calculate
          </button>

          {lotSize && (
            <div className="mt-4 text-center text-lg font-semibold">
              Estimated Lot Size:{' '}
              <span className="text-indigo-600">{lotSize}</span>
            </div>
          )}
        </form>
      </main>

      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default LotSizeCalculator
