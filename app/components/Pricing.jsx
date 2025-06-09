import React, { useState } from 'react';

const packages = [
  {
    name: 'Beginner',
    price: '200 GHS',
    features: [
      'Basic trading signals',
      'Access to community chat',
      'Monthly webinars',
    ],
  },
  {
    name: 'Intermediate',
    price: '500 GHS',
    features: [
      'Advanced signals & strategies',
      'Weekly live Q&A',
      'Exclusive resources access',
    ],
  },
  {
    name: 'Advanced',
    price: '1000 GHS',
    features: [
      'Personal coaching sessions',
      'Daily signals & trade alerts',
      'Priority support',
    ],
  },
];

const Pricing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <section
      className="relative py-16 px-4 text-white"
      style={{
        backgroundImage: "url('/slider2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-yellow-400 text-4xl font-bold text-center mb-12 z-10 relative">
          Choose Your Trading Package
        </h2>

        <div className="flex flex-wrap justify-center gap-8 z-10 relative">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="w-80 bg-yellow-400 bg-opacity-90 rounded-lg p-6 text-black flex flex-col justify-between shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <ul className="mb-6 list-disc ml-5 space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="text-lg font-semibold mb-6">Price: {pkg.price}</p>
              <button
                onClick={() => openModal(pkg)}
                className="bg-black text-yellow-400 py-2 rounded font-bold hover:bg-gray-900 transition"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedPackage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-yellow-400 text-black rounded-lg p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'fadeInScale 0.3s ease forwards' }}
          >
            <button
              className="absolute top-3 right-3 text-black font-bold text-xl"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold mb-4">{selectedPackage.name} Package</h3>
            <p className="mb-4">Price: {selectedPackage.price}</p>
            <ul className="list-disc ml-5 mb-6">
              {selectedPackage.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <p className="mb-6">Proceed to payment to complete your subscription.</p>
            <button
              className="bg-black text-yellow-400 py-2 rounded font-bold hover:bg-gray-900 w-full"
              onClick={() => alert('Redirecting to payment gateway...')}
            >
              Pay Now
            </button>
          </div>
        </div>
      )}

      {/* Modal Animation */}
      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
