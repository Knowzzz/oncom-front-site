import React from "react";
import Footer from "../../../../components/Footer";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocSignWithWalletPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/sign-with-wallet" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Web3 Features</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">
            Sign with wallet
          </h1>
          <p className="text-md mb-10">
            OnCom integrates smoothly with Web3 by allowing you to sign up and
            sign in with your wallet. Signing a message with your wallet creates
            a unique and secure identifier for your account, eliminating the
            need for traditional email-password authentication methods.
          </p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/transaction-initiation"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Transaction Initiation
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocSignWithWalletPage;
