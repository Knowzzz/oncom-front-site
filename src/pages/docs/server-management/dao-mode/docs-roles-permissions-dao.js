import React from "react";
import Footer from "../../../../components/Footer";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocRPDAOPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/roles-permissions-dao" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">DAO Mode</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">
            DAO Mode - Roles & Permissions
          </h1>
          <p className="text-md mb-10">
            By executing certain Smart contract functions, certain allocated
            members will be able to create, delete and change role permissions.
          </p>
          <h4 className="text-1xl font-semibold mb-5 text-black">
            ✨ There will be a few basic roles registered on the smart contract
          </h4>
          <ul className="list-disc list-inside border-b border-zinc-200 pb-20 ">
            <li className="mb-2">
              <b>Member</b> : This role can be acquired by an address if it
              meets certain conditions (e.g. it must be a token holder, or
              whatever). This role can be deleted by an address with the
              appropriate permissions (see below).
            </li>
            <li className="mb-2">
              <b>Active member</b> : This role can only be acquired via an API
              request using an oracle. In fact, a minimum threshold of messages
              and interactions will be customizable in the DAO in order to
              obtain this role. The address will then have to be a member of the
              DAO, and have reached this daily/weekly/monthly message threshold,
              in order to be named as an active member. This role simplifies the
              management of who can vote, and eliminates the fraud that can be
              linked to multiple addresses having a greater influence in voting.
            </li>
            <li className="mb-2">
              <b>Owner</b> : This role will have the most important permissions
              on the DAO's OnCom server. It will be able to create roles, manage
              permissions, salons, permissions, and will be seen as the official
              DAO owner. The DAO founder will get this role directly, and then a
              vote will be needed to change this owner.
            </li>
            <li className="mb-10">
              <b>Council Member</b> :There will be a predefined and customizable
              maximum number of people who can be Council Members. This role may
              (or may not) have more access to the server, but will potentially
              have a more important legal function than a simple member within
              the DAO. This role can only be acquired through a vote. Indeed,
              members can propose (see section on proposals) a vote for a change
              of board. If the vote is accepted, there will be a reelection.
            </li>
            <p className="text-md mb-10">
              Any other role can be added and certain permissions can be
              modified: Which role can propose which type of vote? This limits
              spam.
            </p>
          </ul>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/proposals"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Proposals
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocRPDAOPage;
