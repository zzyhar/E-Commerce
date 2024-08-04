import React from "react";
import { Link } from "react-router-dom";
import TopHeader from "../TopHeader/TopHeader";
import "./Header.css";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import {
  searchIcon,
  heartIcon,
  cartIcon,
} from "../../shared/ui-components/icon-handler/index";

const Header: React.FC = () => (
  <div className="outer-line-header">
    <TopHeader />
    <div className="default-container">
      <header className="header dsfx mb-16px fx-j-sb fx-ai-c mb-40px">
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
          <div className="search-box dsfx f-gap-34px br-1px br-rad-4px bor-col-s bg-col-s mr-24px">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="search-input bg-col-s title-12px col-"
            />
            <IconHandler
              className="svg-p1 svg-hov-btn2 cursor-pointer"
              path={searchIcon}
              iconSize="20x20"
            ></IconHandler>
          </div>
          <div className="dis_f_default icons-container f-gap-16px">
            <Link to="/favorites">
              <IconHandler
                className="svg-p1 svg-hov-btn2 cursor-pointer"
                path={heartIcon}
                iconSize="28x28"
              ></IconHandler>
            </Link>
            <Link to="/cart">
              <IconHandler
                className="svg-p1 svg-hov-btn2 cursor-pointer"
                path={cartIcon}
                iconSize="32x32"
              ></IconHandler>
            </Link>
          </div>
        </div>
      </header>
    </div>
  </div>
);

export default Header;
