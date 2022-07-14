import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CardProfessionals } from "../../../components/cards";
import CareersInDigital from "../../../components/cards/CareersInDigital";
import image from "../../../assets/images/ConnorWine";
import YellowButton from "../../../components/buttons/YellowButton";

const Capabilities = () => {
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
        <Col lg={8}>
          <h2>Our Goal is to Deliver practical</h2>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>

          <iframe
            src={
              "https://www.youtube.com/embed?v=pxhJIRpLrPE&list=PLzK3tNHBiZt71HrEvPO0sVN16s-Au7yiz&index=22"
            }
            title="Trash Taste"
            width="100%"
            height="400px"
          >
            This is the{" "}
          </iframe>

          <h2>Our Goal is to Deliver practical</h2>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
        </Col>
        <Col className="col-4 p-0">
          <CardProfessionals {...cardContent} />
          <CardProfessionals {...cardContent} />
          <CareersInDigital />
        </Col>
      </Row>
    </>
  );
};

export default Capabilities;
