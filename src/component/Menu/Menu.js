import React, { Fragment, useEffect, useState } from "react";
import menu from "./Menu.module.css";
import logo from "./../../assets/globuzz_logo.svg";
import logoSmall from "./../../assets/globe_logo.svg";
import { FaBars } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Icons from "./../../Measurements/Icons/Icons";

const Menu = () => {
  const [sticky, setSticky] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

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
    <Fragment>
      <nav className={menu.container} style={navStyle()}>
        <ul className={`${menu.menuItems} ${menu.menuLeft}`}>
          <li className={menu.menuList}>
            {smallScreen ? (
              <span onClick={() => setSideMenu(true)}>
                <Icons label={<FaBars />} myClass={menu.hamburger} />
              </span>
            ) : (
              <img src={logo} alt="logo" />
            )}
          </li>
        </ul>
        {smallScreen && (
          <ul className={menu.menuItems}>
            <li>
              <img src={logoSmall} alt="logoSmall" />
            </li>
          </ul>
        )}

        <ul className={menu.menuItems}>
          {!smallScreen && (
            <Fragment>
              <li className={menu.menuList} style={{ color: sticky && "#fff" }}>
                Testimonials
              </li>
              <li className={menu.menuList} style={{ color: sticky && "#fff" }}>
                Contact Us
              </li>
            </Fragment>
          )}
          <li
            className={menu.menuList}
            style={{ background: sticky && "#f24b6a", color: sticky && "#fff" }}
          >
            Get Started
          </li>
        </ul>
      </nav>
      {/*  Side Bar Menu */}
      <nav className={menu.sideNav} style={{ left: sideMenu && "0px" }}>
        <ul className={`${menu.sideItems} ${menu.sideLeft}`}>
          <li className={menu.sideList}>
            <span>globuzzer</span>
            <span onClick={() => setSideMenu(false)}>
              <Icons label={<RiCloseLine />} myClass={menu.close} />
            </span>
          </li>
          <li className={menu.sideList}>
            <span>
              <Icons label={<FiMapPin />} />
            </span>
            <span>Testimonials</span>
          </li>
          <li className={menu.sideList}>
            <span>
              <Icons label={<AiOutlineQuestionCircle />} />
            </span>
            <span>Contact us</span>
          </li>
        </ul>

        <ul className={`${menu.sideItems} ${menu.sideRight}`}>
          <li
            className={menu.sideList}
            style={{ background: sticky && "#f24b6a" }}
          >
            Get Started
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Menu;
