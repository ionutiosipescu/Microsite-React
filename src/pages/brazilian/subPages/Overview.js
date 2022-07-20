import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import YellowButton from "../../../components/buttons/YellowButton";
import { NewsCell } from "./subPages.style";
import CardOverview from "../../../components/cards/CardProfessionals";
import CareersInDigital from "../../../components/cards/CareersInDigital";
import image from "../../../assets/images/ConnorWine";
import CardProfessionals from "../../../components/cards/CardProfessionals";
import TranslateButton from "../../../components/buttons/TranslateButton";
import styled from "styled-components";
import CardOurServices from "../../../components/cards/CardOurServices";

const OverviewContainer = styled.div`
  .firstSection {
    /* padding-right: 100px; */
    /* padding-left: 30px; */
    border-right: 2px solid var(--gray5);
  }
`;

const Overview = () => {
  const cardContent = {
    imageSrc: image,
    name: "Connor Colquhoun",
    position: "wine connoisseur",
    country: "japan",
    buttonText: "connect",
  };
  return (
    <OverviewContainer>
      <Row className="p-0 m-0 d-flex flex-column flex-lg-row">
        <Col lg={9} className=" firstSection p-5">
          <Row>
            <TranslateButton text1={"English"} text2={"Portuguese"} />
          </Row>
          <h1 className="my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </h1>
          <div className="text-muted">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>

          <div className="my-5 border-bottom border-top border-3 ">
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
          <CardOurServices/>
        </Col>
        <Col lg={3} className=" px-0  flex-grow-1">
          <CardProfessionals {...cardContent} />
          <CardProfessionals {...cardContent} />

          <CareersInDigital />
        </Col>
      </Row>
    </OverviewContainer>
  );
};

export default Overview;
