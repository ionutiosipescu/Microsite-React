import React from "react";
import styled from "styled-components";
import digital from "../../components/images/digital";
import { Carousel } from "react-bootstrap";

//style to overload the carousel's indicators
import "../cards/CarouselSection.scss";

const CarouselContainer = styled.div`
  height: 320px;
  width: 100%;
  background-color: white;
  //   background-color: ${(props) => props.backgroundColor || ""};
  h3 {
    color: #000;
    font-weight: 600;
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
  .containerSection {
    width: 90%;
    height: 90%;

    margin: auto;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
  }
`;

const RecongnitionSection = ({ arr, titleSection }) => {
  return (
    <CarouselContainer
    //   backgroundColor={backgroundColor}
    //   titleColor={titleColor}
    >
      <div className="containerSection">
        <h3>{titleSection || ""}</h3>
        <Carousel className="carousel1">
          <Carousel.Item className="row">
            <div className="d-flex justify-content-around">
              <div className="col-sm-12 col-md-11 col-lg-5  ">
                <p className="">{arr[0].desciption}</p>
                <span>{arr[0].author}</span>
                <p>{arr[0].authorPosition}</p>
              </div>
              <div className="col-sm-12 col-md-11 col-lg-5 ">
                <p className="">{arr[1].desciption}</p>
                <span>{arr[1].author}</span>
                <p>{arr[1].authorPosition}</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-around">
              <div className="col-sm-12 col-md-11 col-lg-5 m-4">
                <p className="py-1">{arr[2].desciption}</p>
                <span>{arr[2].author}</span>
                <p>{arr[2].authorPosition}</p>
              </div>
              <div className="col-sm-12 col-md-11 col-lg-5 m-4">
                <p className="py-1">{arr[3].desciption}</p>
                <span>{arr[3].author}</span>
                <p>{arr[3].authorPosition}</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </CarouselContainer>
  );
};

export default RecongnitionSection;
