import React, { useState, createContext } from "react"
import { HeroSection } from "../../components/cards"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import { useSelector } from "react-redux"
import { insightTypes } from "../../components/navbars/InsightsNavbar"
import HealthPodcasts from "./HealthPodcasts"
import ArticleInsightType from "./ArticleInsightType"
import MultipleInsightTypes from "./MultipleInsightTypes.jsx"
export const ContentContext = createContext()

const Insights = () => {
  const { currentInsightType } = useSelector(state => state.filters)

  // Object with all components. The key names of the object are important. they are the equal to currentInsightType.identifier values
  const insightTypeObj = {
    all: <MultipleInsightTypes />,
    industryInsights: <ArticleInsightType insightType={insightTypes[1]} />,
    caseStudies: <ArticleInsightType insightType={insightTypes[2]} />,

    healthPodcasts: <HealthPodcasts insightType={insightTypes[3]} />,
  }

  return (
    <>
      <HeroSection
        title="Latest Studies"
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <StyledContainer>
        {insightTypeObj[currentInsightType.identifier]}
      </StyledContainer>
    </>
  )
}

export default Insights
