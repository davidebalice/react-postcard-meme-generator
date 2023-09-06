import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "../components/global/ScrollToTop";
import Home from "../pages/Home";
import Meme from "../pages/Meme";
import Postcard from "../pages/Postcard";

const SiteRoutes = () => {
  const location = useLocation();

  return (
    <ScrollToTop>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/meme" element={<Meme />} />
        <Route path="/postcard" element={<Postcard />} />
      </Routes>
    </ScrollToTop>
  );
};

export default SiteRoutes;
