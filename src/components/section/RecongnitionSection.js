import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { arr } from "../../utils/data";
//style to overload the carousel's indicators
// import "../cards/CarouselSection.scss";

const CarouselContainer = styled.div`
  // height: 100%;
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  .contentContainer {
    width: 88%;
    h3 {
      font-family: "Helvetica Neue LT Std", sans-serif;
      font-weight: 600;
    }
  }
  .articlesContainer {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
  }
`;

const RecongnitionSection = ({ arr, titleSection }) => {
  return (
    <CarouselContainer>
      <div className="contentContainer">
        <h3>{titleSection || "Recent Recognition:"}</h3>
        <div className="articlesContainer">
          {[1, 2]?.map((element, index) => (
            <div
              className="py-3 me-5 col-11 col-sm-11 col-md-5 col-lg-5"
              key={index}
            >
              {/* <p
                className="fst-italic"
                dangerouslySetInnerHTML={{ __html: element?.text }}
              /> */}

              <p>
                “Digital has the power to transform operations, propel 
                commercial improvements and to be the catalyst for care model
                innovations. David’s in-depth industry sector and digital
                background dovetails with A&M’s operator bench strength and
                leadership, action, results credo. He will add value to
                healthcare and life sciences clients that want to make digital
                work across their organizations and seek transformative results
                from laser-focused digital initiatives.”
              </p>

              <p className="">{element?.job_title ?? "RAYMOND BERGLUND"}</p>
              <p className="">
                {element?.job_title ??
                  `Managing Director with
                A&M’s Healthcare & Life Sciences`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CarouselContainer>
  );
};

export default RecongnitionSection;
