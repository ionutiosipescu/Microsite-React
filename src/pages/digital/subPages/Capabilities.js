import React from "react";
import {
  CareersInDigital,
 
} from "../../../components/cards/";
import image from "../../../assets/images/ConnorWine";
import IFrame from "../../../components/IFrame";
import {
  StyledCol2,
  StyledCol1,
  StyledRow,
} from "../../../components/layout/Rows&Collumns/Rows&Collumns.style.js";
import { useDocumentTitle } from "../../../hook";
import CardProfessionalsNew from "../../../components/cards/CardProfessionalsNew";
import ContactandSubscribeCard from "../../../components/cards/ContactandSubscribeCard";

const Capabilities = () => {
  // Card overview content from backend
  const cardContent = {
    imageSrc: image,
    name: "Connor Colquhoun",
    position: "wine connoisseur",
    country: "japan",
    buttonText: "connect",
  };
  useDocumentTitle("Digital | Capabilities | Alvarez & Marsal");
  return (
    <>
      <StyledRow>
        <StyledCol1>
          <h2>Our Goal is to Deliver practical</h2>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>

          <IFrame />
          <h2>Our Goal is to Deliver practical</h2>
          <p>
            Proident veniam quis proident duis velit. Id ipsum mollit officia
            sint irure enim magna nisi. Nostrud cupidatat adipisicing tempor eu.
            Nisi sint officia ea ex proident enim Lorem voluptate non esse
          </p>
        </StyledCol1>
        <StyledCol2>
          <CardProfessionalsNew {...cardContent} />
          <CardProfessionalsNew {...cardContent} />
          <ContactandSubscribeCard/>
        </StyledCol2>
      </StyledRow>
    </>
  );
};

export default Capabilities;
