// src/About.js
import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <>
      <NavBar />

      {/* Hero Section */}

      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 z-0 text-center"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dk7uaskcl/image/upload/v1736841306/about_bg_fwqfrt.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mt-56 md:mt-32 2xl:mt-36 xl:mx-[19rem]">
            <h1 className="text-5xl md:text-[5.5rem] font-semibold font-serif">
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
        className="w-full px-40 hidden lg:block mt-16"
        style={{ backgroundColor: "#FAF3E0" }}
      >
        <div className="text-center">
          <h1 className="text-[5rem] font-semibold pt-12 py-10 font-serif">
            The Story Behind Our Mission
          </h1>
          <div className="w-full mx-auto bg-gray-300 h-[5px]"></div>
        </div>

        <div className=" mt-10 mx-12">
          <p
            className="text-3xl text-center"
            style={{ fontFamily: "cursive", fontWeight: "700" }}
          >
            "Empowering Farmers, Transforming Lives: A Journey of Dedication to
            Growth, Collaboration, and Sustainable Agriculture"
          </p>
          {/* Text */}
          <div className="flex flex-col text-justify py-10 text-3xl mx-5">
            <div className="flex text-justify text-3xl gap-10">
              <div>
                <p>
                  It all began with a vision: to empower the backbone of our
                  society—farmers—and create a platform for impactful
                  investments. With a commitment to fostering global
                  collaboration, MCX Foundation laid the foundation for bridging
                  the gap between foreign investors and local farming
                  communities.
                </p>
                <p className="mt-4">
                  Over the years, the company has grown into a trusted partner
                  for countless farmers, offering financial support, resources,
                  and medical assistance. Our journey is a testament to the
                  power of collective effort and innovation, transforming
                  challenges into opportunities.
                </p>
              </div>

              {/* Image */}
              <img
                src="https://res.cloudinary.com/dk7uaskcl/image/upload/v1736841310/farmer_hdqkq4.webp"
                alt="Our Mission"
                className="rounded-lg w-[22rem] h-auto max-h-96 ml-12"
              />
            </div>{" "}
            <p className="mt-4">
              As we look to the future, MCX Foundation remains steadfast in its
              mission to nurture agriculture and build a sustainable tomorrow
              for all.
            </p>
          </div>
        </div>
      </section>

      {/* Come join us */}

      <section className="w-full h-[80vh] flex justify-center items-center relative">
        <div
          className="w-full h-[60vh] text-center flex justify-center items-center absolute z-0"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dk7uaskcl/image/upload/v1736877261/pexels-dibakar-roy-2432543-20396320_1_i7c9zg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="md:mx-96 desktop-lg:mx-[24rem] text-white relative z-10">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold font-serif">
              Come Join With <span style={{ color: "#FFA500" }}>US!</span>
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

      <section className="pb-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold md:text-6xl text-gray-800 font-serif">
            Meet <span style={{ color: "#FFA500" }}>Our</span> Founders
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-24">
          {/* Founder 1 */}
          <div className="w-72 md:w-80 bg-white shadow-xl rounded-3xl p-6 flex flex-col items-center text-center hover:scale-105 duration-300 border border-gray-200">
            <div className="w-60 md:w-72 h-60 md:h-72 rounded-full bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">
              NETHAJI SUBASH CHANDRA BOSE S
            </h3>
            <p className="text-gray-600">MEMBER TRUSTEE</p>
          </div>

          {/* Founder 2 */}
          <div className="w-72 md:w-80 bg-white shadow-xl rounded-3xl p-6 flex flex-col items-center text-center md:scale-105 hover:scale-105 md:hover:scale-110 duration-300 border border-gray-200">
            <div className="w-60 md:w-72 h-60 md:h-72 rounded-full bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">SIVA C</h3>
            <p className="text-gray-600">FOUNDER CUM MEMBER TRUSTEE</p>
          </div>

          {/* Founder 3 */}
          <div className="w-72 md:w-80 bg-white shadow-xl rounded-3xl p-6 flex flex-col items-center text-center md:scale-105 hover:scale-105 md:hover:scale-110 duration-300 border border-gray-200">
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
