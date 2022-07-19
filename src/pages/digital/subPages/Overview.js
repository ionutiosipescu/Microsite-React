import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import YellowButton from "../../../components/buttons/YellowButton";
import { NewsCell } from "./subPages.style";
import CardProfessionals from "../../../components/cards/CardProfessionals";
import CareersInDigital from "../../../components/cards/CareersInDigital";
import image from "../../../assets/images/ConnorWine";
import CardCapabilities from "../../../components/cards/CardCapabilities";

const Overview = () => {
  // Card overview content from backend
  const cardContent = {
    imageSrc: image,
    name: "Connor Colquhoun",
    position: "wine connoisseur",
    country: "japan",
    buttonText: "connect",
  };
  return (
    <>
      <Row className="p-0 m-0 d-flex flex-column flex-lg-row">
        <Col lg={8} className="">
          <h1 className="my-4">
            Lorem IpsuCulpa sint magna ullamco irure reprehenderit occaecat
          </h1>
          <p>
            Esse incididunt deserunt esse aute. Est proident excepteur deserunt
            cillum labore ea esse eiusmod do aliqua anim. Eiusmod elit enim id
            dolor aliquip occaecat velit proident.
          </p>
          <p>
            Esse incididunt deserunt esse aute. Est proident excepteur deserunt
            in in minim sunt exercitation et ipsum dolor et. Commodo cillum
            dolor aliquip occaecat velit proident.
          </p>
          <CardCapabilities/>

          <h2 className="fw-bold">Related Insight</h2>
          <Row>
            <Col>
              <NewsCell>
                <h4 className="fw-bold">Lorem</h4>
                <p className="text-muted">15/5/2020</p>
              </NewsCell>
              <NewsCell>
                <h4 className="fw-bold">Lorem</h4>
                <p className="text-muted">15/5/2020</p>
              </NewsCell>
              <NewsCell>
                <h4 className="fw-bold">Lorem</h4>
                <p className="text-muted">15/5/2020</p>
              </NewsCell>
            </Col>
            <Col>
              <NewsCell>
                <h4 className="fw-bold">Lorem</h4>
                <p className="text-muted">15/5/2020</p>
              </NewsCell>
              <NewsCell>
                <h4 className="fw-bold">Lorem</h4>
                <p className="text-muted">15/5/2020</p>
              </NewsCell>
              <NewsCell>
                <h4 className="fw-bold">Lorem</h4>
                <p className="text-muted">15/5/2020</p>
              </NewsCell>
            </Col>
          </Row>
        </Col>
        <Col lg={4} className=" px-0 ps-lg-5 flex-grow-1">
          <CardProfessionals {...cardContent} />
          <CardProfessionals {...cardContent} />

          <CareersInDigital />
        </Col>
      </Row>
    </>
  );
};

export default Overview;
