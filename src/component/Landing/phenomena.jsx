import React from "react";
import dropletImage from "../../assets1/landing/waterdrop.png";

const Phenomena = () => {
  return (
    <section className="text-white py-12 lg:px-10">
      <div className="xl:max-w-5xl 2xl:max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl lg:text-6xl 2xl:text-6xl font-bold leading-tight mb-6">
            Join the Fastest <br />
            growing Global <br />
            <span className="bg-gradient-to-r from-[#FF6C2F] to-[#FF4A15] bg-clip-text text-transparent">Phenomena</span>
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border-l-2 px-8 border-white"> 
              <h3 className="text-5xl 2xl:text-6xl font-bold text-[#FD5D31]">$2T</h3>
              <p className="mt-2 text-gray-300 2xl:text-base">The size of the Crude Oil market in 2023</p>
            </div>
            <div className="border-l-2 px-8 border-white"> 
              <h3 className="text-5xl 2xl:text-6xl font-bold text-[#FD5D31]">30B</h3>
              <p className="mt-2 text-gray-300 2xl:text-base">barrels of Crude Oil produced every year</p>
            </div>
            <div className="border-l-2 px-8 border-white"> 
              <h3 className="text-5xl 2xl:text-6xl font-bold text-[#FD5D31]">6.5%</h3>
              <p className="mt-2 text-gray-300 2xl:text-base">Compound Annual Growth Rate (CAGR) of the fuel station market worldwide</p>
            </div>
            <div className="border-l-2 px-8 border-white"> 
              <h3 className="text-5xl 2xl:text-6xl font-bold text-[#FD5D31]">25%</h3>
              <p className="mt-2 text-gray-300 2xl:text-base">CAGR expected from 2024 to 2030 for the fuel station market</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={dropletImage}
            alt="Water droplet image representing global crude oil phenomena"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Phenomena;
