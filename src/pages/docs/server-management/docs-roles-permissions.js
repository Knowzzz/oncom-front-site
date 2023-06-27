import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocRolesPermissionsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/roles-permissions" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Server Management</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">
            Roles & Permissions
          </h1>
          <p className="text-md mb-10">
            Roles and permissions are fundamental aspects of server management
            on OnCom. They allow you to determine the capabilities of your
            community members, providing a way to differentiate between user
            types and what they can or cannot do within your server. Roles can
            be assigned to users and channels, affecting the access and
            permissions granted to those entities. For example, you can create
            roles such as 'Admin', 'Moderator', or 'Member'. An 'Admin' might
            have permissions to manage channels, roles, and server settings. A
            'Moderator' could be given permissions to manage messages and
            moderate channels, while a 'Member' might only have basic read and
            write permissions. To customize roles and permissions, navigate to
            'Server Settings', then select 'Roles'. Here, you can add new roles,
            assign them color identifiers, and configure their permissions. Use
            roles and permissions strategically to manage your server
            effectively, ensuring smooth interactions and operations within your
            community.
          </p>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/invite-link"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Invite link
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocRolesPermissionsPage;
