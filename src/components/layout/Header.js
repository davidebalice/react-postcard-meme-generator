import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import styled from "styled-components";
import bg from "../../assets/images/bg2.jpg";
import logo from "../../assets/images/logoWhite.png";
import github from "../../assets/images/github2_white.png";

const StyledHeader = styled.header`
  width: 100%;
  background-image: url("${bg}");
  background-size: 100%;
  display: flex;
  box-shadow: 0 1px 5px 5px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  color: #fff;
`;

const StyledLogo = styled.img`
  max-width: 150px;
`;

const Header = () => {
  return (
    <StyledHeader id="header">
      <NavLink
        to="/"
        className="logo d-flex align-items-center me-auto me-xl-0"
      >
        <StyledLogo src={logo} />
      </NavLink>

      <a
        href="https://github.com/davidebalice/react-postcard-meme-generator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledLogo src={github} />
      </a>
    </StyledHeader>
  );
};

export default Header;
