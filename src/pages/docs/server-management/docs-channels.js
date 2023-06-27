import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const DocChannelsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-600">
      <Navbar color="white" />
      <div className="flex">
        <Sidebar page="/docs/channels" />
        <div className="flex flex-col max-w-4xl mx-auto p-4 ml-10">
          <h3 className="text-1xl mb-5">Server Management</h3>
          <h1 className="text-4xl font-bold mb-5 text-black">Channels</h1>
          <p className="text-md mb-10">
            Creating a channel on OnCom is straightforward and intuitive. From
            the main dashboard, click the '+' button located in the server menu,
            and select <b>'Create a Channel'</b>. This will prompt you to choose the
            type of channel you want — <b>Text, Voice, Forum, or Voting</b>. Each
            channel is designed to promote different forms of communication,
            engagement, and collaboration within your server. After channel
            creation, you can further customize it with specific permissions and
            settings. Let's delve into each channel type to understand their
            unique features and how they can foster vibrant conversations in
            your community.
          </p>
          <h4 className="text-1xl font-semibold mb-5 text-black">
            Channels Types
          </h4>
          <ul className="list-disc list-inside border-b border-zinc-200 pb-20 ">
            <li className="pb-6">
              The <b>Text Channel</b> provides users with the ability to communicate
              through a combination of text, images, emojis, and links. This
              encourages dynamic interactions, from sharing articles, websites,
              and documents for review and feedback, to expressing emotions or
              conveying a message through images.
            </li>
            <li className="pb-6">
              The <b>Voice Channel</b> offers a real-time audio communication platform.
              Ideal for team collaborations or communities wishing to host live
              discussions, this channel allows users to express their thoughts
              and ideas vocally.
            </li>
            <li className="pb-6">
              The <b>Forum Channel</b> presents a structured format for users to
              initiate topics and respond in an orderly fashion. Designed for
              communities seeking in-depth discussions or customer support, the
              Forum Channel enables the creation of subtopics for easy
              categorization and navigation through discussions. It's an ideal
              channel for fostering idea sharing, collaboration, and feedback.
            </li>
            <li className="pb-6">
              Lastly, the <b>Voting Channel</b> introduces an interactive democratic
              feature. Every server member can view the ongoing polls. Those
              eligible to vote can participate by signing a transaction with
              their wallet, ensuring secure and verifiable voting. Once voting
              concludes, results are displayed, offering a transparent view of
              community sentiment or decision. This channel is a perfect tool
              for decentralized decision-making, fostering community engagement
              and participation.
            </li>
          </ul>
          <div className="flex justify-end items-center mt-4">
            <Link
              to="/docs/categories"
              className="flex items-center transition-all ease-in-out duration-300 delay-100 hover:text-blue-500"
            >
              Categories
              <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocChannelsPage;
