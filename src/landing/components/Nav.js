import React from "react";

//import icons
import { BiHomeAlt, BiUser, BiBriefcase } from "react-icons/bi";
import { BsClipboardData, BsChatSquare, BsTools } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";

//link
import { Link } from "react-scroll";
import * as router from "react-router-dom";
import { useAuthStore } from "../../hooks";

export const Nav = () => {
  const { status } = useAuthStore();

  return (
    <nav className="fixed bottom-2 lg:botton-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full bg-black/20 h-[96px] backdrop-blur-2x1
        rounded-full max-w-[460px] mx-auto px-5 flex justify-between
        items-center text-2x1 text-white/50"
        >
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="portafolio"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiBriefcase />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsTools />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquare />
          </Link>
          {status === "authenticated" ? (
            <router.Link
              to="dashboard"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            >
              <AiOutlineDashboard />
            </router.Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
};
