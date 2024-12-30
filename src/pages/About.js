// src/About.js
import React from "react";
import { AboutBackgroundImage } from "../assets/images/images";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <>
      <NavBar />

      {/* Hero Section */}

      <section className="relative h-[650px] md:h-[550px] xl:h-[650px] md:my-16  flex items-center">
        <div
          className="absolute inset-0 z-0 text-center"
          style={{
            backgroundImage: `url(${AboutBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mt-40 md:mt-20 xl:mx-[26rem]">
            <h1 className="text-5xl md:text-[5.5rem] font-semibold">
              About <span style={{ color: "#FFA500" }}>Us</span>
            </h1>
            <p className="text-base md:text-xl mt-3 font-medium">
              Our mission is to bridge the gap between foreign investments and
              grassroots farming needs.{" "}
              <span className="hidden md:block">
                <span style={{ color: "#FFA500" }}>MCX FOUNDATION</span>{" "}
                empowers farmers with resources, financial aid, and health
                support, creating a thriving agricultural ecosystem.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* News Letter */}

      <section
        className="w-full h-screen"
        style={{ backgroundColor: "#FAF3E0" }}
      ></section>

      {/* Come join us */}

      <section className="w-full h-[80vh] flex justify-center items-center">
        <div className="w-full h-[60vh] bg-green-200 text-center flex justify-center items-center">
          <div className="md:mx-96 xl:mx-[24rem]">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold md:font-bold">
              COME JOIN WITH <span style={{ color: "#FFA500" }}>US!</span>
            </h1>
            <p className="text-base md:text-2xl mt-5 md:mt-10 font-medium">
              Be a part of a transformative journey that empowers farmers and
              connects investors to meaningful opportunities. At MCX Foundation,
              we create sustainable solutions that drive growth, foster
              innovation, and benefit communities worldwide. Together, let’s
              build a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Meet our Founders */}

      <section className="py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold md:text-6xl text-gray-800">
            Meet <span style={{ color: "#FFA500" }}>Our</span> Founders
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-24">
          {/* Founder 1 */}
          <div className="w-72 md:w-80 bg-white shadow-xl rounded-3xl p-6 flex flex-col items-center text-center hover:scale-105 duration-300">
            <div className="w-60 md:w-72 h-60 md:h-72 rounded-full bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">
              NETHAJI SUBASH CHANDRA BOSE S
            </h3>
            <p className="text-gray-600">MEMBER TRUSTEE</p>
          </div>

          {/* Founder 2 */}
          <div className="w-72 md:w-80 bg-white shadow-xl rounded-3xl p-6 flex flex-col items-center text-center md:scale-105 hover:scale-105 md:hover:scale-110 duration-300">
            <div className="w-60 md:w-72 h-60 md:h-72 rounded-full bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">SIVA C</h3>
            <p className="text-gray-600">FOUNDER CUM MEMBER TRUSTEE</p>
          </div>

          {/* Founder 3 */}
          <div className="w-72 md:w-80 bg-white shadow-xl rounded-3xl p-6 flex flex-col items-center text-center md:scale-105 hover:scale-105 md:hover:scale-110 duration-300">
            <div className="w-60 md:w-72 h-60 md:h-72 rounded-full bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">
              VIJAYAPRAKASH M
            </h3>
            <p className="text-gray-600">MEMBER TRUSTEE</p>
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </>
  );
};

export default About;
