import React from "react";
import Footer from "../../../../components/Footer";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocNFTExchangePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/secure-nft-cryptocurrency-exchange" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Web3 Features</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">
            Secure NFT & Cryptocurrency Exchange
          </h1>
          <p className="text-md mb-10">
            Exchanging NFTs and cryptocurrencies securely is a breeze on OnCom.
            Simply go to the 'Marketplace' tab, select the NFT or cryptocurrency
            you wish to trade, enter the details of the transaction, and click
            'Trade'. The transaction will then be carried out securely on the
            blockchain.
          </p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/creating-server"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Creating server
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocNFTExchangePage;
