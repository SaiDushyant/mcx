// src/pages/Gallery.js
import React from "react";
import Footer from "../components/Footer";
import HorizontalCarousel from "../components/HorizontalCarousel";
import HorizontalScroll from "../components/HorizontalScroll";
import NavBar from "../components/NavBar";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200",
  ];

  return (
    <>
      <NavBar />
      <section className="w-full flex justify-center my-8">
        <div className="w-full max-w-7xl bg-green-100 p-6 rounded-2xl shadow-xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-bold">
              <span style={{ color: "#FFA500" }}>Our</span> Gallery
            </h1>
            <p className="text-2xl text-gray-600">
              Frames that speak louder than words!
            </p>
          </div>
          {/* Horizontal Scroll */}
          <div className="mb-8">
            <HorizontalScroll images={images} />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col mb-16 md:mb-20">
        <h1 className="text-3xl md:text-7xl my-12 md:my-16 font-bold text-center">
          Showcasing some of <span style={{ color: "#FFA500" }}>Our</span>{" "}
          happiest moments!!
        </h1>
        <div className="w-full px-1 ">
          <HorizontalCarousel />
          <div className="hidden md:block">
            <HorizontalCarousel reverse />
            <HorizontalCarousel />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
