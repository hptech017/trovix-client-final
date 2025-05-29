import img9 from "../assets1/landing/analyticsinsight.png";
import img10 from "../assets1/landing/bitcoinist.png";
import img2 from "../assets1/landing/coincodex.png";
import img3 from "../assets1/landing/coingape.png";
import img5 from "../assets1/landing/coinpedia.png";
import img6 from "../assets1/landing/coinspeaker.png";
import img1 from "../assets1/landing/cointelegraph.png";
import img7 from "../assets1/landing/crypto.news.png";
import img8 from "../assets1/landing/cryptopolitan.png";
import img4 from "../assets1/landing/yahoo_news_logo2.png";

export default function FeaturedOn() {
    const logos = [
      { src: img1, alt: "Cointelegraph" },
      { src: img2, alt: "CoinGape" },
      { src: img3, alt: "Yahoo News" },
      { src: img4, alt: "Analytics Insight" },
      { src: img5, alt: "CoinPedia" },
      { src: img6, alt: "Coinspeaker" },
      { src: img7, alt: "Crypto News" },
      { src: img8, alt: "Cryptopolitan" },
      { src: img9, alt: "Coincodex" },
      { src: img10, alt: "Bitcoinist" },
    ];
  
    return (
      <div className=" text-white py-12 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-7xl ">
            Featured <span className="text-orange-500">On</span>
          </h2>
        </div>
  
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-6 md:h-8 object-contain"
            />
          ))}
        </div>
      </div>
    );
  }
  