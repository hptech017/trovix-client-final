/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button2 } from "../ui/Buttons";
import { useEffect, useRef, useState } from "react";
import { AuthenticatedRoutes, AuthRoutes } from "../../constants/Routes";
import PageLoader from "../ui/PageLoader";
import { SwalError } from "../../utils/custom-alert";
import { registerWithWallet } from "../../api/auth-api";
import { ethers } from "ethers";
import Swal from "sweetalert2";
import WalletOptionModal from "../ui/WalletOptionModal";
import SelectInput from "../ui/SelectInput";
import TextInput from "../ui/TextInput";

const AuthRegisterForm = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const walletAddRef = useRef(null);

  // Separate state for each input field
  const [referredBy, setReferredBy] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOptionModal, setShowOptionModal] = useState(false);

  // Handle referral code from URL
  useEffect(() => {
    const params = new URLSearchParams(search);
    const referralCode = params.get("referral") || "";
    setReferredBy(referralCode);
  }, [search]);

  const handleNavigate = () => {
    navigate(AuthenticatedRoutes.USER_DASHBOARD);
    window.location.reload();
  };

  const handleSubmit = async () => {
    if (loading) return;
    try {
      setLoading(true);
      const response = await registerWithWallet({
        walletAddress: walletAddRef.current,
        referredBy: referredBy,
        name: name,
        email: email,
      });

      localStorage.setItem("token", response.token);
      localStorage.setItem("role", "User");
      Swal.fire({
        icon: "success",
        title: "Register Success",
        text: "You Registered successfully",
        timer: 2000,
      }).then(() => {
        handleNavigate();
      });
    } catch (error) {
      console.log(error);
      SwalError.fire({
        icon: "error",
        title: "Login Failed",
        text: error?.response?.data.message || error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const connectWallet = async (type) => {
    if (window.ethereum) {
      try {
        setLoading(true);

        // SafePal check
        if (type === "safepal") {
          const isSafePal =
            window.ethereum.isSafePal ||
            navigator.userAgent.toLowerCase().includes("safepal");
          if (!isSafePal) {
            throw new Error("Please use SafePal wallet.");
          }
        }

        // Switch to BSC if not already
        const bscChainId = "0x38"; // 56 in hex
        const currentChainId = await window.ethereum.request({ method: "eth_chainId" });

        if (currentChainId !== bscChainId) {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: bscChainId }],
            });
          } catch (switchError) {
            // If BSC is not added to wallet
            if (switchError.code === 4902) {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: bscChainId,
                    chainName: "Binance Smart Chain",
                    rpcUrls: ["https://bsc-dataseed1.binance.org/"],
                    nativeCurrency: {
                      name: "Binance Coin",
                      symbol: "BNB",
                      decimals: 18,
                    },
                    blockExplorerUrls: ["https://bscscan.com"],
                  },
                ],
              });
            } else {
              throw new Error("Please switch to BSC network in your wallet.");
            }
          }
        }

        // Request account
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        walletAddRef.current = await signer.getAddress();
        setWalletAddress(walletAddRef.current);

        // Get BSC Balance via public BSC RPC
        const bscProvider = new ethers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
        const bnbBalanceInWei = await bscProvider.getBalance(walletAddRef.current);
        const bnbBalanceInEther = ethers.formatUnits(bnbBalanceInWei, "ether");

        await handleSubmit();
      } catch (error) {
        console.error("Error connecting to wallet:", error);
        SwalError.fire({
          icon: "error",
          title: "Wallet Connection Failed",
          text: error?.message || "An error occurred while connecting to the wallet.",
        });
      } finally {
        setLoading(false);
      }
    } else {
      SwalError.fire({
        icon: "error",
        title: "Wallet Connection Failed",
        text: "MetaMask or SafePal is not installed!",
        timer: 3000,
      });
    }
  };

  return (
    <>
      {loading && <PageLoader />}
      {showOptionModal && (
        <WalletOptionModal
          connectWallet={(type) => connectWallet(type)}
          hide={() => setShowOptionModal(false)}
        />
      )}
      <div className="AuthLoginForm content">
        <h5 className="main-heading" data-aos="fade-up">
          Welcome
        </h5>
        <p data-aos="fade-up">
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>

        <div className="input-container">
          <TextInput
            value={referredBy}
            onChange={(e) => setReferredBy(e.target.value)}
            placeholder="optional"
            labelName="Sponsor Id*"
          />
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            labelName="Name*"
          />
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            labelName="Email*"
          />
        </div>
        <div data-aos="fade-up" className="btns">
          <Button2
            onClick={() => setShowOptionModal(true)}
            name={"Register With Wallet"}
            disabled={loading}
          />
        </div>

        <span data-aos="fade-up" className="accontTggle">
          you have an account?
          <Link to={AuthRoutes.LOGIN}>Sign in</Link>
        </span>
      </div>
    </>
  );
};

export default AuthRegisterForm;