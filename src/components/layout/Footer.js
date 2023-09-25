import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import bg from "../../assets/images/bg2.jpg";
import logo from "../../assets/images/logoWhite.png";
import github from "../../assets/images/github2_white.png";

const StyledFooter = styled.header`
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

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 26px;
  color: #fff;
  text-decoration: none;
`;

const StyledNavlink = styled(NavLink)`
  color: #fff;
`;

const Footer = () => {
  return (
    <StyledFooter id="footer">
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
    </StyledFooter>
  );
};

export default Footer;
