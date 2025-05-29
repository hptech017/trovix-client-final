import dd from "../assets1/landing/dd_reports.png";
import bg from "../assets1/landing/three_box6.png";

export default function InvestmentTransparencySection() {
  return (
    <div className="bg-[#0D0D0D] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-8 md:col-span-1">
          <div
            style={{ backgroundImage: `url(${dd})`, backgroundSize: "cover" }}
            className="bg-black rounded-3xl p-6 flex flex-col justify-center items-start relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-orange-500 text-lg font-semibold">
                Due Diligence <br /> Reports
              </h3>
            </div>
          </div>

          <div className="bg-black rounded-3xl p-6 flex flex-col justify-between">
            <h3 className="text-lg font-semibold mb-6 text-center">
              Marketplace for Enterprises in the <br /> Fuel Industry Expansion
            </h3>
            <button className="border border-white/50 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors">
              GET STARTED
            </button>
          </div>
        </div>

        <div className="md:col-span-2 relative rounded-3xl overflow-hidden flex flex-col md:flex-row">
          <img
            src={bg}
            alt="Investment Transparency"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="relative z-10 w-full flex flex-col md:flex-row p-8 gap-8">
            <div className="flex-1 flex items-center">
              <h2 className="text-5xl font-bold leading-tight">
                Transparent & <br /> Efficient <br /> Investment Process
              </h2>
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-[#b1b1b1] text-right">
                Our platform is built on transparency and trust. We provide
                comprehensive due diligence reports and ensure a secure,
                streamlined investment experience without hidden fees. Partner
                with us to support real-world fuel industry growth and share in
                its success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
