import React from "react";
import creatorHeaderImg from "./../../../../assets/creatorHeaderImg.png";
import cardImg1 from "./../../../../assets/cardImg1.png";
import cardImg2 from "./../../../../assets/cardImg2.png";
import cardImg3 from "./../../../../assets/cardImg3.png";
import ring from "./../../../../assets/ring.png";
export const CreatorHeader = () => {
  return (
    <div style={{ backgroundColor: "#F7F2E4" }} className="py-10">
      <div className="grid grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-10 xl:gap-x-0">
        <div className="col-span-12 md:col-span-4 flex md:items-center lg:items-start">
          <div className="relative">
            <img
              src={creatorHeaderImg}
              alt="creatorHeaderImg"
              className="w-full lg:w-96 relative z-10"
            />
            <img
              src={ring}
              alt="ring"
              className="w-32 absolute -right-3 -top-3"
            />
            <img
              src={ring}
              alt="ring"
              className="w-32 absolute -right-3 -bottom-3"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 pl-5 pr-5 lg:pl-0 lg:pr-20 2xl:pr-32 pt-3">
          <div className="grid grid-cols-12 gap-y-5 gap-x-4">
            <div className="col-span-12 lg:col-span-4 flex justify-center">
              <img
                src={cardImg1}
                alt="cardImg1"
                className="w-52 sm:w-72 xl:w-60"
              />
            </div>
            <div className="col-span-12 lg:col-span-8 xl:col-span-6 flex items-center justify-center lg:justify-start">
              <p className="text-xl sm:text-2xl text-black font-semibold">
                Upfront pricing! No shady deals, full transparency and you keep
                90% of the value - Flat !
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex justify-center">
              <img
                src={cardImg2}
                alt="cardImg2"
                className="w-52 sm:w-72 xl:w-60"
              />
            </div>
            <div className="col-span-12 lg:col-span-8 xl:col-span-6 flex items-center justify-center lg:justify-start">
              <p className="text-xl sm:text-2xl text-black font-semibold">
                Never alienated your audience and do an off brand sponsorship
                again
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex justify-center">
              <img
                src={cardImg3}
                alt="cardImg3"
                className="w-52 sm:w-72 xl:w-60"
              />
            </div>
            <div className="col-span-12 lg:col-span-8 xl:col-span-6 flex items-center justify-center lg:justify-start">
              <p className="text-xl sm:text-2xl text-black font-semibold">
                Get paid ! No hassles. We take on all the payments risks and
                challenges. Easy payouts, of your choice
              </p>
            </div>
            <div className="col-span-12 flex justify-center lg:-mt-12">
              <div className="mt-14 border-2 border-gray_400 rounded-2xl p-1 w-full lg:w-3/4 xl:w-1/2 flex items-center justify-between bg-white">
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
          </div>
        </div>
      </div>
    </div>
  );
};
