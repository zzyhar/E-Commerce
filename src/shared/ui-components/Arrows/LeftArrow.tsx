import React from "react";
import IconHandler from "../icon-handler/IconHandler";
import { leftArrowIcon } from "../icon-handler/index";

interface LeftArrowProps {
  onClick?: () => void;
}

const LeftArrow: React.FC<LeftArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="dsfx fx-ai-c fx-j-c btn-categoty br-rad-cr bg-col-s bor-col-trp bg-hov-sec2"
    >
      <IconHandler path={leftArrowIcon} iconSize="24x24" className="" />
    </button>
  );
};

export default LeftArrow;
