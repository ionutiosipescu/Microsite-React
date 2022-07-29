import React from "react";
import { Row } from "react-bootstrap";
import image from "../../../assets/images/ConnorWine";
import TranslateButton from "../../../components/buttons/TranslateButton";
import { Axios } from "axios";
import {
  CardOurServices,
  CardProfessionals,
  CareersInDigital,
} from "../../../components/cards";
import {
  StyledCol2,
  StyledCol1,
  StyledRow,
} from "../../../components/layout/Rows&Collumns/Rows&Collumns.style.js";
import { useDocumentTitle } from "../../../hook";

const Overview = () => {
  const cardContent = {
    imageSrc: image,
    name: "Connor Colquhoun",
    position: "wine connoisseur",
    country: "japan",
    buttonText: "connect",
  };
  useDocumentTitle("Brazil | Home | Alvarez & Marsal");
  return (
    <>
      <StyledRow>
        <StyledCol1>
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
          <CardOurServices />
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
