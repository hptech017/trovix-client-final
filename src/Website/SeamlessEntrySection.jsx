import lo from "../assets1/landing/lo.png";
import lp from "../assets1/landing/lp.png";
import rs from "../assets1/landing/rs.png";

export default function SeamlessEntrySection() {
  const features = [
    {
      icon: lp,
      title: "GROWTH-BASED RETURNS",
      description:
        "Invest in the infrastructure expansion of our fuel station ecosystem and receive returns based on real-world business growth metrics.",
    },
    {
      icon: rs,
      title: "PERFORMANCE-BASED REWARDS",
      description:
        "Earn additional income through our structured reward layers — including referral bonuses and long-term growth benefits.",
    },
    {
      icon: lo,
      title: "PARTNER BENEFITS",
      description:
        "As a financial partner, get exclusive access to profit-sharing opportunities, loyalty bonuses, and insider project updates.",
    },
  ];

  return (
    <div className="p-5 md:p-0">
      <div className="border-t border-white/50 border-l rounded-3xl text-white py-8 md:py-16 px-6 md:max-w-6xl max-w-lg mx-auto">
        <div className="text-center max-w-3xl mx-auto md:mb-14">
          <h2 className="text-xl md:text-6xl font-bold leading-tight">
            Seamless Entry, <span className="text-bg_color1">Solid</span> Growth
          </h2>
          <p className="text-gray-300 mt-6 text-sm md:text-lg">
            At TROVIX, you're not just investing in numbers — you're funding real industrial growth. Contribute to our expanding fuel ecosystem and earn returns as we grow together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-2">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <img
                src={feature.icon}
                alt={feature.title}
                className="md:h-16 md:w-16 w-12 h-12 mb-4"
              />
              <h3 className="text-bg_color1 font-bold text-lg mb-4">
                {feature.title}
              </h3>
              <p className="text-base md:text-left text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
