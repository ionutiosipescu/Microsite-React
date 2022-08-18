import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getSingleArticle } from "../../API"
import { useDocumentTitle } from "../../hook/useDocumentTitle"
import {
  ContactSubscribeCard,
  HeroSection,
  ProfessionalCard,
  SocialsCard,
} from "../../components/cards"
import { Spinner } from "../../components"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import * as S from "./styles/SingleInsgightPage.styles"

const SingleInsgightPage = () => {
  const { state } = useLocation()
  const [articleData, setArticleData] = useState(null)

  useEffect(() => {
    getSingleArticle(setArticleData, state)
  }, [])

  useDocumentTitle(articleData?.title)

  console.log("This is articleData", articleData)

  return (
    <>
      {articleData ? (
        <>
          <HeroSection
            title=" Latest Studies"
            backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <StyledContainer>
            <S.Container>
              <S.Article
                dangerouslySetInnerHTML={{ __html: articleData.content }}
              ></S.Article>
              <S.RightSection>
                <h4>FEATURED PROFILES</h4>
                <ProfessionalCard />
                <ProfessionalCard />
                <ProfessionalCard />
                <ContactSubscribeCard />
                <SocialsCard />
              </S.RightSection>
            </S.Container>
          </StyledContainer>
        </>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default SingleInsgightPage
