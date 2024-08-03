import "./TopHeader.css";
import "../CriticalCss.css";

function TopHeader() {
  return (
    <div className="padding_main dis_f_between_center top-header-bg">
      <div className="dis_f_default top-header">
        <div className="dis_f center-container">
          <p className="top-header_text top-header__sales-banner">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <div className="top-header_text top-header__shop-btn">Shop Now</div>
        </div>
      </div>
      {/* !! Need to add dropdown functionality for changing languages */}
      <div className="top-header_text top-header__languages">
        <p>English</p>
      </div>
    </div>
  );
}

export default TopHeader;
