import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import CardsLocations from '../../../components/cards/CardsLocations'

const Locations = () => {
  return <>
      <Container>
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
        <Row className='p-0 m-0 d-flex flex-column flex-lg-row'>
          <Col lg={6} className="d-flex flex-md-wrap flex-md-row">
          <CardsLocations/>
          <CardsLocations/>
          <CardsLocations/>
          </Col>
          <Col lg={6}>
           
          </Col>
        </Row>
      </Container>
  </>;
};

export default Locations;
