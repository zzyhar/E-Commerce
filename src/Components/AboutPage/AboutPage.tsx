import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./AboutPage.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Perks from "../PerksSection/Perks";
import Footer from "../Footer/Footer";
import {
  moneyBagIcon,
  shopIcon,
  dollarIcon,
  shopingBagIcon,
  linkedInIcon,
  instagramIcon,
  twitterIcon,
} from "../../shared/ui-components/icon-handler/index.ts";
import IconHandler from "../../shared/ui-components/icon-handler/IconHandler";

interface StaffMember {
  name: string;
  position: string;
  image: string;
}

const data: StaffMember[] = [
  {
    name: "Tom Cruise",
    position: "Founder & Chairman",
    image: "/assets/AboutPage/Frame 874.png",
  },
  {
    name: "Emma Watson",
    position: "Managing Director",
    image: "/assets/AboutPage/Frame 875.png",
  },
  {
    name: "Patrick Bateman",
    position: "Product Designer",
    image: "/assets/AboutPage/Frame 876.png",
  },
  {
    name: "Emma Watson",
    position: "Managing Director",
    image: "/assets/AboutPage/Frame 875.png",
  },
  {
    name: "Patrick Bateman",
    position: "Product Designer",
    image: "/assets/AboutPage/Frame 876.png",
  },
  {
    name: "Tom Cruise",
    position: "Founder & Chairman",
    image: "/assets/AboutPage/Frame 874.png",
  },
];

const AboutPage: React.FC = () => {
  const [swiperData] = useState<StaffMember[]>(data);

  return (
    <div>
      <Header />
      <div className="default-container mt-80px oh">
        <div className="dsfx f-gap-12px mb-40px">
          <Link className="title-14px col-tx2 op-50 col-hov-tx2 op-100" to="/">
            Home
          </Link>
          <p className="title-14px col-tx2 op-50">/</p>
          <Link className="title-14px col-tx2" to="/about">
            About
          </Link>
        </div>

        <div className="mb-140px dsfx fx-ai-c">
          <div className="mr-32px">
            <h1 className="heading-semi-54px mb-40px">Our Story</h1>
            <p className="title-reg col-tx2 mb-24px">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p className="title-reg col-tx2">
              Exclusive has more than 1 million products to offer, growing very
              fast. Exclusive offers a diverse assortment in categories ranging
              from consumer.
            </p>
          </div>
          <div>
            <img src="/assets/AboutPage/Side Image.png" alt="Side Image" />
          </div>
        </div>

        {/* 4 Perks Section */}
        {/* 4 Perks Section */}
        <div className="mb-140px">
          <div className="dsfx f-gap-32px fx-ai-c fx-j-c">
            <div className="parent dsfx ab-perk fx-ai-c fx-d-c br-rad-4px br-op-30 bg-hov-sec2 col-hov-p bor-col-hov-sec2 svg-p svg-hov-btn">
              <div className="bg-col-tx1 br-rad-cr mb-24px">
                <div className="perk-icon dsfx fx-ai-c fx-j-c bg-col-btn br-rad-cr сhild1">
                  <IconHandler path={shopIcon} iconSize="40x40" className="" />
                </div>
              </div>
              <div className="dsfx fx-d-c fx-ai-c f-gap-12px">
                <p className="heading-bold-32px col-tx2">10.5k</p>
                <p className="title-16px col-tx2">Sallers active our site</p>
              </div>
            </div>
            <div className="parent dsfx ab-perk fx-ai-c fx-d-c br-rad-4px br-op-30 bg-hov-sec2 col-hov-p bor-col-hov-sec2 svg-p svg-hov-btn">
              <div className="bg-col-tx1 br-rad-cr mb-24px">
                <div className="perk-icon dsfx fx-ai-c fx-j-c bg-col-btn br-rad-cr сhild1">
                  <IconHandler
                    path={dollarIcon}
                    iconSize="40x40"
                    className=""
                  />
                </div>
              </div>
              <div className="dsfx fx-d-c fx-ai-c f-gap-12px">
                <p className="heading-bold-32px col-tx2">33k</p>
                <p className="title-16px col-tx2">Mopnthly Produduct Sale</p>
              </div>
            </div>
            <div className="parent dsfx ab-perk fx-ai-c fx-d-c br-rad-4px br-op-30 bg-hov-sec2 col-hov-p bor-col-hov-sec2 svg-p svg-hov-btn">
              <div className="bg-col-tx1 br-rad-cr mb-24px">
                <div className="perk-icon dsfx fx-ai-c fx-j-c bg-col-btn br-rad-cr сhild1">
                  <IconHandler
                    path={shopingBagIcon}
                    iconSize="40x40"
                    className=""
                  />
                </div>
              </div>
              <div className="dsfx fx-d-c fx-ai-c f-gap-12px">
                <p className="heading-bold-32px col-tx2">45.5k</p>
                <p className="title-16px col-tx2">
                  Customer active in our site
                </p>
              </div>
            </div>
            <div className="parent dsfx ab-perk fx-ai-c fx-d-c br-rad-4px br-op-30 bg-hov-sec2 col-hov-p bor-col-hov-sec2 svg-p svg-hov-btn">
              <div className="bg-col-tx1 br-rad-cr mb-24px">
                <div className="perk-icon dsfx fx-ai-c fx-j-c bg-col-btn br-rad-cr сhild1">
                  <IconHandler
                    path={moneyBagIcon}
                    iconSize="40x40"
                    className=""
                  />
                </div>
              </div>
              <div className="dsfx fx-d-c fx-ai-c f-gap-12px">
                <p className="heading-bold-32px col-tx2">25k</p>
                <p className="title-16px col-tx2">
                  Anual gross sale in our site
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Staff */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper mb-140px"
          loop={true}
        >
          {swiperData.map((slide) => (
            <SwiperSlide key={slide.name}>
              <div className="mb-40px">
                <img className="mb-32px" src={slide.image} alt={slide.name} />
                <div>
                  <h1 className="heading-medium-32px col-tx2">{slide.name}</h1>
                  <p className="title-16px col-tx2">{slide.position}</p>
                  <div className="dsfx f-gap-16px fx-ai-c fx-j-s mt-16px">
                    <IconHandler
                      path={twitterIcon}
                      iconSize="24x24"
                      className="svg-btn"
                    />
                    <IconHandler
                      path={instagramIcon}
                      iconSize="24x24"
                      className="svg-btn"
                    />
                    <IconHandler
                      path={linkedInIcon}
                      iconSize="24x24"
                      className="svg-btn"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Perks />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
