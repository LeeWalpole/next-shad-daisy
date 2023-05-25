"use client"

// Import Swiper React components
// import Swiper core and required modules
import { useEffect, useRef } from "react"
import Image from "next/image"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

interface SwiperProps {
  images: string[]
  imageClassName: string
}

const SwiperComponent: React.FC<SwiperProps> = ({ images, imageClassName }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      navigation
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className={imageClassName}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperComponent
