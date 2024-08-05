import Marker from "../Marker/Marker";
import "./Banner.css";

const Banner: React.FC = () => {
  return (
    <div className="default-container">
      <div className="dsfx fx-d-c mb-60px">
        <Marker text="Featured" />
        <h1 className="heading-36px col-tx2 ">New Arrivals</h1>
      </div>
      {/* image */}
      <div className="dsfx fx-d-r f-gap-32px mb-140px">
        <div>
          <div className="bg">
            <img src="../../../public/assets/NewArrival/big.png" />
            <img
              className="ps5"
              src="../../../public/assets/NewArrival/ps5.png"
            />
            <div className="dsfx fx-d-c f-gap-16px ruler">
              <h1 className="heading-semi-24px col-tx">Playstation 5</h1>
              <p className="title-14px col-tx">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="title-medium-16px undeline col-tx col-hov-btn-bl cursor-pointer  col-hov-btn-bl cursor-pointer">
                Shop Now
              </p>
            </div>
          </div>
        </div>

        <div className="dsfx fx-d-c bg f-gap-32px">
          <div className="bg">
            <div>
              <img src="../../../public/assets/NewArrival/med.png" />
              <img
                className="wm"
                src="../../../public/assets/NewArrival/attractive-woman-wearing-hat-posing-black-background 1.png"
              />
            </div>
            <div className="dsfx fx-d-c f-gap-16px wm-ruler">
              <h1 className="heading-semi-24px col-tx">Women’s Collections</h1>
              <p className="title-14px col-tx">
                Featured woman collections that give you another vibe.
              </p>
              <p className="title-medium-16px undeline col-tx col-hov-btn-bl cursor-pointer ">
                Shop Now
              </p>
            </div>
          </div>

          <div className="dsfx f-d-r f-gap-32px">
            <div className="bg">
              <div>
                <img src="../../../public/assets/NewArrival/small.png" />
                <img
                  className="pr"
                  src="../../../public/assets/NewArrival/Speaker.png"
                />
              </div>
              <div className="dsfx fx-d-c f-gap-16px wm-ruler">
                <h1 className="heading-semi-24px col-tx ">Speakers</h1>
                <p className="title-14px col-tx">Amazon wireless speakers</p>
                <p className="title-medium-16px undeline col-tx col-hov-btn-bl cursor-pointer">
                  Shop Now
                </p>
              </div>
            </div>

            <div className="bg">
              <div>
                <img src="../../../public/assets/NewArrival/small.png" />
                <img
                  className="pr"
                  src="../../../public/assets/NewArrival/parfume.png"
                />
                <div className="dsfx fx-d-c f-gap-16px wm-ruler">
                  <h1 className="heading-semi-24px col-tx">Perfume</h1>
                  <p className="title-14px col-tx">GUCCI INTENSE OUD EDP</p>
                  <p className="title-medium-16px undeline col-tx col-hov-btn-bl cursor-pointerundeline col-tx">
                    Shop Now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
