import coin from "../assets1/landing/coin.png";
import lcpu from "../assets1/landing/lcpu.png";
import bg from "../assets1/landing/three_box2.png";
import Button from "../component/Landing/Button";

export default function TROVIXTokenSection() {
  const cards1 = ["Tracking", "RealTime", "Vessel"];

  return (
    <div className="text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-red-700 via-black to-black rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">TROVIX Token</h2>
            <p className="text-sm md:text-base text-[#626161] mb-6">
              TROVIX Protocol incentivizes consumer engagement, drives traffic to affiliated stations, and enhances the utility and adoption of TROVIX tokens within the ecosystem.
            </p>
            <Button 
              title="BUY NOW" 
              className="bg-red-600 hover:bg-red-700 transition-colors text-white text-sm md:text-base py-3 md:py-4 px-6 rounded-xl" 
            />
          </div>
          <img
            src={coin}
            alt="TROVIX Token"
            className="absolute bottom-0 right-0 w-28 md:w-40 opacity-90"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div 
            className="rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center md:justify-around gap-4" 
            style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
          >
            <img
              src={lcpu}
              alt="Live commodities"
              className="w-20 md:w-auto"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-400">
                Live commodities <br className="hidden md:block" /> Price updates
              </h3>
            </div>
          </div>

          <div className="bg-black rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center overflow-hidden h-60 md:h-40">
            <div className="flex flex-col md:flex-row items-center w-full justify-between gap-6 md:gap-0">
              <h3 className="text-bg_color1 text-2xl md:text-3xl font-semibold text-center md:text-left">
                Ship AIS <br className="hidden md:block" /> tracking
              </h3>

              <div className="flex gap-4 w-full md:w-auto justify-center md:justify-start">
                <div className="animate-scroll h-full">
                  <div className="flex flex-col gap-4">
                    {cards1?.map((el, idx) => (
                      <div 
                        key={idx}
                        className="flex justify-center items-center h-16 w-32 md:w-40 bg-[#0E0E0E] shadow-lg rounded-lg"
                      >
                        <p className="text-lg md:text-xl">{el}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="animate-scroll1 h-full">
                  <div className="flex flex-col gap-4">
                    {cards1?.map((el, idx) => (
                      <div 
                        key={idx}
                        className="flex justify-center items-center h-16 w-32 md:w-40 bg-[#0E0E0E] shadow-lg rounded-lg"
                      >
                        <p className="text-lg md:text-xl">{el}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
