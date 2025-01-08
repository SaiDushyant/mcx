import React from "react";

const ServiceItem = ({ title, description, image, reverse }) => {
  return (
    <div className="mt-16 space-y-8 px-10">
      {/* Title with alignment based on reverse prop */}
      <div
        className={`${
          reverse ? "text-right" : "text-left"
        } text-center md:text-start`}
      >
        <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
      </div>

      {/* Paragraph and Image aligned */}
      <div
        className={`flex flex-col md:flex-row items-center justify-between ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2 p-4">
          <p className="text-base md:text-lg">{description}</p>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
