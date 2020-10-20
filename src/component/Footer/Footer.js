import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="foot_container">
      <a href="https://globuzzer.com/">
        <img
          src="/assets/globuzzer_logo.svg"
          alt="logo2"
          className="logo2"
          style={{ paddingLeft: "7.5rem", paddingTop: "2rem" }}
        />
      </a>
      <div className="footer">
        <div id="foot_links">
          <a
            href="https://www.google.com/maps/place/Back%C3%A4ngsv%C3%A4gen+24,+192+73+Sollentuna,+Sweden/@59.4576337,17.8907952,17z/data=!3m1!4b1!4m5!3m4!1s0x465f98b09703d6db:0x75988cff7b409cd4!8m2!3d59.4576337!4d17.8929839"
            id="foot_links"
          >
            <br />
            <p>Backängsvägen 24</p>
            <p id="foot_links">192 73 Sollentuna, Sweden</p>
          </a>

          <p>+46 73 555 5 134</p>
          <a href="mailto:info@globuzzer.com" id="foot_links">
            info@globuzzer.com
          </a>
        </div>
        <div className="foot2">
          <a href="https://globuzzer.com/" id="foot_links">
            Destinations
          </a>
          <br />
          <br />
          <a href="https://globuzzer.com/" id="foot_links">
            Articles
          </a>
          <br />
          <br />
          <a href="https://globuzzer.com/" id="foot_links">
            Services
          </a>
        </div>
        <div className="terms">
          <a href="https://www.mightynetworks.com/terms-of-use">
            Terms & Conditions
          </a>
          <br />
          <a href="https://www.mightynetworks.com/privacy-policy">
            Privacy Policy
          </a>
        </div>
        <div>
          <p className="follow">FOLLOW US</p>

          <div className="social_icon_mobile">
            <div>
              <a href="https://www.facebook.com/Globuzzer/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ fontSize: "2.4rem", color: "#E4E4E4" }}
                  className="icons1"
                />
              </a>

              <a href="https://twitter.com/globuzzer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ fontSize: "2.4rem", color: "#E4E4E4" }}
                  className="icons1"
                />
              </a>
              <a href="https://www.pinterest.se/globuzzer/_created/">
                <FontAwesomeIcon
                  icon={faPinterest}
                  style={{ fontSize: "2.4rem", color: "#E4E4E4" }}
                  className="icons1"
                />
              </a>
            </div>

            <div>
              <a href="https://www.youtube.com/channel/UC4u8N-QBDMWG6OqzSni8clw">
                <FontAwesomeIcon
                  icon="play-circle"
                  style={{ fontSize: "2.4rem", color: "#E4E4E4" }}
                  className="icons1"
                />
              </a>

              <a href="https://www.linkedin.com/company/globuzzer/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: "2.4rem", color: "#E4E4E4" }}
                  className="icons1"
                />
              </a>

              <a href="https://www.instagram.com/globuzzer/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    fontSize: "2.4rem",
                    color: "#E4E4E4",
                    marginLeft: "0.6rem",
                  }}
                  className="icons1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="rights">© 2020 Globuzzer. All rights reserved </p>
    </div>
  );
};

export default Footer;
