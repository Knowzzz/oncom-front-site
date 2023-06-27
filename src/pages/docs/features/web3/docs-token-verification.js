import React from "react";
import Footer from "../../../../components/Footer";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocTokenVerificationPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/token-verification" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Web3 Features</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">
            Token verification
          </h1>
          <p className="text-md mb-10">
            You can verify the possession of ERC721 or ERC20 tokens on OnCom.
            Navigate to the 'Token Verification' page and enter your token
            contract address and token ID. OnCom will then verify the ownership
            of these tokens.
          </p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/secure-nft-cryptocurrency-exchange"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Secure NFT & Cryptocurrency Exchange
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocTokenVerificationPage;
