import "./ExploreSec.css";
import Marker from "../Marker/Marker";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";
import {
  leftArrowIcon,
  rightArrowIcon,
} from "../../shared/ui-components/icon-handler/index";
import LeftArrow from "../../shared/ui-components/Arrows/LeftArrow";
import RightArrow from "../../shared/ui-components/Arrows/RightArrow";

import FlashSaleProduct from "../FlashSale/FlashSaleProduct";

const ExploreSec: React.FC = () => {
  return (
    <div className="default-container">
      <div className="best-seeling-top-sec">
        <Marker text="Our Products" />
        <div className="dsfx fx-j-sb fx-ai-c mb-60px">
          <h1 className="heading-36px col-tx2 ">Explore Our Products</h1>
          <div className="dsfx fx-j-c fx-d-r f-gap-8px">
            <LeftArrow />
            <RightArrow />
          </div>
        </div>
        <div className="best-seeling-procust-sec dsfx fx-d-r f-gap-32px"></div>
      </div>
    </div>
  );
};

export default ExploreSec;
