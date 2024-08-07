import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopHeader from "./Components/TopHeader/TopHeader";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import FLPаge from "./Components/FLPage/FLPage";
const App: React.FC = () => {
  return (
    <Router>
      <TopHeader />
      {/* <ContactPage /> */}
      {/* <AboutPage /> */}
      {/* <HomePage /> */}
      {/* <SignUpPage /> */}
      <FLPаge />
    </Router>
  );
};

export default App;
