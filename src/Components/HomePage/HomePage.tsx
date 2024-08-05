import React from "react";
import "./HomePage.css";
import Carousel from "../Carousel/Carousel";
import CtMenu from "../Category Menu/CtMenu";
import { CarouselData } from "../../types";
import slidesData from "../../data/carouselData.json";
// import FlashSaleProduct from "../FlashSale/FlashSaleProduct";
import FlashSaleCarousel from "../FlashSaleCarousel/FlashSaleCarousel";
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel";
import BestSelling from "../Best Selling/BestSelling";
import ExploreSec from "../ExploreSection/ExploreSec";
import Banner from "../FeaturedSection/Banner";
import Perks from "../PerksSection/Perks";
import Footer from "../Footer/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="default-container mb-140px dsfx f-gap-16px fx-j-sb">
        <CtMenu />
        <Carousel data={slidesData as CarouselData} />
      </div>
      <FlashSaleCarousel />
      <CategoryCarousel />
      <BestSelling />
      <ExploreSec />
      <Banner />
      <Perks />
      <Footer />
    </>
  );
};

export default HomePage;
