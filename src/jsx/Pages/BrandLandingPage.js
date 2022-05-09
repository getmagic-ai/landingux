import React from "react";
import { Brands } from "../Components/BrandPageComponents/Brands/Brands";
import { Carousel } from "../Components/BrandPageComponents/Carousel/Carousel";
import { CreativeVoice } from "../Components/BrandPageComponents/CreativeVoice/CreativeVoice";
import { Header } from "../Components/BrandPageComponents/Header";
import { Influencers } from "../Components/SubComponents/Influencers/Influencers";
import { Pricing } from "../Components/SubComponents/Pricing/Pricing";
import { Partners } from "../Components/BrandPageComponents/SocialMedia/Partners";
const BrandLandingPage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Partners />
      <Influencers showAll={true} />
      <Brands />
      <Pricing />
      <CreativeVoice />
    </div>
  );
};

export default BrandLandingPage;
