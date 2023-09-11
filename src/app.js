import React, { useEffect } from "react";
import { StateProvider } from "./context/MemeContext";
import AppWrapper from "./components/layout/AppWrapper";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import SiteRoutes from "./routes/SiteRoutes";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Header />
      <AppWrapper>
          <StateProvider>
            <SiteRoutes />
          </StateProvider>
      </AppWrapper>
      <Header />
    </Router>
  );
};

export default App;
