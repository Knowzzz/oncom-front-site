import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import axios from "axios";
import { API_NEWSLETTER_URL } from "../../components/const/const";
import AOS from "aos";
import Modal from "react-modal";
import classNames from "classnames";
import Typewriter from "typewriter-effect";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";

const Input = styled.input`
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  outline: none;
  font-size: 16px;
`;

const baseURL = "http://localhost:8080";

const NewsletterForm = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubscribe(email);
    setEmail("");
  };

  return (
    <div>
      <h2>Subscribe to our newsletter</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="Enter your email"
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

async function checkIfIsAuthenticated() {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !accessToken) {
      return false;
    }
    const result = await axios.get(`${baseURL}/api/user/validToken`, {
      params: {
        userId: user.id,
      },
      headers: {
        "x-access-token": accessToken,
      },
    });
    if (!result) {
      return false;
    }
    if (result.status == 400) {
      return false;
    }
    return result.data.success;
  } catch (err) {
    return false;
  }
}

function Home() {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const checkAuthentication = async () => {
      const authStatus = await checkIfIsAuthenticated();
      setIsAuthenticated(authStatus);
    };

    checkAuthentication();

    AOS.init({
      duration: 1000,
    });
  }, [isAuthenticated]);

  const handleSubscribe = async (email) => {
    try {
      const response = await axios.post(`${API_NEWSLETTER_URL}/user/signup`, {
        email,
      });
      if (response.data.success) {
        toast.success("You've signed up for the newsletter successfully!");
      } else {
        throw new Error(
          response.data.message || "Unable to sign up for the newsletter."
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const toastId = toast.info(<NewsletterForm onSubscribe={handleSubscribe} />, {
      position: "bottom-right",
      autoClose: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    return () => {
      toast.dismiss(toastId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-800 text-white w-full">
      <div className="relative w-full bg-zinc-900 rounded-b-3xl lg:rounded-b-5xl overflow-hidden">
        <Navbar isAuthenticated={isAuthenticated} />
        <div className="flex flex-col md:flex-row items-center px-4 md:p-8 mt-8 sm:mt-12 md:mt-0">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-center md:mr-8">
            <div className="text-center md:text-left mx-auto md:mx-0 max-w-lg">
              <h1 className="leading-none text-2xl sm:text-3xl sm:mt-4 md:text-5xl font-bold mb-2 sm:mb-4 text-white">
                <Typewriter
                  options={{
                    strings: `${t("empowering_daos")}`,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p
                className="text-zinc-300 text-base sm:text-lg md:text-2xl"
                data-aos="fade-left"
              >
                {t("oncom_streamlines")}
              </p>
              <div className="mt-4 sm:mt-6 md:mt-8" data-aos="fade-right">
                <Link
                  to="/signup"
                  className="text-gray-800 bg-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-lg rounded-full font-semibold transition-colors duration-300 hover:bg-zinc-700 hover:text-white hover:border-white border"
                >
                  Start!
                </Link>
              </div>
            </div>
          </div>
          <img
            className="w-32 md:w-64 lg:w-96 h-auto mx-auto md:mx-0 md:ml-8 mt-4 sm:mt-6"
            src="/images/dao_reu.png"
            alt="Image descriptive"
          />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
          <path
            fill="#27272A"
            fillOpacity="1"
            d="M0,64L60,90.7C120,117,240,171,360,176C480,181,600,139,720,128C840,117,960,139,1080,149.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div
        className="flex flex-col md:flex-row items-start my-8 border-b border-zinc-600"
        data-aos="fade-up"
      >
        <img
          className="w-full md:w-2/6 md:ml-auto md:mr-8 mb-8 md:mb-0"
          src="/images/screen_oncom1.png"
          alt="Image"
        />
        <div className="w-full md:w-3/6 pb-20 flex flex-col items-center md:items-start mt-8 md:mt-20 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            {t("web3_aspects")}
          </h2>
          <p className="text-lg text-zinc-300 w-full md:w-3/6">
            {t("web3_aspects_desc")}
          </p>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row justify-center items-center my-8 border-b border-zinc-600"
        data-aos="fade-up"
      >
        <div className="w-full md:w-3/6 flex flex-col items-center pb-20 mt-20 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-5">{t("community_aspects")}</h2>
          <p className="text-lg text-zinc-300 md:w-3/6">
            {t("community_aspects_desc")}
          </p>
        </div>
        <img
          className="w-full md:w-2/6 lg:w-1/3 mr-20"
          src="/images/screen_oncom2.png"
          alt="Image"
        />
      </div>
      <div
        className="flex flex-col items-center m-20  border-b border-zinc-600 pb-8"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-5"> {t("team")} </h2>
        <p className="text-lg text-zinc-300 mb-8">{t("team_desc")}</p>

        <div className="flex flex-wrap justify-center">
          <div className="flex items-center m-4">
            <div className="w-32 h-32 border-2 border-white rounded-full overflow-hidden">
              <a href="https://twitter.com/0xKnowz" target="_blank">
                <img
                  src="/images/FFF.jpg"
                  alt="Founder & Developer"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
            <div className="ml-8">
              <h3 className="text-lg font-bold">Knowz</h3>
              <p className="text-gray-500">Founder & Developer</p>
            </div>
          </div>
          <div className="flex items-center m-4">
            <div className="w-32 h-32 border-2 border-white rounded-full overflow-hidden">
              <a href="https://twitter.com/LiBledar" target="_blank">
                <img
                  src="/images/primate.jpg"
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>

            <div className="ml-8">
              <h3 className="text-lg font-bold">SkymoZ</h3>
              <p className="text-gray-500">Founder & Designer</p>
            </div>
          </div>
          <div className="flex items-center m-4">
            <div className="w-32 h-32 border-2 border-white rounded-full overflow-hidden">
              <a href="https://twitter.com/LiBledar" target="_blank">
                <img
                  src="/images/primate.jpg"
                  alt="Founder & Designer"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>

            <div className="ml-8">
              <h3 className="text-lg font-bold">NeYkoz</h3>
              <p className="text-gray-500">Founder & Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="bg-zinc w-full flex items-center justify-center"
          data-aos="fade-up"
        >
          <div className="w-full md:w-1/2 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">
              {t("oncom_decentralized")}
            </h2>
            <p className="text-lg text-zinc-300 mb-8">
              {t("oncom_decentralized_desc")}
            </p>
            <a
              href="/signup"
              className="inline-block px-6 py-3 font-semibold text-white bg-zinc-700 rounded-full hover:bg-zinc-300 hover:text-zinc-700 transition-colors duration-300"
              data-aos="fade-left"
            >
              Start now!
            </a>
          </div>
        </div>
      </div>

      <Footer />

      <ToastContainer closeOnClick={false} />
    </div>
  );
}

export default Home;
