'use client';
import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const packages = [
  {
    name: 'Beginner',
    price: 'USD 55',
    features: [
      'Basic trading signals',
      'Access to community chat',
      'Monthly webinars',
    ],
  },
  {
    name: 'Intermediate',
    price: 'USD 120',
    features: [
      'Advanced signals & strategies',
      'Weekly live Q&A',
      'Exclusive resources access',
    ],
  },
  {
    name: 'Advanced',
    price: 'USD 289',
    features: [
      'Personal coaching sessions',
      'Daily signals & trade alerts',
      'Priority support',
    ],
  },
];

const faqs = [
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can upgrade anytime from your dashboard.',
  },
  {
    question: 'Do you offer refunds?',
    answer: "We offer a 7-day refund window if you're unsatisfied.",
  },
  {
    question: 'Is this suitable for complete beginners?',
    answer: 'Absolutely. Our beginner plan is designed for you.',
  },
];

const Pricing = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const fetchedTestimonials = [
      {
        quote:
          'The beginner course helped me start trading with confidence. Highly recommend!',
        name: 'Akosua B.',
      },
      {
        quote:
          'Live Q&As and coaching made all the difference for me. This is gold.',
        name: 'Kwaku T.',
      },
      {
        quote:
          'I love the community and the premium support. Worth every pesewa.',
        name: 'Nana A.',
      },
    ];
    setTestimonials(fetchedTestimonials);
  }, []);

  return (
    <section
      className="relative py-20 px-4"
      style={{
        backgroundImage: "url('/slider2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative max-w-7xl mx-auto z-10 text-yellow-100">
        <h2 className="text-yellow-400 text-4xl font-bold text-center mb-6">
          Transform Your Trading Journey with <br /> our Expert-Led Curriculum
        </h2>

        <p className="text-center text-md md:text-lg mb-12 max-w-3xl mx-auto text-yellow-200">
          Unlock your full potential with our free structured, easy-to-follow learning path,
          specifically designed to help you thrive in the forex market.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-yellow-400 bg-opacity-90 rounded-xl p-6 text-black shadow-xl relative hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <ul className="mb-6 space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-700" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold mb-6">Price: {pkg.price}</p>
              <a
                href="https://t.me/Forexjesus_Assist"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-black text-yellow-400 py-2 rounded font-bold hover:bg-gray-900 w-full transition"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {testimonials.length > 0 && (
          <div className="mt-20 text-center">
            <h3 className="text-2xl text-yellow-300 font-semibold mb-6">What Our Students Say</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
              {testimonials.map((t, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow">
                  “{t.quote}”
                  <br />
                  <span className="font-bold block mt-2">— {t.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Accordion FAQ */}
        <div className="mt-20 max-w-4xl mx-auto text-yellow-200">
          <h3 className="text-2xl text-yellow-300 font-semibold mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-black bg-opacity-30 p-4 rounded transition duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center font-bold text-yellow-300 focus:outline-none"
                >
                  {faq.question}
                  {openFaq === index ? (
                    <FaChevronUp className="text-yellow-300" />
                  ) : (
                    <FaChevronDown className="text-yellow-300" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-40 mt-2 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-yellow-100">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;