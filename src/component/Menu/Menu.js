import React, { useEffect, useState } from "react";
import menu from "./Menu.module.css";
import logo from "./../../assets/globuzz_logo.svg";
import logoSmall from "./../../assets/globe_logo.svg";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Menu = () => {
  const [sticky, setSticky] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", checkScreen);
    window.addEventListener("scroll", checkSticky);

    return () => {
      window.removeEventListener("scroll", checkSticky);
    };
  }, []);

  const checkSticky = () => {
    window.pageYOffset > 0 ? setSticky(true) : setSticky(false);
  };

  const checkScreen = () => {
    window.innerWidth <= 810 ? setSmallScreen(true) : setSmallScreen(false);
  };
  const navStyle = () => {
    if (sticky) {
      return {
        position: "fixed",
        top: "0",
        width: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        zIndex: "2",
      };
    }
  };

  return (
    <nav className={menu.container} style={navStyle()}>
      <ul className={menu.logo}>
        <li>
          {smallScreen ? (
            <IconContext.Provider value={<FaBars />} />
          ) : (
            <img src={logo} alt="logo" />
          )}
        </li>
      </ul>

      <ul className={menu.wrap}>
        <li className={menu.menuList} style={{ color: sticky && "#fff" }}>
          Testimonials
        </li>
        <li className={menu.menuList} style={{ color: sticky && "#fff" }}>
          Contact Us
        </li>
        <li
          className={menu.menuList}
          style={{ background: sticky && "#f24b6a", color: sticky && "#fff" }}
        >
          Get Started
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
