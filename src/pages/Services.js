// src/Services.js
import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ServiceItem from "../components/ServiceItem";
import { serviceData } from "../data/Data";

const Services = () => {
  return (
    <>
      <NavBar />

      {/* Our Services */}

      <section className="h-[500px] md:h-[550px] w-full bg-green-700 flex flex-col items-center rounded-b-full">
        <div className="text-center font-bold">
          <h1 className="text-[3.5rem] md:text-[5.5rem] text-white font-medium mt-24 font-serif">
            <span style={{ color: "#FFA500" }}>Our</span> Services
          </h1>
        </div>

        <div className="text-center font-medium">
          <h3 className="text-3xl md:text-5xl mt-4 md:mt-6 text-white font-serif">
            How <span style={{ color: "#FFA500" }}>We</span> Help
          </h3>
        </div>

        <div className="text-center font-medium max-w-4xl px-4">
          <p className="text-lg md:text-2xl mt-6 md:mt-10 text-white">
            From empowering farmers to delivering impactful investment
            opportunities, our comprehensive services make growth achievable.
            Together, we're building a stronger agricultural future.
          </p>
        </div>
      </section>

      {/* What We Do */}

      <section className="w-full py-12 px-4 md:p-20">
        <div className="bg-green-100 rounded-[2rem]">
          <div className="text-center pt-12 md:pt-20 md:pb-10">
            <h1 className="text-[2.75rem] md:text-7xl font-semibold font-serif">
              What <span style={{ color: "#FFA500" }}>We</span> Do{" "}
              <span style={{ color: "#FFA500" }}>?</span>
            </h1>
            <p className="text-base px-4 md:text-3xl mt-6 md:mt-10">
              Empowering agriculture with tailored solutions for farmers and
              investors. Here’s how we make an impact:
            </p>
          </div>
          <div className="pb-20 px-2 md:px-10">
            {serviceData.map((item, index) => (
              <ServiceItem
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                reverse={index % 2 !== 0} // Reverse layout for odd items
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </>
  );
};

export default Services;
