import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import styled, { css } from 'styled-components';
import bg from "../../assets/images/bg2.jpg";
import logo from "../../assets/images/logoWhite.png";

const StyledHeader = styled.header`
    width:100%; 
    background-image: url('${bg}');
    background-size:100%;
    display:flex;
    box-shadow: 0 1px 5px 5px rgba(0, 0, 0, 0.3);
    align-items:center;
    justify-content:space-between;
    padding:16px;
    color:#fff;
`;

const StyledLogo = styled.img`
    max-width:150px;
`;

const StyledUl = styled.ul`
    display:flex;
    list-style: none;
    gap:26px;
    color:#fff;
    text-decoration:none;
`;

const StyledNavlink = styled(NavLink)`
    color:#fff;
`;

const Header = () => {
  return (
    <StyledHeader id="header">
        <NavLink to="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
       <StyledLogo src={logo}/>
      </NavLink>

      <nav id="navmenu">
        <StyledUl>
          <li>
            <StyledNavlink to="/">
              Home
            </StyledNavlink>
          </li>
          <li>
            <StyledNavlink to="/meme">
              Meme
            </StyledNavlink>
          </li>
          <li>
            <StyledNavlink to="/postcard">
              Postcart
            </StyledNavlink>
          </li>
        </StyledUl>

        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <NavLink to="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
       <StyledLogo src={logo}/>
      </NavLink>
  </StyledHeader>
  );
};


export default Header;