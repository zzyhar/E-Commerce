import "./Perks.css";
import {
  customerSupportIcon,
  deliveryIcon,
  shieldIcon,
} from "../../shared/ui-components/icon-handler/index.ts";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";

const Perks: React.FC = () => {
  return (
    <div className="default-container">
      <div className="dsfx fx-d-r f-gap-84px fx-ai-c fx-j-c mb-140px">
        <div className="dsfx fx-j-c fx-ai-c fx-d-c">
          <div className="perk-icon-wrapper dsfx fx-ai-c fx-j-c bg-col-tx1 br-rad-cr mb-24px">
            <div className="perk-icon dsfx fx-ai-c fx-j-c bg-col-btn br-rad-cr">
              <IconHandler
                path={shieldIcon}
                iconSize="32x32"
                className="svg-p"
              />
            </div>
          </div>
          <div className="description dsfx fx-d-c fx-ai-c">
            <p className="title-semi-20px col-tx2">MONEY BACK GUARANTEE</p>
            <p className="title-14px col-tx2">We reurn money within 30 days</p>
          </div>
        </div>
        <div className="dsfx fx-j-c fx-ai-c fx-d-c">
          <div className="perk-icon-wrapper dsfx fx-ai-c fx-j-c bg-col-tx1 br-rad-cr mb-24px">
            <div className="perk-icon dsfx fx-ai-c fx-j-c bg-col-btn br-rad-cr">
              <IconHandler
                path={customerSupportIcon}
                iconSize="40x40"
                className="svg-p"
              />
            </div>
          </div>
          <div className="description dsfx fx-d-c fx-ai-c">
            <p className="title-semi-20px col-tx2">24/7 CUSTOMER SERVICE</p>
            <p className="title-14px col-tx2">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="dsfx fx-j-c fx-ai-c fx-d-c">
          <div className="perk-icon-wrapper dsfx fx-ai-c fx-j-c bg-col-tx1 br-rad-cr mb-24px">
            <div className="perk-icon dsfx fx-ai-c fx-j-c bg-col-btn br-rad-cr">
              <IconHandler
                path={deliveryIcon}
                iconSize="40x40"
                className="svg-p"
              />
            </div>
          </div>
          <div className="description dsfx fx-d-c fx-ai-c">
            <p className="title-semi-20px col-tx2">FREE AND FAST DELIVERY</p>
            <p className="title-14px col-tx2">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Perks;
