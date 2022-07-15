import React from "react";
import styled from "styled-components";
import { ChevronRight } from "../../assets/icons";
import Accordion from "react-bootstrap/Accordion";

const Card = styled.div`
  display: flex;
  padding: 20px 0px;
  margin: 10px 25px;
  border-bottom: 2px solid var(--gray5);
  gap: 20px;
`;
const ImageContainer = styled.div`
  background: gray;
  width: 150px;
  // height: 150px;
  // flex: 1;

  img {
    width: 100%;
    // height: 100%;
    // object-fit: fill;
  }
`;
const CardBody = styled.div`
  flex: 5;
  padding: 10px 0px;
  h6 {
    color: var(--hover-blue);
    font-weight: bold;
    text-transform: uppercase;
  }

  h4 {
  }

  p {
    font-size: 14px;
  }
`;
const CardArrow = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  img {
    height: 20px;
    width: 20px;
  }
`;
const CardContainer = styled.div`
  .accordion-item {
    border: none;
  }
`;

const CardInsights = ({ image, type, title, content, key }) => {
  return (
    <CardContainer>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={key}>
          <Accordion.Header>
            <Card>
              <ImageContainer>
                <img src={image} alt="Insight photo" />
              </ImageContainer>

              <CardBody>
                <h6>{type}</h6>
                <h4>{title}</h4>
                <p className="text-muted">{content}</p>
              </CardBody>
              {/* <CardArrow>
              <ChevronRight />
            </CardArrow> */}
            </Card>
          </Accordion.Header>
          <Accordion.Body>
            <Card>
              <ImageContainer>
                <img src={image} alt="Insight photo" />
              </ImageContainer>

              <CardBody>
                <h6>{type}</h6>
                <h4>{title}</h4>
                <p className="text-muted">{content}</p>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/hVTE1kPEKIg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </CardBody>
              {/* <CardArrow>
              <ChevronRight />
            </CardArrow> */}
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </CardContainer>
  );
};

export default CardInsights;
