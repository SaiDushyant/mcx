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
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full h-64 md:h-[30rem]"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-full w-full"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full max-h-full max-w-full rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalScroll;
