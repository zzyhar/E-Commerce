import React from "react";
import "./Marker.css";

interface MarkerProps {
  text: string;
}

const Marker: React.FC<MarkerProps> = ({ text }) => {
  return (
    <div className=" dsfx fx-ai-c mb-12px f-gap-16px">
      <div className="marker br-rad-4px bg-col-sec2"></div>
      <div className="title-semi-16px col-sec2">{text}</div>
    </div>
  );
};

export default Marker;
