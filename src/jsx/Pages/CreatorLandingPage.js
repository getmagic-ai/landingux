import React from "react";
import { Influencers } from "../Components/SubComponents/Influencers/Influencers";
import insta from "./../../assets/insta.png";
import fb from "./../../assets/fb.png";
import tiktok from "./../../assets/tiktok.png";
import snap from "./../../assets/snap.png";
import twit from "./../../assets/twit.png";
import { Container } from "@mui/material";
import { CreatorHeader } from "../Components/CreatorPageComponents/CreatorHeader/CreatorHeader";
import { Info } from "../Components/CreatorPageComponents/Info/Info";
import { SignupToday } from "../Components/CreatorPageComponents/SignupToday/SignupToday";
import { Pricing } from "../Components/SubComponents/Pricing/Pricing";
export const CreatorLandingPage = () => {
  return (
    <div>
      <CreatorHeader />
      <Info />
      <div
        className="flex items-center justify-center"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <Container maxWidth={"xl"}>
          <div className="flex items-center justify-evenly py-14 md:px-20 flex-wrap gap-y-8 gap-x-5">
            <img className="w-14 sm:w-16 lg:w-20" src={insta} alt="insta" />
            <img className="w-14 sm:w-16 lg:w-20" src={fb} alt="fb" />
            <img className="w-14 sm:w-16 lg:w-20" src={tiktok} alt="tiktok" />
            <img className="w-14 sm:w-16 lg:w-20" src={snap} alt="snap" />
            <img className="w-14 sm:w-16 lg:w-20" src={twit} alt="twit" />
          </div>
        </Container>
      </div>
      <div className="py-14">
        <Container maxWidth={"xl"}>
          <h1
            className="text-2xl sm:text-4xl text-center"
            style={{
              fontFamily: "Abel",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "50px",
              textTransform: "uppercase"
            }}
          >
            Sign up here and watch for our email!
          </h1>
          <div className="flex justify-center mt-8">
            <div className="border-2 border-gray_400 rounded-2xl p-1 w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 flex items-center justify-between bg-white">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-40 sm:w-60 px-3 sm:px-5 py-3 text-xs tracking-widest"
                style={{ background: "transparent", outline: "none" }}
              />
              <button
                className={`duration-500 py-3 px-4 sm:px-5 rounded-2xl text-sm text-white flex items-center gap-x-3 `}
                style={{
                  backgroundColor: "rgba(31, 62, 102, 1)",
                  fontWeight: "400"
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </Container>
      </div>
      <SignupToday />
      <Influencers showAll={false} />
      <Pricing />
    </div>
  );
};
