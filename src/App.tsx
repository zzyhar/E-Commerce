import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopHeader from "./Components/TopHeader/TopHeader";
// import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";

const App: React.FC = () => {
  return (
    <Router>
      <TopHeader />
      <AboutPage />
      {/* <HomePage /> */}
    </Router>
  );
};

export default App;
