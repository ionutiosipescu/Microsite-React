import React, { useState, useEffect } from "react"
import image from "../../../assets/images/ConnorWine"
import {
  StyledCol2,
  StyledCol1,
  StyledRow,
} from "../../../components/layout/Rows&Collumns/Rows&Collumns.style.js"

import CardCapabilities from "../../../components/cards/CardCapabilities"
import Heading_Paragraph from "../../../components/H&P/H&P"
import { getArticles } from "../../../API"
import RelatedInsigts_Table from "../../../components/cards/RelatedInsigts_Table"
import { TableContainer } from "../../../components/tables/TableContainer"
import { Table } from "../../../components/tables/Table"
import {
  ArticlePreviewCard,
  CardInsights,
  ExpertiseCard,
} from "../../../components/cards"
import { getSinglePodcast } from "../../../API"
import DOMPurify from "dompurify"
import { ButtonWithAnimation } from "../../../components/buttons"
import UnalignedItemsConainer from "../../../components/layout/UnalignedItemsContainer"
import Axios from "axios"
import CardProfessionalsNews from "../../../components/cards/CardProfessionalsNew"
import { InsightsNavbar } from "../../../components/navbarComponents"
import { getSinglePodcast } from "../../../API";
import DOMPurify from "dompurify";
import { ButtonWithAnimation } from "../../../components/buttons";
import UnalignedItemsConainer from "../../../components/layout/UnalignedItemsContainer";
import CardProfessionalsNews from "../../../components/cards/CardProfessionalsNew";
import CardPodcast from "../../../components/cards/CardPodcast";



const Practice = () => {
  const link = process.env.REACT_APP_CUSTOM_API_URL + "/hls"

  console.log(link)

  // useEffect(() => {
  //   Axios.get(link).then(res => {
  //     // console.log(res.data)
  //   })
  // }, [])

  const content =
    "Lorem  Consequat anim eiusmod reprehenderit ut in eiusmod ea ipsum ex. Elit anim amet quis excepteur sint voluptate cillum minim incididunt veniam sint. Esse pariatur magna adipisicing amet do sint amet reprehenderit adipisicing."

  return (
    <>
      <div
        style={{
          background: "black",
          width: "100%",
        }}
      >
        <InsightsNavbar />
      </div>
      <div className="p-3">
        <ButtonWithAnimation text={"some text"} />
        <ButtonWithAnimation black />

        <h1>Those are expertises</h1>
        <UnalignedItemsConainer columnsNumber={3}>
          <ExpertiseCard content={content} />
          <ExpertiseCard />
          <ExpertiseCard />
          <ExpertiseCard />
          <ExpertiseCard content={content} />
          <ExpertiseCard />
          <ExpertiseCard />
          <ExpertiseCard />
        </UnalignedItemsConainer>
        <h1>Those are Articles</h1>
        <UnalignedItemsConainer>
          <ArticlePreviewCard content={content} />
          <ArticlePreviewCard />
          <ArticlePreviewCard />
          <ArticlePreviewCard />
          <ArticlePreviewCard content={content} />
          <ArticlePreviewCard />
          <CardPodcast/>
        </UnalignedItemsConainer>
      </div>
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
        <CardProfessionalsNews {...cardContent} />
        </StyledCol2>
      </StyledRow> */}
    </>
  )
}

export default Practice
