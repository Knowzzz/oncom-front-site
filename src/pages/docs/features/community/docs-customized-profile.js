import React from "react";
import Footer from "../../../../components/Footer";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocCustomizedProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/customized-profile" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Community Features</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">
            Customized Profile
          </h1>
          <p className="text-md mb-10 border-b border-zinc-200 pb-20">
            Personalizing your OnCom profile can be done by navigating to
            'Profile Settings'. Here, you can upload a profile picture, set a
            custom status, and add a bio to showcase your personality or
            professional brand.
          </p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/sign-with-wallet"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Sign with wallet
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocCustomizedProfilePage;
