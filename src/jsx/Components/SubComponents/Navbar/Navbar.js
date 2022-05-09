import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import lock from "./../../../../assets/lock.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link as MyLink } from "react-scroll";
export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="py-3 px-4 sm:px-10 xl:px-4">
      <div className="flex items-center justify-between xl:justify-around">
        <button
          className="xl:hidden block"
          onClick={() => {
            setShowNav(true);
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: "16px" }}
            className="text-gray_400"
          />
        </button>
        <div className="border-3 border-gray_400 rounded-full py-1 px-5 hidden lg:flex items-center gap-x-3">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: "16px" }}
            className="text-gray_400"
          />
          <input
            type="text"
            placeholder="Search for creators, trends and sounds"
            className="w-52 sm:w-72 py-3 text-xs"
            style={{outline: "none"}}
          />
        </div>
        <div className="flex items-center">
          <ul className="hidden xl:flex items-center gap-x-5 mr-16">
            <li>
            <MyLink
                smooth={true}
                duration={500}
                className="text-sm font-semibold cursor-pointer"
                to="how_it_works"
              >
                HOW IT WORKS
              </MyLink>
              
            </li>
            <li>
            <MyLink
                smooth={true}
                duration={1000}
                className="text-sm font-semibold cursor-pointer"
                to="pricing"
              >
                PRICING
              </MyLink>
            </li>
            <li>
              <MyLink
                smooth={true}
                duration={1000}
                className="text-sm font-semibold cursor-pointer"
                to="creator_live"
              >
                CREATOR LIVE!
              </MyLink>
            </li>
            <li>
              <MyLink
                smooth={true}
                duration={1000}
                className="text-sm font-semibold cursor-pointer"
                to="become_a_creator"
              >
                BECOME A CREATOR
              </MyLink>
            </li>
          </ul>
          <div className="rounded-full switch-btn flex items-center overflow-hidden sm:mr-5">
            <NavLink
              to={"/brand"}
              className={` duration-500 text-sm`}
              style={{ padding: "5px 24px" }}
              activeStyle={{
                backgroundColor: "rgba(31, 62, 102, 1)",
                color: "white"
              }}
            >
              Brand
            </NavLink>
            <NavLink
              to={"creator"}
              className={`duration-500 text-sm`}
              style={{ padding: "5px 24px" }}
              activeStyle={{
                backgroundColor: "rgba(31, 62, 102, 1)",
                color: "white"
              }}
            >
              Creator
            </NavLink>
          </div>
          <button
            className={`active-btn duration-500 rounded-full text-sm hidden sm:flex items-center gap-x-3 `}
            style={{ padding: "6px 16px" }}
          >
            <img src={lock} alt="lock" className="w-4" />
            <span>LOGIN</span>
          </button>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#F7F2E4" }}
        className={`absolute left-0 right-0 w-full flex flex-col items-center justify-center z-10 py-10 duration-500 ${showNav
          ? "top-0"
          : "-top-full"}`}
      >
        <div className="flex justify-end w-full absolute right-5 top-5">
          <button
            onClick={() => {
              setShowNav(false);
            }}
          >
            <FontAwesomeIcon
              icon={faClose}
              style={{ fontSize: "24px" }}
              className="text-black"
            />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-y-10">
          <li>
            <a className="text-sm font-semibold cursor-pointer">HOW IT WORKS</a>
          </li>
          <li>
            <a className="text-sm font-semibold cursor-pointer">PRICING</a>
          </li>
          <li>
            <a className="text-sm font-semibold cursor-pointer">
              CREATOR LIVE!
            </a>
          </li>
          <li>
            <a className="text-sm font-semibold cursor-pointer">
              BECOME A CREATOR
            </a>
          </li>
        </ul>
        <button
          className={`active-btn duration-500 rounded-full text-sm mt-10 flex sm:hidden items-center gap-x-3 `}
          style={{ padding: "6px 16px" }}
        >
          <img src={lock} alt="lock" className="w-4" />
          <span>LOGIN</span>
        </button>
        <div className="border-3 border-gray_400 rounded-full py-1 mt-10 px-5 flex lg:hidden items-center gap-x-3">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: "16px" }}
            className="text-gray_400"
          />
          <input
            type="text"
            placeholder="Search for creators, trends and sounds"
            className="w-52 sm:w-72 py-3 text-xs"
            style={{ backgroundColor: "#F7F2E4" }}
          />
        </div>
      </div>
    </div>
  );
};
