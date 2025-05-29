import { useState } from "react";
import { TiTick } from "react-icons/ti";
import black from "../assets1/landing/black-coin.png";
import tier from "../assets1/landing/tier1.png";
import Button from "../component/Landing/Button";

export default function TROVIXInvestment() {
  const [investment, setInvestment] = useState(1000);

  const handleInvestmentChange = (e) => {
    setInvestment(Number(e.target.value));
  };

  return (
    <div className="p-5 md:p-0">
      <div className="p-8 w-full md:max-w-6xl max-w-lg flex flex-col md:flex-row justify-center gap-10 mx-auto border-t border-white/50 border-l rounded-3xl">

        {/* Left Section */}
        <div className="rounded-2xl w-full md:w-1/2 space-y-16 shadow-lg">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Investment Amount</h2>
            <h3 className="text-xl text-white">Starting from <span className="font-bold text-orange-500">$5</span></h3>
            <p className="text-sm text-gray-300">
              Get started with <span className="text-orange-500 font-bold">Daily 2% ROI</span> for 100 Days, 
              <span className="text-orange-500 font-bold"> 10% Direct Referral</span>, and 
              <span className="text-orange-500 font-bold"> 5-Level Income</span>. Total returns are capped at 
              <span className="text-orange-500 font-bold"> 4x</span> of your investment (ROI + Referral + Levels).
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm flex justify-between text-white">
              How much do you want to spend?
              <span className="ml-4 text-lg font-semibold text-orange-500">${investment}</span>
            </label>
            <div className="flex items-center justify-between">
              <input
                type="range"
                min="1000"
                max="10000"
                step="100"
                value={investment}
                onChange={handleInvestmentChange}
                className="w-full accent-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#161616] p-8 rounded-2xl w-full md:w-1/2 shadow-lg relative overflow-hidden text-white">
          <img
            src={tier}
            alt="Tier"
            className="absolute top-0 right-0 w-24 md:w-36 -translate-y-6 translate-x-6"
          />

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500 p-2 rounded-full">
                <img src={black} alt="coin" className="h-8" />
              </div>
              <h3 className="text-2xl font-semibold">Tier 1</h3>
            </div>

            <ul className="text-gray-300 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-xs"><TiTick /> 2% Daily ROI for 100 Days</li>
              <li className="flex items-center gap-2 text-xs"><TiTick /> 10% Direct Referral Income</li>
              <li className="flex items-center gap-2 text-xs"><TiTick /> 5 Level Income (30% - 20% - 10% - 10% - 10%)</li>
              <li className="flex items-center gap-2 text-xs"><TiTick /> Total 4X Capping on Earnings</li>
            </ul>

            <div className="flex items-center justify-end text-center">
              <div className="bg-[#1f1f225e] p-4 rounded-lg shadow-[5px_5px_5px_#000] mt-4 space-y-2">
                <p>Investment Amount</p>
                <p className="text-sm">
                  <span className="font-bold text-white">$5 - $unlimited</span>{" "}
                </p>
              </div>
            </div>

            <Button
              className="w-full mt-6 bg-bg_color1 hover:bg-orange-600 text-white font-semibold py-3 rounded-2xl transition"
              title={"BUY PACKAGE"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
