import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./Carousel.css";

interface CarouselProps {
  images: string[]; // Array of image paths
}

const data: CarouselProps[] = [
  { images: ["/assets/imgs/bike.jpg"] },
  { images: ["/assets/imgs/Blender.jpeg"] },
  { images: ["/assets/imgs/books.jpg"] },
  { images: ["/assets/imgs/dashcam.webp"] },
  { images: ["/assets/imgs/electric_guitar.jpg"] },
  { images: ["/assets/imgs/fintess_tracker.jpeg"] },
  { images: ["/assets/imgs/handbag.jpg"] },
  { images: ["/assets/imgs/Iphones.jpeg"] },
  { images: ["/assets/imgs/kithne_knives.webp"] },
  { images: ["/assets/imgs/of.jpg"] },
  { images: ["/assets/imgs/power_tools.jpg"] },
  { images: ["/assets/imgs/TV.jpg"] },
];

const Carousel: React.FC<CarouselProps> = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="carousel mt-40px"
      >
        {data.map((item) => (
          <SwiperSlide key={item.images[0]}>
            {" "}
            {/* Add a unique key */}
            <img src={item.images[0]} className="carousel" />{" "}
            {/* Add alt text */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
