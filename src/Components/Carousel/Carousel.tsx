import React, { useState } from "react";
import { Slide } from "../../types"; // Importing the Slide type for type-checking the slides data
import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

// Defining the props for the Carousel component
interface CarouselProps {
  data: {
    slides: Slide[];
  };
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  // State to keep track of the current slide index
  const [slide, setSlide] = useState(0);

  // Function to navigate to the next slide
  const nextSlide = () => {
    setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setSlide(slide === 0 ? data.slides.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      {/* Left arrow for navigating to the previous slide */}
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {/* Rendering each slide */}
      {data.slides.map((item: Slide, idx: number) => (
        <img
          src={item.src}
          alt={item.description}
          key={idx}
          className={slide === idx ? "slide" : "slide slide-hidden"}
        />
      ))}
      {/* Right arrow for navigating to the next slide */}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      {/* Indicators for each slide */}
      <span className="indicators">
        {data.slides.map((_, idx: number) => (
          <button
            key={idx}
            className={
              slide === idx ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Carousel;
