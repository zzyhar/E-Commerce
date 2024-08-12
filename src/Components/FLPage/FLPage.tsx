import React from "react";
import { Link } from "react-router-dom";
import "./FLPаge.css";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import ViewAllBtn from "../../shared/ui-components/ViewAllBtn/ViewAllBtn";

const FLPаge: React.FC = () => {
  return (
    <>
      <Header />
      <div className="default-container ">
        <div className="dsfx f-gap-12px mt-80px">
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            Home
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <Link className="title-14px col-tx2" to="/">
            404 Error
          </Link>
        </div>
        <div className="dsfx fx-d-c fx-ai-c fx-j-c mt-140px">
          <h1 className="heading-110px col-tx2">404 Not Found</h1>
          <p className="title-16px col-tx2 mt-40px">
            Your visited page not found. You may go home page.
          </p>
          <div className="mt-40px mb-140px">
            <ViewAllBtn to="/" title="Back to Home Page" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FLPаge;
