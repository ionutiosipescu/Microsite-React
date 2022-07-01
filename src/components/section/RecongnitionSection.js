import React from "react";
import styled from "styled-components";
import digital from "../../components/images/digital";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//style to overload the carousel's indicators
import "../cards/CarouselSection.scss";

const CarouselContainer = styled.div`
  // height: 100%;
  width: 100%;
  background-color: white;
  //   background-color: ${(props) => props.backgroundColor || ""};
  padding: 30px 0px;
  h3 {
    color: #000;
    font-weight: 600;
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
`;

const RecongnitionSection = ({ arr, titleSection }) => {
  return (
    <CarouselContainer
      //   backgroundColor={backgroundColor}
      //   titleColor={titleColor}
      className="p-4"
    >
      <div className="mx-3">
        <h3>{titleSection || ""}</h3>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          // deviceType={this.props.deviceType}
          // dotListClass="react-multi-carousel-dot-list"
          showDots
        >
          {arr.map((element, index) => (
            <div className="py-3" key={index}>
              <p className="">{element?.desciption}</p>
              <span>{element?.author.toUpperCase()}</span>
              <p className="">{element?.authorPosition}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </CarouselContainer>
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 545 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 545, min: 0 },
    items: 1,
  },
};

export default RecongnitionSection;
