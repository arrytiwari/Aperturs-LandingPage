import { navLink } from "@/constants/constant";
import { useState } from "react";
import {logo, menu, closeMenu} from "../assets"


export const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false); 

  return (
    <nav className="w-full flex py-6 px-10 justify-between items-center navbar">
      <img src={logo.src} alt="hoobank" className="w-[60px] h-[60px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLink.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLink.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>


      {/* For Mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? closeMenu.src : menu.src}
          alt="menu-img"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLink.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLink.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
