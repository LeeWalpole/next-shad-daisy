"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

interface SwiperProps {
  images: string[]
  imageClassName: string
}

const SwiperComponent: React.FC<SwiperProps> = ({ images, imageClassName }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
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
