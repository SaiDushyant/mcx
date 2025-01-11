import React from "react";
import "./HorizontalCarousel.css";

const HorizontalCarousel = ({ reverse = false }) => {
  return (
    <div className={`gallery mb-10 ${reverse ? "reverse-animation" : ""}`}>
      <img src="https://picsum.photos/id/199/400/300" alt="The beach" />
      <img src="https://picsum.photos/id/1011/400/300" alt="A girl kayaking" />
      <img
        src="https://picsum.photos/id/124/400/300"
        alt="A small boat in the sea"
      />
      <img src="https://picsum.photos/id/235/400/300" alt="A mountain" />
      <img src="https://picsum.photos/id/423/400/300" alt="A forest" />
    </div>
  );
};

export default HorizontalCarousel;
