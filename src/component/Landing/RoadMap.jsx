import React from "react";
import img1 from "../../assets1/landing/roadmap1.png";
import img2 from "../../assets1/landing/roadmap2.png";
import img3 from "../../assets1/landing/roadmap3.png";
import img4 from "../../assets1/landing/roadmap4.png";
import img5 from "../../assets1/landing/roadmap5.png";

const RoadMap = () => {
  const sections = {
    phase1: [
      {
        title: "Phase 1",
        subtitle: "Foundations & Early Deliverables",
      },
      {
        title: "TROVIX Wallet App Launch",
        features: [
          "Secure wallet for TROVIX Tokens and other supported assets1.",
          "Seamless token transfers and transaction history.",
          "Multi-layer security, including biometrics and encryption.",
        ],
      },
      {
        title: "TROVIX Marketplace Launch",
        features: [
          "Decentralized marketplace for crude oil and related services.",
          "Payments powered by TROVIX Tokens.",
          "Real-time pricing and trade matching.",
        ],
      },
      {
        title: "Ship AIS Tracker Deployment",
        features: [
          "Blockchain-powered vessel tracking.",
          "Real-time updates on crude oil shipments.",
          "Enhanced transparency in the supply chain.",
        ],
      },
    ],

    phase2: [
      {
        title: "Phase 2",
        subtitle: "Platform Expansion",
      },
      {
        title: "Mobile App Development",
        features: [
          "Launch of Android and iOS apps.",
          "Push notifications for transactions and updates.",
        ],
      },
    ],

    phase3: [
      {
        title: "Phase 3",
        subtitle: "Ecosystem Growth",
      },
      {
        title: "Staking and Rewards Program",
        features: [
          "Earn rewards by staking TROVIX Tokens.",
          "Special bonuses for early adopters.",
        ],
      },
    ],

    phase4: [
      {
        title: "Phase 4",
        subtitle: "Advanced Features Deployment",
      },
      {
        title: "AI-Powered Market Predictions",
        features: [
          "Real-time AI predictions for crude oil trends.",
          "Personalized trading insights for users.",
          "Boost platform engagement and decision-making.",
        ],
      },
      {
        title: "Global Partnerships",
        features: [
          "Strategic partnerships with oil and logistics companies.",
          "Expand TROVIX Token adoption worldwide.",
          "Collaborations for new service offerings.",
        ],
      },
      {
        title: "Regulatory Compliance",
        features: [
          "Ensure full compliance with international regulations.",
          "Implement transparent reporting systems.",
          "Build user trust and secure operations globally.",
        ],
      },
    ],
  };

  // ek function banate hain jo ek phase ke data ko render karega
  const renderPhase = (imageSrc, phaseSections) => {
    return (
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="w-full sm:w-1/3">
          <img src={imageSrc} alt={phaseSections[0]?.title} className="w-full rounded-lg shadow-lg" />
        </div>

        <div className="w-full sm:w-2/3">
          {phaseSections.map((section, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h2 className="text-xl font-bold text-[#fd5d31]">{section.title}</h2>
              {section.subtitle && (
                <h3 className="text-md font-semibold mb-2 text-gray-600">
                  {section.subtitle}
                </h3>
              )}
              {section.features && (
                <ul className="list-disc list-inside text-gray-700">
                  {section.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:hidden bg-gradient-to-r from-[#FF6C2F] to-[#FF4A15] bg-clip-text text-transparent">
          TROVIX <span className="text-white">Roadmap</span>
        </h1>
        <h1 className="max-w-4xl 2xl:max-w-6xl sm:text-5xl xl:max-w-6xl xl:text-7xl text-3xl font-semibold text-center py-10 bg-gradient-to-r from-[#FF6C2F] to-[#FF4A15] bg-clip-text text-transparent 2xl:text-7xl">
          TOKEN LISTING ON CEX AT THE END OF STAGE 5
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between max-w-2xl xl:max-w-4xl 2xl:max-w-4xl mx-auto py-10">
        {/* Left side */}
        <div className="w-1/2 flex items-center">
          <div className="w-1/2 hidden sm:block">
            <img src={img5} className="w-full" alt="Roadmap decoration" />
          </div>
          {/* Timeline decoration can go here if you want */}
        </div>

        {/* Right side: All phases */}
        <div className="flex flex-col gap-20 sm:w-1/2 pr-10 pl-2">
          {renderPhase(img1, sections.phase1)}
          {renderPhase(img2, sections.phase2)}
          {renderPhase(img3, sections.phase3)}
          {renderPhase(img4, sections.phase4)}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
