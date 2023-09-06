import React from "react";
import MainContent from "../components/layout/MainContent";
import UploadImage from "../components/Meme/UploadImage";
import TextImage from "../components/Meme/TextImage";
import GenerateImage from "../components/Meme/GenerateImage";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Header from "../components/layout/Header";

const Meme = () => {
  return (
    <>
      <Header />
      <MainContent>
        <UploadImage />
        <TextImage />
      </MainContent>

      <GenerateImage />
    </>
  );
};

export default Meme;
