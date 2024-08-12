import React from "react";
import Header from "../Header/Header";
import "./CartSection.css";
import { Link } from "react-router-dom";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import {
  dropDown,
  dropUp,
} from "../../shared/ui-components/icon-handler/index";
import Footer from "../Footer/Footer";
const CartSection: React.FC = () => {
  return (
    <>
      <Header />

      <div className="default-container mt-80px oh">
        {/* Path to Cart */}
        <div className="dsfx f-gap-12px mb-80px">
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            Home
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <p className="title-14px col-tx2">Cart</p>
        </div>
        <div className="">
          {/* Cart Heading Section */}
          <div className="product-wrapper dsfx fx-j-sb fx-ai-c">
            <p className="title-16px col-tx2">Product</p>
            <div className="dsfx f-gap-24px">
              <p className="title-16px col-tx2">Price</p>
              <p className="title-16px col-tx2">Quantity</p>
              <p className="title-16px col-tx2">Subtotal</p>
            </div>
          </div>
          {/* Cart Product Section */}
          <div className="product-wrapper dsfx fx-j-sb fx-ai-c">
            <div className="dsfx fx-ai-c f-gap-20px">
              <img className="img-preview" src="/assets/imgs/bike.jpg" />
              <p className="title-16px col-tx2">Mountaine Bike</p>
            </div>
            <div className="dsfx fx-ai-c f-gap-24px">
              <p className="title-16px col-tx2">$400</p>
              <div className="quantity-selector dsfx br-1px br-rad-4px fx-ai-c">
                <p className="mr-12px title-16px col-tx2 ">10</p>
                <div>
                  <IconHandler
                    path={dropUp}
                    iconSize="16x16"
                    className="svg-btn"
                  />
                  <IconHandler
                    path={dropDown}
                    iconSize="16x16"
                    className="svg-btn"
                  />
                </div>
              </div>
              <p className="title-16px col-tx2">$4000</p>
            </div>
          </div>
          <div className="product-wrapper dsfx fx-j-sb fx-ai-c">
            <div className="dsfx fx-ai-c f-gap-20px">
              <img className="img-preview" src="/assets/imgs/bike.jpg" />
              <p className="title-16px col-tx2">Mountaine Bike</p>
            </div>
            <div className="dsfx fx-ai-c f-gap-24px">
              <p className="title-16px col-tx2">$400</p>
              <div className="quantity-selector dsfx br-1px br-rad-4px fx-ai-c">
                <p className="mr-12px title-16px col-tx2 ">10</p>
                <div>
                  <IconHandler
                    path={dropUp}
                    iconSize="16x16"
                    className="svg-btn"
                  />
                  <IconHandler
                    path={dropDown}
                    iconSize="16x16"
                    className="svg-btn"
                  />
                </div>
              </div>
              <p className="title-16px col-tx2">$4000</p>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="dsfx fx-j-sb mt-24px mb-80px">
          <button className="cart-btn p-16-48px title-16px col-tx2 br-1px br-rad-4px bg-col-trp bg-hov-sec2 col-hov-p">
            Move All to Cart
          </button>
          <button className="cart-btn p-16-48px title-16px col-tx2 br-1px br-rad-4px bg-col-trp bg-hov-sec2 col-hov-p">
            Update Cart
          </button>
        </div>
        {/* Coupouns and cart total */}
        <div className="dsfx fx-j-sb mb-140px">
          {/* Coupon Section */}
          <div className="dsfx fx-d-r f-gap-16px">
            <input
              className="title-16px coupon-input br-1px br-rad-4px"
              placeholder="Coupon Code"
              type="text"
            />
            {/* Apply coupon btn */}
            <button className="cart-btn p-16-48px title-16px col-p bor-col-btn2  br-rad-4px bg-col-btn2 bg-hov-tx1 bor-col-hov-tx1 col-hov-p">
              Apply Coupon
            </button>
          </div>
          {/* Cart Section */}
          <div className="dsfx fx-d-c total br-1px br-rad-4px ">
            <h1 className="title-medium-20px col-tx2 mb-24px"> Cart Total</h1>
            <div className="dsfx fx-j-sb mb-16px">
              <p className="title-16px col-tx2">Subtotal:</p>{" "}
              <p className="title-16px col-tx2">$8000</p>
            </div>
            <div className="hor-div bg-col-tx2 mb-16px" />
            <div className="dsfx fx-j-sb mb-16px">
              <p className="title-16px col-tx2">Shipping:</p>{" "}
              <p className="title-16px col-tx2">Free</p>
            </div>
            <div className="hor-div bg-col-tx2 mb-16px" />
            <div className="dsfx fx-j-sb mb-16px">
              <p className="title-16px col-tx2">Total:</p>{" "}
              <p className="title-16px col-tx2">$8000</p>
            </div>
            <div className="dsfx fx-j-c">
              <button className="cart-btn p-16-48px title-16px col-p bor-col-btn2  br-rad-4px bg-col-btn2 bg-hov-tx1 bor-col-hov-tx1 col-hov-p">
                Proceed to chekout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartSection;
