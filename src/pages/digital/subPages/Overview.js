import React, { useEffect, useState } from "react";
// import { NewsCell as div } from "./subPages.style";
import CardProfessionals from "../../../components/cards/CardProfessionals";
import CareersInDigital from "../../../components/cards/CareersInDigital";
import image from "../../../assets/images/ConnorWine";
import CardCapabilities from "../../../components/cards/CardCapabilities";
import {
  StyledCol2,
  StyledCol1,
  StyledRow,
} from "../../../components/layout/Rows&Collumns/Rows&Collumns.style.js";
import { useDocumentTitle } from "../../../hook";
import { TableContainer } from "../../../components/tables/TableContainer";
import { Table } from "../../../components/tables/Table";
import RelatedInsigts_Table from "../../../components/cards/RelatedInsigts_Table";
import { getArticles } from "../../../API";

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

  const [insights, setInsights] = useState([]);

  useEffect(() => {
    getArticles(setInsights, "insights", 6);
  }, []);
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
          <TableContainer>
            <h3>Related Insights</h3>
            <Table>
              {insights.map((post) => {
                return (
                  <div>
                    <RelatedInsigts_Table post={post}></RelatedInsigts_Table>
                  </div>
                );
              })}
            </Table>
          </TableContainer>
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
