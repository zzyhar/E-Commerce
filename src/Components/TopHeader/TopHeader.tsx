import "./TopHeader.css";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import { pointerDownIcon } from "../../shared/ui-components/icon-handler/index";
import React from "react";

function TopHeader() {
  return (
    <div className="top-notification-bar bg-col-btn ">
      <div className="default-container dsfx f-gap-16px fx-j-sb fx-ai-c">
        {/* Space placeholder */}
        <div></div>
        {/* Mid */}
        <div className="dsfx f-gap-8px fx-ai-c">
          <p className="title-14px col-tx">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a className="underline title-14px col-tx col-hov-btn-bl">Shop Now</a>
        </div>
        {/* End */}
        {/* Add logic for language selection */}

        <div className="dsfx fx-ai-c f-gap-4px">
          <p className="col-tx title-14px col-hov-btn-bl">English</p>
          <IconHandler
            className="svg-p cursor-pointer col-hov-btn-bl"
            path={pointerDownIcon}
            iconSize="12x12"
          ></IconHandler>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
