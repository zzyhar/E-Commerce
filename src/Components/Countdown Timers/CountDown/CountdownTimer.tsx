import React, { Fragment } from "react";
import "./CountdownTimer.css";

interface CountdownTimerProps {
  timerDays?: string;
  timerHours?: string;
  timerMinutes?: string;
  timerSeconds?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  timerDays = "00",
  timerHours = "00",
  timerMinutes = "00",
  timerSeconds = "00",
}) => {
  return (
    <Fragment>
      <div className="dsfx fx-j-c fx-ai-c f-gap-16px">
        <div>
          <p className="title-12px col-tx2 mb-4px">Days</p>
          <p className="heading-bold-32px col-tx2">{timerDays}</p>
        </div>
        <span>:</span>
        <div>
          <p className="title-12px col-tx2 mb-4px">Hours</p>
          <p className="heading-bold-32px col-tx2">{timerHours}</p>
        </div>
        <span>:</span>
        <div>
          <p className="title-12px col-tx2 mb-4px">Minutes</p>
          <p className="heading-bold-32px col-tx2">{timerMinutes}</p>
        </div>
        <span>:</span>
        <div>
          <p className="title-12px col-tx2 mb-4px">Seconds</p>
          <p className="heading-bold-32px col-tx2">{timerSeconds}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CountdownTimer;
