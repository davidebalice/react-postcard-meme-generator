import React, { useContext, useState } from "react";
import MainContent from "../components/layout/MainContent";
import Image from "../components/Meme/Image";
import Editor from "../components/Meme/Editor";
import Wrapper from "../components/Meme/Editor/Wrapper";
import Preset from "../components/Meme/Image/Preset";
import ButtonUpload from "../components/Meme/Image/ButtonUpload";
import GenerateImage from "../components/Meme/GenerateImage";
import { MemeContext } from "../context/MemeContext";
import { RxText } from "react-icons/rx";
import { BiImage } from "react-icons/bi";
import styled from "styled-components";

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
    padding: 12px;
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

  return (
    <>
      <MainContent
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="500"
      >
        <Image />
        <Wrapper className={meme.state.imageSelected ? "active" : ""}>
          <StyledButtonContainer>
            <StyledButton onClick={() => setTab("text")}>
              {" "}
              <RxText /> Text
            </StyledButton>
            <StyledButton onClick={() => setTab("preset")}>
              {" "}
              <BiImage />
              Preset
            </StyledButton>
            <StyledButton>
              <ButtonUpload onChange={handleLocalImage} /> <BiImage />
              Preset
            </StyledButton>
          </StyledButtonContainer>
          {tab === "text" ? <Editor /> : <Preset />}
        </Wrapper>
      </MainContent>

      <GenerateImage />
    </>
  );
};

export default Meme;
