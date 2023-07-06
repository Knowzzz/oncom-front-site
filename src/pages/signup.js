import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "aos/dist/aos.css";
import { API_NEWSLETTER_URL } from "../components/const/const";
import AOS from "aos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

AOS.init();

const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_NEWSLETTER_URL}/user/signup`, { email });
      if (response.data.success) {
        toast.success("You've signed up for the newsletter successfully!");
        setEmail("");
        navigate("/");
      } else {
        throw new Error(
          response.data.message || "Unable to sign up for the newsletter."
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Navbar />

      <div
        className="min-h-screen bg-zinc-800 text-white flex items-center justify-center"
        data-aos="fade-up"
      >
        <form
          className="w-full max-w-md mx-auto bg-zinc-700 rounded p-5"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl mb-5 text-center font-bold">
            Subscribe to our Newsletter
          </h2>
          <div className="mb-4">
            <label className="block mb-2">Email address</label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-zinc-600 text-white rounded-md focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-3 bg-zinc-300 text-zinc-800 rounded-md hover:bg-zinc-200 transition-colors duration-200"
          >
            Subscribe
          </button>
          <ToastContainer />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default NewsletterPage;
