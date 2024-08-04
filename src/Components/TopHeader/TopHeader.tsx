import "./TopHeader.css";

function TopHeader() {
  return (
    <div className="top-notification-bar bg-col-btn mb-40px">
      <div className="default-container dsfx f-gap-16px fx-j-sb fx-ai-c">
        {/* Space placeholder */}
        <div></div>
        {/* Mid */}
        <div className="dsfx f-gap-8px fx-ai-c">
          <p className="title-14px col-tx">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a className="call-to-action title-14px col-tx col">Shop Now</a>
        </div>
        {/* End */}
        {/* Add logic for language selection */}
        <p className="col-tx title-14px">English</p>
      </div>
    </div>
  );
}

export default TopHeader;
