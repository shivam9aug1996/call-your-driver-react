import React, { useState } from "react";
import styles from "./Navbar.modules.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

import { Link, NavLink, Outlet } from "react-router-dom";

import { useEffect } from "react";

const MenuIcon1 = React.lazy(() => import("./MenuIcon1"));
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 1000);
  }, []);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <Link to="/" style={{ textDecoration: "none", display: "contents" }}>
          <>
            <div className="logo">
              {/* <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets10.lottiefiles.com/packages/lf20_kmonlfap.json"
                style={{ width: "50px", height: "50px" }}
              ></lottie-player> */}
              <h2>
                <span>C</span>all&nbsp;
                <span>Y</span>our&nbsp;
                <span>D</span>river
              </h2>
            </div>
          </>
        </Link>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink
                className="nav_link"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#a84891", textDecoration: "none" }
                    : { textDecoration: "none" }
                }
                onClick={() => setShowMediaIcons(false)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav_link"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#a84891", textDecoration: "none" }
                    : { textDecoration: "none" }
                }
                onClick={() => setShowMediaIcons(false)}
                to="/about"
              >
                about
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li> */}
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                {/* <FaFacebookSquare className="facebook" /> */}
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa"
              >
                {/* <FaInstagramSquare className="instagram" /> */}
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                {/* <FaYoutubeSquare className="youtube" /> */}
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              {display ? (
                <React.Suspense fallback={<div></div>}>
                  <MenuIcon1 />
                </React.Suspense>
              ) : null}

              {/* <GiHamburgerMenu style={{ color: "white" }} /> */}
            </div>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
      {/* <Outlet /> */}
    </>
  );
};

export default Navbar;
