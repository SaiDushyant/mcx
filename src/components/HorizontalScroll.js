// src/components/HorizontalScroll.js
import React from "react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HorizontalScroll = ({ images }) => {
  return (
    <div className="mt-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView="1"
        className="h-64 md:h-[30rem] flex justify-center items-center relative" // Static height for Swiper
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="relative flex items-center justify-center"
            style={{ width: "fit-content" }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="rounded-xl"
              style={{
                height: "100%", // Ensures image matches the Swiper height
                objectFit: "contain", // Prevents distortion
              }}
            />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button
          className="custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
          style={{ height: "3rem", width: "3rem" }}
        >
          &#8592;
        </button>
        <button
          className="custom-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
          style={{ height: "3rem", width: "3rem" }}
        >
          &#8594;
        </button>
      </Swiper>
    </div>
  );
};

export default HorizontalScroll;
