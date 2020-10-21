import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import WhyGlobuzzer from "../WhyGlobuzzer/WhyGlobuzzer";
import menu from "./NavbarR.module.css";

const NavbarR = () => {
  return (
    <nav className={menu.container}>
      <Logo />
      <ul className={menu.items}>
        <li>
          <Link to={<WhyGlobuzzer />} className={menu.link}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to={<WhyGlobuzzer />} className={menu.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarR;
