import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import YellowButton from "../../../components/buttons/YellowButton";
import { NewsCell } from "./subPages.style";
import CardProfessionals from "../../../components/cards/CardProfessionals";
import CareersInDigital from "../../../components/cards/CareersInDigital";
import image from "../../../assets/images/ConnorWine";
import { Col_3, Col_9, Row_9_3 } from "../../../components/layout/Rows&Collumns/Rows&Collumns";
import CardCapabilities from "../../../components/cards/CardCapabilities";
import RelatedInsight_Table from "../../../components/tables/RelatedInsight-Table";
import Heading_Paragraph from "../../../components/H&P/H&P";

const Practice = () => {
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
      <Row_9_3>
        <Col_9>
        <Heading_Paragraph/>  
          <RelatedInsight_Table/>
		  <CardCapabilities/>
		</Col_9>
        <Col_3>
          <CardProfessionals {...cardContent} />
          <CardProfessionals {...cardContent} />
          <CareersInDigital />
        </Col_3>
      </Row_9_3>
    </>
  );
};

export default Practice;
