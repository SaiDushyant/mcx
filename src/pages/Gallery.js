// src/pages/Gallery.js
import React from "react";
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
      <main className="p-6">
        {/* Title Section */}
        <section className="w-full flex justify-center my-8">
          <div className="w-full max-w-7xl bg-green-100 p-6 rounded-2xl shadow-xl">
            <div className="text-center">
              <h1 className="text-7xl font-bold">Our Gallery</h1>
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

        {/* Vertical Infinite Scroll
        <section className="my-8">
          <h2 className="text-center text-2xl font-bold mb-4">
            Showcasing Our Happiest Moments!
          </h2>
          <VerticalScroll images={images} />
        </section> */}
      </main>
    </>
  );
};

export default Gallery;
