import React from "react";
import Footer from "../../../../components/Footer";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocTagsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/tags" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Community Features</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">Tags</h1>
          <p className="text-md mb-10">
            OnCom enables you to use tags to identify your skills and
            profession, like 'Developer', 'Graphic designer', etc. These tags
            can be added by navigating to 'Profile Settings' and selecting
            'Manage Tags'. To add a tag, simply type in the tag and hit 'Enter'.
            Other users can now find you by searching for these tags.
          </p>
          <p className="border-b border-zinc-200 pb-20">
          To further
            enhance credibility, you can get your tags certified by OnCom staff,
            which can validate your claimed skills.
          </p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/customized-profile"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Customized Profile
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocTagsPage;
