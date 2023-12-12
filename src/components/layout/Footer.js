import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import styled from "styled-components";
import bg from "../../assets/images/bg2.jpg";

const StyledFooter = styled.header`
  width: 100%;
  background-image: url("${bg}");
  background-size: 100%;
  display: flex;
  box-shadow: 0 1px 5px 5px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: #fff;
`;

const StyledLink = styled.a`
  color: #fff;
`;

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <StyledLink
        href="https://www.davidebalice.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.davidebalice.dev
      </StyledLink>
    </StyledFooter>
  );
};

export default Footer;
