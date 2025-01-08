// src/Services.js
import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ServiceItem from "../components/ServiceItem";
import serviceData from "../data/serviceData";

const Services = () => {
  return (
    <>
      <NavBar />

      {/* Our Services */}

      <section className="min-h-[60vh] md:h-[70vh] w-full bg-green-100 flex flex-col items-center">
        <div className="text-center font-bold">
          <h1 className="text-[3.5rem] md:text-8xl mt-16 md:mt-28">
            <span style={{ color: "#FFA500" }}>Our</span> Services
          </h1>
        </div>

        <div className="text-center font-bold">
          <h3 className="text-3xl md:text-5xl mt-4 md:mt-10">
            How <span style={{ color: "#FFA500" }}>We</span> Help
          </h3>
        </div>

        <div className="text-center font-medium max-w-4xl px-4">
          <p className="text-lg md:text-2xl mt-6 md:mt-10">
            From empowering farmers to delivering impactful investment
            opportunities, our comprehensive services make growth achievable.
            Together, we're building a stronger agricultural future.
          </p>
        </div>
      </section>

      {/* What We Do */}

      <section className="w-full py-12 px-6 md:p-20">
        <div className="bg-green-100 rounded-[2rem]">
          <div className="text-center py-12 md:py-20">
            <h1 className="text-[2.75rem] md:text-8xl font-bold">
              What <span style={{ color: "#FFA500" }}>We</span> Do ?
            </h1>
            <p className="text-base px-4 md:text-3xl mt-6 md:mt-10">
              Empowering agriculture with tailored solutions for farmers and
              investors. Here’s how we make an impact:
            </p>
          </div>
          <div className="pb-20 px-10">
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
