import React from "react";
//images
import Logo from "../../assets/component-2.png";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a>
            <img src={Logo} alt="" />
          </a>

          <Link to="contact" smooth={true} spy={true}>
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
