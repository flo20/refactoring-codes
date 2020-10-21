import React from "react";
import { Link } from "react-router-dom";
import footer from "./../Footer/Footer.module.css";
import { LogoFooter } from "./../Logo/Logo";

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className={footer.container}>
      <footer className={footer.wrapper}>
        <div className={footer.wraps}>
          <div className={footer.first}>
            <LogoFooter />
            <ul className={footer.blocks}>
              <Link
                to="https://www.google.com/maps/place/Back%C3%A4ngsv%C3%A4gen+24,+192+73+Sollentuna,+Sweden/@59.4576337,17.8907952,17z/data=!3m1!4b1!4m5!3m4!1s0x465f98b09703d6db:0x75988cff7b409cd4!8m2!3d59.4576337!4d17.8929839"
                className={footer.links}
              >
                <li>
                  Backängsvägen 24 <br />
                  192 73 Sollentuna, Sweden
                </li>
              </Link>
              <li>+46 73 555 5 134</li>
              <Link to="mailto:info@globuzzer.com" className={footer.links}>
                <li>info@globuzzer.com</li>
              </Link>
              <li>© 2020 Globuzzer. All rights reserved</li>
            </ul>
          </div>
          <div className={footer.second}>
            <ul>
              <Link to="https://globuzzer.com/" className={footer.links}>
                <li>Destinations</li>
              </Link>
              <Link to="https://globuzzer.com/" className={footer.links}>
                <li>Articles</li>
              </Link>
              <Link to="https://globuzzer.com/" className={footer.links}>
                <li>Services</li>
              </Link>
            </ul>
          </div>
          <div className={footer.third}>
            <ul>
              <Link
                to="https://www.mightynetworks.com/terms-of-use"
                className={footer.links}
              >
                <li>
                  Terms & Conditions <br />
                  Privacy Policy
                </li>
              </Link>
            </ul>
          </div>
          <div className={footer.fourth}>
            <h4>FOLLOW US</h4>
            <div>
              <IconContext.Provider
                value={{
                  style: { color: "white" },
                }}
              >
                <FaFacebook />
                <AiFillTwitterCircle />
                <FaPinterest />
              </IconContext.Provider>
            </div>
            <div>
              <IconContext.Provider
                value={{
                  style: { color: "white" },
                }}
              >
                <AiFillYoutube />
                <SiLinkedin />
                <AiOutlineInstagram />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
