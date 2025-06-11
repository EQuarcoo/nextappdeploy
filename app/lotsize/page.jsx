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
    <main className="min-h-screen bg-white text-black py-20 px-6 md:px-12 xl:px-[8%] font-Ovo">
      <h1 className="text-3xl font-bold mb-8 text-center">Lot Size Calculator</h1>

      <form
        onSubmit={calculateLotSize}
        className="max-w-xl mx-auto bg-gray-100 p-6 rounded-2xl shadow-lg space-y-6"
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
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          Calculate
        </button>

        {lotSize && (
          <div className="mt-4 text-center text-lg font-semibold">
            Estimated Lot Size: <span className="text-indigo-600">{lotSize}</span>
          </div>
        )}
      </form>
    </main>
  )
}

export default LotSizeCalculator
