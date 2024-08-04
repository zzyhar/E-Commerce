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
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import { searchIcon } from "../../shared/ui-components/icon-handler/index";

const Header: React.FC = () => (
  <>
    <TopHeader />
    <header className="default-container dsfx mb-16px fx-j-sb fx-ai-c">
      <div className="logo heading-bold-24px col-tx2 dfsx">Exclusive</div>
      <nav className="dsfx fx-d-r fx-ai-s f-gap-48px">
        <Link className="nav-item title-16px col-tx2" to="/home">
          Home
        </Link>
        <Link className="nav-item title-16px col-tx2" to="/contact">
          Contact
        </Link>
        <Link className="nav-item title-16px col-tx2" to="/about">
          About
        </Link>
        <Link className="nav-item title-16px col-tx2" to="/signup">
          Sign Up
        </Link>
      </nav>

      <div className="dsfx fx-j-sb fx-ai-c">
        <div className="dsfx f-gap-34px">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="search-input"
          />
          <IconHandler
            className="svg-p1 svg-hov-btn2 cursor-pointer"
            path={searchIcon}
            iconSize="20x20"
          ></IconHandler>
        </div>
        <div className="dis_f_default icons-container">
          <Link to="/favorites">
            <FontAwesomeIcon className="icon-heart" icon={faHeart} />
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon className="icon-cart" icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    </header>
  </>
);

export default Header;
