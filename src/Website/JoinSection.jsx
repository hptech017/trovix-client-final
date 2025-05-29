import React, { useState } from "react";
import img4 from "../assets1/landing/avalanche-white.png";
import img1 from "../assets1/landing/bnb-white.png";
import coinput from "../assets1/landing/coin-input.png";
import coin from "../assets1/landing/coin-white.png";
import img2 from "../assets1/landing/eth-white.png";
import img3 from "../assets1/landing/polygon-white.png";
import Button from "../component/Landing/Button";

const JoinSection = () => {
    const [usdtRaised, setUsdtRaised] = useState(2236661);
    const [tokensSoldStage5, setTokensSoldStage5] = useState(25918327);
    const totalTokensStage5 = 40000000;
    const totalTokens = 200000000;
    const totalTokenSold = 185918327;
    const tokenPrice = 0.025;
    const listingPrice = 0.20;

    const progressPercentage = (tokensSoldStage5 / totalTokensStage5) * 100;

    return (
        <div className=" text-white flex flex-col md:flex-row justify-center p-6 gap-10 md:gap-20">
            <div className="bg-[#141414] rounded-3xl p-6 w-full md:w-1/2 max-w-lg space-y-8 border-t border-white/50 border-l">
                <div className="flex items-center justify-between">
                    <button className="bg-[#47a1ff] text-white px-4 py-2 rounded-full font-semibold ">
                        Connect Wallet
                    </button>
                    <img src={coin} alt="" className="h-10 md:h-16"/>
                </div>


                <div className="space-y-2">
                    <h2 className="text-sm md:text-lg font-bold flex justify-between items-center">TROVIX PROTOCOL PRESALE <span className="text-orange-500">STAGE 5 OF 5</span></h2>
                    <div className="text-xs md:text-base">
                        <p>USDT RAISED: <span className="font-semibold">${usdtRaised.toLocaleString()}</span></p>
                        <p>TOKENS SOLD IN STAGE 5: <span className="font-semibold">{tokensSoldStage5.toLocaleString()}/{totalTokensStage5.toLocaleString()}</span></p>
                        <p>TOKEN PRICE: <span className="font-semibold">${tokenPrice}</span></p>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                            className="bg-orange-500 h-3 rounded-full"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>

                    <div className="text-sm flex justify-between items-center">
                        <p>0</p>
                        <p >{totalTokens.toLocaleString()}</p>
                    </div>

                    <div className="text-xs md:text-base font-bold ">
                        <p className="flex justify-between items-center">TOTAL TOKEN SOLD: <span className="font-semibold">{totalTokenSold.toLocaleString()}</span></p>
                        <p className="flex justify-between items-center">LISTING PRICE: <span className="font-semibold">${listingPrice}</span></p>
                    </div>
                </div>

                <div className="flex gap-3 justify-between mt-4 w-full">
                    <button className="bg-bg_color w-full p-2 rounded-lg flex justify-center"><img src={img1} alt="binance" className="h-8" /></button>
                    <button className="border p-2 w-full rounded-lg flex justify-center"><img src={img2} alt="ethereum" className="h-8" /></button>
                    <button className="border w-full p-2 rounded-lg flex justify-center"><img src={img3} alt="polygon" className="h-8" /></button>
                    <button className="border p-2 w-full rounded-lg flex justify-center"><img src={img4} alt="avax" className="h-8" /></button>
                </div>

                <div className="space-y-3">
                    <div className="flex w-full px-4 py-2 rounded-lg bg-white text-black gap-2">
                        <input
                            type="number"
                            placeholder="0"
                            className=" placeholder-gray-400 focus:outline-none"
                        />
                        <select className="outline-none w-full">
                            <option>Select Currency</option>
                        </select>
                        <img src={img1} alt="" className="hidden md:block"/>
                    </div>

                    <div className="w-full px-4 py-2 rounded-lg bg-white text-white placeholder-gray-400 focus:outline-none flex justify-between">
                        <input
                            type="text"
                            placeholder="Max TROVIX Received"
                            className="focus:outline-none"
                            disabled
                        />
                        <img src={coinput} alt="" />
                    </div>



                    <Button title="SELECT CURRENCY" className={"bg-bg_color1 rounded-2xl p-2 md:p-3 w-full  tracking-wider text-xs md:text-base"} />
                    <Button title="Transaction Dashboard" className={"bg-bg_color1 rounded-2xl p-2 md:p-3 w-full  tracking-wider text-xs md:text-base"} />

                </div>
            </div>

            <div className="flex flex-col items-center md:items-start  text-center md:text-left md:space-y-4" >
                <div >
                    <h1 className="text-xl md:text-7xl leading-tight max-w-xl">
                        Join the Oilconomy with <br />
                        <span className="text-bg_color1">TROVIX Token</span> Presale
                    </h1>
                    <p className="mt-4 max-w-xl text-sm md:text-2xl">
                        TROVIX Protocol is the first Web3 ecosystem for people and businesses in the Oil and Gas industry.
                    </p>

                </div>

                <div className="mt-6 space-y-4 flex flex-col w-full">
                    <Button title="Read the Whitepaper" className={"bg-bg_color rounded-2xl md:p-3 p-2"} />
                    <Button title="TROVIX for Business" className={"border rounded-2xl md:p-3 p-2"} />
                    <Button title="TROVIX for People" className={"border rounded-2xl md:p-3 p-2"} />


                </div>
            </div>
        </div>
    );
};

export default JoinSection;
