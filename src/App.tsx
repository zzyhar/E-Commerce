import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopHeader from "./Components/TopHeader/TopHeader";
import GlobalRoutes from "./GlobalRoutes";
const App: React.FC = () => {
  return (
    <div>
      <TopHeader />
      <Router>{GlobalRoutes()}</Router>
    </div>
  );
};

export default App;
