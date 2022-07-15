import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardsLocations from "../../../components/cards/CardsLocations";
import SimpleMap from "../../../components/cards/SimpleMap";
import TranslateButton from "../../../components/buttons/TranslateButton";

const Locations = () => {
  const [cardLocation, setCardLocation] = useState();

  const handleCardLocation = (coords) => {
    console.log(coords);
    setCardLocation(coords);
  };
  return (
    <>
      <Container className="p-3">
        <Row>
          <TranslateButton text1={"English"} text2={"Portugheze"} />
        </Row>
        <Row>
          <Col>
            <h2>Serving businesses, governments and communities worldwide.</h2>
            <p>
              Whether serving as trusted advisers or in interim management roles
              to accelerate positive change, our professionals are on the ground
              across North America, Europe, the Middle East, Asia and Latin
              America.
            </p>
          </Col>
        </Row>
        <Row className="p-0 m-0 d-flex flex-lg-row">
          <Col xl={6} className="d-flex flex-md-wrap flex-column flex-md-row">
            {arrData.map((cardCity, i) => (
              <CardsLocations
                key={i}
                cardCity={cardCity}
                handleCardLocation={handleCardLocation}
              />
            ))}
            {/* 
            <CardsLocations />
            <CardsLocations /> */}
          </Col>
          <Col xl={6} className="my-5 my-lg-0">
            <SimpleMap cardLocation={cardLocation} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Locations;
const arrData = [
  {
    title: "Belo Horizonte",
    phone: "Tel: +55 11 93224 4061",
    address: "Alameda Oscar Niemeyer, 119 - 4º",
    floor: "floor - Ste 402",
    x: "Vale do Sereno",
    building: "Nova Lima-MG",
    zip: "34006-056",
    country: "Brazil",
    coords: {
      lat: "-19.9191052",
      lng: "-43.938668",
    },
  },
  {
    title: "Rio de Janeiro",
    phone: "Tel: +55 11 93224 4061",
    address: "Alameda Oscar Niemeyer, 119 - 4º",
    floor: "floor - Ste 402",
    x: "Vale do Sereno",
    building: "Nova Lima-MG",

    zip: "34006-056",
    country: "Brazil",
    coords: {
      lat: "-22.906847",
      lng: "-43.172896",
    },
  },
  {
    title: "São Paulo",
    phone: "Tel: +55 11 93224 4061",
    address: "Alameda Oscar Niemeyer, 119 - 4º",
    floor: "floor - Ste 402",
    x: "Vale do Sereno",
    building: "Nova Lima-MG",
    zip: "34006-056",
    country: "Brazil",
    coords: {
      lat: "-23.555771",
      lng: "-46.639557",
    },
  },
];
