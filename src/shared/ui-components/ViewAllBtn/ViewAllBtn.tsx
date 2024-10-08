import { Link } from "react-router-dom";
import "./ViewAllBtn.css";
import React from "react";

interface ViewAllBtnProps {
  to: string;
  title: string;
}

const ViewAllBtn: React.FC<ViewAllBtnProps> = ({ to, title }) => {
  return (
    <>
      <div className="dsfx fx-j-c fx-ai-c">
        <Link
          to={to}
          className="p-16-48px dsfx fx-ai-c fx-j-c br-rad-4px bg-col-btn2 col-tx bor-col-trp title-medium-16px bg-hov-btn-hov"
        >
          {title}
        </Link>
      </div>
    </>
  );
};

export default ViewAllBtn;
