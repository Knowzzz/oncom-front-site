import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { FRONT_APP_URL } from "../../components/const/const";

const DocConclusionPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/conclusion" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Conclusion</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">
            Thanks to use OnCom
          </h1>
          <p className="text-md mb-10">
            OnCom represents a new wave in communication platforms by combining
            traditional community features with advanced Web3 functionalities.
            This robust platform allows users to create a personalized space
            with features like friends & private messaging, customizable
            profiles, tags, and customized channels & categories in servers. At
            the same time, it bridges the gap between traditional social
            platforms and the rapidly evolving world of blockchain technologies.
            The introduction of Web3 features such as sign-up and sign-in with
            wallet, transaction initiation, token verification, and secure NFT &
            cryptocurrency exchange, offers users an unprecedented level of
            convenience and security in managing their online interactions and
            transactions.
          </p>
          <p className="text-md mb-10">
            Moreover, OnCom's commitment to decentralized autonomous
            organizations (DAOs) through server management and the DAO mode
            ensures democratic decision-making and autonomy in these
            organizations. It's noteworthy that OnCom staff do not hold rights
            over each DAO's smart contract, preserving the essence of
            decentralization.
          </p>
          <p className="text-md mb-10 border-b border-zinc-200 pb-20">
            In conclusion, OnCom emerges as a transformative platform, bringing
            the Web3 ecosystem closer to everyday users and fostering an
            environment that empowers DAOs. With its ongoing developments and
            upgrades, it will be interesting to see the new frontiers this
            platform will explore and establish in the future.
          </p>

          <div className="flex justify-end items-center mt-4">
            <Link
              to={`${FRONT_APP_URL}/signup`}
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Start now !
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocConclusionPage;
