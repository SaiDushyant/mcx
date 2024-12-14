// src/Home.js
import { ArrowRight } from "lucide-react";
import React from "react";
import { BusinessMan, Health, Sack } from "../assets/images/images";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />

      {/* Hero Section */}

      <section className="relative h-[600px] flex items-center">
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Growing Future Together</h1>
            <p className="text-xl mb-8">
              Empowering farmers with tools, finance, and healthcare to
              cultivate a brighter future.
            </p>
            <a
              href="/services"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are */}

      <section className="w-full md:min-h-[900px] flex justify-center items-center py-14">
        {/* Center content */}
        <div
          className="rounded-[2rem] md:rounded-[3rem] p-6 w-auto max-w-[22rem] md:max-w-6xl"
          style={{ backgroundColor: "#F7F9F2" }}
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
        <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-evenly mt-16">
          {/* Financial Support */}
          <div
            className="w-80 h-72 md:h-80 p-6 flex flex-col items-center justify-start rounded-[5rem] drop-shadow-[0_0_5px_rgba(0,0,0,0.35)]"
            style={{ backgroundColor: "#C8E6C9" }}
          >
            <img src={Sack} alt="Coin" className="w-28 mb-4" />
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
            className="w-80 h-72 md:h-80 p-6 flex flex-col items-center justify-start rounded-[5rem] drop-shadow-[0_0_5px_rgba(0,0,0,0.35)]"
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
            className="w-80 h-72 md:h-80 p-6 flex flex-col items-center justify-start rounded-[5rem] drop-shadow-[0_0_5px_rgba(0,0,0,0.35)]"
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

      <section className="w-full min-h-screen flex flex-col items-center">
        <div className="text-center mt-16">
          <h1 className="text-7xl font-bold">
            Contact <span style={{ color: "#FFA500" }}>US</span>
          </h1>
          <p className="mt-6 text-xl" style={{ color: "#717171" }}>
            Any question or remarks? Just write us a message!
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
