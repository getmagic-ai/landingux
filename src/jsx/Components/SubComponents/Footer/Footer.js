import { Container } from "@mui/material";
import React from "react";
import footerImg1 from "./../../../../assets/footerImg1.png";
import angleImg from "./../../../../assets/angleImg.png";
import youtube_icon from "./../../../../assets/youtube_icon.png";
import tiktok_icon from "./../../../../assets/tiktok_icon.png";
import linkedIn_icon from "./../../../../assets/linkedIn_icon.png";
import fb_icon from "./../../../../assets/fb_icon.png";
import twitt_icon from "./../../../../assets/twitt_icon.png";
import insta_icon from "./../../../../assets/insta_icon.png";
export const Footer = () => {
  return (
    <div id="become_a_creator">
      <div
        className="relative"
        style={{
          background: "linear-gradient(98.5deg, #2C2B2B 0%, #2C2B2B 56.5%)"
        }}
      >
        <img
          src={footerImg1}
          alt="footerImg1"
          className="absolute right-0 top-0 object-cover opacity-50 xl:opacity-100 w-full lg:w-4/5 xl:w-4/6 h-80"
        />
        <Container maxWidth={"xl"}>
          <div className=" flex flex-col items-start justify-center h-80 sm:px-20 relative z-10">
            <h1 className="text-xl text-white font-semibold">
              Sign up for the Fashion & Beauty<br /> Newsletter
            </h1>
            <div
              className="rounded-xl flex w-full sm:w-auto overflow-hidden items-center justify-between mt-14 h-10"
              style={{
                backgroundColor: "#FE3C47",
                padding: "2px",
                overflow: "hidden"
              }}
            >
              <input
                placeholder="Enter your mail here"
                type="text"
                className="px-4 w-3/5 sm:w-60 text-xs h-full rounded-tl-xl rounded-bl-xl text-white"
                style={{
                  background:
                    "linear-gradient(98.5deg, #2C2B2B 0%, #2C2B2B 56.5%)",
                  outline: "none"
                }}
              />
              <button
                style={{ backgroundColor: "#FE3C47" }}
                className="text-sm text-white px-4 border-0 outline-none h-full block"
              >
                Get Started
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-14 pb-5 px-10 sm:px-10 md:px-20">
        <img src={angleImg} alt="angleImg" className="lg:hidden block w-40 mb-10" />
       <Container maxWidth={"xl"}>
       <div className="flex flex-col sm:flex-row items-start gap-10 justify-between">
          <div className="flex flex-col gap-y-10 sm:gap-y-20">
            <h1 className="text-lg font-semibold">
              Cheers to a more <br />
              imaginative world.
            </h1>
            <div className="flex flex-col gap-y-1">
              <span className="text-xs">
                100% background check, book hassle free
              </span>
              <ul className="flex items-center gap-x-8">
                <li>
                  <a className="text-xs text-black">Help Center</a>
                </li>
                <li>
                  <a className="text-xs text-black">Terms</a>
                </li>
                <li>
                  <a className="text-xs text-black">Privacy</a>
                </li>
                <li>
                  <a className="text-xs text-black">©2022</a>
                </li>
              </ul>
            </div>
          </div>
          <img src={angleImg} alt="angleImg" className="lg:block hidden w-40" />
          <div className="flex flex-col gap-y-10 sm:gap-y-20">
            <div className="flex flex-col gap-y-1">
              <span className="text-xs ">+1 (243) 000-00-00</span>
              <span className="text-xs ">info@company.com</span>
            </div>
            <div>
              <span className="text-xs ">Connect with us on</span>
              <div className="flex items-center gap-x-3 mt-2">
                <img className="w-5" src={youtube_icon} alt="youtube_icon" />
                <img className="w-5" src={tiktok_icon} alt="tiktok_icon" />
                <img className="w-5" src={linkedIn_icon} alt="linkedIn_icon" />
                <img className="w-5" src={fb_icon} alt="fb_icon" />
                <img className="w-5" src={twitt_icon} alt="twitt_icon" />
                <img className="w-5" src={insta_icon} alt="insta_icon" />
              </div>
            </div>
          </div>
        </div>
       </Container>
      </div>
    </div>
  );
};
