import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Carousel.css";
import slider_img1 from "./../../../../assets/slider_img1.png";
import slider_img2 from "./../../../../assets/slider_img2.png";
import slider_img3 from "./../../../../assets/slider_img3.png";

export const Carousel = () => {
  return (
    <div id="how_it_works">
      <div className="w-full flex justify-center py-14 px-4">
        <h1
          className="text-2xl sm:text-4xl text-center"
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
          Innovative Formats to drive the most <br />
          exciting channel for your growth
        </h1>
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={8}
        visibleSlides={1}
        currentSlide={1}
      >
        <Slider>
          <Slide index={0} style={{ paddin: "0 0 0 0" }}>
            <div
              style={{ backgroundImage: `url(${slider_img1})` }}
              className="bg-cover bg-center object-cover p-4 rounded-lg w-full h-full bg-no-repeat"
            >
              <div className="border-2 border-white p-4  rounded-lg w-full h-full">
                <div className="border-2 border-white p-4  rounded-lg w-full h-full flex items-center justify-center">
                  <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold">
                    Direct LTO Sales
                  </h1>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div
              style={{ backgroundImage: `url(${slider_img2})` }}
              className="bg-cover bg-center object-cover p-4 rounded-lg w-full h-full bg-no-repeat"
            >
              <div className="border-2 border-white p-4  rounded-lg w-full h-full">
                <div className="border-2 border-white p-4  rounded-lg w-full h-full flex items-center justify-center">
                  <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold">
                    Product Placement
                  </h1>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div
              style={{ backgroundImage: `url(${slider_img3})` }}
              className="bg-cover bg-center object-cover p-4 rounded-lg w-full h-full bg-no-repeat"
            >
              <div className="border-2 border-white p-4  rounded-lg w-full h-full">
                <div className="border-2 border-white p-4  rounded-lg w-full h-full flex items-center justify-center">
                  <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold">
                    Promos & Offers
                  </h1>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={3}>
            <div
              style={{ backgroundImage: `url(${slider_img1})` }}
              className="bg-cover bg-center object-cover p-4 rounded-lg w-full h-full bg-no-repeat"
            >
              <div className="border-2 border-white p-4  rounded-lg w-full h-full">
                <div className="border-2 border-white p-4  rounded-lg w-full h-full flex items-center justify-center">
                  <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold">
                    Direct LTO Sales
                  </h1>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={4}>
            <div
              style={{ backgroundImage: `url(${slider_img2})` }}
              className="bg-cover bg-center object-cover p-4 rounded-lg w-full h-full bg-no-repeat"
            >
              <div className="border-2 border-white p-4  rounded-lg w-full h-full">
                <div className="border-2 border-white p-4  rounded-lg w-full h-full flex items-center justify-center">
                  <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold">
                    Product Placement
                  </h1>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={5}>
            <div
              style={{ backgroundImage: `url(${slider_img3})` }}
              className="bg-cover bg-center object-cover p-4 rounded-lg w-full h-full bg-no-repeat"
            >
              <div className="border-2 border-white p-4  rounded-lg w-full h-full">
                <div className="border-2 border-white p-4  rounded-lg w-full h-full flex items-center justify-center">
                  <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold">
                    Promos & Offers
                  </h1>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={6}>
            <div
              style={{ backgroundImage: `url(${slider_img1})` }}
              className="bg-cover bg-center object-cover p-4 rounded-lg w-full h-full bg-no-repeat"
            >
              <div className="border-2 border-white p-4  rounded-lg w-full h-full">
                <div className="border-2 border-white p-4  rounded-lg w-full h-full flex items-center justify-center">
                  <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold">
                    Direct LTO Sales
                  </h1>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={7}>
            <div
              style={{ backgroundImage: `url(${slider_img2})` }}
              className="bg-cover bg-center object-cover p-4 rounded-lg w-full h-full bg-no-repeat"
            >
              <div className="border-2 border-white p-4  rounded-lg w-full h-full">
                <div className="border-2 border-white p-4  rounded-lg w-full h-full flex items-center justify-center">
                  <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold">
                    Product Placement
                  </h1>
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
        <div className="flex justify-center items-center gap-x-5 w-full py-14">
          <div className="flex justify-center items-center rounded-lg overflow-hidden">
            <ButtonBack
              className="px-6 py-2 flex items-center"
              style={{
                backgroundColor: "rgba(31, 62, 102, 1) ",
                color: "white"
              }}
            >
               <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ fontSize: "24px" }}
                className="text-white"
              />
            </ButtonBack>
            <ButtonNext
              className="px-6 py-2 flex items-center"
              style={{
                backgroundColor: "rgba(31, 62, 102, 1) ",
                color: "white"
              }}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ fontSize: "24px" }}
                className="text-white"
              />
            </ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
};
