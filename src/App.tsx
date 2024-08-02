import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <HomePage />
    </Router>
  );
};

export default App;
