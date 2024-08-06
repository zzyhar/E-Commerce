import React, { useState, useEffect } from "react";
import "./FlashSaleCarousel.css";
import Marker from "../Marker/Marker";
import CountdownTimer from "../Countdown Timers/CountDown/CountdownTimer";
import FlashSaleProduct from "../FlashSale/FlashSaleProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ViewAllBtn from "../../shared/ui-components/ViewAllBtn/ViewAllBtn";

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
    <div className="default-container">
      <Marker text="Today's" />
      <div className="dsfx fx-ai-end f-gap-84px mt-24px mb-40px">
        <h1 className="heading-36px col-tx2 ">Flash Sales</h1>
        <CountdownTimer
          timerDays={formatNumber(timerDays)}
          timerHours={formatNumber(timerHours)}
          timerMinutes={formatNumber(timerMinutes)}
          timerSeconds={formatNumber(timerSeconds)}
        />
      </div>
      <div className="dsfx f-gap-32px fx-j-c">
        <button className="carousel_flashsale_left">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <FlashSaleProduct />
        <FlashSaleProduct />
        <FlashSaleProduct />

        <button className="carousel_flashsale_right">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="dsfx fx-j-c fx-ai-c mt-60px mb-60px">
        <ViewAllBtn to="/sale-products" title="View All Products" />
      </div>
      <div className="line_spilitter"></div>
    </div>
  );
};

export default FlashSaleCarousel;
