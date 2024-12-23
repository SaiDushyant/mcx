// src/About.js
import React from "react";
import { AboutBackgroundImage } from "../assets/images/images";
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
        <div className="w-full h-[60vh] bg-green-200 text-center">
          <div className="md:mx-96 xl:mx-[25rem] mt-28">
            <h1 className="text-[2rem] md:text-7xl font-extrabold md:font-bold">
              COME JOIN WITH <span style={{ color: "#FFA500" }}>US!</span>
            </h1>
            <p className="text-base md:text-xl mt-10 font-medium">
              Be a part of a transformative journey that empowers farmers and
              connects investors to meaningful opportunities. At MCX Foundation,
              we create sustainable solutions that drive growth, foster
              innovation, and benefit communities worldwide. Together, let’s
              build a brighter future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
