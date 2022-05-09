import { Container } from "@mui/material";
import React from "react";
export const SignupToday = () => {
  return (
    <div className="px-3 sm:px-8 xl:px-16 2xl:px-32 py-20" style={{ backgroundColor: "#F9F9F9" }}>
      <Container maxWidth={"xl"}>
        <div className="grid grid-cols-12 2xl:grid-cols-11 gap-y-10 lg:gap-y-0 sm:gap-x-10 xl:gap-x-20">
          <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
            <h1 className="text-2xl sm:text-4xl font-semibold">SIGNUP TODAY</h1>
            <p className="text-2xl sm:text-4xl font-thin mt-6">
              WANT TO<br className="lg:block hidden"/> LEARN MORE?<br className="lg:block hidden"/> SAY{" "}
              <span className="font-semibold" style={{ color: "#1F3E66" }}>
                HELLO
              </span>
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="flex flex-col gap-y-5">
              <input
                type="text"
                style={{outline: "none"}}
                placeholder="Email"
                className="border border-black py-4 px-6"
              />
              <input
                type="text"
                style={{outline: "none"}}
                placeholder="Social Media Handle"
                className="border border-black py-4 px-6"
              />
              <input
                type="text"
                style={{outline: "none"}}
                placeholder="Annual Income"
                className="border border-black py-4 px-6"
              />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="flex flex-col gap-y-5">
              <input
                type="text"
                style={{outline: "none"}}
                placeholder="Phone number"
                className="border border-black py-4 px-6"
              />
              <input
                type="text"
                style={{outline: "none"}}
                placeholder="Social Following"
                className="border border-black py-4 px-6"
              />
              <input
                type="text"
                style={{outline: "none"}}
                placeholder="Not sure what your annual income is?"
                className="border border-black py-4 px-6"
              />
              <button className=" py-4 text-white" style={{backgroundColor: "#1F3E66"}}>CONFIRM</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
