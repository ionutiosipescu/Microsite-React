import React from "react";
import styled from "styled-components";
import { size } from "../../utils/breakpoints";
import { Container, Row, Col } from "react-bootstrap";
import YellowButton from "../buttons/YellowButton";


const LinksContainer = styled.div`
.listLinks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    padding-left: 0;
}
`


const CardOurServices = () => {
    return (
        <Container
            className=" my-4 p-4 rounded"
            style={{ background: "var(--gray1" }}
          >
            <Row className=" ">
              <Col>
                <h4 className="fw-bold ">{cardData[0].title}</h4>
                <Row className="my-4 fw-bold">
                    <LinksContainer>
                        {cardData?.map(element => {
                            return (
                                    <ul className="listLinks">
                                        {/* Mapping every link in a li */}
                                        {element?.links.map(link => {
                                            return (
                                                <li href={'#'}>
                                                    {link}
                                                </li>
                                            )
                                        })}
                                        <li>
                                            <YellowButton
                                            text={"Read more about our Services"}
                                            width="80%"
                                            className="mt-4 fs-4"
                                            />
                                        </li>
                                    </ul>
                                )
                            })}
                    </LinksContainer>
                </Row>
              </Col>
            </Row>
          </Container>
    )
}

// Simulare API
const cardData = [
    {
      title: "Our Services",
      links: [
        "Coorporate Transformation",
        "Restructuring & Turnaround",
        "Private Equity Services",
        "Interim and Crisis Management",
        "Transaction Advisory",
        "Disputes and Investigations",
        "Judicial Administration / Trustee Services",
        "Infrastructure & Capital Projects",
        "Real Estate"
    ]
    }
  ]
export default CardOurServices;


