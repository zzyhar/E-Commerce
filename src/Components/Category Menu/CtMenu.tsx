import React from "react";
import { Link } from "react-router-dom";
import "./CtMenu.css";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import { pointerIcon } from "../../shared/ui-components/icon-handler/index";

const CtMenu: React.FC = () => {
  const tsArray = [
    { title: "Men's Fashion", link: "/mens-fashion" },
    { title: "Women's Fashion", link: "/womens-fashion" },
    { title: "Electronics", link: "/electronics" },
    { title: "Home & Lifestyle", link: "/home-lifestyle" },
    { title: "Medicine", link: "/medicine" },
    { title: "Sports & Outdoors", link: "/sports-outdoors" },
    { title: "Baby's & Toys", link: "/babies-toys" },
    { title: "Groceries & Pets", link: "/groceries-pets" },
    { title: "Health & Beauty", link: "/health-beauty" },
  ];

  return (
    <>
      <div className="menu dsfx fx-d-c f-gap-16px mt-40px">
        {tsArray.map((item, index) => (
          <Link
            key={index}
            className="dsfx fx-j-sb fx-ai-c title-16px col-tx2 svg-trp svg-hov-btn2 cursor-pointer"
            to={item.link}
          >
            {item.title}
            <IconHandler
              className=""
              path={pointerIcon}
              iconSize="16x16"
            ></IconHandler>
          </Link>
        ))}
      </div>
      <div className="ver-div bg-col-tx1"></div>
    </>
  );
};

export default CtMenu;
