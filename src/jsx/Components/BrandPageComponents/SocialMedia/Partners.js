import React from "react";
import insta from "./../../../../assets/insta.png";
import fb from "./../../../../assets/fb.png";
import tiktok from "./../../../../assets/tiktok.png";
import snap from "./../../../../assets/snap.png";
import twit from "./../../../../assets/twit.png";
import { Container } from "@mui/material";
export const Partners = () => {
  return (
    <div>
      <div className="w-full flex justify-center pt-14 pb-3">
        <h1
          className="text-4xl text-center"
          style={{
            fontFamily: "Abel",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "50px",
            display: "flex",
            alignItems: "center",
            textTransform: "uppercase"
          }}
        >
          Our Partners
        </h1>
      </div>
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
    </div>
  );
};
