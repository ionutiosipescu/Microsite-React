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

const loader = (
  <div key="loader" className="loader">
    Loading ...
  </div>
)

export const ContentContext = createContext()

const Insights = () => {
  const { currentInsightType } = useSelector(state => state.filters)

  const [content, setContent] = useState(null)
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

  // Get the initial data from the server
  useEffect(() => {
    const getData = async () => {
      const data = await getInsights(currentInsightType, filters, nextPage)
      setNextPage(nextPage + 1)
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

  if (!content) {
    return <Spinner />
  }

  return (
    <InfiniteScroll
      dataLength={content.length || 0}
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

  const { content, setContent, nextPage, setNextPage } =
    useContext(ContentContext)

  // Get the initial data from the server
  useEffect(() => {
    const getData = async () => {
      const data = await getAllInsightTypes(
        currentInsightType,
        filters,
        nextPage
      )
      setNextPage(nextPage + 1)
      setContent(data)
    }
    getData()
  }, [filters])

  // This is for infinite scrolling
  const getMoreInsights = async () => {
    const data = await getAllInsightTypes(currentInsightType, filters, nextPage)
    setNextPage(nextPage + 1)
    setContent({
      industryInsights: [...content.industryInsights, ...data.industryInsights],
      caseStudies: [...content.caseStudies, ...data.caseStudies],
      // industryInsights: [...content.industryInsights, ...data.industryInsights],
    })
  }

  if (!content) {
    return <Spinner />
  }

  return (
    <InfiniteScroll
      dataLength={content.length || 0}
      hasMore={true}
      next={getMoreInsights}
    >
      <InsightsContainer>
        <div>
          {content.industryInsights.map((article, index) => (
            <ArticlePreviewCard {...article} key={index} />
          ))}
        </div>
        <div>
          {content.caseStudies.map((article, index) => (
            <ArticlePreviewCard {...article} key={index} />
          ))}
        </div>
        {/* <div>
        {content.healthPodcasts.map((podcast, index) => (
          <PodcastCard {...podcast} key={index} />
        ))}
      </div> */}
      </InsightsContainer>
    </InfiniteScroll>
  )
}

export default Insights
