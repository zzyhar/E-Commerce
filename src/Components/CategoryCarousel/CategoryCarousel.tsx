import "./CategoryCarousel.css";
import React from "react";
import Marker from "../Marker/Marker";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import {
  rightArrowIcon,
  leftArrowIcon,
} from "../../shared/ui-components/icon-handler/index";

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

// const infoArray = [
//   { icon: dressIcon, title: "Wooman's Fasion", iconSize: "", className: "" },
//   { icon: suiteIcon, title: "Man's Fasion", iconSize: "", className: "" },
//   { icon: electronicsIcon, title: "Electronics", iconSize: "", className: "" },
//   { icon: homeIcon, title: "Home & Lyfestyle", iconSize: "", className: "" },
//   { icon: medicineIcon, title: "Medicine", iconSize: "", className: "" },
//   { icon: ballIcon, title: "Sports & Outdoor", iconSize: "", className: "" },
//   { icon: toyIcon, title: "Baby’s & Toys", iconSize: "", className: "" },
//   {
//     icon: groceriesIcon,
//     title: "Groceries & Pets",
//     iconSize: "",
//     className: "",
//   },
//   { icon: heatlthIcon, title: "Health & Beauty", iconSize: "", className: "" },
// ];

const CategoryCarousel: React.FC = () => {
  return (
    <div className="default-container">
      <div className="">
        <Marker text="Categories" />
        <div className="dsfx fx-j-sb fx-ai-c">
          <h1 className="heading-36px col-tx2 ">Browse By Category</h1>
          <div className="dsfx fx-j-c fx-d-r">
            <button>
              <IconHandler path={leftArrowIcon} iconSize="24x24" className="" />
            </button>
            <button>
              <IconHandler
                path={rightArrowIcon}
                iconSize="24x24"
                className=""
              />
            </button>
          </div>
        </div>
        <div>
          <div className="category-item dsfx fx-j-c fx-d-c fx-ai-c br-1px  br-rad-4px bor-col-tx2 ">
            <IconHandler
              path={dressIcon}
              iconSize="56x56"
              className="mb-16px mt-24px svg-btn"
            />
            <p className="title-16px">Wooman's Fasion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
