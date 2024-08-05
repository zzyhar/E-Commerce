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
        <section className="timer dsfx fx-d-c fx-j-c fx-ai-c">
          <div className="clock dsfx fx-j-c fx-ai-c">
            <section>
              <p className="title-12px col-tx2">Days</p>
              <p className="heading-bold-32px col-tx2">{timerDays}</p>
            </section>
            <span>:</span>
            <section>
              <p className="title-12px col-tx2">Hours</p>
              <p className="heading-bold-32px col-tx2">{timerHours}</p>
            </section>
            <span>:</span>
            <section>
              <p className="title-12px col-tx2">Minutes</p>
              <p className="heading-bold-32px col-tx2">{timerMinutes}</p>
            </section>
            <span>:</span>
            <section>
              <p className="title-12px col-tx2">Seconds</p>
              <p className="heading-bold-32px col-tx2">{timerSeconds}</p>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default CountdownTimer;
