import React, { useState, useEffect } from "react";
import "./Navbar.css";

import logo from "./../assets/globuzz_logo.svg";
import logoMobile from "./../assets/globe_logo.svg";

const Navbar = () => {
  //state for navbar hamburger toggle
  const [click, setClick] = useState(false);
  // handle navbar hamburger toggle
  const handleClick = () => setClick(!click);

  // creating sticky header --start
  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      const mobileIsTop = window.scrollY >= 20;
      const isTop = window.scrollY >= 60;
      const nav = document.getElementById("myHeader");
      const butt = document.getElementById("sticky_nav");
      const buttMobile = document.getElementById("sticky_nav_mobile");
      if (isTop) {
        nav.classList.add("sticky");
        butt.classList.add("sticky_nav");
        butt.classList.add("get");
        buttMobile.classList.add("sticky_nav");
        buttMobile.classList.add("get");
      } else {
        nav.classList.remove("sticky");
        butt.classList.remove("sticky_nav");
        buttMobile.classList.remove("sticky_nav");
      }
      if (mobileIsTop) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div>
      <nav className="navbar" id="myHeader">
        <a href="https://globuzzer.com/">
          <img src={logo} className="navbar-logo" alt="logo-desktop" />
        </a>

        {/* Mobile logo --start*/}
        <div>
          <a href="https://globuzzer.com/">
            <img
              src={logoMobile}
              className="navbar-logo-mobile"
              alt="logo-mobile"
            />
          </a>
        </div>
        {/* Mobile logo --end*/}

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu" : "nav-menu"}>
          <li className="nav-item">
            <i
              className="fa fa-map-marker mobile-icons"
              aria-hidden="true"
              style={{ padding: "4px" }}
            ></i>
            <a href="#testimonials">Testimonials</a>
          </li>

          <li className="nav-item">
            <i
              className="fa fa-question-circle mobile-icons"
              style={{ padding: "4px" }}
            ></i>
            <a href="#contact">Contact</a>
          </li>

          <li className="nav-item" id="sticky_nav">
            <button className="nav_links  get">Get started</button>
          </li>
        </ul>
        {/* Mobile version */}
        <ul>
          <li className="mobile_started_button" id="sticky_nav_mobile">
            <button className="nav_links  get">Get started</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
