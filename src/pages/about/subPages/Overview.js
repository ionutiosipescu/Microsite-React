import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import YellowButton from "../../../components/buttons/YellowButton";
import { NewsCell } from "./subPages.style";
import CardOverview from "../../../components/cards/CardProfessionals";
import CareersInDigital from "../../../components/cards/CareersInDigital";
import image from "../../../assets/images/ConnorWine";
import CardProfessionals from "../../../components/cards/CardProfessionals";
import TranslateButton from "../../../components/buttons/TranslateButton";

const Overview = () => {
  const cardContent = {
    imageSrc: image,
    name: "Connor Colquhoun",
    position: "wine connoisseur",
    country: "japan",
    buttonText: "connect",
  };
  return (
    <div>
      <Row className="p-0 m-0 d-flex flex-column flex-lg-row">
        <Col lg={8} className="px-4">
          <Row>
            <TranslateButton text1={"English"} text2={"Portuguese"} />
          </Row>
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
          <div className="my-3 border-bottom border-top border-3">
            <h4 className=" py-2" style={{ color: "var(--lightBlue)" }}>
              {" "}
              Brazilian Restructuring and Insolvency Engagements
            </h4>
            <p>
              Esse incididunt deserunt esse aute. Est proident excepteur
              deserunt in in minim sunt exercitation et ipsum dolor et. Commodo
              cillum dolor aliquip occaecat velit proident.
            </p>
          </div>
          <Container
            className=" my-4 p-4 "
            style={{ background: "var(--gray1" }}
          >
            <Row className="rounded">
              <Col>
                <h4 className="fw-bold " style={{ color: "var(--lightBlue)" }}>
                  Our Services
                </h4>
                <Row className="my-4 fw-bold">
                  <Col>
                    <div>Coorporate Transformation</div>
                    <div>Restructuring & Turnaround</div>
                    <div>Private Equity Services</div>
                    <div>Interim and Crisis Management</div>
                    <div>Transaction Advisory</div>
                    <div> Disputes and Investigations</div>
                  </Col>
                  <Col>
                    <div>Judicial Administration / Trustee Services</div>
                    <div>Infrastructure & Capital Projects</div>
                    <div> Real Estate</div>
                    <YellowButton
                      text={"Read more about our Services"}
                      width="80%"
                      className="mt-4 fs-7"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col lg={4} className=" px-0 ps-lg-5 flex-grow-1">
          <CardProfessionals {...cardContent} />
          <CardProfessionals {...cardContent} />

          <CareersInDigital />
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
