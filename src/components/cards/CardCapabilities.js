import React from "react";
import styled from "styled-components";
import { size } from "../../utils/breakpoints";
import { Container, Row, Col } from "react-bootstrap";
import YellowButton from "../buttons/YellowButton";

const ContainerCard = styled.div`
  #container {
    background: var(--gray1)
  }
`


const CardCapabilities = () => {
    return (
        <ContainerCard>
            <Container className=" my-4 p-4" id="container">
                <Row>
                    <Col>
                        <h4 className="fw-bold text-primary">Our Capabilities</h4>
                        <Row className="my-4 fw-bold">
                        <Col>
                            <div>Digital Strategy</div>
                            <div>Digital Strategy</div>
                        </Col>
                        <Col>
                            <div>Digital Strategy</div>
                            <div>Digital Strategy</div>
                        </Col>
                        <Col>
                            <div>Digital Strategy</div>
                            <div>Digital Strategy</div>
                        </Col>
                        </Row>
                        <YellowButton
                        text={"Read more about our Capabilities"}
                        ></YellowButton>
                    </Col>
                </Row>
            </Container>
        </ContainerCard>
    )
}

export default CardCapabilities;