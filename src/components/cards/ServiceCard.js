import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import YellowButton from "../buttons/YellowButton";

const ServicesCardContainer = styled.div`
  .card-container:last-of-type {
    border-bottom: 0 !important;
  }
  .card-title {
    font-size: 18px;
    font-weight: bold;
  }
  .card-description {
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
        <h3 className="card-title">{data.title}</h3>

        <Row className="border-bottom card-container">
          <Col lg={8}>
            <p className="card-description">{data.description}</p>
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
