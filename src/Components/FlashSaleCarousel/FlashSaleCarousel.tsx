import React, { useState } from "react";
import Timer from "../../shared/ui-components/Timer/Timer";
import "./FlashSaleCarousel.css";
import Marker from "../Marker/Marker";
import CountdownTimer from "../Countdown Timers/CountDown/CountdownTimer";
import FlashSaleProduct from "../FlashSale/FlashSaleProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ViewAllBtn from "../../shared/ui-components/ViewAllBtn/ViewAllBtn";

const FlashSaleCarousel: React.FC = () => {
  const [timerValues, setTimerValues] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const handleTimerUpdate = (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => {
    setTimerValues({ days, hours, minutes, seconds });
  };

  // Utility function to format numbers with leading zero
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="default-container">
      <Marker text="Today's" />
      <div className="dsfx fx-ai-end f-gap-84px mt-24px mb-40px">
        <h1 className="heading-36px col-tx2 ">Flash Sales</h1>
        <CountdownTimer
          timerDays={formatNumber(timerValues.days)}
          timerHours={formatNumber(timerValues.hours)}
          timerMinutes={formatNumber(timerValues.minutes)}
          timerSeconds={formatNumber(timerValues.seconds)}
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
      <Timer onTimerUpdate={handleTimerUpdate} />
    </div>
  );
};

export default FlashSaleCarousel;
