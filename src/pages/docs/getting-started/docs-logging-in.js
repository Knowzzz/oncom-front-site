import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocLoggingInPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/logging-in" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Getting started</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">Logging in</h1>
          <p className="text-md mb-10">
            To log into OnCom, click the 'Log In' button on the OnCom homepage
            and sign a message with your crypto wallet, OnCom to the process
            during account creation. This will authenticate your identity and
            grant you access to your OnCom account.
          </p>
          <p className="border-b border-zinc-200 pb-20">You don't need to use any e-mail addresses or passwords</p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/friends-private-messaging"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Friends & Private Messaging
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocLoggingInPage;
