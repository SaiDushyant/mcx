// src/About.js
import React from "react";
import { AboutBackgroundImage } from "../assets/images/images";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <>
      <NavBar />

      {/* Hero Section */}

      <section className="relative h-[600px] xl:h-[700px] flex items-center">
        <div
          className="absolute inset-0 z-0 text-center"
          style={{
            backgroundImage: `url(${AboutBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mt-20 mx-[26rem]">
            <h1 className="text-[5rem] font-semibold">
              About <span style={{ color: "#FFA500" }}>Us</span>
            </h1>
            <p className="text-xl font-medium">
              Our mission is to bridge the gap between foreign investments and
              grassroots farming needs.{" "}
              <span style={{ color: "#FFA500" }}>MCX FOUNDATION</span> empowers
              farmers with resources, financial aid, and health support,
              creating a thriving agricultural ecosystem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
