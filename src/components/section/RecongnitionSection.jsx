import React from "react"
import styled from "styled-components/macro"
import digital from "../../assets/images/digital"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { arr } from "../../utils/data"
import UnalignedItemsContainer from "../layout/UnalignedItemsContainer"
//style to overload the carousel's indicators
// import "../cards/CarouselSection.scss";

const CarouselContainer = styled.div`
  // height: 100%;
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  .contentContainer {
    width: 100%;
    font-family: "Helvetica Neue LT Std", sans-serif;
    h3 {
      font-family: "Helvetica Neue LT Std", sans-serif;
      font-weight: 600;
    }
    .positionAuthor {
      padding-top: -2px;
      font-size: 1.1rem;
    }
    .authorName {
      margin-bottom: 0px;
      font-weight: bold;
      font-size: 1.2rem;
    }
    .articleDescription {
      font-style: italic;
      font-size: 1.1rem;
    }
  }
  .articlesContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* flex-direction: column; */
  }
`

const RecongnitionSection = ({ arr, titleSection }) => {
  const articles = arr?.slice(0, 2)
  return (
    <CarouselContainer>
      <div className="contentContainer">
        <h3>{titleSection || "Recent Recognition:"}</h3>
        {/* <div className="articlesContainer"> */}
        <UnalignedItemsContainer columnsNumber={2}>
          {articles?.map((element, index) => (
            <div className="" key={index}>
              <p
                className=" articleDescription"
                dangerouslySetInnerHTML={{ __html: element?.text }}
              />

              <p className="authorName">
                {element?.title ?? "RAYMOND BERGLUND"}
              </p>
              <p className="positionAuthor">
                {element?.job_title ??
                  `Managing Director with
                A&M’s Healthcare & Life Sciences`}
              </p>
            </div>
          ))}
        </UnalignedItemsContainer>
        {/* </div> */}
      </div>
    </CarouselContainer>
  )
}

export default RecongnitionSection
