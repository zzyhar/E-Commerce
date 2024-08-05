import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./FlashSaleProduct.css";

import {
  eyeIcon,
  heartIcon,
} from "../../shared/ui-components/icon-handler/index";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";

const FlashSaleProduct: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [images, setImages] = useState<string[]>([
    "/assets/testBackground/c1.jpg",
    "/assets/testBackground/c2.jpeg",
    "/assets/testBackground/c3.jpeg",
  ]);
  let currentIndex = 0;

  useEffect(() => {
    const fetchImages = async () => {
      // Simulate fetching images
      setImages([
        "/assets/testBackground/c1.jpg",
        "/assets/testBackground/c2.jpeg",
        "/assets/testBackground/c3.jpeg",
      ]);
    };

    fetchImages();

    // Cleanup function
    return () => {
      const currentInterval = intervalRef.current;
      if (currentInterval) {
        clearInterval(currentInterval);
      }
    };
  }, []);

  const changeBackground = () => {
    if (imageRef.current) {
      imageRef.current.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;
    }
  };

  const handleMouseEnter = () => {
    changeBackground(); // Change immediately on hover
    intervalRef.current = setInterval(changeBackground, 1000);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div>
      <div
        className="image br-rad-4px mb-16px"
        ref={imageRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className="discount dsfx fx-j-c fx-ai-c title-12px col-tx mt-12px ml-12px bg-col-btn2 br-rad-4px">
          -40%
        </div>
        <div className="icons dsfx fx-d-c f-gap-8px">
          <div className="heart  dsfx fx-ai-c fx-j-c bg-col-p  cursor-pointer">
            <IconHandler
              className=""
              path={heartIcon}
              iconSize="16x16"
            ></IconHandler>
          </div>
          <div className="eye dsfx fx-ai-c fx-j-c bg-col-p cursor-pointer ">
            <IconHandler
              className="cursor-pointer"
              path={eyeIcon}
              iconSize="16x16"
            ></IconHandler>
          </div>
        </div>
        <div className="addToCart dsfx fx-j-c fx-ai-c col-p bg-col-btn ">
          Add to Cart
        </div>
      </div>
      <div className="description dsfx fx-d-c fx-ai-fs f-gap-8px">
        <p className="title-medium-16px col-tx2">HAVIT HV-G92 Gamepad</p>
        <div className="price dsfx">
          <div className="regular_price col-sec2 mr-8px">$120</div>
          <div className="discount_price">$160</div>
        </div>
        <div className="rating">
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default FlashSaleProduct;
