import React from "react";
import Footer from "../../../../components/Footer";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocFriendsPrivateMessagingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/friends-private-messaging" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Community Features</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">
            Friends & Private Messaging
          </h1>
          <p className="text-md mb-10">
            After logging in, you can start adding friends by clicking on the
            'Add Friend' button located on your profile page. Once the other
            user accepts your friend request, you will be able to send them
            private messages. The 'Messages' icon located on the navigation bar
            allows you to access your private conversations.
          </p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/tags"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Tags
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocFriendsPrivateMessagingPage;
