import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocInviteLinkPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/invite-link" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Server Management</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">Invite Link</h1>
          <p className="text-md mb-10">
            When you're on a server, and have the permissions to do so, you can
            generate an invitation link valid for a certain period of time, and
            send it to anyone. All they have to do is click on the link, and if
            they have the conditions to enter the server, they can (tokens,
            authorization of some kind).
          </p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/intro"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              DAO Mode - Intro
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocInviteLinkPage;
