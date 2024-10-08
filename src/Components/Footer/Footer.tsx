import React from "react";
import "./Footer.css";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler.tsx";
import {
  linkedInIcon,
  facebookIcon,
  twitterIcon,
  instagramIcon,
  copyRightIcon,
  sendIcon,
} from "../../shared/ui-components/icon-handler/index.ts";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-col-btn footer">
        <div className="default-container">
          <div className="dsfx fx-d-r f-gap-84px fx-j-c mb-60px">
            {/* Exclusive */}
            <div className="dsfx fx-d-c fx-ai-s fx-j-s">
              <h2 className="heading-bold-24px col-tx">Exclusive</h2>
              <p className="title-medium-20px col-tx mt-24px ">Subscribe</p>
              <p className="title-16px mt-24px col-tx">
                Get 10% off your first order
              </p>
              <div className="footer-input dsfx fx-j-c fx-ai-c br-1px br-rad-4px bor-col-tx mt-16px">
                <input
                  className=" title-16px ml-16px mt-12px mb-12px bg-col-btn"
                  type="text"
                  placeholder="Enter your email"
                />
                <IconHandler
                  path={sendIcon}
                  iconSize="24x24"
                  className="svg-tx"
                />
                <div />
              </div>
            </div>
            {/* Support */}
            <div className="dsfx fx-d-c fx-ai-s fx-j-s">
              <h1 className="title-medium-20px col-tx">Support</h1>
              <p className="title-16px col-tx mt-24px">
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </p>
              <p className="title-16px col-tx mt-16px">exclusive@gmail.com</p>
              <p className="title-16px col-tx mt-16px">+88015-88888-9999</p>
            </div>
            {/* Account */}
            <div className="dsfx fx-d-c fx-ai-s fx-j-s">
              <h1 className="title-medium-20px col-tx">Account</h1>
              <Link className="title-16px col-tx mt-24px" to="">
                My Account
              </Link>
              <Link className="title-16px col-tx mt-16px" to="">
                Login / Register
              </Link>
              <Link className="title-16px col-tx mt-16px" to="">
                Cart
              </Link>
              <Link className="title-16px col-tx mt-16px" to="">
                Wishlist
              </Link>
              <Link className="title-16px col-tx mt-16px" to="">
                Shop
              </Link>
            </div>
            {/* Quick Link */}
            <div className="dsfx fx-d-c fx-ai-s fx-j-s">
              <h1 className="title-medium-20px col-tx">Quick Link</h1>
              <p className="title-16px col-tx mt-16px">Privacy Policy</p>
              <p className="title-16px col-tx mt-16px">Terms Of Use</p>
              <p className="title-16px col-tx mt-16px">FAQ</p>
              <p className="title-16px col-tx mt-16px">Contact</p>
            </div>
            {/* Download App */}
            <div className="dsfx fx-d-c fx-ai-s fx-j-s">
              <h1 className="title-medium-20px col-tx">Download App</h1>
              <div className="dsfx fx-d-c fx-ai-s fx-j-c mt-24px">
                <div className="op-70 title-12px col-tx mb-12px ">
                  Save $3 with App New User Only
                </div>
                <div className="mt-8 dsfx fx-d-r f-gap-12px">
                  <div>
                    <img src="/assets/FooterImages/Qr Code.png" />
                  </div>
                  <div className="dsfx fx-d-c f-gap-12px">
                    <img src="/assets/FooterImages/download-appstore.png" />
                    <img
                      src="/assets/FooterImages/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dsfx fx-d-r fx-ai-c fx-j-c f-gap-24px mt-24px svg-p">
                  <IconHandler
                    path={facebookIcon}
                    iconSize="20x20"
                    className="svg-p"
                  />
                  <IconHandler
                    path={twitterIcon}
                    iconSize="24x24"
                    className="svg-p"
                  />
                  <IconHandler
                    path={instagramIcon}
                    iconSize="24x24"
                    className="svg-p"
                  />
                  <IconHandler
                    path={linkedInIcon}
                    iconSize="28x28"
                    className="svg-p"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="op-40 dsfx fx-d-r f-gap-8px fx-j-c fx-ai-c">
            <IconHandler
              path={copyRightIcon}
              iconSize="20x20"
              className="svg-p"
            />
            <p className="title-16px col-p">
              Copyright Rimel 2024. All right reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
