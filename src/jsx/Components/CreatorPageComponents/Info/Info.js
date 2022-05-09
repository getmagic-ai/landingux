import { Container } from "@mui/material";
import React from "react";
import infoImg1 from "./../../../../assets/infoImg1.png";
import infoImg2 from "./../../../../assets/infoImg2.png";
import infoImg3 from "./../../../../assets/infoImg3.png";
export const Info = () => {
  return (
    <div className="xl:px-32 py-5" id="how_it_works">
      <Container maxWidth={"xl"}>
        <div className="grid grid-cols-12 lg:gap-x-0 gap-x-5 md:gap-x-0 gap-y-10 md:gap-y-0">
          <div className="col-span-12 md:col-span-5 flex justify-center">
            <img src={infoImg1} alt="infoImg1" className="w-96" />
          </div>
          <div className="col-span-12 md:col-span-7 flex items-center">
            <p className="text-xl sm:text-3xl lg:text-4xl font-semibold text-center md:text-left">
              Know what your content is worth!<br className="lg:block hidden" /> Research what you _should_
              be<br className="lg:block hidden" />
              getting paid
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex justify-center">
            <img src={infoImg2} alt="infoImg2" className="w-96" />
          </div>
          <div className="col-span-12 md:col-span-7 flex items-center">
            <p className="text-xl sm:text-3xl lg:text-4xl font-semibold text-center md:text-left">
              Extend your reach! Get to know and <br className="lg:block hidden" />collaborate with others
              to drive<br className="lg:block hidden" /> your audience growth and<br className="lg:block hidden" /> monetization
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex justify-center">
            <img src={infoImg3} alt="infoImg3" className="w-96" />
          </div>
          <div className="col-span-12 md:col-span-7 flex items-center">
            <p className="text-xl sm:text-3xl lg:text-4xl font-semibold text-center md:text-left">
              Personalized onboarding with a<br className="lg:block hidden" /> human! 24 x 7 support on
              phone or <br className="lg:block hidden" />
              text - reach out anytime!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
