import "./OneProductBanner.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Timer from "../../shared/ui-components/Timer/Timer";
import ReverseCountDown from "../Countdown Timers/ReverseCountdown/ReverseCountdown";
import React from "react";

const OneProductBanner: React.FC = () => {
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
    <>
      <div className="default-container dsfx fx-d-r mb-72px p-relative">
        <img src="/assets/BannerOneProduct/Frame 600.png" />
        <div className="p-absolute block-holder m-56px f-gap-56px">
          <div className="dsfx fx-d-c f-gap-32px left-side">
            <p className="title-semi-16px col-btn1">Categories</p>
            <h1 className="heading-semi-48px col-tx">
              Enhance Your Music Experience
            </h1>
            <div>
              <ReverseCountDown
                timerDays={formatNumber(timerValues.days)}
                timerHours={formatNumber(timerValues.hours)}
                timerMinutes={formatNumber(timerValues.minutes)}
                timerSeconds={formatNumber(timerValues.seconds)}
              />
            </div>
            <Link
              to="/jbl-speaker"
              className="p-16-48px w-f-c h-f-c br-rad-4px bg-col-btn1 col-tx title-medium-16px bg-hov-btn-hov"
            >
              Buy Now
            </Link>
          </div>
          <div className="right-image-holder dsfx fx-ai-c">
            <img src="/assets/BannerOneProduct/speaker_big.png" alt="" />
          </div>
        </div>
        <Timer onTimerUpdate={handleTimerUpdate} />
      </div>
    </>
  );
};
export default OneProductBanner;
