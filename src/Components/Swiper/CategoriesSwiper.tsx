import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CategoriesSwiper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"; // Example icon

interface Category {
  name: string;
  link: string;
}

const categories: Category[] = [
  { name: "Woman’s Fashion", link: "/womens-fashion" },
  { name: "Men’s Fashion", link: "/mens-fashion" },
  { name: "Electronics", link: "/electronics" },
  { name: "Home & Lifestyle", link: "/home-lifestyle" },
  { name: "Medicine", link: "/medicine" },
  { name: "Sports & Outdoor", link: "/sports-outdoor" },
  { name: "Baby’s & Toys", link: "/babys-toys" },
  { name: "Groceries & Pets", link: "/groceries-pets" },
  { name: "Health & Beauty", link: "/health-beauty" },
];

const CategoriesSwiper: React.FC = () => {
  return (
    <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
      {categories.map((category) => (
        <SwiperSlide key={category.name}>
          <Link to={category.link} className="category-link">
            <FontAwesomeIcon icon={faShoppingBag} className="category-icon" />{" "}
            {/* Replace with appropriate icon */}
            <div className="category-name">{category.name}</div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoriesSwiper;
