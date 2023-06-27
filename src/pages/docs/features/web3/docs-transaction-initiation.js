import React from "react";
import Footer from "../../../../components/Footer";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocTransactionInitiationPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/transaction-initiation" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Web3 Features</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">
            Transaction Initiation
          </h1>
          <p className="text-md mb-10 border-b border-zinc-200 pb-20">
            OnCom supports cryptocurrency transactions within its platform. To
            initiate a transaction, navigate to the 'Wallet' tab in the
            navigation bar, enter the recipient's wallet address and the amount
            to send, and then click 'Send'. The transaction will then be
            executed on the blockchain.
          </p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/token-verification"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Token verification
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocTransactionInitiationPage;
