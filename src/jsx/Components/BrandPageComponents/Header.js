import React, { useState } from "react";
import headerBg from "./../../../assets/headerBg.png";
import video_img from "./../../../assets/video_img.png";
import bag_video from "./../../../assets/bag_video.mp4";
import youTube_icon_play from "./../../../assets/youTube_icon_play.png";
import tiktok_play from "./../../../assets/tiktok_play.png";
import play_button from "./../../../assets/play_button.png";
import fashion from "./../../../assets/fashion.png";
import Polygon from "./../../../assets/Polygon.png";
import circle from "./../../../assets/circle.png";
import square from "./../../../assets/square.png";
import PolygonRight from "./../../../assets/PolygonRight.png";
import PolygonLeft from "./../../../assets/PolygonLeft.png";
import "./Header.css";
import Container from "@mui/material/Container";

export const Header = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div
      style={{ background: `url(${headerBg})` }}
      className="relative header-main"
    >
      <img
        src={circle}
        alt="circle"
        className="absolute top-12 right-1/3 mr-14 w-5 z-10"
      />

      <Container maxWidth={"xl"}>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-5 flex justify-center lg:justify-start relative">
            <img
              src={circle}
              alt="circle"
              className="absolute top-20 -left-8 w-5 z-0"
            />
            <img
              src={square}
              alt="square"
              className="absolute bottom-28 -left-4 w-5 z-0"
            />
            <div className="relative">
              {!showVideo &&
                <img
                  src={video_img}
                  alt="video_img"
                  className=""
                  style={{ width: "40rem", height: "45rem" }}
                />}
              {showVideo &&
                <div>
                  <video
                    src={bag_video}
                    style={{ width: "40rem", height: "40rem" }}
                    controls
                    autoPlay={true}
                    loop={true}
                  />
                </div>}
              <div className="flex flex-col gap-y-3 xl:gap-y-5 absolute top-16 xl:top-20 2xl:top-28">
                <div className="bg-white px-2 xl:px-4 py-2 rounded-lg flex items-center gap-x-2 xl:gap-x-4">
                  <img
                    src={youTube_icon_play}
                    alt="youTube_icon_play"
                    className="xl:w-12 w-8"
                  />
                  <span className="font-semibold text-xs xl:text-sm">
                    8.3M Subscribers
                  </span>
                </div>
                <div className="bg-white px-2 xl:px-4 py-2 rounded-lg flex items-center gap-x-2 xl:gap-x-4">
                  <img
                    src={tiktok_play}
                    alt="tiktok_play"
                    className="xl:w-12 w-8"
                  />
                  <span className="font-semibold text-xs xl:text-sm">
                    10 M Follower
                  </span>
                </div>
              </div>
              <img
                src={fashion}
                alt="fashion"
                className="fashion-img absolute w-40 lg:w-52 bottom-20 sm:bottom-24 md:bottom-14 lg:bottom-20 -right-0 lg:-right-4"
              />

              {!showVideo &&
                <img
                  onClick={() => {
                    setShowVideo(true);
                  }}
                  src={play_button}
                  alt="play_button"
                  className="play_button_img absolute w-24 bottom-10 sm:bottom-20 md:bottom-8 lg:bottom-14 xl:bottom-20 left-8 sm:left-20 md:left-10 lg:left-12 xl:left-16"
                />}
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 flex items-center justify-center lg:justify-start lg:pl-14 relative">
            <img
              src={Polygon}
              alt="Polygon"
              className="absolute top-32 left-6 w-5"
            />
            <img
              src={PolygonRight}
              alt="PolygonRight"
              className="absolute top-32 right-1/4 w-5"
            />
            <img
              src={PolygonLeft}
              alt="PolygonLeft"
              className="absolute bottom-20 right-1/3 w-5"
            />
            <img
              src={circle}
              alt="circle"
              className="absolute bottom-20 left-1/3 w-5 z-0"
            />
            <div className="flex flex-col items-start relative">
              <span className="font-semibold" style={{ color: "#FF5733" }}>
                with us
              </span>
              <h1
                className="text-2xl sm:text-3xl md:text-2xl lg:texl-3xl xl:text-4xl text-black font-bold mt-2"
                style={{ lineHeight: "55px" }}
              >
                your Brand Creates Moments—<br className="sm:block hidden" />{" "}
                Moments That Become <br className="sm:block hidden" />Experiences
                Enjoyed And Shared<br className="sm:block hidden" /> Around The
                Globe.
              </h1>
              <img
                src={square}
                alt="square"
                className="absolute bottom-16 right-24 w-5 z-0"
              />
              <div className="relative z-10 mt-14 border-2 border-gray_400 rounded-2xl p-1 w-full xl:w-3/4 flex items-center justify-between bg-white">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-40 sm:w-60 px-3 sm:px-5 py-3 text-xs tracking-widest"
                  style={{ background: "transparent", outline: "none" }}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    if (email) {
                      alert("We got you! Look for an email from our founder in your inbox!");
                    }
                  }}
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
          </div>
        </div>
      </Container>
    </div>
  );
};
