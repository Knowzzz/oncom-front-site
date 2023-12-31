import React, { useState } from "react";
import { FaTwitter, FaGithub, FaEthereum } from "react-icons/fa";
import { US, FR, ES } from "country-flag-icons/react/3x2";
import Select from "react-select";
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { i18n } = useTranslation();
  const { t } = useTranslation();


  const languageOptions = [
    {
      value: "en",
      label: (
        <>
          <US title="English" className="w-6 h-4 inline mr-2" />
          English
        </>
      ),
    },
    {
      value: "fr",
      label: (
        <>
          <FR title="Français" className="w-6 h-4 inline mr-2" />
          Français
        </>
      ),
    },
    {
      value: "es",
      label: (
        <>
          <ES title="Español" className="w-6 h-4 inline mr-2" />
          Español
        </>
      ),
    },
  ];
  
  // Trouver l'option qui correspond à la langue actuelle
  const currentOption = languageOptions.find(option => option.value === i18n.language);
  
  // Utiliser cette option pour initialiser l'état
  const [selectedOption, setSelectedOption] = useState(currentOption);  
  

  const handleLanguageChange = (option) => {
    setSelectedOption(option);
    i18n.changeLanguage(option.value);
  };

  return (
    <footer className="bg-zinc-900 text-white py-6 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-around">
        <div className="flex flex-col mb-6 md:mb-0">
          <h2 className="text-3xl mb-3">OnCom</h2>
          <Select
            value={selectedOption}
            onChange={handleLanguageChange}
            options={languageOptions}
            className="text-black"
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: "#18181b",
                borderColor: "#18181b",
                minHeight: "48px",
                borderRadius: "4px",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "white",
              }),
              menu: (provided) => ({
                ...provided,
                zIndex: 1000,
                marginTop: 0,
                backgroundColor: "#18181b",
              }),
              menuList: (provided) => ({
                ...provided,
                paddingTop: 0,
                paddingBottom: "1rem",
                backgroundColor: "#18181b",
              }),
              option: (provided, state) => ({
                ...provided,
                color: "white",
                backgroundColor: state.isFocused ? "#27272a" : "#18181b",
              }),
            }}
            menuPlacement="top"
          />

          <div className="flex mt-4 space-x-4">
            <FaTwitter />
            <FaEthereum />
            <FaGithub />
          </div>
        </div>

        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="text-xl mb-3 font-bold">Entreprise</h3>
          <ul>
            <li>
              <a href="/docs" className="block mb-2">
              {t("about")}
              </a>
            </li>
            <li>
              <a href="/docs" className="block">
              {t("help")}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="text-xl mb-3 font-bold">{t("charters")}</h3>
          <ul>
            <li>
              <a href="/confidentiality" className="block mb-2">
              {t("confidentiality")}
              </a>
            </li>
            <li>
              <a href="/conditions" className="block mb-2">
                Conditions
              </a>
            </li>
            <li>
              <a href="/cookies" className="block">
                Cookies
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="text-xl mb-3 font-bold">{t("produces")}</h3>
          <ul>
            <li>
              <a href="/download" className="block mb-2">
              {t("download")}
              </a>
            </li>
            <li>
              <a href="/oncom-plus" className="block">
                OnComPro
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4 flex flex-col">
          <img
            src="/images/logo_oncom.png"
            alt="oncom logo"
            className="w-28"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
