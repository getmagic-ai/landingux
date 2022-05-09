import { Container } from "@mui/material";
import React from "react";
import influencer_card1 from "./../../../../assets/influencer_card1.png";
import influencer_card2 from "./../../../../assets/influencer_card2.png";
import influencer_card3 from "./../../../../assets/influencer_card3.png";
import influencer_card4 from "./../../../../assets/influencer_card4.png";
import "./Influencers.css";
export const Influencers = props => {
  return (
    <Container maxWidth="xl" id="creator_live">
      <div className="influencers_main">
        <div className="flex flex-col-reverse items-center md:items-start md:grid md:grid-cols-12">
          <div className="col-span-12 md:col-span-5">
            <img src={influencer_card1} alt="influencer_card1" />
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="px-5 py-20">
              <h1
                className="text-3xl sm:text-4xl xl:text-5xl"
                style={{ lineHeight: "60px", fontFamily: "Abel" }}
              >
                CREATIVE CAPITAL THAT CHECKS OUT
              </h1>
              <p className="mt-8 text-xl  xl:text-2xl">
                With 6+ years of first-party data from collaborations between
                the world’s most culturally credible creators and biggest
                advertisers, Takumi group arms brands with unrivaled insight and
                understanding to power influencer marketing and attribute actual
                business outcomes.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-7">
            <div className="px-5 py-20">
              <h1
                className="text-3xl sm:text-4xl xl:text-5xl"
                style={{ lineHeight: "60px", fontFamily: "Abel" }}
              >
                TRACK SALES LIFT AT CREATOR LEVEL
              </h1>
              <p className="mt-8 text-xl  xl:text-2xl">
                With 6+ years of first-party data from collaborations between
                the world’s most culturally credible creators and biggest
                advertisers, Takumi group arms brands with unrivaled insight and
                understanding to power influencer marketing and attribute actual
                business outcomes.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex justify-center md:justify-start">
            <img src={influencer_card2} alt="influencer_card2" />
          </div>
        </div>
        {props.showAll &&
          <div className="flex flex-col-reverse items-center md:items-start md:grid md:grid-cols-12">
            <div className="col-span-12 md:col-span-5">
              <img src={influencer_card3} alt="influencer_card3" />
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="px-5 py-20">
                <h1
                  className="text-3xl sm:text-4xl xl:text-5xl"
                  style={{ lineHeight: "60px", fontFamily: "Abel" }}
                >
                  CREATIVE CAPITAL THAT CHECKS OUT
                </h1>
                <p className="mt-8 text-xl  xl:text-2xl">
                  With 6+ years of first-party data from collaborations between
                  the world’s most culturally credible creators and biggest
                  advertisers, Takumi group arms brands with unrivaled insight
                  and understanding to power influencer marketing and attribute
                  actual business outcomes.
                </p>
              </div>
            </div>
          </div>}
        {props.showAll &&
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-7">
              <div className="px-5 py-20">
                <h1
                  className="text-3xl sm:text-4xl xl:text-5xl"
                  style={{ lineHeight: "60px", fontFamily: "Abel" }}
                >
                  TRACK SALES LIFT AT CREATOR LEVEL
                </h1>
                <p className="mt-8 text-xl  xl:text-2xl">
                  With 6+ years of first-party data from collaborations between
                  the world’s most culturally credible creators and biggest
                  advertisers, Takumi group arms brands with unrivaled insight
                  and understanding to power influencer marketing and attribute
                  actual business outcomes.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 flex justify-center md:justify-start">
              <img src={influencer_card4} alt="influencer_card4" />
            </div>
          </div>}
      </div>
    </Container>
  );
};
