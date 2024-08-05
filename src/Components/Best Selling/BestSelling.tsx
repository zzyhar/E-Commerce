import "./BestSelling.css";
import Marker from "../Marker/Marker";
import FlashSaleProduct from "../FlashSale/FlashSaleProduct";
import { Link } from "react-router-dom";

const BestSelling: React.FC = () => {
  return (
    <div className="default-container">
      <div className="best-seeling-top-sec">
        <Marker text="This Month" />
        <div className="dsfx fx-j-sb fx-ai-c mb-60px">
          <h1 className="heading-36px col-tx2 ">Best Selling Products</h1>
          <Link
            to="/bestsellers"
            className="btn-best-section dsfx fx-ai-c fx-j-c br-rad-4px bg-col-btn2 col-tx bor-col-trp title-medium-16px bg-hov-btn-hov"
          >
            View All
          </Link>
        </div>
      </div>
      <div className="best-seeling-procust-sec dsfx fx-d-r f-gap-32px">
        <FlashSaleProduct />
        <FlashSaleProduct />
        <FlashSaleProduct />
        <FlashSaleProduct />
      </div>
    </div>
  );
};

export default BestSelling;
