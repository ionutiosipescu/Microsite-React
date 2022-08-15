import React, { useEffect } from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import image from "../../../assets/images/ConnorWine";
import TranslateButton from "../../../components/buttons/TranslateButton";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchBrazilianOverview } from "../../../store/actions/brazilian/brazilianOverview";
import { fetchBrazilLeaders } from "../../../store/actions/brazilian/brazilLeaders";

const OverviewContainer = styled.div`
  .descriptionBody {
    p {
      a {
        color: var(--hover-blue);
        text-decoration: none;
      }
      .orange-button {
        display: none;
      }
    }
  }
`;

const Overview = () => {
  const dispatch = useDispatch();
  const overviewSection = useSelector(
    (state) => state.brazilianOverview.overviewSection
  );
  // const leaders = useSelector((state) => state.brazilianOverview.leaders);
  const leaders = useSelector((state) => state?.brazilLeaders.leaders);

  useEffect(() => {
    dispatch(fetchBrazilianOverview());
    dispatch(fetchBrazilLeaders());
  }, []);
  useDocumentTitle("Brazil | Home | Alvarez & Marsal");

  return (
    <OverviewContainer>
      <StyledRow>
        <StyledCol1>
          <Row>
            <TranslateButton text1={"English"} text2={"Portuguese"} />
          </Row>
          <div
            className=" pt-3 text-decoration-none"
            dangerouslySetInnerHTML={{
              __html: overviewSection?.title,
            }}
          ></div>
          {console.log(overviewSection?.descriptionBody)}
          <div className="text-muted descriptionBody">
            <div
              className=" pt-3 text-decoration-none"
              style={{ textDecoration: "none" }}
              dangerouslySetInnerHTML={{
                __html: overviewSection?.descriptionBody,
              }}
            ></div>
          </div>

          {/* <div className="my-5 border-bottom border-top border-3 ">
            <h4 className=" py-2" style={{ color: "var(--lightBlue)" }}>
              {" "}
              Brazilian Restructuring and Insolvency Engagements
            </h4>
            <p>
              Esse incididunt deserunt esse aute. Est proident excepteur
              deserunt in in minim sunt exercitation et ipsum dolor et. Commodo
              cillum dolor aliquip occaecat velit proident.
            </p>
          </div> */}
          <CardOurServices />
        </StyledCol1>
        <StyledCol2>
          {leaders?.map((leader) => {
            console.log(leader);
            var cardContent = {
              imageSrc: leader.image,
              name: leader.name,
              position: leader.position,
              country: leader.country.name,
              country1: leader?.country1?.name,
              link: leader.linkOurPeople,
              buttonText: "connect",
            };

            return <CardProfessionals {...cardContent} />;
          })}
          {/* <CardProfessionals {...cardContent} />
          <CardProfessionals {...cardContent} /> */}

          <CareersInDigital textCareers={overviewSection?.careersText} />
        </StyledCol2>
      </StyledRow>
    </OverviewContainer>
  );
};

export default Overview;
