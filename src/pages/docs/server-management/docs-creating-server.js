import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocCreatingServerPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/creating-server" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Server Management</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">
            Creating server
          </h1>
          <p className="text-md mb-10 border-b border-zinc-200 pb-20">
            Creating a server on OnCom is simple and free. Click the '+' button
            on the left navigation bar, select 'Create a Server', and enter the
            required details. After creating your server, you can personalize it
            by adding custom channels, categories, roles, and permissions. You
            can also customize the server's color scheme, emotes, and more.
          </p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/channels"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Channels
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocCreatingServerPage;
