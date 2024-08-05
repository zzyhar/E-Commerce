import "./Footer.css";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import {
  linkedInIcon,
  facebookIcon,
  twitterIcon,
  insatgramIcon,
  copyRightIcon,
  sendIcon,
} from "../../shared/ui-components/icon-handler/index.ts";
import { Link } from "react-router-dom";

/* 
    Add Links to Login, Account 
*/

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
              <div>
                <input
                  className="footer-input br-1px br-rad-4px mt-16px bor-col-tx title-16px bg-col-btn"
                  type="text"
                  placeholder="Enter your email"
                
                >
                    <IconHandler
                  path={sendIcon}
                  iconSize="24x24"
                  className="svg-tx"
                />
                </>
                
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
                <div className="reg-title title-12px col-tx mb-12px ">
                  Save $3 with App New User Only
                </div>
                <div className="mt-8 dsfx fx-d-r f-gap-12px">
                  <div>
                    <img src="../../../public/assets/FooterImages/Qr Code.png" />
                  </div>
                  <div className="dsfx fx-d-c f-gap-12px">
                    <img src="../../../public/assets/FooterImages/download-appstore.png" />
                    <img
                      src="../../../public/assets/FooterImages/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="dsfx fx-d-r f-gap-24px mt-24px">
                  <IconHandler
                    path={facebookIcon}
                    iconSize="16x16"
                    className="svg-p"
                  />
                  <IconHandler
                    path={twitterIcon}
                    iconSize="24x24"
                    className="svg-p"
                  />
                  <IconHandler
                    path={insatgramIcon}
                    iconSize="24x24"
                    className="svg-p"
                  />
                  <IconHandler
                    path={linkedInIcon}
                    iconSize="24x24"
                    className="svg-p"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright dsfx fx-d-r f-gap-8px fx-j-c fx-ai-c">
            <IconHandler
              path={copyRightIcon}
              iconSize="20x20"
              className="svg-p"
            />
            {/* !!!!!! */}
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
