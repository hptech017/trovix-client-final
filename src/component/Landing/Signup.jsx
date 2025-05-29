import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import Confetti from "react-confetti";
import { Fireworks } from "fireworks-js";

import bg from "../../assets1/landing/sign_bg.jpg";
import mob from "../../assets1/landing/sign_mobile.png";
import bg1 from "../../assets1/landing/signimg1.png";
import bg2 from "../../assets1/landing/signimg2.png";
import bg3 from "../../assets1/landing/signimg3.png";
import bg4 from "../../assets1/landing/signimg4.png";

const Signup = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const fireworksRef = useRef(null);
  const fireworksInstance = useRef(null);

  // Controlled inputs to clear them on submit
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (showConfetti) {
      // Create fireworks instance when confetti starts
      fireworksInstance.current = new Fireworks(fireworksRef.current, {
        speed: 3,
        acceleration: 1.05,
        friction: 0.95,
        gravity: 1.5,
        particles: 50,
      });
      fireworksInstance.current.start();

      // Stop after 4 seconds
      setTimeout(() => {
        fireworksInstance.current.stop();
        setShowConfetti(false);
      }, 4000);
    }

    return () => {
      if (fireworksInstance.current) {
        fireworksInstance.current.stop();
        fireworksInstance.current = null;
      }
    };
  }, [showConfetti]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Congratulations!",
      text: "Your email has been submitted for the TROVIX Airdrop 🎉",
      icon: "success",
      confirmButtonText: "Awesome!",
      background: "#222",
      color: "white",
    }).then(() => {
      // cleanup happens in useEffect
    });

    setShowConfetti(true);

    // Clear inputs
    setUsername("");
    setEmail("");
    setPhone("");
  };

  return (
    <section
      className="bg-cover relative bg-center flex-col md:flex-row flex items-center justify-between gap-10 md:gap-0 px-4 pt-16"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Fireworks container */}
      {showConfetti && (
        <div
          ref={fireworksRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      )}

      {/* Confetti animation */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <div className="md:w-1/2 flex items-center justify-center">
        <div className="bg-[rgba(50,46,46,0.28)] border z-30 xl:min-w-96 relative border-[rgba(255,255,255,0.3)] backdrop-blur-md rounded-xl p-8">
          <h2 className="text-3xl text-white text-center mb-6">
            Signup Now <br /> for TROVIX Airdrop
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter User Name"
              className="p-3 rounded-md bg-white/90 text-black placeholder-gray-600 focus:outline-none"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 rounded-md bg-white/90 text-black placeholder-gray-600 focus:outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="+44"
              className="p-3 rounded-md bg-white/90 text-black placeholder-gray-600 focus:outline-none"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="submit"
              className="p-3 rounded-md bg-black text-white font-semibold hover:bg-white hover:text-black transition-all"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
      <div className="md:w-1/2 relative bottom-0 lg:bottom-0 md:-bottom-16 flex items-end justify-center">
        <img src={mob} className="w-1/2" alt="" />
      </div>
      <img src={bg1} className="absolute top-0 left-0 w-52 z-40" alt="" />
      <img src={bg2} className="absolute bottom-0 left-10 w-52 z-20" alt="" />
      <img
        src={bg3}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-52"
        alt=""
      />
      <img src={bg4} className="absolute top-20 right-5 w-52" alt="" />
    </section>
  );
};

export default Signup;
