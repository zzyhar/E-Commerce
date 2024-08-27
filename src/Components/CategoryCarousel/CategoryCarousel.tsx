import "./CategoryCarousel.css";
import React, { useState, useEffect } from "react";
import Marker from "../Marker/Marker";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import LeftArrow from "../../shared/ui-components/Arrows/LeftArrow";
import RightArrow from "../../shared/ui-components/Arrows/RightArrow";
import { VOCategories } from "../../shared/models/categories.model";

// fetch("/api/cms/get-categories", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ group_key: "product_cat" }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // Store the data in the `categories` state variable
//     setCategories(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

const CategoryCarousel: React.FC = () => {
  const [categories, setCategories] = useState<VOCategories[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cms/get-categories", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ group_key: "product_cat" }),
        });

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const [startIndex, setStartIndex] = useState(0);
  const handleLeftClick = () => {
    setStartIndex((startIndex + categories.length - 1) % categories.length);
  };

  const handleRightClick = () => {
    setStartIndex((startIndex + 1) % categories.length);
  };

  const itemsToDisplay = () => {
    const endIndex = Math.min(startIndex + 6, categories.length);
    const remainingItems = endIndex - startIndex;

    const items = categories.slice(startIndex, endIndex);

    // If there are less than 6 items, append items from the beginning
    if (remainingItems < 6) {
      items.push(...categories.slice(0, 6 - remainingItems));
    }

    return items.map((item, index) => (
      <div
        key={index}
        className="category-item dsfx fx-j-c fx-d-c fx-ai-c br-1px  br-rad-4px bor-col-tx2 bg-hov-sec2 svg-hov-p col-hov-p"
      >
        <IconHandler
          path={item.icon}
          iconSize={"56x56"}
          className="mb-16px mt-24px svg-btn"
        />
        <p className="title-16px ">{item.name}</p>
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
