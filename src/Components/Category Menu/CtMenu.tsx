import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./CtMenu.css";
import "../CriticalCss.css";

const CtMenu: React.FC = () => {
  return (
    <>
      <div className="menu">
        <Link to="/woomans-fashion" className="menu_option">
          <p>Wooman's Fashion</p>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </Link>
        <Link to="/mens-fashion" className="menu_option">
          <p>Men's Fashion</p>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </Link>
        <Link to="/electronics" className="menu_option">
          <p>Electronics</p>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </Link>
        <Link to="/home-lifestyle" className="menu_option">
          <p>Home & Lifestyle</p>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </Link>
        <Link to="/medicine" className="menu_option">
          <p>Medicine</p>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </Link>
        <Link
          to="/sports-outdoors"
          className="menu_option dis_f_between_center"
        >
          <p>Sports & Outdoors</p>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </Link>
        <Link to="/babies-toys" className="menu_option">
          <p>Baby's & Toys</p>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </Link>
        <Link to="/groceries-pets" className="menu_option">
          <p>Groceries & Pets</p>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </Link>
        <Link to="/health-beauty" className="menu_option">
          <p>Health & Beauty</p>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </Link>
      </div>
      {/* <div className="line"></div> */}
    </>
  );
};

export default CtMenu;
