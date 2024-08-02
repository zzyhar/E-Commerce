import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import "./FlashSaleProduct.css";

const FlashSaleProduct: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<string[]>([
    "/assets/testBackground/c1.jpg",
    "/assets/testBackground/c2.jpeg",
    "/assets/testBackground/c3.jpeg",
  ]);
  let currentIndex = 0;
  let intervalId: NodeJS.Timeout | null = null;

  useEffect(() => {
    // Simulate fetching images from a database
    // Replace this with actual data fetching in the future
    const fetchImages = async () => {
      // Example: Fetch images from an API or database
      // const response = await fetch('/api/images');
      // const data = await response.json();
      // setImages(data.images);

      // For now, we use static images
      setImages([
        "/assets/testBackground/c1.jpg",
        "/assets/testBackground/c2.jpeg",
        "/assets/testBackground/c3.jpeg",
      ]);
    };

    fetchImages();
  }, []);

  const changeBackground = () => {
    if (imageRef.current) {
      imageRef.current.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;
    }
  };

  const handleMouseEnter = () => {
    changeBackground(); // Change immediately on hover
    intervalId = setInterval(changeBackground, 1000);
  };

  const handleMouseLeave = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  return (
    <div>
      <div
        className="image"
        ref={imageRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className="discount">-40%</div>
        <div className="icons">
          <div className="heart">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="eye">
            <FontAwesomeIcon icon={faEye} />
          </div>
        </div>
        <div className="addToCart">Add to Cart</div>
      </div>
      <div className="description">
        <p className="title">HAVIT HV-G92 Gamepad</p>
        <div className="price">
          <div className="regular_price">$120</div>
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
