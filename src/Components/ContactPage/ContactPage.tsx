import "./ContactPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import { mailIcon, phoneIcon } from "../../shared/ui-components/icon-handler";
import ViewAllBtn from "../../shared/ui-components/ViewAllBtn/ViewAllBtn";
import { Link } from "react-router-dom";

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />

      <div className="default-container mt-80px mb-140px">
        {/* Path to page */}
        <div className="dsfx f-gap-12px mb-40px">
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            Home
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <Link className="title-14px col-tx2" to="/about">
            Contact
          </Link>
        </div>
        <div className="dsfx fx-d-r f-gap-32px ">
          {/* Left side */}
          <div className="left-side-input dsfx fx-d-c f-gap-32px">
            {/* Call Section */}
            <div>
              <div className="dsfx fx-ai-c mb-24px">
                <div className="dsfx cal-icon bg-col-btn2 br-rad-cr mr-16px">
                  <IconHandler
                    path={phoneIcon}
                    iconSize="20x20"
                    className="svg-p"
                  />
                </div>
                <h2 className="title-medium-16px col-tx2">Call To Us</h2>
              </div>
              <p className="title-14px col-tx2">
                We are available 24/7, 7 days a week.
              </p>
              <p className="title-14px col-tx2 mt-16px">
                Phone: +8801611112222
              </p>
            </div>
            {/* Horisontal splitter */}
            <div className="hor-div bg-col-tx2 op-50"></div>

            {/* Write Section */}
            <div className="mb-32px">
              <div className="dsfx fx-ai-c mb-24px">
                <div className="dsfx cal-icon bg-col-btn2 br-rad-cr mr-16px">
                  <IconHandler
                    path={mailIcon}
                    iconSize="20x20"
                    className="svg-p"
                  />
                </div>
                <h2 className="title-medium-16px col-tx2">Write To US</h2>
              </div>
              <div className="dsfx f-gap-16px fx-d-c ">
                <p className="title-14px col-tx2">
                  Fill out our form and we will contact
                  <br /> you within 24 hours.
                </p>
                <p className="title-14px col-tx2">
                  Emails: customer@exclusive.com
                </p>
                <p className="title-14px col-tx2">
                  Emails: support@exclusive.com
                </p>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="right-side-input">
            <form className="dsfx f-gap-32px fx-d-c ml-32px fx-ai-end">
              <div className="dsfx f-gap-16px">
                <input
                  className="bg-col-s title-16px col-tx2 box-sizing br-rad-4px"
                  type="name"
                  placeholder="Your Name *"
                  required
                />
                <input
                  className="bg-col-s title-16px col-tx2 box-sizing br-rad-4px"
                  type="name"
                  placeholder="Your Email *"
                  required
                />
                <input
                  className="bg-col-s title-16px col-tx2 box-sizing br-rad-4px"
                  type="name"
                  placeholder="Your Phone *"
                  required
                />
              </div>
              <textarea
                className="textarea title-16px col-tx2 bg-col-s br-rad-4px"
                rows="10"
                placeholder="Your Message"
              ></textarea>
              <ViewAllBtn to="" title="Send Message" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
