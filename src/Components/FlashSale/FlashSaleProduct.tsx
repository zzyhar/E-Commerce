import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./FlashSaleProduct.css";
import {
  heartIcon,
  trashIcon,
} from "../../shared/ui-components/icon-handler/index";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import { VOProducts } from "../../shared/models/product.model";

interface FlashSaleProductProps {
  product: VOProducts;
  page: string;
}

const FlashSaleProduct: React.FC<FlashSaleProductProps> = ({
  product,
  page,
}) => {
  if (!product) {
    return <></>;
  }

  const salePrice: number = product?.variations?.[0]?.salePrice ?? 0;
  const regularPrice: number = product?.variations?.[0]?.price ?? 0;
  const title: string = product.title;
  const createdAt: Date | undefined = product?.createdAt;
  const currentDate = new Date();

  const countSale = (regularPrice: number, salePrice: number): number => {
    if (regularPrice <= 0) {
      throw new Error("Regular price must be positive.");
    }
    let discount: number = (salePrice / regularPrice) * 100;
    discount = Math.floor(discount);
    discount -= discount % 5;
    if (discount < 0) {
      throw new Error("Discount cannot be negative.");
    }
    return discount;
  };

  // flag setter if there is a sale on product
  let sale: number = 0;
  if (salePrice !== null || salePrice !== undefined) {
    sale = 1;
  }

  // flag setter in case product been added less than 14 days ago
  const timeBetween: number = Math.abs(
    new Date(currentDate).getTime() - new Date(createdAt).getTime()
  );

  const daysBetween = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  let newProduct = 0;
  if (daysBetween >= 0 && daysBetween <= 14) {
    newProduct = 1;
  }

  // icon selector
  let iconSelector: string = heartIcon;
  if (page === "wishlist") {
    iconSelector = trashIcon;
  }

  return (
    <div>
      <div className="image br-1px bor-col-btn br-rad-4px mb-16px p-relative">
        {/* if there is only sale product banner */}
        {sale === 1 && newProduct === 0 && (
          <div className="p-absolute p-4-12px dsfx fx-j-c fx-ai-c title-12px col-tx mt-12px ml-12px bg-col-btn2 br-rad-4px">
            -{countSale(regularPrice, salePrice)}%
          </div>
        )}
        {/* if there are sale and new banner */}
        {sale === 1 && newProduct === 1 && (
          <div className="p-absolute">
            <div className="p-4-12px dsfx fx-j-c fx-ai-c title-12px col-tx mt-12px ml-12px bg-col-btn1 br-rad-4px">
              NEW
            </div>
            <div className="p-4-12px dsfx fx-j-c fx-ai-c title-12px col-tx mt-12px ml-12px bg-col-btn2 br-rad-4px">
              -{countSale(regularPrice, salePrice)}%
            </div>
          </div>
        )}
        {/* if there is only new product banner*/}
        {sale === 0 && newProduct === 1 && (
          <div className="p-absolute p-4-12px dsfx fx-j-c fx-ai-c title-12px col-tx mt-12px ml-12px bg-col-btn1 br-rad-4px">
            NEW
          </div>
        )}
        <div className="icons p-absolute p-4-12px p-absolute dsfx fx-d-c f-gap-8px">
          <div className="heart br-rad-cr dsfx fx-ai-c fx-j-c bg-col-p cursor-pointer bg-hov-btn2">
            <IconHandler
              className=""
              path={iconSelector}
              iconSize="16x16"
            ></IconHandler>
          </div>
        </div>
        <div className="addToCart dsfx fx-j-c fx-ai-c col-p bg-col-btn ">
          Add to Cart
        </div>
      </div>
      <div className="description dsfx fx-d-c fx-ai-fs f-gap-8px">
        <p className="title-medium-16px col-tx2">{title}</p>
        <div className="price dsfx">
          {sale === 1 && (
            <>
              <div className="col-sec2 mr-8px">${salePrice}</div>
              <div className="line-through op-50">${regularPrice}</div>
            </>
          )}
          {sale === 0 && (
            <div className="regular_price col-sec2 mr-8px">${regularPrice}</div>
          )}
        </div>
        <div className="rating">
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
          <FontAwesomeIcon className="star" icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default FlashSaleProduct;
