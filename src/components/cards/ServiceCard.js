import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import YellowButton from "../buttons/YellowButton";

const ServicesCardContainer = styled.div`
  .ceva:last-of-type {
    border-bottom: 0 !important;
  }
  .cardTitle {
    font-size: 18px;
    font-weight: bold;
  }
  .cardDescription {
    font-size: 14px;
    font-weight: normal;
    padding-top: 10px;
  }
  button {
    font-size: 13px;
    height: 50px;
    border-radius: 5px;
  }
`;

const ServiceCard = ({ data }) => {
  return (
    <ServicesCardContainer>
      <Row className="my-4 fw-bold   ">
        <h3 className="cardTitle">{data.title}</h3>

        <Row className="border-bottom ceva">
          <Col lg={8}>
            <p className="cardDescription">{data.description}</p>
          </Col>

          <Col lg={4} className="d-flex align-items-center">
            <YellowButton
              text={data.textButton ?? "contact our team"}
              onClick={() => {}}
              // width="80%"

              className=""
            />
          </Col>
        </Row>
      </Row>
    </ServicesCardContainer>
  );
};

export default ServiceCard;
