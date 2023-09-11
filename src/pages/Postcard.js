import React, { useContext } from "react";
import MainContent from "../components/layout/MainContent";
import UploadImage from "../components/Meme/UploadImage";
import TextImage from "../components/Meme/TextImage";
import GenerateImage from "../components/Meme/GenerateImage";
import { MemeContext } from "../context/MemeContext";

const Postcard = () => {
  return (
    <>
      <MainContent>
        <UploadImage />
        <TextImage />
      </MainContent>

      <GenerateImage />
    </>
  );
};

export default Postcard;
