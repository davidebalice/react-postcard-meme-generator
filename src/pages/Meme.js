import React, { useContext, useState } from "react";
import MainContent from "../components/layout/MainContent";
import MameImage from "../components/Meme/Image";
import Editor from "../components/Meme/Editor";
import Wrapper from "../components/Meme/Editor/Wrapper";
import Preset from "../components/Meme/Image/Preset";
import ButtonUpload from "../components/Meme/Image/ButtonUpload";
import MemeGenerated from "../components/Meme/GenerateImage/MemeGenerated";
import {GenerateImage} from "../components/Meme/GenerateImage";
import {GenerateButton} from "../components/Meme/GenerateImage/GenerateButton";
import { MemeContext } from "../context/MemeContext";
import { RxText } from "react-icons/rx";
import { BiImage } from "react-icons/bi";
import { MdCloudUpload } from "react-icons/md";
import styled from "styled-components";
import { toPng } from "html-to-image";

const Meme = () => {
  const meme = useContext(MemeContext);
  const [tab, setTab] = useState("text");

  const StyledButtonContainer = styled.section`
    display: flex;
    margin-bottom: 0px;
    gap: 10px;
  `;

  const StyledButton = styled.button`
    display: flex;
    min-width: 150px;
    align-items: center;
    gap: 10px;
    cursor:pointer;
    padding: 12px;
    font-size:14px;
    background: #f1f1f1;
    border: 1px solid #ddd;
    position: relative;
    &&:hover {
      background: #d1d1d1;
    }
  `;

  const handleLocalImage = (e) => {
    const img = e.target.files[0];
    const newImage = {
      name: img.name,
      size: img.size,
      path: URL.createObjectURL(img),
    };
    meme.dispatch({ type: "IMAGE_SELECTED", payload: newImage });
  };

  const [image, setImage] = useState(null);

  const generateMeme = () => {
    toPng(document.getElementById("active-image"))
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        img.crossOrigin = "anonymous";
        setImage(img.src);
      })
      .catch(function (error) {
        console.error("We have a problem:", error);
      });
  };

  const resetMeme = () => {
    meme.dispatch({ type: "RESET_MEME" });
  };

  const closeMeme = () => {
    setImage(null);
  };

  let memeImage;
  if (image) {
    memeImage = <MemeGenerated path={image} close={closeMeme} />;
  }

  return (
    <>
    {memeImage}
      <MainContent
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="500"
      >
        <MameImage />
        <Wrapper className={meme.state.imageSelected ? "active" : ""}>
          <StyledButtonContainer>
            <StyledButton onClick={() => setTab("text")}>
              {" "}
              <RxText size={18}/> Editor
            </StyledButton>
            <StyledButton onClick={() => setTab("preset")}>
              {" "}
              <BiImage size={19}/>
              Preset
            </StyledButton>
            <StyledButton>
              <ButtonUpload onChange={handleLocalImage} /> 
              <MdCloudUpload size={18} />
              Upload photo
            </StyledButton>
            <GenerateButton generateMeme={generateMeme}/>
          </StyledButtonContainer>
          {tab === "text" ? <Editor /> : <Preset />}
        </Wrapper>
      </MainContent>

      <GenerateImage generateMeme={generateMeme} resetMeme={resetMeme}/>
    </>
  );
};

export default Meme;