import React, { useEffect, useState } from "react"
import {
  HeroSection,
  ServiceCard,
  ProfessionalCard,
} from "../../components/cards"
import Connor from "../../assets/images/ConnorWine"
import {
  StyledCol2,
  StyledCol1,
  StyledRow,
} from "../../components/layout/Rows&Collumns/Rows&Collumns.style.js"
import { useDocumentTitle } from "../../hook"
import { Spinner } from "../../components"

const ExpertisePharma = () => {
  // Card content
  const cardContent = {
    imageSrc: Connor,
    name: "Connor Colquhoun",
    position: "wine connoisseur",
    // country: 'japan',
    buttonText: "connect",
  }

  useDocumentTitle(
    "Expertise | Pharma & MedTech Portfolio Management | Alvarez & Marsal"
  )
  return (
    <>
      <HeroSection
        title={"Pharma & MedTech Portfolio Management"}
        pageTitle={"Expertise"}
      />
      <StyledRow>
        <StyledCol1>
          <p>
            Sit excepteur ullamco tempor excepteur fugiat amet culpa consectetur
            ea ut fugiat. Laborum irure non qui nulla minim anim reprehenderit
            Sit excepteur ullamco tempor excepteur fugiat amet culpa consectetur
            ea ut fugiat. Laborum irure non qui nulla minim anim
            reprehenderitSit excepteur ullamco tempor excepteur fugiat amet
            culpa consectetur ea ut fugiat. Laborum irure non qui nulla minim
            anim reprehenderit
          </p>

          <h3 className="text-primary fw-bold">Our Services</h3>
          <ServiceCard
            title="Strategic Transformation"
            conntent={
              "ea ut fugiat. Laborum irure non qui nulla minim anim ea ut fugiat. Laborum irure non qui nulla minim anim "
            }
          />
          <ServiceCard
            title="Strategic Transformation"
            conntent={
              "ea ut fugiat. Laborum irure non qui nulla minim anim ea ut fugiat. Laborum irure non qui nulla minim anim "
            }
          />
          <ServiceCard
            title="Strategic Transformation"
            conntent={
              "ea ut fugiat. Laborum irure non qui nulla minim anim ea ut fugiat. Laborum irure non qui nulla minim anim "
            }
          />
          <ServiceCard
            title="Strategic Transformation"
            conntent={
              "ea ut fugiat. Laborum irure non qui nulla minim anim ea ut fugiat. Laborum irure non qui nulla minim anim "
            }
          />
        </StyledCol1>
        <StyledCol2>
          <ProfessionalCard {...cardContent} />
          <ProfessionalCard {...cardContent} />
        </StyledCol2>
      </StyledRow>
    </>
  )
}

export default ExpertisePharma
