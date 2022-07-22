import React from "react";
import styled from "styled-components";
import digital from "../../assets/images/digital";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//style to overload the carousel's indicators
import "./CarouselSection.scss";

const CarouselContainer = styled.div`
  // height: 320px;
  width: 100%;
  //   background-color: white;
  background-color: ${(props) => props.backgroundColor || ""};
  color: ${(props) => props.textColor || "white"};

  .text-date {
    color: ${(props) => props.textDate || "white"};
  }
  h3 {
    color: ${(props) => props.titleColor || "white"};
    font-size: 18px;
  }
  h6 {
    font-weight: bold;
  }
  p {
    font-size: 14px;
  }
  .react-multi-carousel-dot button {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    // color: orange;
    border: 3px solid #cf7f00 !important;
    // background: #002b49;
    background: ${(props) => props.carouselDotBackground || "#fff"};
  }
  .react-multi-carousel-dot--active button {
    background: #cf7f00;
  }
`;

const CarouselSection = ({
  categoryCarousel,
  backgroundColor,
  titleColor,
  textColor,
  arr,
  textDate,
  carouselDotBackground,
}) => {
  return (
    <CarouselContainer
      backgroundColor={backgroundColor}
      titleColor={titleColor}
      textColor={textColor}
      textDate={textDate}
      className=" p-4"
      carouselDotBackground={carouselDotBackground}
    >
      <div className="mx-3">
        <h3>{categoryCarousel || ""}</h3>
      </div>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="react-multi-carousel-dot-list"
        showDots
        autoPlay
        infinite
      >
        {arr.map((element, index) => (
          <div className="m-3" key={index}>
            <h6>{element?.title}</h6>
            <span className="text-date">
              {new Date(element?.date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>

            <p className="py-4">{element?.description}</p>
          </div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default CarouselSection;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 800 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 800, min: 545 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 545, min: 10 },
    items: 1,
  },
};
