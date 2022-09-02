import React, { useState, useEffect, createContext, useContext } from "react"
import {
  ArticlePreviewCard,
  HeroSection,
  PodcastCard,
} from "../../components/cards"
import { InsightsContainer } from "./styles/inisghts.style"
import { getPodcasts, getAllInsightTypes, getInsights } from "../../API"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import { useSelector } from "react-redux"
import UnalignedItemsConainer from "../../components/layout/UnalignedItemsContainer"
import { Spinner } from "../../components"
import InfiniteScroll from "react-infinite-scroll-component"
import { useCallback } from "react"
import { useMemo } from "react"

const loader = (
  <div key="loader" className="loader">
    Loading ...
  </div>
)

export const ContentContext = createContext()

const Insights = () => {
  const { currentInsightType } = useSelector(state => state.filters)

  const [content, setContent] = useState([])
  const [nextPage, setNextPage] = useState(0)

  const value = {
    content: content,
    setContent: setContent,
    nextPage: nextPage,
    setNextPage: setNextPage,
  }

  return (
    <ContentContext.Provider value={value}>
      <HeroSection
        title=" Latest Studies"
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <StyledContainer>
        {currentInsightType.identifier === "all" ? (
          <MultipleInsightCategories />
        ) : (
          <OneInsightCategory />
        )}
      </StyledContainer>
    </ContentContext.Provider>
  )
}

const OneInsightCategory = () => {
  const { currentInsightType, filters } = useSelector(state => state.filters)

  const { content, setContent, nextPage, setNextPage } =
    useContext(ContentContext)

  useEffect(() => {
    const getData = async () => {
      const data = await getInsights(currentInsightType, filters, nextPage)
      setContent(data)
    }
    getData()
  }, [filters])

  // This is for infinite scrolling
  const getMoreInsights = async () => {
    const data = await getInsights(currentInsightType, filters, nextPage)
    setNextPage(nextPage + 1)
    setContent([...content, ...data])
  }

  console.log("This is content", content)
  console.log("This is nextPage", nextPage)

  if (!content.length > 0) {
    return <Spinner />
  }

  return (
    <InfiniteScroll
      dataLength={content.length || 0}
      loader={loader}
      hasMore={true}
      next={getMoreInsights}
    >
      <UnalignedItemsConainer>
        {content.map((item, index) => {
          if (currentInsightType === "healthPodcasts") {
            return <PodcastCard {...item} key={index} />
          }
          return <ArticlePreviewCard key={index} {...item} />
        })}
      </UnalignedItemsConainer>
    </InfiniteScroll>
  )
}

const MultipleInsightCategories = () => {
  const { currentInsightType, filters } = useSelector(state => state.filters)
  const [allInsightTypes, setAllInsightTypes] = useState(null)

  useEffect(() => {
    getAllInsightTypes(setAllInsightTypes, currentInsightType, filters)
  }, [currentInsightType, filters])

  if (!allInsightTypes) {
    return <Spinner />
  }

  return (
    <InsightsContainer>
      <div>
        {allInsightTypes.industryInsights.map((article, index) => (
          <ArticlePreviewCard {...article} key={index} />
        ))}
      </div>
      <div>
        {allInsightTypes.caseStudies.map((article, index) => (
          <ArticlePreviewCard {...article} key={index} />
        ))}
      </div>
      <div>
        {allInsightTypes.healthPodcasts.map((podcast, index) => (
          <PodcastCard {...podcast} key={index} />
        ))}
      </div>
    </InsightsContainer>
  )
}

export default Insights
