import React from "react";
import { StateProvider } from "./context/MemeContext";
import AppWrapper from "./components/layout/AppWrapper";
import Container from "./components/layout/Container";
import MainContent from "./components/layout/MainContent";
import Title from "./components/global/Title";
import Icon from "./components/global/Icon";

import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import SiteRoutes from "./routes/SiteRoutes";

const App = () => {
  return (
    <AppWrapper>
      <Container>
        <StateProvider>
          <Router>
            <SiteRoutes />
          </Router>
        </StateProvider>
      </Container>
    </AppWrapper>
  );
};

export default App;
