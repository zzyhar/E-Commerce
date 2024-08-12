import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ProfilePage.css";
import { Link } from "react-router-dom";

const ProfilePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="default-container mb-140px">
        {/* Path to page and userName */}
        <div className="dsfx fx-j-sb mt-80px ">
          {/* Path */}
          <div className="dsfx f-gap-12px mb-80px">
            <Link
              className="title-14px col-tx2 op-50 col-hov-tx2 op-100"
              to="/"
            >
              Home
            </Link>
            <p className="title-14px col-tx2 op-50">/</p>
            <p className="title-14px col-tx2">My Account</p>
          </div>
          {/* UserName */}
          <p className="title-14px col-tx2">
            Welcome, &nbsp;
            <span className="title-14px col-sec2">KOSMos3202</span>!
          </p>
        </div>
        <div></div>
        <div className="dsfx fx-j-sb">
          {/* Left Side */}
          <div>
            <p className="title-medium-16px col-tx2 mb-16px">Manage Account</p>
            <div className="ml-32px dsfx  fx-d-c f-gap-8px mb-16px">
              <p className="title-16px col-tx2 op-50 col-hov-sec2">
                My Profile
              </p>
              <p className="title-16px col-tx2 op-50 col-hov-sec2">
                Adress Book
              </p>
              <p className="title-16px col-tx2 op-50 col-hov-sec2">
                Payment Options
              </p>
            </div>
            <p className="title-medium-16px col-tx2 mb-16px">My Orders</p>
            <div className="ml-32px dsfx  fx-d-c f-gap-8px">
              <p className="title-16px col-tx2 op-50 col-hov-sec2">Returns</p>
              <p className="title-16px col-tx2 op-50 col-hov-sec2">
                Cancellations
              </p>
            </div>
            <p className="title-medium-16px col-tx2 mt-16px">My WishList</p>
          </div>
          {/* Rigth Side */}
          <div className="profile-form-wrapper br-rad-4px box-shadow">
            <h1 className="title-medium-20px col-sec2 mb-16px">
              Edit Your Profile
            </h1>
            <form>
              <div className="dsfx fx-w-w">
                <div className="half-from-container dsfx fx-d-c mr-40px mb-24px">
                  <label className="title-16px col-tx2">First Name</label>
                  <input
                    className="profile-input title-16px bg-col-s br-rad-4px"
                    placeholder="Md"
                    type="text"
                  />
                </div>
                <div className="half-from-container dsfx fx-d-c">
                  <label className="title-16px col-tx2">Last Name</label>
                  <input
                    className="profile-input title-16px bg-col-s br-rad-4px"
                    type="text"
                    placeholder="Rimel"
                  />
                </div>
                <div className="half-from-container dsfx fx-d-c mr-40px">
                  <label className="title-16px col-tx2">Email</label>
                  <input
                    className="profile-input title-16px bg-col-s br-rad-4px"
                    type="email"
                    placeholder="rimel1111gmail.com"
                  />
                </div>
                <div className="half-from-container dsfx fx-d-c">
                  <label className="title-16px col-tx2">Address</label>
                  <input
                    className="profile-input title-16px bg-col-s br-rad-4px"
                    type="text"
                    placeholder="Kingstone, 5236, Canada"
                  />
                </div>
              </div>
              <h1 className="title-16px col-tx2 mt-24px mb-8px">
                Password Change
              </h1>
              <div className="dsfx fx-d-c f-gap-16px">
                <input
                  className="profile-input bg-col-s br-rad-4px title-16px"
                  type="password"
                  placeholder="Current Password"
                />
                <input
                  className="profile-input bg-col-s br-rad-4px title-16px "
                  type="password"
                  placeholder="New Password"
                />
                <input
                  className="profile-input title-16px bg-col-s br-rad-4px"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="dsfx fx-j-e fx-j-c f-gap-32px mt-24px">
                <button className="title-medium-16px bg-col-trp br-none col-tx2">
                  Cancel
                </button>
                <button className="p-16-48px title-16px col-p bor-col-btn2  br-rad-4px bg-col-btn2 bg-hov-tx1 bor-col-hov-tx1 col-hov-p">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ProfilePage;
