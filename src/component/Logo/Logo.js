import React from 'react';
import { Link } from "react-router-dom";



import logo from "./../assets/globuzz_logo.svg";
import logoFoot from "./../assets/globuzzer_logo.svg";



const Logo = () => {
    return (
        <div>
            {/* ask about how to use the link for the logo */}
        <Link to="https://globuzzer.com/">
          <img src={logo} className="navbar-logo" alt="logo-desktop" />
        </Link>
      </div>
    );
}
export const LogoFooter = () => {
    return (
      <div>
        {/* ask about how to use the link for the logo */}
        <Link to="https://globuzzer.com/">
          <img src={logoFoot} className="footer-logo" alt="logo-footer" />
        </Link>
      </div>
    );
}

export default Logo;
