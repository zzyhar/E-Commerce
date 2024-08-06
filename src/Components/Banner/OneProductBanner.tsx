import "./OneProductBanner.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReverseCountDown from "../Countdown Timer/ReverseCountdown/ReverseCountdown";

const OneProductBanner: React.FC = () => {
  const [timerDays, setTimerDays] = useState<number>(0);
  const [timerHours, setTimerHours] = useState<number>(0);
  const [timerMinutes, setTimerMinutes] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);

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
  return (
    <>
      <div className="default-container dsfx fx-d-r mb-72px p-relative">
        <img
          src="../../../public/assets/BannerOneProduct/Frame 600.png"
          alt=""
        />
        <div className="p-absolute block-holder m-56px dsfx f-gap-56px">
          <div className="dsfx fx-d-c f-gap-32px left-side">
            <p className="categories title-16px-semi col-btn1">Categories</p>
            <h1 className="one-title heading-semi-48px col-tx">
              Enhance Your Music Experience
            </h1>
            <div className="one-timer">
              <ReverseCountDown
                timerDays={formatNumber(timerDays)}
                timerHours={formatNumber(timerHours)}
                timerMinutes={formatNumber(timerMinutes)}
                timerSeconds={formatNumber(timerSeconds)}
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
            <img
              src="../../../public/assets/BannerOneProduct/speaker_big.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default OneProductBanner;
