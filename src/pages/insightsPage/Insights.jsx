import React, { useState, createContext } from "react"
import { HeroSection } from "../../components/cards"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import { useSelector } from "react-redux"
import { insightTypes } from "../../components/navbarComponents/inisightsNavbar/InsightsNavbar"
import HealthPodcasts from "./HealthPodcasts"
import ArticleInsightType from "./ArticleInsightType"
import MultipleInsightTypes from "./MultipleInsightTypes.jsx"
import CaseStudies from "./CaseStudies"
export const ContentContext = createContext()

const Insights = () => {
  const { currentInsightType } = useSelector(state => state.filters)

  const [content, setContent] = useState(null)
  const [nextPage, setNextPage] = useState(0)
  const [nextPodcastPage, setNextPodcastPage] = useState(null)

  // those are bad
  const value = {
    content: content,
    setContent: setContent,
    nextPage: nextPage,
    setNextPage: setNextPage,
    nextPodcastPage: nextPodcastPage,
    setNextPodcastPage: setNextPodcastPage,
  }

  // Object with all components. The key names of the object are important. they are the equal to currentInsightType.identifier values
  const insightTypeObj = {
    all: <MultipleInsightTypes />,
    industryInsights: <ArticleInsightType insightType={insightTypes[1]} />,
    caseStudies: <CaseStudies insightType={insightTypes[2]} />,
    healthPodcasts: <HealthPodcasts />,
  }

  return (
    <ContentContext.Provider value={value}>
      <HeroSection
        title="Latest Studies"
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <StyledContainer>
        {insightTypeObj[currentInsightType.identifier]}
      </StyledContainer>
    </ContentContext.Provider>
  )
}

export default Insights
