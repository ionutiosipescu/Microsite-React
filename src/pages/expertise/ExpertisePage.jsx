import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import {
  HeroSection,
  Services,
  CardProfessionals,
  CarouselSection,
} from "../../components/cards";
import BreadCrumb from "../../components/BreadCrumb";
import Connor from "../../assets/images/ConnorWine";
import { arr } from "../../utils/data";
import {
  StyledCol2,
  StyledCol1,
  StyledRow,
} from "../../components/layout/Rows&Collumns/Rows&Collumns.style.js";
import { useDocumentTitle } from "../../hook";
import { fetchData } from "../../API";
import { Spinner } from "../../components";
import styled from "styled-components";

const ExpertisePageContainer = styled.div`
  .leftSection {
    border-right: 3px solid var(--gray1);
  }
  .heroContainer {
    h1 {
      font-size: 80px;
      line-height: 80px;
      letter-spacing: 1px;
    }
  }
`;

const ExpertisePage = () => {
  const { state } = useLocation();
  const [carouselData, setCarouselData] = useState([]);

  // Card content
  const cardContent = {
    imageSrc: Connor,
    name: "Connor Colquhoun",
    position: "wine LOVERLOVER ",
    // country: 'japan',
    buttonText: "connect",
  };
  useEffect(() => {
    fetchData(setCarouselData);
  }, []);

  useDocumentTitle(
    "Expertise | Pharma & MedTech Portfolio Management | Alvarez & Marsal"
  );

  return (
    <ExpertisePageContainer>
      <HeroSection
        title={state?.title}
        pageTitle={"Expertise"}
        className="heroContainer"
        backgroundUrl={
          "https://images.unsplash.com/photo-1581610186406-5f6e9f9edbc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
      <StyledRow>
        <StyledCol1 className="leftSection">
          <BreadCrumb route={"Expertise"} subRoute={state?.title} />
          <p>{state?.description}</p>

          <h3 className="text-primary fw-bold">Our Services</h3>
          {[1, 2, 3].map(() => (
            <Services
              title="Strategic Transformation"
              conntent={
                "ea ut fugiat. Laborum irure non qui nulla minim anim ea ut fugiat. Laborum irure non qui nulla minim anim "
              }
            />
          ))}
        </StyledCol1>
        <StyledCol2>
          <CardProfessionals {...cardContent} />
          <CardProfessionals {...cardContent} />
        </StyledCol2>
      </StyledRow>
      {carouselData.length === 0 ? (
        <Spinner />
      ) : (
        <CarouselSection
          categoryCarousel={carouselData?.block_two?.title}
          backgroundColor="#002B49"
          arr={carouselData?.block_two?.data}
          titleColor="#0085CA"
          textColor="#fff"
          textDate="#FFF"
          carouselDotBackground="#002b49"
        />
      )}
    </ExpertisePageContainer>
  );
};

export default ExpertisePage;
