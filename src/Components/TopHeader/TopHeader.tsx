import "./TopHeader.css";

function TopHeader() {
  return (
    <div className="top-header-bg">
      <div className="top-header">
        <div className="center-container">
          <p className="top-header__text top-header__sales-banner">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <div className="top-header__text top-header__shop-btn">Shop Now</div>
        </div>
      </div>
      {/* !! Need to add dropdown functionality for changing languages */}
      <div className="top-header__text top-header__languages">
        <p>English</p>
      </div>
    </div>
  );
}

export default TopHeader;
