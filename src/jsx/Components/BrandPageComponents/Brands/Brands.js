import { Container } from "@mui/material";
import React from "react";
import mastercard from "./../../../../assets/mastercard.png";
import netflix from "./../../../../assets/netflix.png";
import nike from "./../../../../assets/nike.png";
import heinze from "./../../../../assets/heinze.png";
import bumble from "./../../../../assets/bumble.png";
import canon from "./../../../../assets/canon.png";
import amazon from "./../../../../assets/amazon.png";
import nestlé from "./../../../../assets/nestlé.png";
import spotify from "./../../../../assets/spotify.png";
import nikkon from "./../../../../assets/nikkon.png";
import "./Brands.css";
export const Brands = () => {
  return (
    <Container maxWidth={"xl"}>
      <div className="brands_main">
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
            Brands we work with
          </h1>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center">
            <img src={mastercard} alt="mastercard" className="w-32" />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center">
            <img src={netflix} alt="netflix" className="w-32" />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center">
            <img src={nike} alt="nike" className="w-32" />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center">
            <img src={heinze} alt="heinze" className="w-32" />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center">
            <img src={bumble} alt="bumble" className="w-32" />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center">
            <img src={canon} alt="canon" className="w-32" />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center">
            <img src={amazon} alt="amazon" className="w-32" />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center">
            <img src={nestlé} alt="nestlé" className="w-32" />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center">
            <img src={canon} alt="canon" className="w-32" />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center">
            <img src={spotify} alt="spotify" className="w-32" />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center">
            <img src={nikkon} alt="nikkon" className="w-32" />
          </div>
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex justify-center">
            <img src={nike} alt="nike" className="w-32" />
          </div>
        </div>
      </div>
    </Container>
  );
};
