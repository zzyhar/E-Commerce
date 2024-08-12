import React, { useState } from "react";
import Timer from "../../shared/ui-components/Timer/Timer";
import "./FlashSaleCarousel.css";
import Marker from "../Marker/Marker";
import CountdownTimer from "../Countdown Timers/CountDown/CountdownTimer";
import FlashSaleProduct from "../FlashSale/FlashSaleProduct";
import ViewAllBtn from "../../shared/ui-components/ViewAllBtn/ViewAllBtn";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import {
  leftArrowIcon,
  rightArrowIcon,
} from "../../shared/ui-components/icon-handler/index";

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
      <div className="dsfx fx-d-r fx-j-sb">
        <div className="dsfx fx-ai-end f-gap-84px mt-24px mb-40px">
          <h1 className="heading-36px col-tx2 ">Flash Sales</h1>
          <CountdownTimer
            timerDays={formatNumber(timerValues.days)}
            timerHours={formatNumber(timerValues.hours)}
            timerMinutes={formatNumber(timerValues.minutes)}
            timerSeconds={formatNumber(timerValues.seconds)}
          />
        </div>
        <div className="dsfx f-gap-8px">
          <button className="bg-col-s br-none br-rad-cr cursor-pointer arrow-wrapper dsfx fx-ai-c fx-j-c bg-hov-btn2">
            <IconHandler
              path={leftArrowIcon}
              iconSize="24x24"
              className="svg-btn"
            />
          </button>
          <button className="bg-col-s br-none br-rad-cr cursor-pointer arrow-wrapper dsfx fx-ai-c fx-j-c bg-hov-btn2">
            <IconHandler
              path={rightArrowIcon}
              iconSize="24x24"
              className="svg-btn"
            />
          </button>
        </div>
      </div>

      <div className="dsfx f-gap-32px fx-j-c">
        <FlashSaleProduct />
        <FlashSaleProduct />
        <FlashSaleProduct />
        <FlashSaleProduct />
      </div>
      <div className="dsfx fx-j-c fx-ai-c mt-60px mb-60px">
        <ViewAllBtn to="/sale-products" title="View All Products" />
      </div>
      <div className="hor-div bg-col-btn op-40 mb-80px"></div>
      <Timer onTimerUpdate={handleTimerUpdate} />
    </div>
  );
};

export default FlashSaleCarousel;
