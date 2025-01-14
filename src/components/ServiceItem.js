import React from "react";

const ServiceItem = ({ title, description, image, reverse }) => {
  return (
    <div className="mt-16 space-y-8 px-4 md:px-10">
      {/* Title */}
      <div className="text-center md:text-start">
        <h2
          className="text-3xl md:text-6xl font-semibold"
          style={{ fontFamily: "initial" }}
        >
          {title}
        </h2>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col md:flex-row items-center gap-3 md:gap-16 md:mx-20 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-2/5 mb-4 md:mb-0">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-96 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-[400ms] transform hover:scale-105"
          />
        </div>

        {/* Description */}
        <div className="w-full md:w-3/5">
          <p className="text-lg md:text-[2rem] leading-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
