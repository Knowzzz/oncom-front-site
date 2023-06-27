import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAngleRight, FaBars } from "react-icons/fa";

const Sidebar = ({ page }) => {
  const [activeLink, setActiveLink] = useState(page);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function checkActiveLinkInLinks(links, activeLink) {
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      // Vérifier si l'URL active se trouve dans les sous-liens
      if (link.links) {
        if (checkActiveLinkInLinks(link.links, activeLink)) {
          return true;
        }
      }
      // Vérifier si l'URL active correspond au lien actuel
      else if (link.path === activeLink) {
        return true;
      }
    }
    return false;
  }

  const DropdownMenu = ({ title, links, nested }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      // Vérifier si l'URL active se trouve dans l'un des liens
      if (checkActiveLinkInLinks(links, activeLink)) {
        setIsOpen(true);
      }
    }, [activeLink, links]);

    return (
      <div className="my-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between w-full text-sm font-normal text-gray-600 hover:text-black hover:bg-gray-100 focus:outline-none py-2 px-2 rounded ${
            nested ? "ml-4" : ""
          }`}
        >
          {title}
          <motion.div
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="text-gray-400"
          >
            <FaAngleRight />
          </motion.div>
        </button>
        {isOpen && (
          <motion.div
            className={nested ? "ml-4" : "ml-2"}
            transition={{ duration: 0.4 }}
          >
            {links.map((link, index) =>
              link.links ? (
                <DropdownMenu
                  key={index}
                  title={link.title}
                  links={link.links}
                  nested={true}
                />
              ) : (
                <motion.div
                  key={index}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: isOpen ? 1 : 0.5 }}
                  transition={{ delay: 0.01, duration: 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block my-1 px-2 py-1 rounded-md text-sm ${
                      link.path === activeLink
                        ? "text-blue-700 bg-blue-100"
                        : "text-gray-600 hover:text-black hover:bg-gray-100"
                    } focus:outline-none`}
                    onClick={() => setActiveLink(link.path)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div className="">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="text-3xl m-4 absolute z-50 lg:hidden"
      >
        <FaBars />
      </button>
      <div
        className={`${
          sidebarOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
        } fixed w-64 bg-white h-screen p-5 mt-0 transform top-0 left-0 overflow-auto transition-transform duration-300 z-30 lg:translate-x-0 lg:relative lg:mt-0 lg:z-10 ml-48`}
      >
        <Link
          to="/docs"
          className={`block my-1 px-2 py-1 rounded-md text-sm ${
            "/docs" === activeLink
              ? "text-blue-700 bg-blue-100"
              : "text-gray-600 hover:text-black hover:bg-gray-100"
          } focus:outline-none mb-10`}
          onClick={() => setActiveLink("/docs")}
        >
          Intro
        </Link>

        <p className="text-base font-bold text-gray-700 mb-5">USER GUIDES</p>

        <DropdownMenu
          title="Getting Started"
          links={[
            { label: "Account creation", path: "/docs/account-creation" },
            { label: "Logging in", path: "/docs/logging-in" },
          ]}
        />
        <DropdownMenu
          title="Features"
          links={[
            {
              title: "Community Features",
              links: [
                {
                  label: "Friends & Private Messaging",
                  path: "/docs/friends-private-messaging",
                },
                { label: "Tags", path: "/docs/tags" },
                {
                  label: "Customized Profile",
                  path: "/docs/customized-profile",
                },
              ],
            },
            {
              title: "Web3 Features",
              links: [
                { label: "Sign with Wallet", path: "/docs/sign-with-wallet" },
                {
                  label: "Transaction Initiation",
                  path: "/docs/transaction-initiation",
                },
                {
                  label: "Token Verification",
                  path: "/docs/token-verification",
                },
                {
                  label: "Secure NFT & Cryptocurrency Exchange",
                  path: "/docs/secure-nft-cryptocurrency-exchange",
                },
              ],
            },
          ]}
        />
        <DropdownMenu
          title="Server Management"
          links={[
            { label: "Creating server", path: "/docs/creating-server" },
            { label: "Channels", path: "/docs/channels" },
            { label: "Categories", path: "/docs/categories" },
            { label: "Roles & Permissions", path: "/docs/roles-permissions" },
            { label: "Invite link", path: "/docs/invite-link" },
            {
              title: "DAO Mode",
              links: [
                { label: "Intro", path: "/docs/intro" },
                {
                  label: "Roles & Permissions",
                  path: "/docs/roles-permissions-dao",
                },
                { label: "Proposals", path: "/docs/proposals" },
              ],
            },
          ]}
        />
        <Link
          to="/docs/conclusion"
          className={`text-sm font-normal ${
            "/docs/conclusion" === activeLink
              ? "text-blue-700 bg-blue-100"
              : "text-gray-600 hover:text-black hover:bg-gray-100"
          } focus:outline-none py-2 px-2 rounded`}
          onClick={() => setActiveLink("/docs/conclusion")}
        >
          Conclusion
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
