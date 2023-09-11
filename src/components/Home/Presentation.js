import React from "react";
import styled from "styled-components";
import react from "../../assets/images/react.jpg";
import github from "../../assets/images/github2_white.png";

const StyledImg = styled.img`
  width: ${(props) => `${props.width}%`};
  max-width: 180px;
  margin-bottom: 20px;
`;

const StyledPresentation = styled.div`
  width: 100%;
  padding: 50px 50px;
  margin-bottom: 20px;
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  font-size: 20px;
  background: #2d78bf;
  display: inline-block;
  color: #fff;
`;

const StyledH1 = styled.h1`
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  display: inline-block;
`;

const Presentation = () => {
  return (
    <StyledPresentation>
      <StyledImg src={react} width={30} />
      <br />
      <StyledH1>Meme generator</StyledH1> and{" "}
      <StyledH1>Postcard generator</StyledH1>
      <br />
      developed in React and Styled Components
      <br />
      <br />
      View project on GitHub
      <br />
      <br />
      <StyledImg src={github} width={10} />
    </StyledPresentation>
  );
};

export default Presentation;
