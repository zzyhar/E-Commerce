import React from "react";
import { Link } from "react-router-dom";
import "./CtMenu.css";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import { pointerIcon } from "../../shared/ui-components/icon-handler/index";

const CtMenu: React.FC = () => {
  return (
    <div className="outer-line">
      <div className="menu dsfx fx-d-c  f-gap-16px mr-16px mt-40px">
        <Link
          className="menu_option dsfx fx-j-sb title-16px col-tx2 svg-hov-btn2"
          to="/mens-fashion"
        >
          Men's Fashion
          <IconHandler
            className="icon svg-p1 cursor-pointer"
            path={pointerIcon}
            iconSize="16x16"
          ></IconHandler>
        </Link>

        <Link
          className="menu_option dsfx fx-j-sb title-16px col-tx2 svg-hov-btn2"
          to="/electronics"
        >
          Electronics
          <IconHandler
            className="icon svg-p1 cursor-pointer"
            path={pointerIcon}
            iconSize="16x16"
          ></IconHandler>
        </Link>

        <Link
          className="menu_option dsfx fx-j-sb title-16px col-tx2 svg-hov-btn2"
          to="/home-lifestyle"
        >
          Home & Lifestyle
          <IconHandler
            className="icon svg-p1 cursor-pointer"
            path={pointerIcon}
            iconSize="16x16"
          ></IconHandler>
        </Link>

        <Link
          className="menu_option dsfx fx-j-sb title-16px col-tx2 svg-hov-btn2"
          to="/medicine"
        >
          Medicine
          <IconHandler
            className="icon svg-p1 cursor-pointer"
            path={pointerIcon}
            iconSize="16x16"
          ></IconHandler>
        </Link>

        <Link
          className="menu_option dsfx fx-j-sb title-16px col-tx2 f-gap-28px svg-hov-btn2"
          to="/sports-outdoors"
        >
          Sports & Outdoors
          <IconHandler
            className="icon svg-p1 cursor-pointer"
            path={pointerIcon}
            iconSize="16x16"
          ></IconHandler>
        </Link>

        <Link
          className="menu_option dsfx fx-j-sb title-16px col-tx2 svg-hov-btn2"
          to="/babies-toys"
        >
          Baby's & Toys
          <IconHandler
            className="icon svg-p1 cursor-pointer"
            path={pointerIcon}
            iconSize="16x16"
          ></IconHandler>
        </Link>

        <Link
          className="menu_option dsfx fx-j-sb title-16px col-tx2 svg-hov-btn2"
          to="/groceries-pets"
        >
          Groceries & Pets
          <IconHandler
            className="icon svg-p1 cursor-pointer"
            path={pointerIcon}
            iconSize="16x16"
          ></IconHandler>
        </Link>

        <Link
          className="menu_option dsfx fx-j-sb title-16px col-tx2 svg-hov-btn2"
          to="/health-beauty"
        >
          Health & Beauty
          <IconHandler
            className="icon cursor-pointer"
            path={pointerIcon}
            iconSize="16x16"
          ></IconHandler>
        </Link>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default CtMenu;
