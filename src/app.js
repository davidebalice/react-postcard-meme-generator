import React, { useEffect } from "react";
import { MemeProvider } from "./context/MemeContext";
import AppWrapper from "./components/layout/AppWrapper";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";
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
        <MemeProvider>
          <SiteRoutes />
        </MemeProvider>
      </AppWrapper>
      <Footer />
    </Router>
  );
};

export default App;
