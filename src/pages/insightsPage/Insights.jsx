import React, { useState, useEffect } from "react"
import {
  ArticlePreviewCard,
  HeroSection,
  PodcastCard,
} from "../../components/cards"
import { InsightsContainer } from "./styles/inisghts.style"
import { getPodcasts, getInsights } from "../../API"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import { useSelector } from "react-redux"
import { useDocumentTitle } from "../../hook"
import UnalignedItemsConainer from "../../components/layout/UnalignedItemsContainer"
import { Spinner } from "../../components"

const Insights = () => {
  const { currentInsightType, filters } = useSelector(state => state.filters)

  // Articles with field catergory = Business & Industry Insights, id: b7d6df12-5304-4aaf-ab3d-265acd0fb33c
  const [industryInsights, setIndustryInsights] = useState(null)

  // Articles with field catergory = Health & Life Case Studies, id: f1d36195-6097-4860-ad51-3e7146dba239
  const [caseStudies, setCaseStudies] = useState(null)

  // Articles with field catergory = Health & Life Podcast, id: f488f6ff-6a3d-4637-b45c-5ed578cf85f6
  const [healthPodcasts, setHealthPodcasts] = useState(null)

  const articles = {
    all: true,
    industryInsights: industryInsights,
    caseStudies: caseStudies,
    healthPodcasts: healthPodcasts,
  }

  // Component Mount. Get Insights from the server
  useEffect(() => {
    getInsights(setIndustryInsights, filters, "industryInsights")
    getInsights(setCaseStudies, filters, "caseStudies")
    getPodcasts(setHealthPodcasts, filters, "healthPodcasts")
  }, [])

  // Filters were Selected by the user. Get new Insights from the server
  useEffect(() => {
    getInsights(setIndustryInsights, filters, "industryInsights")
    getInsights(setCaseStudies, filters, "caseStudies")
    getPodcasts(setHealthPodcasts, filters, "healthPodcasts")
  }, [filters])

  useDocumentTitle("Insights | Latest Insights | Alvarez & Marsal")

  return (
    <>
      <HeroSection
        title=" Latest Studies"
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      {articles.industryInsights &&
      articles.caseStudies &&
      articles.healthPodcasts ? (
        <StyledContainer>
          {currentInsightType !== "all" ? (
            <UnalignedItemsConainer>
              {articles[currentInsightType].map((item, index) => {
                if (currentInsightType === "healthPodcasts") {
                  return <PodcastCard {...item} key={index} />
                }
                return <ArticlePreviewCard key={index} articleInfo={item} />
              })}
            </UnalignedItemsConainer>
          ) : (
            <InsightsContainer>
              <div>
                {articles.industryInsights.map((article, index) => (
                  <ArticlePreviewCard articleInfo={article} key={index} />
                ))}
              </div>
              <div>
                {articles.caseStudies.map((article, index) => (
                  <ArticlePreviewCard articleInfo={article} key={index} />
                ))}
              </div>
              <div>
                {articles.healthPodcasts.map((podcast, index) => (
                  <PodcastCard {...podcast} key={index} />
                ))}
              </div>
            </InsightsContainer>
          )}
        </StyledContainer>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default Insights
