import React, { useState, useEffect } from "react";

interface TimerProps {
  onTimerUpdate: (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => void;
}

const Timer: React.FC<TimerProps> = ({ onTimerUpdate }) => {
  const [timerDays, setTimerDays] = useState<number>(0);
  const [timerHours, setTimerHours] = useState<number>(0);
  const [timerMinutes, setTimerMinutes] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  useEffect(() => {
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
        onTimerUpdate(days, hours, minutes, seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimerUpdate]);

  return null; // No JSX returned as this component is purely for logic
};

export default Timer;
