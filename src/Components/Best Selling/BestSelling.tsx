import React from "react";
import "./BestSelling.css";
import Marker from "../Marker/Marker";
import FlashSaleProduct from "../FlashSale/FlashSaleProduct";
import ViewAllBtn from "../../shared/ui-components/ViewAllBtn/ViewAllBtn";

const BestSelling: React.FC = () => {
  return (
    <div className="default-container">
      <div className="best-seeling-top-sec">
        <Marker text="This Month" />
        <div className="dsfx fx-j-sb fx-ai-c mb-60px">
          <h1 className="heading-36px col-tx2 ">Best Selling Products</h1>
          <ViewAllBtn to="/bestsellers" title="View All" />
        </div>
      </div>
      <div className="mb-140px dsfx fx-d-r f-gap-32px">
        <FlashSaleProduct />
        <FlashSaleProduct />
        <FlashSaleProduct />
        <FlashSaleProduct />
      </div>
    </div>
  );
};

export default BestSelling;
