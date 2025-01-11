import React from "react";

const ServiceItem = ({ title, description, image, reverse }) => {
  return (
    <div className="mt-16 space-y-8 px-4 md:px-10">
      {/* Title */}
      <div className="text-center md:text-start">
        <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col md:flex-row items-center gap-3 md:gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Description */}
        <div className="w-full md:w-1/2">
          <p className="text-lg md:text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
