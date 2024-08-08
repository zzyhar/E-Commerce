import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopHeader from "./Components/TopHeader/TopHeader";
// import SignUpPage from "./Components/SignUpPage/SignUpPage";
// import HomePage from "./Components/HomePage/HomePage";
// import AboutPage from "./Components/AboutPage/AboutPage";
// import ContactPage from "./Components/ContactPage/ContactPage";
// import FLPаge from "./Components/FLPage/FLPage";
// import WishList from "./Components/WishList/WishList";
import CartSection from "./Components/Cart/CartSection";
import BillingDetailt from "./Components/Billing Details/BillingDetails";
const App: React.FC = () => {
  return (
    <Router>
      <TopHeader />
      {/* <WishList /> */}
      {/* <HomePage /> */}
      {/* <AboutPage /> */}
      {/* <ContactPage /> */}
      {/* <SignUpPage /> */}
      {/* <FLPаge /> */}
      {/* <CartSection /> */}
      <BillingDetailt />
    </Router>
  );
};

export default App;
