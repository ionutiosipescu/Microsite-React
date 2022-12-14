import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getSingleArticle } from "../../API"
import { useDocumentTitle } from "../../hook/useDocumentTitle"
import {
  ContactSubscribeCard,
  HeroSection,
  SocialsCard,
  FeaturedProfileCard,
} from "../../components/cards"
import { Spinner } from "../../components"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import * as S from "./SingleInsgightPage.styles"
import DOMPurify from "dompurify"

const SingleInsgightPage = () => {
  const { state } = useLocation()

  const [articleData, setArticleData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await getSingleArticle(state)
      setArticleData(data)
    }
    getData()
  }, [state])

  useDocumentTitle(articleData?.title)

  if (!articleData) {
    return <Spinner />
  }

  return (
    <>
      <HeroSection
        height={360}
        title={articleData.title || "No title"}
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        date={articleData.date || "No date"}
        route={{
          route: "health & life insigths",
          subRoute: "health & life case studies",
        }}
      />
      <StyledContainer>
        <S.Container>
          <S.Article
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(articleData.content),
            }}
          ></S.Article>
          <S.RightSection>
            {articleData.authors && (
              <>
                <h3>AUTHORS</h3>
                {articleData.authors &&
                  articleData.authors.map((author, index) => (
                    <FeaturedProfileCard {...author} key={index} />
                  ))}
              </>
            )}

            {articleData.experts && (
              <>
                <h3>FEATURED PROFILES</h3>

                {articleData.experts &&
                  articleData.experts.map((expert, index) => (
                    <FeaturedProfileCard {...expert} key={index} />
                  ))}
              </>
            )}
            <ContactSubscribeCard />
            <SocialsCard internalId={articleData.internalId} />
          </S.RightSection>
        </S.Container>
      </StyledContainer>
    </>
  )
}

export default SingleInsgightPage
