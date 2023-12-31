// pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import { FiAlertOctagon, FiArrowLeft } from "react-icons/fi";
import { useTranslation } from "react-i18next";


const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <div className="flex items-center justify-center w-32 h-32 mb-8 bg-red-500 rounded-full animate-pulse">
        <FiAlertOctagon className="w-20 h-20 text-white" />
      </div>
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="mt-2 text-3xl font-semibold">{t("not_found")}</h2>
      <p className="mt-4 text-xl text-center">
        {t("page_not_found")}
      </p>
      <Link
        to="/"
        className="flex items-center mt-6 text-lg font-semibold text-white hover:text-blue-300 transition-colors duration-200"
      >
        <FiArrowLeft className="mr-2" />
        {t("back_home")}
      </Link>
    </div>
  );
};

export default NotFound;
