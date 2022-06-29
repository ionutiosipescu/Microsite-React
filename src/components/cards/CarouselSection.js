import React from "react";
import styled from "styled-components";
import digital from "../../components/images/digital";
import { Carousel } from "react-bootstrap";

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
    color: ${(props) => props.titleColor || ""};
    font-size: 18px;
  }
  h6 {
    font-weight: bold;
  }
  p {
    font-size: 14px;
  }
`;

const CarouselSection = ({
  categoryCarousel,
  backgroundColor,
  titleColor,
  textColor,
  arr,
  textDate,
}) => {
  return (
    <CarouselContainer
      backgroundColor={backgroundColor}
      titleColor={titleColor}
      textColor={textColor}
      textDate={textDate}
      className=" p-4"
    >
      <h3>{categoryCarousel || ""}</h3>
      <Carousel className="carousel1">
        <Carousel.Item className="row h-100">
          <div className="d-flex justify-content-around ">
            <div className="col-sm-12 col-md-11 col-lg-5 m-4 ">
              <h6>{arr[0].title}</h6>
              <span className="text-date"> {arr[0].date}</span>
              <p className="py-4">{arr[0].desciption}</p>
            </div>
            <div className="col-sm-12 col-md-11 col-lg-5 m-4">
              <h6>{arr[1].title}</h6>
              <span className="text-date "> {arr[1].date}</span>
              <p className="py-4">{arr[1].desciption}</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="row h-100">
          <div className="d-flex justify-content-around ">
            <div className="col-sm-12 col-md-11 col-lg-5 m-4  ">
              <h6>{arr[2].title}</h6>
              <span className="text-date"> {arr[2].date}</span>
              <p className="py-4">{arr[2].desciption}</p>
            </div>
            <div className="col-sm-12 col-md-11 col-lg-5 m-4 ">
              <h6>{arr[3].title}</h6>
              <span className="text-date"> {arr[3].date}</span>
              <p className="py-4">{arr[3].desciption}</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  );
};

export default CarouselSection;
