// src/Home.js

import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaDiscord,
  FaInstagram,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { BusinessMan, Coin, Health, Sack } from "../assets/images/images";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { supabase } from "../supabaseClient";
import "./animation.css";

const Home = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    place: "",
    email: "",
    phone: "",
    status: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, place, email, phone, status, message } = formValues;

    // Save data to Supabase
    const { error } = await supabase
      .from("feedback")
      .insert([{ name, place, email, phone, status, message }]);

    if (error) {
      alert("Error submitting feedback: " + error.message);
    } else {
      alert("Feedback submitted successfully!");
      setFormValues({
        name: "",
        place: "",
        email: "",
        phone: "",
        status: "",
        message: "",
      });
    }
  };
  return (
    <>
      <NavBar />

      {/* Hero Section */}

      <section className="relative h-[500px] 2xl:h-[800px] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="md:ml-20 px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Growing Future Together
            </h1>
            <p className="text-xl mb-8">
              Empowering farmers with tools, finance, and healthcare to
              cultivate <br />a brighter future.
            </p>
            <NavLink
              to="/about"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Who We Are */}

      <section className="w-full md:min-h-[900px] flex justify-center items-center py-14">
        {/* Center content */}
        <div
          className="rounded-[2rem] md:rounded-[3rem] p-6 w-auto max-w-[22rem] md:max-w-6xl shadow-xl"
          style={{ backgroundColor: "#FAF3E0" }}
        >
          <h1 className="text-4xl md:text-7xl font-semibold text-center md:my-6">
            Who <span style={{ color: "#FFA500" }}>WE</span> are{" "}
            <span style={{ color: "#FFA500" }}>?</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-5 mb-5 md:mb-20">
            {/* Image */}
            <img
              src={BusinessMan}
              alt="BusinessMan"
              className="w-full max-w-xs md:max-w-md h-auto mx-10"
            />
            {/* Text */}
            <div className="text-gray-700 text-lg text-center md:text-left tracking-wide md:text-3xl font-medium leading-relaxed">
              <p>
                We <span style={{ color: "#FFA500" }}>MCX FOUNDATION</span>, are
                dedicated to empowering farmers by connecting international
                funding with local needs. Our mission is to provide financial
                aid, essential farming materials, and healthcare support to
                farming communities, fostering sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we Offer */}

      <section
        className="w-full pb-10 md:min-h-[700px] flex flex-col items-center"
        style={{ backgroundColor: "#F7F9F2" }}
      >
        <div className="text-center w-fit h-fit p-2">
          <h1 className="text-4xl md:text-7xl font-semibold pt-14 pb-6">
            What <span style={{ color: "#FFA500" }}>WE</span> Offer{" "}
            <span style={{ color: "#FFA500" }}>!!</span>
          </h1>
          <p className="text-sm md:text-xl tracking-wide">
            We provide essential services that empower farmers and create
            opportunities for global investors.
            <br /> Here's how we make a difference.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row xl:px-24 gap-8 items-center justify-evenly mt-16">
          {/* Financial Support */}
          <div
            className="w-80 h-72 hover:scale-105 duration-300 md:h-80 p-6 flex flex-col items-center justify-start rounded-[5rem] drop-shadow-[0_0_5px_rgba(0,0,0,0.35)] animate"
            style={{ backgroundColor: "#C8E6C9" }}
          >
            <img src={Coin} alt="Coin" className="w-28 mb-4" />
            <h1 className="text-2xl font-bold text-center mb-2">
              Financial Support
            </h1>
            <p className="text-center text-sm md:text-base text-gray-700">
              Affordable loans designed to empower farmers with the capital they
              need for growth, enabling them to access resources and scale their
              operations.
            </p>
          </div>

          {/* Resource Assistance */}
          <div
            className="w-80 h-72  hover:scale-105 duration-300 md:h-80 p-6 flex flex-col items-center justify-start rounded-[5rem] drop-shadow-[0_0_5px_rgba(0,0,0,0.35)] animate"
            style={{ backgroundColor: "#C8E6C9" }}
          >
            <img src={Sack} alt="Coin" className="w-28 mb-4" />
            <h1 className="text-2xl font-bold text-center mb-2">
              Resource Assistance
            </h1>
            <p className="text-center text-sm md:text-base text-gray-700">
              Providing essential farming tools, equipment, and materials,
              ensuring farmers have the resources to succeed and maximize
              productivity.
            </p>
          </div>

          {/* Healthcare for Farmers */}
          <div
            className="w-80 h-72  hover:scale-105 duration-300 md:h-80 p-6 flex flex-col items-center justify-start rounded-[5rem] drop-shadow-[0_0_5px_rgba(0,0,0,0.35)] animate"
            style={{ backgroundColor: "#C8E6C9" }}
          >
            <img src={Health} alt="Coin" className="w-28 " />
            <h1 className="text-2xl font-bold text-center mb-2">
              Healthcare for Farmers
            </h1>
            <p className="text-center text-sm md:text-base text-gray-700">
              Offering access to affordable medical care, ensuring farmers stay
              healthy and capable of sustaining their work and livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}

      <section id="contact" className="w-full min-h-screen flex flex-col items-center">
        <div className="text-center mt-16">
          <h1 className="text-5xl md:text-7xl font-semibold">
            Contact <span style={{ color: "#FFA500" }}>US</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl" style={{ color: "#717171" }}>
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <div className="border-2 rounded-xl md:rounded-3xl mt-10 md:mt-16 w-10/12 xl:w-4/5 max-w-[1200px] flex mb-10 overflow-hidden">
          {/* LEFT side  */}

          <div
            className="p-6 md:py-10 xl:px-10 md:max-w-[40%] hidden md:block bg-green-700"
            // style={{ backgroundColor: "#87986A" }}
          >
            <div className="">
              <h3 className="text-3xl text-white">Contact Information</h3>
              <h6 className="text-xl text-white">
                Something to say? Contact us !
              </h6>
            </div>
            <div className="mt-24">
              <div className="flex gap-4 items-center my-4">
                <BiSolidPhoneCall
                  fill="white"
                  strokeWidth={0}
                  className="stroke-white"
                  size={20}
                />
                <p className="text-white text-lg">+91 9080103716</p>
              </div>
              <div className="flex gap-4 items-center my-6">
                <IoMdMail
                  fill="white"
                  strokeWidth={0}
                  className="stroke-white"
                  size={18}
                />
                <p className="text-white text-lg">mcxfoundation@gmail.com</p>
              </div>
              <div className="flex gap-4 items-start my-4">
                <FaLocationDot
                  fill="white"
                  strokeWidth={0}
                  className="stroke-white mt-1"
                  size={18}
                />
                <p className="text-white text-lg flex-1 whitespace-pre-line">
                  No.3/20, A K Thanda Village, Velanur, Harur, Dharmapuri, Tamil
                  Nadu - 636906
                </p>
              </div>
            </div>
            <div className="flex gap-6 mt-24">
              <div className="w-8 h-8 rounded-full bg-black flex justify-center items-center">
                <FaTwitter size={17} fill="white" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <FaInstagram size={20} />
              </div>
              <div className="w-8 h-8 rounded-full bg-black flex justify-center items-center">
                <FaDiscord size={20} fill="white" />
              </div>
            </div>
          </div>

          {/* RIGHT side */}

          <form onSubmit={handleSubmit} className="w-full p-6 xl:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 xl:gap-10 mt-3 md:mt-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="" // Use an empty string here
                  className="peer w-full px-2 pt-3 py-1 border-b-2 border-gray-300 focus:outline-none focus:border-orange-500 text-gray-600"
                  onChange={handleInputChange}
                  value={formValues.name}
                />
                <label
                  htmlFor="name"
                  className={`absolute left-1 top-1 text-xl transform transition-all duration-200 ${
                    formValues.name
                      ? " -translate-y-6 text-black font-semibold"
                      : "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400"
                  } peer-focus:text-orange-500 peer-focus:-translate-y-6 peer-focus:font-bold`}
                >
                  Name
                </label>
              </div>

              {/* Place Field */}
              <div className="relative">
                <input
                  type="text"
                  id="place"
                  placeholder=" "
                  className="peer w-full px-2 pt-3 py-1 border-b-2 border-gray-300 focus:outline-none focus:border-orange-500 text-gray-600"
                  onChange={handleInputChange}
                  value={formValues.place}
                />
                <label
                  htmlFor="place"
                  className={`absolute left-1 top-1 text-xl transform transition-all duration-200 ${
                    formValues.place
                      ? "-translate-y-6 text-black font-semibold"
                      : "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400"
                  } peer-focus:text-orange-500 peer-focus:-translate-y-6 peer-focus:font-bold`}
                >
                  Place
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="peer w-full px-2 pt-3 py-1 border-b-2 border-gray-300 focus:outline-none focus:border-orange-500 text-gray-600"
                  onChange={handleInputChange}
                  value={formValues.email}
                />
                <label
                  htmlFor="email"
                  className={`absolute left-1 top-1 text-xl transform transition-all duration-200 ${
                    formValues.email
                      ? "-translate-y-6 text-black font-semibold"
                      : "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400"
                  } peer-focus:text-orange-500 peer-focus:-translate-y-6 peer-focus:font-bold`}
                >
                  Email
                </label>
              </div>

              {/* Phone Number Field */}
              <div className="relative">
                <input
                  type="number"
                  id="phone"
                  placeholder=" "
                  className="peer w-full px-2 pt-3 py-1 border-b-2 border-gray-300 focus:outline-none focus:border-orange-500 text-gray-600"
                  onChange={handleInputChange}
                  value={formValues.phone}
                />
                <label
                  htmlFor="phone"
                  className={`absolute left-1 top-1 text-xl transform transition-all duration-200 ${
                    formValues.phone
                      ? "-translate-y-6 text-black font-semibold"
                      : "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400"
                  } peer-focus:text-orange-500 peer-focus:-translate-y-6 peer-focus:font-bold`}
                >
                  Phone Number
                </label>
              </div>
            </div>
            {/* Status Field */}
            <div className="mt-8">
              <h1 className="text-xl font-semibold">Select Services</h1>
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mt-5">
                {[
                  "Funding",
                  "Medical Support",
                  "Material",
                  "General Inquiry",
                ].map((service) => (
                  <div
                    key={service}
                    className="flex items-center justify-center"
                  >
                    <input
                      type="radio"
                      id={service.toLowerCase().replace(" ", "-")}
                      name="status"
                      value={service}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          status: e.target.value,
                        }))
                      }
                      required
                    />
                    <label
                      htmlFor={service.toLowerCase().replace(" ", "-")}
                      className="ml-2 whitespace-nowrap"
                    >
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* Message Field */}
            <div className="mt-8">
              <h1 className="text-xl font-semibold">Message</h1>
              <textarea
                id="message"
                value={formValues.message}
                onChange={handleInputChange}
                className="w-full h-8 pl-2 border-b-2 border-gray-300 focus:border-orange-500 focus:outline-none mt-2"
                placeholder="Write your message..."
                required
              ></textarea>
              <div className="w-full mt-6">
                <button
                  type="submit"
                  className="w-fit px-6 py-3 text-center rounded-lg text-white float-right font-semibold bg-green-600 hover:bg-green-700 inline-flex items-center"
                >
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </>
  );
};

export default Home;
