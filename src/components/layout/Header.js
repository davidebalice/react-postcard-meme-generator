import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a
            href="/"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            hhrrthrt
          </a>

          <nav id="navmenu">
            <ul>
              <li>
                <NavLink to="/" className="nav-link smooth-scroll">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/meme" className="nav-link smooth-scroll">
                  Meme
                </NavLink>
              </li>
              <li>
                <NavLink to="/postcard" className="nav-link smooth-scroll">
                  Postcart
                </NavLink>
              </li>
            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
