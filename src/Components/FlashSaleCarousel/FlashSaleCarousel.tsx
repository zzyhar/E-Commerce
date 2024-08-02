import "./FlashSaleCarousel.css";
import FlashSaleProduct from "../FlashSale/FlashSaleProduct";
import Marker from "../Marker/Marker";

const FlashSaleCarousel: React.FC = () => {
  return (
    <>
      <div className="flashCarousel">
        <Marker />
        <div>
          <h1 className="flash_title">Flash Sale</h1>
          {/* timer */}
        </div>

        {/* <FlashSaleProduct />
        <FlashSaleProduct />
        <FlashSaleProduct />
        <FlashSaleProduct /> */}
      </div>
    </>
  );
};
export default FlashSaleCarousel;
