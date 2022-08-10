import React, { useState, useEffect } from "react";
import CardProfessionals from "../../../components/cards/CardProfessionals";
import CareersInDigital from "../../../components/cards/CareersInDigital";
import image from "../../../assets/images/ConnorWine";
import {
  StyledCol2,
  StyledCol1,
  StyledRow,
} from "../../../components/layout/Rows&Collumns/Rows&Collumns.style.js";

import CardCapabilities from "../../../components/cards/CardCapabilities";
import Heading_Paragraph from "../../../components/H&P/H&P";
import { getArticles } from "../../../API";
import RelatedInsigts_Table from "../../../components/cards/RelatedInsigts_Table";
import { TableContainer } from "../../../components/tables/TableContainer";
import { Table } from "../../../components/tables/Table";
import { CardInsights } from "../../../components/cards";
import { getSinglePodcast } from "../../../API";
import DOMPurify from "dompurify";
import { ButtonWithAnimation } from "../../../components/buttons";

const Practice = () => {
  const cardContent = {
    imageSrc: image,
    name: "Connor Colquhoun",
    position: "wine connoisseur",
    country: "japan",
    buttonText: "connect",
  };
  const [insights, setInsights] = useState([]);
  const [podcast, setPodcast] = useState([]);

  useEffect(() => {
    getArticles(setInsights, "insights", 6);
  }, []);

  useEffect(() => {
    getSinglePodcast(setPodcast);
  }, []);

  return (
    <>
      <ButtonWithAnimation text={"some text"} />
      <ButtonWithAnimation black />

      {/* <StyledRow>
        <StyledCol1>
          <Heading_Paragraph />
          <CardCapabilities />
              <TableContainer>
                <h3>Related Insights</h3>
                            <Table>
                
                          {insights.map((post) => {
                return(
                  <div>
                    <RelatedInsigts_Table post={post}></RelatedInsigts_Table>
                  </div>
                );
                          })}
                            </Table>
              </TableContainer>


              <h4 className="pt-5 ps-3 fw-bold">{podcast?.title} </h4>
                  <div
                    className="container pt-3 text-decoration-none"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(podcast?.content),
                    }}
                  ></div>
      

        </StyledCol1>
        <StyledCol2>
          <CardProfessionals {...cardContent} />
          <CardProfessionals {...cardContent} />
          <CareersInDigital />
        </StyledCol2>
      </StyledRow> */}
    </>
  );
};

export default Practice;
