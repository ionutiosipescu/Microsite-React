import React from "react";
import styled from "styled-components";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import YellowButton from "../../../components/buttons/YellowButton";
import { NewsCell } from "./subPages.style";
import CardOverview from "../../../components/cards/CareersInDigital";
import CareersInDigital from "../../../components/cards/CareersInDigital";
import image from "../../../assets/images/ConnorWine";
import CardProfessionals from "../../../components/cards/CardProfessionals";
import { ServiceCard } from "../../../components/cards/";
// import ServicesCard from "../../../components/cards/ServiceCard";

const cardContent = {
  imageSrc: image,
  name: "Connor Colquhoun",
  position: "wine connoisseur",
  country: "japan",
  buttonText: "Connect",
};

const ServicesContainer = styled.div``;

const Services = () => {
  return (
    <ServicesContainer>
      <Row className="p-0 m-0 d-flex flex-column flex-lg-row bg-white">
        <Col lg={8} className=" border p-5">
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

          <div className=" my-4  " style={{ background: "white" }}>
            <Row className="rounded">
              <Col>
                <h4 className="fw-bold " style={{ color: "var(--lightBlue)" }}>
                  Our Services
                </h4>
              </Col>
              <ServiceCard data={data} />
              <ServiceCard data={data} />
              {/* <ServiceCard data={data} /> */}
            </Row>
          </div>
        </Col>
        <Col lg={3} className=" px-0 ps-lg-5 flex-grow-1 ">
          <CardProfessionals {...cardContent} />
          <CardProfessionals {...cardContent} />
        </Col>
      </Row>
    </ServicesContainer>
  );
};

export default Services;

///data for cards
const data = {
  title: "Coorporate Transformation",
  description:
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived notonly five centuries",

  textButton: "Contact our Team",
};
