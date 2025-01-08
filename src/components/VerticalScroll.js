// components/VerticalScroll.js

import React from "react";
import "../pages/gallery.css";

const VerticalScroll = ({ images }) => {
  return (
    <div className="w-full h-screen bg-green-100 flex items-center justify-center">
      <div className="continuous-scroll">
        {/* This block repeats images to create a seamless infinite scroll */}
        <div className="continuous-scroll-content">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-64 flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Scroll ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="continuous-scroll-content">
          {images.map((image, index) => (
            <div
              key={`duplicate-${index}`}
              className="w-full h-64 flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Duplicate Scroll ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalScroll;
