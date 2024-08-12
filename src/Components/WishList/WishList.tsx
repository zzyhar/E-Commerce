import "./WishList.css";
import ProductPreview from "../ProductPreview/ProductPreview";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import React from "react";
const WishList: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="default-container">
        {/* Top section with add to cart btn */}
        <div className="dsfx fx-j-sb mt-80px mb-60px">
          <p className="title-20px col-tx2">Wishlist(4)</p>
          <button className="p-16-48px title-16px col-tx2 br-1px br-rad-4px bg-col-trp bg-hov-sec2 col-hov-p">
            Move All to Cart
          </button>
        </div>
        {/* Wish List Section wiht products */}
        <div className="dsfx fx-d-r f-gap-32px">
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
        </div>
        {/* Just for You Section */}
        <div className="dsfx fx-j-sb mt-80px mb-60px">
          <div className=" dsfx fx-ai-c mb-12px f-gap-16px">
            <div className="marker br-rad-4px bg-col-sec2"></div>
            <div className="title-20px col-tx2">Just for You</div>
          </div>
          <button className="p-16-48px title-16px col-tx2 br-1px br-rad-4px bg-col-trp bg-hov-sec2 col-hov-p">
            See All
          </button>
        </div>
        {/* Wish List Section wiht products */}
        <div className="dsfx fx-d-r f-gap-32px mb-140px">
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
          <ProductPreview />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishList;
