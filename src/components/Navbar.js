import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { FRONT_APP_URL } from "./const/const";
import "./style.css";

const Navbar = ({ isAuthenticated, color }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const textColor = color === "white" ? "text-zinc-500" : "text-white";
  const buttonTextColor = color === "white" ? "text-white" : "text-zinc-600";
  const buttonBgColor = color === "white" ? "bg-zinc-600" : "bg-white";
  const buttonHoverColor = color === "white" ? "hover:bg-zinc-900" : "hover:bg-zinc-200";
  const borderColor = color === "white" ? "border-zinc-200" : "border-zinc-800";
  const logo = color === "white" ? "/images/logo_oncom_black.png" : "/images/logo_oncom.png";

  return (
    <nav
      className={`py-1 border ${borderColor} ${color === "white" ? "bg-white" : "bg-zinc-900"} shadow`}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center px-2">
        <Link to="/" className={`${textColor} font-bold text-xl ml-10`}>
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto"
          />
        </Link>
        <div
          className={`nav-menu md:flex items-center ml-10 space-x-8 ${
            menuOpen ? "sidebar open" : "sidebar"
          }`}
        >
          <div className={`ml-16 flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-8 ${textColor}`}>
            <Link to="/docs" className={`${textColor} underline-from-center`}>
              Docs
            </Link>
            <Link to="/oncomplus" className={`${textColor} underline-from-center`}>
              OnComPro
            </Link>
            <Link to="/contact" className={`${textColor} underline-from-center`}>
              Contact
            </Link>
            <Link to="/download" className={`${textColor} underline-from-center`}>
              {t("download")}
            </Link>
          </div>
          <div className="ml-auto mt-4 md:mt-0 hover:scale-105 duration-300 ease-in-out ">
            {!isAuthenticated ? (
              <Link
                to={`${FRONT_APP_URL}/signup`}
                className={`${buttonTextColor} ${buttonBgColor} px-4 py-2 rounded-full font-semibold transition-colors ease-in-out ${buttonHoverColor} border-2`}
              >
                {t("signup")}
              </Link>
            ) : (
              <Link
                to={FRONT_APP_URL}
                className={`${buttonTextColor} ${buttonBgColor} px-4 py-2 rounded-full font-semibold transition-colors ease-in-out ${buttonHoverColor} border-2`}
              >
                {t("open_app")}
              </Link>
            )}
          </div>
        </div>
        <button
          className={`md:hidden ${textColor} ${menuOpen ? "close-icon" : ""}`}
          onClick={handleMenuClick}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
