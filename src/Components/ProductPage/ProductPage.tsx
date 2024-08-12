import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ProductPage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  plusIocn,
  minusIocn,
  heartIcon,
  returnIcon,
  deliveryIcon,
} from "../../shared/ui-components/icon-handler";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import Marker from "../Marker/Marker";
import FlashSaleProduct from "../FlashSale/FlashSaleProduct";
import React from "react";

const ProductPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="default-container mt-80px">
        <div className="dsfx f-gap-12px mb-80px">
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            Home
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <p className="title-14px col-tx2 op-50">Electronics</p>
          <p className="title-14px col-tx2 op-50">/</p>
          <p className="title-14px col-tx2">Havic HV G-92 Gamepad</p>
        </div>
        <div className="dsfx f-gap-56px mb-140px">
          {/* left side */}
          <div className="dsfx fx-d-r f-gap-32px">
            {/* small colums of imgs */}
            <div className="dsfx fx-d-c f-gap-16px">
              <div className="product-small-img">
                <img src="/assets/ProductPage/p1.png" alt="" />
              </div>
              <div className="product-small-img">
                <img src="/assets/ProductPage/p2.png" alt="" />
              </div>
              <div className="product-small-img">
                <img src="/assets/ProductPage/p3.png" alt="" />
              </div>
              <div className="product-small-img">
                <img src="/assets/ProductPage/p4.png" alt="" />
              </div>
            </div>
            <div className="product-big-img">
              <img src="/assets/ProductPage/bp.png" alt="" />
            </div>
          </div>
          {/* right side */}
          <div>
            <h1 className="heading-semi-24px col-tx2 mb-16px">
              Havic HV G-92 Gamepad
            </h1>
            <div className="dsfx fd-d-r">
              {/* Star Rating */}
              <div className=" dsfx fx-d-r">
                <FontAwesomeIcon className="col-star" icon={faStar} />
                <FontAwesomeIcon className="col-star" icon={faStar} />
                <FontAwesomeIcon className="col-star" icon={faStar} />
                <FontAwesomeIcon className="col-star" icon={faStar} />
                <FontAwesomeIcon className="" icon={faStar} />
              </div>
              {/* Amount of Reviews */}
              <div className="dsfx f-gap-16px ml-8px">
                <p className="title-14px col-tx2 op-70">(150 Reviews)</p>
                <p className="title-14px col-tx2 op-70">|</p>
                <p className="title-14px col-btn1">In Stock</p>
              </div>
            </div>
            <p className="col-tx2 heaiding-24px mt-16px">$192.00</p>
            <p className="title-14px col-tx2 mt-24px">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <div className="hor-div bg-col-btn op-50 mt-24px"></div>
            <div className="hor-div op-50 mt-24px"></div>
            {/* Size Picker */}
            <div className="dsfx fx-ai-c">
              <h1 className="heading-20px col-tx2 mr-24px">Size:</h1>
              <div className="dsfx f-gap-16px">
                <p className="dsfx title-medium-14px col-tx2 fx-ai-c fx-j-c size-options br-1px br-rad-4px bor-col-tx2 bg-hov-btn2 col-hov-p bor-col-hov-btn2">
                  XS
                </p>
                <p className="dsfx title-medium-14px col-tx2 fx-ai-c fx-j-c size-options br-1px br-rad-4px bor-col-tx2 bg-hov-btn2 col-hov-p bor-col-hov-btn2">
                  S
                </p>
                <p className="dsfx title-medium-14px col-tx2 fx-ai-c fx-j-c size-options br-1px br-rad-4px bor-col-tx2 bg-hov-btn2 col-hov-p bor-col-hov-btn2">
                  M
                </p>
                <p className="dsfx title-medium-14px col-tx2 fx-ai-c fx-j-c size-options br-1px br-rad-4px bor-col-tx2 bg-hov-btn2 col-hov-p bor-col-hov-btn2">
                  L
                </p>
                <p className="dsfx title-medium-14px col-tx2 fx-ai-c fx-j-c size-options br-1px br-rad-4px bor-col-tx2 bg-hov-btn2 col-hov-p bor-col-hov-btn2">
                  XL
                </p>
              </div>
            </div>
            {/* Amount Picker */}
            <div className="dsfx f-gap-16px mt-16px">
              <div className="amount-picker dsfx fx-d-r br-rad-4px">
                <button className="svg-hov-p svg-tx2 bg-hov-btn2 bg-col-trp minus-btn br-1px bor-col-hov-btn2">
                  <IconHandler path={minusIocn} iconSize="24x24" className="" />
                </button>
                <div className="picked-number dsfx fx-as-i fx-j-c p-4px br-1px">
                  <p className="title-medium-20px col-tx2">2</p>
                </div>

                <button className="plus-btn svg-hov-p svg-tx2 bg-hov-btn2 bg-col-trp br-1px bor-col-hov-btn2">
                  <IconHandler path={plusIocn} iconSize="24x24" className="" />
                </button>
              </div>
              {/* One Click ChecOut */}
              <button className="one-click-checkout title-16px col-p bor-col-btn2  br-rad-4px bg-col-btn2 bg-hov-tx1 bor-col-hov-tx1 col-hov-p">
                Buy Now
              </button>
              {/* Add to Favorite */}
              <div className="br-1px dsfx fx-ai-c p-8px br-rad-4px br-op-50">
                <IconHandler path={heartIcon} iconSize="20x20" className="" />
              </div>
            </div>
            {/* Perks */}
            <div className="perks-section br-1px br-op-50 br-rad-4px mt-40px">
              <div className="dsfx fx-d-r fx-ai-c f-gap-16px mb-16px">
                <div className="svg-tx2">
                  <IconHandler
                    path={deliveryIcon}
                    iconSize="32x32"
                    className=""
                  />
                </div>
                <div>
                  <h2 className="title-16px col-tx2">Free Delivery</h2>
                  <p className="underline  title-prod col-tx2">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="hor-div bg-col-btn op-50 mb-16px"></div>
              <div className="dsfx fx-d-r fx-ai-c f-gap-16px">
                <div className="svg-tx2">
                  <IconHandler
                    path={returnIcon}
                    iconSize="32x32"
                    className=""
                  />
                </div>
                <div>
                  <h2 className="title-16px col-tx2">Return Delivery</h2>
                  <p className="underline title-prod col-tx2">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Marker text={"Related Items"} />
          <div className="dsfx fx-d-r f-gap-32px mt-60px mb-140px">
            <FlashSaleProduct />
            <FlashSaleProduct />
            <FlashSaleProduct />
            <FlashSaleProduct />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ProductPage;
