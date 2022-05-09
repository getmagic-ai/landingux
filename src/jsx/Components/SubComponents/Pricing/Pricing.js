import { Container } from "@mui/material";
import React from "react";
import getting_started from "./../../../../assets/getting_started.png";
import pro from "./../../../../assets/pro.png";
import enterprise from "./../../../../assets/enterprise.png";
import "./Pricing.css";
export const Pricing = () => {
  return (
    <Container maxWidth={"xl"} id="pricing">
      <div className="pricing_main my-20">
        <div className="pb-14">
          <h1
            className="text-3xl sm:text-4xl xl:text-5xl text-center"
            style={{ lineHeight: "60px", fontFamily: "Abel" }}
          >
            Pricing Table
          </h1>
          <p className="text-center mt-5">
            Quidam officiis similique sea ei, vel tollit indoctum efficiendi<br />
            ei, at nihil tantas platonem eos.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-y-5 lg:gap-y-0 gap-x-5 xl:gap-x-0">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-end">
            <div className="shadow-lg border border-gray_100 py-10 px-12 w-full lg:w-80 rounded-md flex flex-col items-center">
              <div className="bg-gray_100 rounded-full w-14 h-14 flex justify-center items-center">
                <img
                  src={getting_started}
                  alt="getting_started"
                  className="w-8"
                />
              </div>
              <h1 className="text-lg font-semibold mt-5">GETTING STARTED</h1>
              <div className="flex flex-col items-center gap-y-4 mt-20">
                <span className="text-sm text-gray_400">
                  Reach top creators
                </span>
                <span className="text-sm text-gray_400">Start campaign</span>
                <span className="text-sm text-gray_400">
                  Upto 10 team members
                </span>
                <span className="text-sm text-gray_400">
                  Setup payment plan
                </span>
                <span className="text-sm text-gray_400">
                  Setup payment plan
                </span>
              </div>
              <h1 className="text-5xl font-bold mt-10">$10</h1>
              <button
                className="w-full mt-14 py-3"
                style={{
                  "mix-blend-mode": "normal",
                  border: "1px solid #0076FF",
                  borderRadius: "3px",
                  color: "#0076FF"
                }}
              >
                Buy
              </button>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-center">
            <div
              className="shadow-lg border border-gray_100 py-10 px-12 w-full lg:w-80 rounded-md flex flex-col items-center"
              style={{ backgroundColor: "#3392FF" }}
            >
              <div className="rounded-full w-14 h-14 flex justify-center items-center">
                <img src={pro} alt="pro" className="w-12" />
              </div>
              <h1 className="text-lg text-white font-semibold mt-5">Pro</h1>
              <div className="flex flex-col items-center gap-y-4 mt-20">
                <span className="text-sm text-white">All Starter features</span>
                <span className="text-sm text-white">
                  Native, easy setup affiliate links
                </span>
                <span className="text-sm text-white">
                  Analytics and reporting
                </span>
                <span className="text-sm text-white">All payment methods</span>
                <span className="text-sm text-white">
                  Unlimited team members
                </span>
              </div>
              <h1 className="text-5xl font-bold mt-10 text-white">$24</h1>
              <button
                className="w-full mt-14 py-3"
                style={{
                  backgroundColor: "#FFBE00",
                  border: "1px solid #FFBE00",
                  borderRadius: "3px",
                  color: "black"
                }}
              >
                Buy
              </button>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-start">
            <div className="shadow-lg border border-gray_100 py-10 px-12 w-full lg:w-80 rounded-md flex flex-col items-center">
              <div className="bg-gray_100 rounded-full w-14 h-14 flex justify-center items-center">
                <img src={enterprise} alt="enterprise" className="w-8" />
              </div>
              <h1 className="text-lg font-semibold mt-5">ENTERPRISE</h1>
              <div className="flex flex-col items-center gap-y-4 mt-28">
                <span className="text-sm text-gray_400">All Pro featues</span>
                <span className="text-sm text-gray_400">
                  24x7 Phone support
                </span>
                <span className="text-sm text-gray_400">
                  New format exclusive access
                </span>
              </div>
              <h1 className="text-3xl font-semibold text-center mt-20">
                Contact us for pricing!
              </h1>
              <button
                className="w-full mt-10 py-3"
                style={{
                  "mix-blend-mode": "normal",
                  border: "1px solid #0076FF",
                  borderRadius: "3px",
                  color: "#0076FF"
                }}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
