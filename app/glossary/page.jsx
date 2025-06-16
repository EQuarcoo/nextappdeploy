"use client";

import React, { useState } from "react";

const glossaryData = [
  { term: "Ask Price", definition: "The price at which a seller is willing to sell a currency." },
  { term: "Appreciation", definition: "An increase in the value of a currency in relation to another." },
  { term: "Arbitrage", definition: "Simultaneous buying and selling of assets to profit from price differences." },
  { term: "Asset", definition: "Anything of value, especially in trading, like currency, commodities, or stocks." },
  { term: "Base Currency", definition: "The first currency in a currency pair (e.g., EUR in EUR/USD)." },
  { term: "Bid Price", definition: "The price at which a buyer is willing to purchase a currency." },
  { term: "Broker", definition: "An intermediary between the trader and the forex market." },
  { term: "Bull Market", definition: "A market condition where prices are rising." },
  { term: "Bear Market", definition: "A market condition where prices are falling." },
  { term: "CFD (Contract for Difference)", definition: "A derivative product allowing traders to speculate on price movements without owning the asset." },
  { term: "Cross Currency Pair", definition: "A currency pair that does not include the USD (e.g., EUR/JPY)." },
  { term: "Currency Pair", definition: "Two currencies traded against each other (e.g., GBP/USD)." },
  { term: "Commission", definition: "A fee charged by a broker for executing a trade." },
  { term: "Day Trading", definition: "Buying and selling financial instruments within the same trading day." },
  { term: "Drawdown", definition: "A measure of decline from a peak in equity to a trough." },
  { term: "Derivative", definition: "A financial instrument whose value is derived from an underlying asset." },
  { term: "ECN (Electronic Communication Network)", definition: "A type of broker that directly matches buy and sell orders." },
  { term: "Exchange Rate", definition: "The value of one currency for the purpose of conversion to another." },
  { term: "Equity", definition: "The total amount of funds in a trading account, including unrealized profits and losses." },
  { term: "Forex (FX)", definition: "Foreign Exchange; the global market for buying and selling currencies." },
  { term: "Fundamental Analysis", definition: "Analyzing economic, political, and social factors to forecast price movements." },
  { term: "Fill", definition: "The execution of an order to buy or sell." },
  { term: "Gap", definition: "A significant price movement with no trading in between." },
  { term: "GDP (Gross Domestic Product)", definition: "A measure of a country’s economic performance." },
  { term: "Going Long", definition: "Buying a currency expecting it to increase in value." },
  { term: "Hedging", definition: "A strategy to offset potential losses." },
  { term: "High-Frequency Trading (HFT)", definition: "Automated trading with high speed and volume." },
  { term: "Hypothetical Performance", definition: "Performance results based on simulation, not actual trading." },
  { term: "IB (Introducing Broker)", definition: "A person or company who refers clients to a broker." },
  { term: "Inflation", definition: "The rate at which the general level of prices for goods and services is rising." },
  { term: "Interest Rate", definition: "The amount charged by lenders to borrowers, often a key driver in forex markets." },
  { term: "JPY", definition: "Japanese Yen, one of the major currencies traded in forex." },
  { term: "Jobless Claims", definition: "An economic indicator reflecting the number of people filing for unemployment benefits." },
  { term: "Kiwi", definition: "A nickname for the New Zealand Dollar (NZD)." },
  { term: "KYC (Know Your Customer)", definition: "A verification process to ensure the identity of clients." },
  { term: "Leverage", definition: "Borrowing funds to increase potential return on investment." },
  { term: "Lot", definition: "A standardized quantity of the asset being traded (e.g., 100,000 units for a standard lot)." },
  { term: "Liquidity", definition: "How easily an asset can be bought or sold in the market." },
  { term: "Margin", definition: "The amount of money required to open or maintain a trade." },
  { term: "Market Order", definition: "An order to buy or sell immediately at the best available price." },
  { term: "MT4/MT5", definition: "MetaTrader platforms commonly used for forex trading." },
  { term: "NFP (Non-Farm Payroll)", definition: "A key economic indicator measuring U.S. employment changes." },
  { term: "Negative Balance Protection", definition: "A broker policy ensuring clients do not lose more than their deposit." },
  { term: "Order", definition: "An instruction to buy or sell in the market." },
  { term: "Overnight Position", definition: "A trade that remains open past the trading day." },
  { term: "Oscillator", definition: "A technical analysis tool that indicates overbought or oversold conditions." },
  { term: "Pip (Percentage in Point)", definition: "The smallest price move in forex, usually 0.0001." },
  { term: "Pair", definition: "Two currencies traded against each other." },
  { term: "Position", definition: "The amount of a currency bought or sold." },
  { term: "Quote Currency", definition: "The second currency in a currency pair (e.g., USD in EUR/USD)." },
  { term: "Quantitative Easing", definition: "A central bank policy to stimulate the economy by increasing money supply." },
  { term: "Rollover", definition: "The process of extending the settlement date of an open position." },
  { term: "Resistance", definition: "A price level at which an asset struggles to rise above." },
  { term: "Risk Management", definition: "Strategies to control or reduce financial risk." },
  { term: "Scalping", definition: "A trading strategy that involves making many small trades to profit from tiny price changes." },
  { term: "Spread", definition: "The difference between the bid and ask price." },
  { term: "Stop Loss", definition: "An order to close a trade when it reaches a certain loss level." },
  { term: "Take Profit", definition: "An order to close a trade when it reaches a desired profit." },
  { term: "Technical Analysis", definition: "Analyzing price charts and patterns to forecast movements." },
  { term: "Trend", definition: "The general direction of market movement." },
  { term: "USD", definition: "United States Dollar, the most traded currency." },
  { term: "Unrealized P/L", definition: "Profit or loss on open positions not yet closed." },
  { term: "Volatility", definition: "The degree of variation in trading prices over time." },
  { term: "Volume", definition: "The total amount traded in a given time." },
  { term: "Whipsaw", definition: "When a price moves sharply in one direction and then reverses just as quickly." },
  { term: "WTI", definition: "West Texas Intermediate, a grade of crude oil often influencing CAD pairs." },
  { term: "XAU/USD", definition: "The trading pair for gold against the US dollar." },
  { term: "XAG/USD", definition: "The trading pair for silver against the US dollar." },
  { term: "Yield", definition: "The return on an investment, often related to interest rates." },
  { term: "Yen", definition: "The official currency of Japan (JPY)." },
  { term: "ZAR", definition: "South African Rand." },
  { term: "Zero-Sum Game", definition: "A situation where one trader’s gain is another’s loss." },
];

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");

  const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

  const filteredTerms = glossaryData.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter =
      activeLetter === "All" || item.term.startsWith(activeLetter);
    return matchesSearch && matchesLetter;
  });

  return (
    <section className="px-6 py-16 md:px-12 xl:px-[8%] bg-white min-h-screen">
      <div className="text-center mb-12">
        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl font-extrabold font-Ovo text-indigo-800 leading-tight">
            Master the Lingo
          </h1>
          <p className="mt-2 text-gray-600 text-lg md:text-xl font-light">
            Your Ultimate Forex Glossary – Understand Every Term from A to Z
          </p>
        </div>
        <input
          type="text"
          placeholder="Search for a term..."
          className="border px-4 py-2 w-full max-w-md rounded shadow-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
          {letters.map((letter) => (
            <button
              key={letter}
              className={`px-3 py-1 rounded-full border ${
                activeLetter === letter
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-indigo-600 border-indigo-600"
              } hover:bg-indigo-700 hover:text-white transition`}
              onClick={() => setActiveLetter(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTerms.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-100 via-white to-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              {item.term}
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.definition}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
