import React from "react";
import Container from "../components/layout/Container";
import Presentation from "../components/Home/Presentation";
import Card from "../components/Home/Card";
import CardContainer from "../components/Home/CardContainer";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import memeIcon from "../assets/images/meme.png";
import meme from "../assets/images/meme.jpg";
import postcard from "../assets/images/postcard.jpg";
import postcardIcon from "../assets/images/postcard.png";

const StyledNavLink = styled(NavLink)`
  margin-bottom: 1rem;
  width: 40%;
  text-decoration: none;

  @media (max-width: 768px) {
    color: black;
    width: 96%;
    margin: 0 auto;
    padding: 10px;
    margin-bottom: 30px;
  }
`;

const StyledImg = styled.img`
  width: 100% !important;
`;

const StyledIcon = styled.img`
  width: 26% !important;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
`;

const StyledContainerImg = styled.div`
  width: 96% !important;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 1px;
  border: 1px solid #999;
  background: #fff;
  position: relative;
  border-radius: 8px;
  padding: 0;
  box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const StyledText = styled.p`
  width: 80%;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-decoration: none;
  height: 150px;
  font-size: 14px;
`;

const StyledTitle = styled.p`
  width: 100%;
  height: 52px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-weight: bold;
  text-decoration: none;
  font-size: 19px;
  background: #2d78bf;
`;

const Home = () => {
  return (
    <>
      <Presentation />
      <Container>
        <CardContainer>
          <StyledNavLink to="/meme">
            <Card
              data-aos="flip-left"
              data-aos-delay="0"
              data-aos-duration="500"
            >
              <StyledContainerImg>
                <StyledIcon src={memeIcon} />
                <StyledImg src={meme} />
              </StyledContainerImg>
              <StyledText>
                Upload a photo or select one of the presets, manage the
                position, size and color of the texts, generate your meme
              </StyledText>
              <StyledTitle>Meme generator</StyledTitle>
            </Card>
          </StyledNavLink>
          <StyledNavLink to="/postcard">
            <Card
              data-aos="flip-left"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <StyledContainerImg>
                <StyledIcon src={postcardIcon} />
                <StyledImg src={postcard} />
              </StyledContainerImg>
              <StyledText>
                Upload your photo or choose one of the presets, manage the
                position, size and color of the texts both on the front and on
                the retro, generate your postcard
              </StyledText>
              <StyledTitle>Postcard generator</StyledTitle>
            </Card>
          </StyledNavLink>
        </CardContainer>
      </Container>
    </>
  );
};

export default Home;
