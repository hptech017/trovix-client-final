import React, { useState } from "react";
import logoImage from "../../assets1/landing/ecosystem.png"; // right side image
import businessImage from "../../assets1/landing/ecotoggleimg1.png";
import consumerImage from "../../assets1/landing/ecotoggleimg2.png";

const Ecosystem = () => {
  const [isBusiness, setIsBusiness] = useState(true);

  const handleToggle = () => {
    setIsBusiness(!isBusiness);
  };

  return (
    <section className="text-white py-16 lg:px-16">
      <div className="xl:max-w-5xl 2xl:max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        
        {/* Left Content */}
        <div className="flex-1 bg-[#121211] sm:p-8 rounded-2xl relative py-10 border-t border-white/50 border-l">
          <div className="flex items-center justify-center mb-16">
            <button
              onClick={handleToggle}
              aria-pressed={isBusiness}
              aria-label="Toggle between business and consumer view"
              className={`relative w-14 h-7 flex items-center bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                isBusiness ? "bg-orange-500" : "bg-gray-700"
              }`}
            >
              <span
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                  isBusiness ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex justify-center mb-6 mt-10 sm:w-1/2">
              <img
                src={isBusiness ? businessImage : consumerImage}
                alt={isBusiness ? "Business ecosystem illustration" : "Consumer ecosystem illustration"}
                className="w-full object-contain"
              />
            </div>

            <div className="text-start sm:w-1/2 px-5">
              <h2 className="text-2xl 2xl:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#FF6C2F] to-[#FF4A15] bg-clip-text text-transparent">TROVIX</span> for{" "}
                <span>{isBusiness ? "Business" : "Consumers"}:</span>
              </h2>
              <p className="text-sm text-white 2xl:text-lg font-semibold mb-6 uppercase">
                {isBusiness
                  ? "Comprehensive data and risk management solutions for oil & gas businesses"
                  : "Innovative consumer rewards and engagement platform for fuel purchasers"}
              </p>

              <ul className="text-sm 2xl:text-lg text-gray-300 space-y-5 text-left list-disc list-inside">
                {isBusiness ? (
                  <>
                    <li>
                      Introducing a loyalty program that rewards users with TROVIX tokens for frequent gas purchases at affiliated petrol stations.
                    </li>
                    <li>
                      Develop a system where users can earn bonus tokens for consistent purchases, referrals, or engaging with specific promotions.
                    </li>
                    <li>
                      Enable gas stations to customize their loyalty offerings, such as discounts, freebies, or exclusive deals for customers using TROVIX tokens for payments.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      Earn TROVIX tokens when purchasing fuel at partner stations to unlock exclusive consumer rewards.
                    </li>
                    <li>
                      Use tokens for discounts, freebies, or to participate in special promotions.
                    </li>
                    <li>
                      Refer friends and gain additional bonuses to maximize your benefits.
                    </li>
                  </>
                )}
              </ul>

              <button className="mt-6 px-6 py-2 bg-orange-500 rounded-lg 2xl:text-lg font-bold text-white hover:bg-orange-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:flex flex-col hidden items-center justify-center">
          <img src={logoImage} alt="Ecosystem Logo" className="mb-4" />
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
