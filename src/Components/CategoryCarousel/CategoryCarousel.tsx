import "./CategoryCarousel.css";
import React, { useState } from "react";
import Marker from "../Marker/Marker";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import LeftArrow from "../../shared/ui-components/Arrows/LeftArrow";
import RightArrow from "../../shared/ui-components/Arrows/RightArrow";

import {
  suiteIcon,
  dressIcon,
  homeIcon,
  medicineIcon,
  ballIcon,
  toyIcon,
  groceriesIcon,
  heatlthIcon,
  electronicsIcon,
} from "../../shared/ui-components/icon-handler/index";

const data = [
  {
    icon: dressIcon,
    title: "Wooman's Fasion",
    iconSize: "56x56",
    className: "mb-16px mt-24px svg-btn",
  },
  {
    icon: suiteIcon,
    title: "Man's Fasion",
    iconSize: "56x56",
    className: "mb-16px mt-24px svg-btn",
  },
  {
    icon: electronicsIcon,
    title: "Electronics",
    iconSize: "56x56",
    className: "mb-16px mt-24px svg-btn",
  },
  {
    icon: homeIcon,
    title: "Home & Lyfestyle",
    iconSize: "56x56",
    className: "mb-16px mt-24px svg-btn",
  },
  {
    icon: medicineIcon,
    title: "Medicine",
    iconSize: "56x56",
    className: "mb-16px mt-24px svg-btn",
  },
  {
    icon: ballIcon,
    title: "Sports & Outdoor",
    iconSize: "56x56",
    className: "mb-16px mt-24px svg-btn",
  },
  {
    icon: toyIcon,
    title: "Baby’s & Toys",
    iconSize: "60x60",
    className: "mb-16px mt-24px svg-btn",
  },
  {
    icon: groceriesIcon,
    title: "Groceries & Pets",
    iconSize: "56x56",
    className: "mb-16px mt-24px svg-btn",
  },
  {
    icon: heatlthIcon,
    title: "Health & Beauty",
    iconSize: "60x60",
    className: "mb-16px mt-24px svg-btn",
  },
];

const CategoryCarousel: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const handleLeftClick = () => {
    setStartIndex((startIndex + data.length - 1) % data.length);
  };

  const handleRightClick = () => {
    setStartIndex((startIndex + 1) % data.length);
  };

  const itemsToDisplay = () => {
    const endIndex = Math.min(startIndex + 6, data.length);
    const remainingItems = endIndex - startIndex;

    const items = data.slice(startIndex, endIndex);

    // If there are less than 6 items, append items from the beginning
    if (remainingItems < 6) {
      items.push(...data.slice(0, 6 - remainingItems));
    }
    return items.map((item, index) => (
      <div
        key={index}
        className="category-item dsfx fx-j-c fx-d-c fx-ai-c br-1px  br-rad-4px bor-col-tx2 bg-hov-sec2 svg-hov-p col-hov-p"
      >
        <IconHandler
          path={item.icon}
          iconSize={item.iconSize}
          className="mb-16px mt-24px svg-btn"
        />
        <p className="title-16px ">{item.title}</p>
      </div>
    ));
  };

  return (
    <div className="default-container">
      <div>
        <Marker text="Categories" />
        <div className="dsfx fx-j-sb fx-ai-c mb-60px">
          <h1 className="heading-36px col-tx2 ">Browse By Category</h1>
          <div className="dsfx fx-j-c fx-d-r f-gap-8px">
            <LeftArrow onClick={handleLeftClick} />
            <RightArrow onClick={handleRightClick} />
          </div>
        </div>
        <div className="dsfx fx-j-sb f-gap-32px mb-60px">
          {itemsToDisplay()}
        </div>
      </div>
      <div className="hor-div bg-col-tx1 op-40 mb-80px" />
    </div>
  );
};

export default CategoryCarousel;
