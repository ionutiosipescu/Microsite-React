import React, {useState, useEffect} from "react";
import CardProfessionals from "../../../components/cards/CardProfessionals";
import CareersInDigital from "../../../components/cards/CareersInDigital";
import image from "../../../assets/images/ConnorWine";
import {
  StyledCol2,
  StyledCol1,
  StyledRow,
} from "../../../components/layout/Rows&Collumns/Rows&Collumns.style.js";
import CardCapabilities from "../../../components/cards/CardCapabilities";
import RelatedInsight_Table from "../../../components/tables/RelatedInsight-Table";
import Heading_Paragraph from "../../../components/H&P/H&P";
import { getArticles } from "../../../API";
import styled from "styled-components";
import TestTable1 from "../../../components/cards/TestTable1";
import TestTable2 from "../../../components/cards/TestTable2";

const Table = styled.div`
 display: flex;
`
// const Table1= styled.div`
// padding: 20px 0;
// `
// const Table2= styled.div`
// padding: 20px 0;
// `
const Practice = () => {
  const cardContent = {
    imageSrc: image,
    name: "Connor Colquhoun",
    position: "wine connoisseur",
    country: "japan",
    buttonText: "connect",
  };
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    getArticles(setInsights, "insights", 2);
  }, []);


  return (
    <>
      <StyledRow>
        <StyledCol1>
          <Heading_Paragraph />
          <Table>  
          {insights.map((post) => {
            return(
              <div>
                <TestTable1 post={post}></TestTable1>
                <TestTable2 post={post}></TestTable2>
              </div>
            );
          })}
          </Table>
          <CardCapabilities />
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

export default Practice;
