import React from "react";
import Footer from "../../../../components/Footer";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocIntroPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/intro" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">DAO Mode</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">Intro</h1>
          <p className="text-md mb-10">
            Activating DAO Mode on your server allows you to deploy a fully
            customizable smart contract on the Polygon blockchain for 70 MATIC.
            This smart contract facilitates the creation of roles, voting
            systems, and permissions management based on specific criteria, such
            as token ownership percentage or role.
          </p>
          <p className="text-md mb-10">
            DAO Mode also includes various voting mechanisms for changing
            ownership, electing council members, disbursing funds, or posing
            questions. These mechanisms operate in a decentralized manner,
            ensuring democratic decision-making within your DAO.
          </p>
          <p>
            Please note that OnCom staff members do not hold any rights over
            each DAO's smart contract. This ensures the autonomous operation of
            your DAOs.
          </p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/roles-permissions-dao"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              DAO Mode - Roles & Permissions
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocIntroPage;
