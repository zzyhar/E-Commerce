import React, { Fragment } from "react";
import "./ReverseCountdown.css";

interface ReverseCountDownProps {
  timerDays?: string;
  timerHours?: string;
  timerMinutes?: string;
  timerSeconds?: string;
}

const ReverseCountDown: React.FC<ReverseCountDownProps> = ({
  timerDays = "00",
  timerHours = "00",
  timerMinutes = "00",
  timerSeconds = "00",
}) => {
  return (
    <Fragment>
      <div className="dsfx f-gap-24px">
        <div className="clock dsfx fx-d-c fx-ai-c fx-j-c br-rad-cr bg-col-p">
          <p className="title-semi-16px col-tx2">{timerDays}</p>
          <p className="title-11px col-tx2">Days</p>
        </div>
        <div className="clock dsfx fx-d-c fx-ai-c fx-j-c br-rad-cr bg-col-p">
          <p className="title-semi-16px col-tx2">{timerHours}</p>
          <p className="title-11px col-tx2">Hours</p>
        </div>
        <div className="clock dsfx fx-d-c fx-ai-c fx-j-c br-rad-cr bg-col-p">
          <p className="title-semi-16px col-tx2">{timerMinutes}</p>
          <p className="title-11px col-tx2">Minutes</p>
        </div>
        <div className="clock dsfx fx-d-c fx-ai-c fx-j-c br-rad-cr bg-col-p">
          <p className="title-semi-16px col-tx2">{timerSeconds}</p>
          <p className="title-11px col-tx2">Seconds</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ReverseCountDown;
