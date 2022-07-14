import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import YellowButton from "../../../components/buttons/YellowButton";
import { NewsCell } from "./subPages.style";
import CardOverview from "../../../components/cards/CareersInDigital";
import CareersInDigital from "../../../components/cards/CareersInDigital";
import image from "../../../assets/images/ConnorWine";
import CardProfessionals from "../../../components/cards/CardProfessionals";
const cardContent = {
  imageSrc: image,
  name: "Connor Colquhoun",
  position: "wine connoisseur",
  country: "japan",
  buttonText: "Connect",
};
const Services = () => {
  return (
    <>
      <Row className="p-0 m-0 d-flex flex-column flex-lg-row">
        <Col lg={8}>
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

          <Container className=" my-4 p-4 " style={{ background: "white" }}>
            <Row className="rounded">
              <Col>
                <h4 className="fw-bold " style={{ color: "var(--lightBlue)" }}>
                  Our Services
                </h4>
                <Row className="my-4 fw-bold">
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </div>
                  <Row className="my-3">
                    <Col>
                      <div> l </div>
                    </Col>
                    <Col>
                      <YellowButton
                        text={"Read more about our Services"}
                        // width="80%"
                        className="mt-4 fs-7"
                      />
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col lg={4} className=" px-0 ps-lg-5 flex-grow-1">
          <CardProfessionals {...cardContent} />
          <CardProfessionals {...cardContent} />
        </Col>
      </Row>
    </>
  );
};

export default Services;
