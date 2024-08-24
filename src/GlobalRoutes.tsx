import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import FLPаge from "./Components/FLPage/FLPage";
import WishList from "./Components/WishList/WishList";
import CartSection from "./Components/Cart/CartSection";
import BillingDetailt from "./Components/Billing Details/BillingDetails";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import ProductPage from "./Components/ProductPage/ProductPage";

const GlobalRoutes: React.FC = () => (
  <Routes>
    <Route path="" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/404" element={<FLPаge />} />
    {/* <Route path="/login" element={<LoginPage />} /> */}
    <Route path="/cart" element={<CartSection />} />
    <Route path="/cart/billing-details" element={<BillingDetailt />} />
    <Route path="/wish-list" element={<WishList />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/product-page" element={<ProductPage />} />
  </Routes>
);

export default GlobalRoutes;
