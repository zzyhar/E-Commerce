import React from "react";
import "./HomePage.css";
import Carousel from "../Carousel/Carousel";
import CtMenu from "../Category Menu/CtMenu";
import { CarouselData } from "../../types";
import slidesData from "../../data/carouselData.json";
import FlashSaleProduct from "../FlashSale/FlashSaleProduct";
import FlashSaleCarousel from "../FlashSaleCarousel/FlashSaleCarousel";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="home_page">
        <CtMenu />
        <Carousel data={slidesData as CarouselData} />
      </div>
      <FlashSaleCarousel />
    </>
  );
};

export default HomePage;
