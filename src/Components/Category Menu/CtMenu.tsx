import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./CtMenu.css";

const CtMenu: React.FC = () => {
  return (
    <div>
      <ul className="menu">
        <li className="menu_option">
          <Link to="/womens-fashion">Women's Fashion</Link>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </li>
        <li className="menu_option">
          <Link to="/mens-fashion">Men's Fashion</Link>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </li>
        <li className="menu_option">
          <Link to="/electronics">Electronics</Link>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </li>
        <li className="menu_option">
          <Link to="/home-lifestyle">Home & Lifestyle</Link>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </li>
        <li className="menu_option">
          <Link to="/medicine">Medicine</Link>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </li>
        <li className="menu_option">
          <Link to="/sports-outdoors">Sports & Outdoors</Link>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </li>
        <li className="menu_option">
          <Link to="/babies-toys">Baby's & Toys</Link>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </li>
        <li className="menu_option">
          <Link to="/groceries-pets">Groceries & Pets</Link>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </li>
        <li className="menu_option">
          <Link to="/health-beauty">Health & Beauty</Link>
          <FontAwesomeIcon icon={faCaretDown} className="icon" />
        </li>
      </ul>
      <div className="line"></div>
    </div>
  );
};

export default CtMenu;
