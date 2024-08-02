import React from "react";
import { Link } from "react-router-dom";
import TopHeader from "../TopHeader/TopHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header: React.FC = () => (
  <>
    <TopHeader />
    <header className="header">
      {/* Logo Section */}
      <div className="logo">Exclusive</div>

      {/* Navigation Menu */}
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>

      {/* Search Bar and Icons */}
      <div className="search-icons-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="search-input"
          />
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        </div>
        <div className="icons-container">
          <Link to="/favorites">
            <FontAwesomeIcon className="icon" icon={faHeart} />
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon className="icon icon-cart" icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    </header>
  </>
);

export default Header;
