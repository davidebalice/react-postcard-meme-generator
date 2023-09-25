import React, { useContext } from "react";
import MainContent from "../components/layout/MainContent";
import Image from "../components/Meme/Image";
import Editor from "../components/Meme/Editor";
import Wrapper from "../components/Meme/Editor/Wrapper";
import GenerateImage from "../components/Meme/GenerateImage";
import { MemeContext } from "../context/MemeContext";

const Postcard = () => {
  return (
    <>
      <MainContent>
        <Image />
        <Editor />
      </MainContent>

      <GenerateImage />
    </>
  );
};

export default Postcard;
