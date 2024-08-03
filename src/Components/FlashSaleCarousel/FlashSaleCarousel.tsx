import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FlashSaleCarousel.css";
import Marker from "../Marker/Marker";
import CountdownTimer from "../Countdown Timer/CountdownTimer";
import FlashSaleProduct from "../FlashSale/FlashSaleProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FlashSaleCarousel: React.FC = () => {
  const [timerDays, setTimerDays] = useState<number>(0);
  const [timerHours, setTimerHours] = useState<number>(0);
  const [timerMinutes, setTimerMinutes] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  // const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const startTimer = () => {
      const countDownDate = new Date("August 30, 2024").getTime();

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const difference = countDownDate - now;

        const days = Math.floor(difference / (24 * 3600 * 1000));
        const hours = Math.floor(
          (difference % (24 * 3600 * 1000)) / (3600 * 1000)
        );
        const minutes = Math.floor((difference % (3600 * 1000)) / (60 * 1000));
        const seconds = Math.floor((difference % (60 * 1000)) / 1000);

        if (difference < 0) {
          clearInterval(interval);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);
    };

    startTimer();
  }, []);

  // Utility function to format numbers with leading zero
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  // // Functions to handle carousel navigation
  // const goToNextProduct = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  // };

  // const goToPreviousProduct = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + products.length) % products.length
  //   );
  // };

  return (
    <div className="flash_carousel">
      <Marker text="Today's" />

      <div className="flash_countdown_header">
        <h1 className="flash_title">Flash Sale</h1>
        <CountdownTimer
          timerDays={formatNumber(timerDays)}
          timerHours={formatNumber(timerHours)}
          timerMinutes={formatNumber(timerMinutes)}
          timerSeconds={formatNumber(timerSeconds)}
          className="countdown"
        />
      </div>
      <div className="carousel_flashsale">
        <button className="carousel_flashsale_left">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <FlashSaleProduct />
        <FlashSaleProduct />
        <FlashSaleProduct />
        <FlashSaleProduct />
        <FlashSaleProduct />
        <button className="carousel_flashsale_right">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="link_to_sale_wrapper">
        <Link to="/sale_products" className="link_to_sale">
          View All Products
        </Link>
      </div>
      <div className="line_spilitter"></div>
      <div className="categories">
        <div className="category_carousel_header">
          <Marker text="Categories" />
          <h1 className="category_title">Browse By Category</h1>
        </div>
        <div className="categories_carousel"></div>
      </div>
    </div>
  );
};

export default FlashSaleCarousel;
