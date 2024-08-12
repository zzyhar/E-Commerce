import "./BillingDetailt.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";

const BillingDetails: React.FC = () => {
  return (
    <>
      <Header />
      <div className="default-container mb-140px">
        {/* Path */}
        <div className="dsfx f-gap-12px mb-80px mt-80px">
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            Account
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            My Account
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            Product
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            View Cart
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <p className="title-14px col-tx2">CheckOut</p>
        </div>
        <div className="dsfx f-gap-180px">
          {/* Left Side */}
          <div>
            <h1 className="heading-medium-36px mb-48px">Billing Details</h1>
            <form action="" className="dsfx fx-d-c">
              {/* First Name */}
              <div className="dsfx fx-d-c mb-32px">
                <label className="title-16px col-tx2 op-40">First Name*</label>
                <input
                  className="bg-col-s check-out-input title-16px col-tx2 "
                  type="text"
                  required
                />
              </div>
              {/* Company Name */}
              <div className="dsfx fx-d-c mb-32px">
                <label className="title-16px col-tx2 op-40">Company Name</label>
              </div>
              {/* Street Adress  */}
              <div className="dsfx fx-d-c mb-32px">
                <label className="title-16px col-tx2 op-40">
                  Street Address*
                </label>
                <input
                  className="bg-col-s check-out-input title-16px col-tx2 "
                  type="text"
                  required
                />
              </div>
              {/* Apartment */}
              <div className="dsfx fx-d-c mb-32px">
                <label className="title-16px col-tx2 op-40">
                  Apartament, floor, etc.
                </label>
                <input
                  className="bg-col-s check-out-input title-16px col-tx2 "
                  type="text"
                  required
                />
              </div>
              {/* Town / City  */}
              <div className="dsfx fx-d-c mb-32px">
                <label className="title-16px col-tx2 op-40">Town/City*</label>
                <input
                  className="bg-col-s check-out-input title-16px col-tx2 "
                  type="text"
                  required
                />
              </div>
              {/* Phone Number  */}
              <div className="dsfx fx-d-c mb-32px">
                <label className="title-16px col-tx2 op-40">Phone Number</label>
                <input
                  className="bg-col-s check-out-input title-16px col-tx2 "
                  type="text"
                />
              </div>
              {/* Email  */}
              <div className="dsfx fx-d-c mb-16px">
                <label className="title-16px col-tx2 op-40">Email</label>
                <input
                  className="bg-col-s check-out-input title-16px col-tx2 "
                  type="text"
                />
              </div>
              {/* Check Box */}
              <div className="dsfx f-gap-16px">
                <input className="bg-col-btn2 col-p" type="checkbox" />
                <label className="title-16px col-tx2">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>
          {/* Right Side */}
          <div className="right-side-container mt-180px">
            {/* Products */}
            <div className="dsfx fx-d-r fx-j-sb fx-ai-c mb-32px">
              {/* Image with title */}
              <div className="dsfx f-gap-24px fx-ai-c">
                <img
                  src="../../../public/assets/imgs/Blender.jpeg"
                  className="image-checkout"
                />
                <p className="title-16px col-tx2">LCD Monito</p>
              </div>
              {/* Price */}
              <p className="title-16px col-tx2">$650</p>
            </div>
            <div className="dsfx fx-d-r fx-j-sb fx-ai-c">
              {/* Image with title */}
              <div className="dsfx f-gap-24px fx-ai-c">
                <img
                  src="../../../public/assets/imgs/Blender.jpeg"
                  className="image-checkout"
                />
                <p className="title-16px col-tx2">LCD Monito</p>
              </div>
              {/* Price */}
              <p className="title-16px col-tx2">$650</p>
            </div>
            {/* Total */}
            <div className="dsfx fx-d-c f-gap-16px mt-32px">
              <div className="dsfx fx-j-sb">
                <p className="title-16px col-tx2">Subtotal:</p>
                <p className="title-16px col-tx2">$1750</p>
              </div>
              <div className="hor-div bg-col-btn"></div>
              <div className="dsfx fx-j-sb">
                <p className="title-16px col-tx2">Shipping:</p>
                <p className="title-16px col-tx2">Free</p>
              </div>
              <div className="hor-div bg-col-btn"></div>
              <div className="dsfx fx-j-sb">
                <p className="title-16px col-tx2">Total:</p>
                <p className="title-16px col-tx2">$1750</p>
              </div>
            </div>
            {/* Payment Options */}
            <form>
              {/* Payment Types */}
              {/* Card Option */}
              <div className="dsfx fx-d-r fx-j-sb mt-32px">
                <div className="dsfx fx-ai-c f-gap-8px">
                  <input type="radio" />
                  <label className="title-16px col-tx2">Bank</label>
                </div>
                <div className="bank-images">
                  <img src="/assets/CheckOutPage/banks.png" alt="" />
                </div>
              </div>
              {/* Cash Option */}
              <div className="dsfx fx-ai-c f-gap-8px mt-4px">
                <input type="radio" />
                <label className="title-16px col-tx2">Cash on Delivery</label>
              </div>
            </form>
            <button className="place-order-btn title-16px col-p bor-col-btn2  br-rad-4px bg-col-btn2 bg-hov-tx1 bor-col-hov-tx1 col-hov-p mt-32px">
              Place Oreder
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BillingDetails;
