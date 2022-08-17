import React, { useState, useEffect } from "react"
import { ArticlePreviewCard, HeroSection } from "../../components/cards"

import { getInsightFilters, getInsights, fetchData } from "../../API"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"

import { useDocumentTitle } from "../../hook"
import UnalignedItemsConainer from "../../components/layout/UnalignedItemsContainer"

const Insights = () => {
  let persistedFilters = JSON.parse(
    sessionStorage.getItem("latestInsightsFilters")
  )

  // Filters that were selected by the user or taken from the session storage
  const [selectedFilters, setSelectedFilters] = useState(persistedFilters || [])

  // Getting the latest articles from server
  const [carouselData, setCarouselData] = useState([])
  const [insightsContent, setInsightsContent] = useState([])

  // Fetched filters from the server
  const [filters, setFilters] = useState(null)

  useEffect(() => {
    fetchData(setCarouselData)
    getInsights(setInsightsContent, selectedFilters)
    getInsightFilters(setFilters)
  }, [])

  useEffect(() => {
    sessionStorage.setItem(
      "latestInsightsFilters",
      JSON.stringify(selectedFilters)
    )
    getInsights(setInsightsContent, selectedFilters)
  }, [selectedFilters])

  useDocumentTitle("Insights | Latest Insights | Alvarez & Marsal")

  return (
    <>
      <HeroSection
        title=" Latest Studies"
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <StyledContainer>
        <UnalignedItemsConainer columnsNumber={3}>
          {insightsContent?.map((article, index) => (
            <ArticlePreviewCard {...article} key={index} />
          ))}
        </UnalignedItemsConainer>
      </StyledContainer>
    </>
  )
}

export default Insights
