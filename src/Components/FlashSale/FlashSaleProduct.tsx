import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

const FlashSaleProduct: React.FC = () => {
  return (
    <div>
      <div className="image">
        <p className="sale">-40%</p>
        <img
          src="https://i.ebayimg.com/images/g/~pUAAOSwM2VgsSEo/s-l1600.jpg"
          alt=""
          className="image"
        />
        <div className="icons">
          <div className="icon">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faEye} />
          </div>
        </div>
      </div>
      <div className="description">
        <p className="title"></p>
        <div className="price">
          <p className="regular_price">$120</p>
          <p className="discount_price">$160</p>
        </div>
        <div className="rating"></div>
      </div>
    </div>
  );
};

export default FlashSaleProduct;
