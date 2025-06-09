import React, { useState } from 'react';

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 'beginner',
      title: 'Beginner Package',
      price: '100 GHS',
      features: ['Basic signals', 'Intro to Forex', 'Community support'],
      paymentLink: 'https://paymentlink.com/beginner',
    },
    {
      id: 'intermediate',
      title: 'Intermediate Package',
      price: '300 GHS',
      features: ['All Beginner features', 'Advanced signals', 'Weekly webinars'],
      paymentLink: 'https://paymentlink.com/intermediate',
    },
    {
      id: 'advanced',
      title: 'Advanced Package',
      price: '600 GHS',
      features: ['All Intermediate features', '1-on-1 coaching', 'Exclusive alerts'],
      paymentLink: 'https://paymentlink.com/advanced',
    },
  ];

  const openModal = (pkgId) => {
    setSelectedPackage(packages.find((p) => p.id === pkgId));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div>
      <section className="text-white body-font bg-black">
        <div className="container px-5 py-24 mx-auto">

          <h1 className="text-3xl sm:text-5xl font-extrabold title-font text-center text-yellow-700 mb-20">
            Join a thriving community of
            <br className="hidden sm:block" />
            exceptional Forex Traders
          </h1>

          {/* Your original 3 cards — left untouched */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* CARD 1 */}
            <div className="w-[320px] flex-shrink-0">
              <div className="bg-yellow-700 p-6 rounded-lg h-full flex flex-col justify-start">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-yellow-700 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-black text-lg font-bold mb-2">Connect with over 1000 traders</h2>
                    <ul className="list-disc ml-4 text-base text-black space-y-1">
                      <li>High-performance trading signals</li>
                      <li>Expert-approved resources and tools</li>
                      <li>A supportive knowledge-sharing community</li>
                    </ul>
                    <a
                      href="https://t.me/TheWinningTeamForex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-black font-bold items-center cursor-pointer"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="w-[320px] flex-shrink-0">
              <div className="bg-yellow-700 p-6 rounded-lg h-full flex flex-col justify-start">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-yellow-600 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      className="w-6 h-6" viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-black text-lg font-bold mb-2">Forex Mastery</h2>
                    <p className="text-base text-black">
                      A transformative education for ambitious traders. Our curriculum covers everything from basics to advanced strategies.
                    </p>
                    <a
                      href="https://t.me/TheWinningTeamForex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-black items-center font-bold cursor-pointer"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="w-[320px] flex-shrink-0">
              <div className="bg-yellow-700 p-6 rounded-lg h-full flex flex-col justify-start">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-yellow-700 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-black text-lg font-bold mb-2">Personalised Forex Guidance</h2>
                    <ul className="list-disc ml-4 text-base text-black space-y-1">
                      <li>Tailored guidance for your challenges</li>
                      <li>In-depth feedback on strategies</li>
                      <li>Actionable insights for better results</li>
                    </ul>
                    <p className="text-black mt-2">Schedule your private session today and transform your trading results!</p>
                    <a
                      href="https://t.me/forexjesus01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-black items-center font-bold cursor-pointer"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

        </div>
      </section>
    </div>
  );
};

export default Hero;
