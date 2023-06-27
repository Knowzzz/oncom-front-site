import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Introduction</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">
            Welcome to OnCom
          </h1>
          <p className="text-md mb-10">
            Welcome to OnCom, the premier communication platform uniting Web3
            communities and Decentralized Autonomous Organizations (DAOs). With
            a user-friendly interface inspired by Discord, OnCom seamlessly
            integrates advanced Web3 functionalities while maintaining an array
            of traditional community features. This document will guide you step
            by step through the functionalities and features of OnCom.
          </p>
          <h4 className="text-1xl font-semibold mb-5 text-black">
            ✨ Key Features
          </h4>
          <ul className="list-disc list-inside border-b border-zinc-200 pb-20 ">
            <li>
              Seamlessly switch between chat, voice, forum, links, and more.
            </li>
            <li>
              Interact directly with DApps, DAO tools, and other awesome things.
            </li>
            <li>
              Decentralized governance system with smart contract on polygon
            </li>
            <li>Total server management and total profile customization</li>
            <li>No data collected, and wallet authentication only</li>
          </ul>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/account-creation"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Account creation
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocPage;
