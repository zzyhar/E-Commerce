import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import {
  searchIcon,
  heartIcon,
  cartIcon,
} from "../../shared/ui-components/icon-handler/index";

const Header: React.FC = () => (
  <>
    <header className="default-container dsfx mb-16px mt-40px fx-j-sb fx-ai-c">
      <p className="heading-bold-24px col-tx2 ">Exclusive</p>
      <nav className="dsfx fx-d-r fx-ai-s f-gap-48px">
        <Link className="title-16px col-tx2 tt-underline" to="/home">
          Home
        </Link>
        <Link className="title-16px col-tx2 tt-underline" to="/contact">
          Contact
        </Link>
        <Link className="title-16px col-tx2 tt-underline" to="/about">
          About
        </Link>
        <Link className="title-16px col-tx2 tt-underline" to="/sign-up">
          Sign Up
        </Link>
      </nav>

      <div className="dsfx fx-j-sb fx-ai-c">
        <div className="search-box dsfx f-gap-32px br-rad-4px bg-col-s mr-24px cursor-pointer fx-ai-e">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-col-s title-12px cursor-pointer"
          />
          <IconHandler
            path={searchIcon}
            iconSize="16x16"
            className="svg-tx2 cursor-pointer"
          />
        </div>
        <div className="dsfx f-gap-16px fx-ai-c">
          <Link to="/wish-list">
            <IconHandler
              className="svg-p1 svg-hov-btn2 cursor-pointer"
              path={heartIcon}
              iconSize="20x20"
            ></IconHandler>
          </Link>
          <Link to="/cart">
            <IconHandler
              className="svg-p1 svg-hov-btn2 cursor-pointer"
              path={cartIcon}
              iconSize="24x24"
            ></IconHandler>
          </Link>
        </div>
      </div>
    </header>

    <div className="hor-div bg-col-tx1"></div>
  </>
);

export default Header;
