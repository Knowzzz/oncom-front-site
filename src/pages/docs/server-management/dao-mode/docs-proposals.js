import React from "react";
import Footer from "../../../../components/Footer";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocProposalsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/proposals" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">DAO Mode</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">Proposals</h1>
          <p className="text-md mb-10">
            Members who have the required permissions will be able to create
            Proposals. These are votes that are managed by the smart contract
            and have an influence on the DAO. There are several types of vote.
            Some types have automatic repercussions on the DAO server, making it
            much easier to manage the DAO and prevent fraud.
          </p>
          <h4 className="text-1xl font-semibold mb-5 text-black">
            ✨ Here's a list of the different types of proposals (remember,
            we're still in the early stages of design, and other types will
            probably be added).
          </h4>
          <ul className="list-disc list-inside border-b border-zinc-200 pb-20 ">
            <li className="mb-2">
              <b>Sending funds</b> : It will be possible to propose the sending
              of funds to an address, with the amount and recipient. If the vote
              is accepted and there is enough money on the Smart Contract, the
              funds will be sent within 24-48 hours. If there aren't enough
              funds, the results will still be marked in the appropriate
              lounges, but no funds will be sent. (Note: Before creating the
              proposal, there will be a check to see if there are enough funds
              on the SC, and if not, this will be notified on the proposal).
            </li>
            <li className="mb-2">
              <b>Owner change + Owner reelection</b> : It will be possible to
              request a change of owner. It is advisable to limit this vote to
              the council to avoid spam. If the vote is accepted, the owner will
              be removed from office while the new owner is elected. The address
              with the most votes will be defined as the new owner.
            </li>
            <li className="mb-2">
              <b>Council change + Council reelection</b> : It will be possible
              to propose a total change of council members. If the vote is
              accepted, there will be a re-election. Anyone can stand for
              reelection, and the number of DAO max council members
              (customizable in the settings) with the most votes will be elected
              as new council members.
            </li>
            <li className="mb-10">
              <b>Normal Question</b> : It is also possible to create a
              personalized vote. There will be no automatic effects on the DAO's
              OnCom server, but the result of the vote will be displayed in the
              channel provided.
            </li>
            <p className="text-md mb-10">
              We would like to remind you that other types of proposal will
              probably be added in the future.
            </p>
          </ul>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/conclusion"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Conclusion
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocProposalsPage;
