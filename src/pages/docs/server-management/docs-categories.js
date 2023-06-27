import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocCategoriesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/categories" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Server Management</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">Categories</h1>
          <p className="text-md mb-10 border-b border-zinc-200 pb-20">
            Categories on OnCom are the perfect way to organize your server.
            They act as containers for channels, keeping related Text, Voice,
            Forum, or Voting channels together. Each category can be customized
            with specific permissions for each role, ensuring a precise level of
            control and moderation across your server. To create a category,
            click the '+' button in the server menu, select 'Create a Category',
            and start adding channels. Harness the power of categories to
            maintain a neat, organized, and user-friendly server.
          </p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/roles-permissions"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Roles & Permissions
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocCategoriesPage;
