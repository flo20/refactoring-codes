import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import menu from "./menu.module.css";

function Menu() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [smallNav, setSmallNav] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", checkScreen);
    window.addEventListener("scroll", checkScroll);
    checkScreen();

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const checkScreen = () => {
    window.innerWidth <= 600 ? setSmallScreen(true) : setSmallScreen(false);
  };

  const checkScroll = () => {
    window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
  };

  const navStyle = () => {
    if (sticky) {
      return {
        position: "fixed",
        width: "100%",
        background: "rgba(0, 0, 0, 0.3)",
      };
    }
  };

  return (
    <nav className={menu.container} style={navStyle()}>
      <ul className={menu.left}>
        <li>
          <Link className={menu.link}>
            {smallScreen ? (
              <div
                className={menu.menuSmall}
                onClick={() => setSmallNav(!smallNav)}
              >
                <IconContext.Provider
                  value={{
                    style: { verticalAlign: "middle" },
                    className: menu.icon,
                  }}
                >
                  <FaBars />
                </IconContext.Provider>

                {smallNav && (
                  <nav>
                    <ul>
                      <li>Beans</li>
                      <li>Fufu</li>
                      <li>Banku</li>
                    </ul>
                  </nav>
                )}
              </div>
            ) : (
              <IconContext.Provider
                value={{
                  style: { verticalAlign: "middle" },
                  className: menu.icon,
                }}
              >
                <AiFillHome />
              </IconContext.Provider>
            )}
          </Link>
        </li>
      </ul>

      <ul className={menu.right}>
        <li>
          <Link className={menu.link}>Florence</Link>
        </li>

        <li>
          <Link className={menu.link}>Valentine</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
