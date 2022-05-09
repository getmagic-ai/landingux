import React from "react";
import footerImg2 from './../../../../assets/footerImg2.png'
import footerImg3 from './../../../../assets/footerImg3.png'
export const CreativeVoice = () => {
  return (
    <div
    className=""
      style={{
        background: "linear-gradient(180deg, #000000 0%, #2C2B2B 100%)"
      }}
    >
           

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 px-10 lg:px-20 xl:px-32 py-14 md:py-0 flex items-center">
          <div>
            <span className="text-xs text-white">We are on a mission to</span>
            <h1 className="text-white text-4xl mt-5">
              Liberate the<br /> Creative Voice
            </h1>
            <p className="text-gray_400 mt-10">
              We are democratizing the creative process for brands and creators
            </p>
            <p className="text-gray_400 mt-5">
              By empowering a global talent network of thousands of influencers,
              tastemakers, creatives and storytellers to connect with your
              target audience
            </p>
            <p className="text-gray_400 mt-5">
              Making advertising more inclusive, diverse and effective
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-start relative py-14 px-10 md:px-0">
            <img src={footerImg2} alt="footerImg2" className="w-80 relative z-10" />
            <img src={footerImg3} alt="footerImg3" className="absolute right-0 top-0 w-full h-full" />
        </div>
      </div>
    </div>
  );
};
