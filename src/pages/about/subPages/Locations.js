import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import CardsLocations from '../../../components/cards/CardsLocations'
import SimpleMap from '../../../components/cards/SimpleMap'
import TranslateButton from "../../../components/buttons/TranslateButton";

const Locations = () => {
  return <>
      <Container>
        <Row>
          <TranslateButton text1={"English"} text2={"Portugheze"}/>
        </Row>
        <Row>
          <Col>
              <h2>
              Serving businesses, governments and communities worldwide. 
          </h2>
          <p>
          Whether serving as trusted advisers or in interim management roles to accelerate positive change, our professionals are on the ground across North America, Europe, the Middle East, Asia and Latin America.
          </p>
          </Col>
        </Row>
        <Row className='p-0 m-0 d-flex flex-lg-row'>
          <Col xl={6} className="d-flex flex-md-wrap flex-column flex-md-row">
          <CardsLocations/>
          <CardsLocations/>
          <CardsLocations/>
          </Col>
          <Col xl={6} className="my-5 my-lg-0">
           <SimpleMap/>
          </Col>
        </Row>
      </Container>
  </>;
};

export default Locations;
