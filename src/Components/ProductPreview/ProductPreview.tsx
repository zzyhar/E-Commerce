import "./ProductPreview.css";

import React, { useState, useRef } from "react";

import {
  cartIcon,
  trashIcon,
} from "../../shared/ui-components/icon-handler/index";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";

// interface ProductPreview {
//   saleAmount: undefined | string;
//   dateAdded: Date;
//   wishList: boolean;
// }

const ProductPreview: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<string[]>([
    "/assets/testBackground/c1.jpg",
    "/assets/testBackground/c2.jpeg",
    "/assets/testBackground/c3.jpeg",
  ]);

  return (
    <div>
      <div
        className="image br-rad-4px mb-16px"
        ref={imageRef}
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className="discount dsfx fx-j-c fx-ai-c title-12px col-tx mt-12px ml-12px bg-col-btn2 br-rad-4px">
          -40%
        </div>
        <div className="icons dsfx fx-d-c f-gap-8px">
          <div className="eye dsfx fx-ai-c fx-j-c bg-col-p cursor-pointer ">
            <IconHandler
              className="cursor-pointer"
              path={trashIcon}
              iconSize="16x16"
            ></IconHandler>
          </div>
        </div>
        <div className="addToCart dsfx fx-j-c fx-ai-c col-p bg-col-btn">
          <p className="">Add to Cart</p>
          <IconHandler
            className="cursor-pointer"
            path={cartIcon}
            iconSize="16x16"
          ></IconHandler>
        </div>
      </div>
      <div className="description dsfx fx-d-c fx-ai-fs f-gap-8px">
        <p className="title-medium-16px col-tx2">HAVIT HV-G92 Gamepad</p>
        <div className="price dsfx">
          <div className="regular_price col-sec2 mr-8px">$120</div>
          <div className="discount_price">$160</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
