import React, { Fragment } from "react";
import "./CountdownTimer.css";

interface CountdownTimerProps {
  timerDays?: string;
  timerHours?: string;
  timerMinutes?: string;
  timerSeconds?: string;
  className?: string; // Add className prop
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  timerDays = "00",
  timerHours = "00",
  timerMinutes = "00",
  timerSeconds = "00",
  className = "", // Default to an empty string
}) => {
  return (
    <Fragment>
      <section className={`timer_container ${className}`}>
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerDays}</p>
              <small>Days</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default CountdownTimer;
