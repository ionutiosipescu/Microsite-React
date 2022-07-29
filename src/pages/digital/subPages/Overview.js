import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import YellowButton from "../../../components/buttons/YellowButton";
// import { NewsCell as div } from "./subPages.style";
import CardProfessionals from "../../../components/cards/CardProfessionals";
import CareersInDigital from "../../../components/cards/CareersInDigital";
import image from "../../../assets/images/ConnorWine";
import CardCapabilities from "../../../components/cards/CardCapabilities";
import RelatedInsight_Table from "../../../components/tables/RelatedInsight-Table";
import {
  StyledCol2,
  StyledCol1,
  StyledRow,
} from "../../../components/layout/Rows&Collumns/Rows&Collumns.style.js";
import { useDocumentTitle } from "../../../hook";

const Overview = () => {
  // Card overview content from backend
  const cardContent = {
    imageSrc: image,
    name: "Connor Colquhoun",
    position: "wine connoisseur",
    country: "japan",
    buttonText: "connect",
  };
  useDocumentTitle("Digital | Home | Alvarez & Marsal");
  return (
    <>
      <StyledRow>
        <StyledCol1>
          <h1 className="my-4">
            Lorem IpsuCulpa sint magna ullamco irure reprehenderit occaecat
          </h1>
          <p>
            Esse iasdfncididunt deserunt esse aute. Est proident excepteur
            deserunt cillum labore ea esse eiusmod do aliqua anim. Eiusmod elit
            enim id dolor aliquip occaecat velit proident.
          </p>
          <p>
            Esse incididunt deserunt esse aute. Est proident excepteur deserunt
            in in minim sunt exercitation et ipsum dolor et. Commodo cillum
            dolor aliquip occaecat velit proident.
          </p>
          <CardCapabilities />

          <RelatedInsight_Table />
        </StyledCol1>
        <StyledCol2>
          <CardProfessionals {...cardContent} />
          <CardProfessionals {...cardContent} />

          <CareersInDigital />
        </StyledCol2>
      </StyledRow>
    </>
  );
};

export default Overview;
