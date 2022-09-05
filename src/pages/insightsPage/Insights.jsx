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
import UnalignedItemsContainer from "../../components/layout/UnalignedItemsContainer"
import { Spinner } from "../../components"
import InfiniteScroll from "react-infinite-scroll-component"

export const ContentContext = createContext()

const Insights = () => {
  const { currentInsightType } = useSelector(state => state.filters)

  const [content, setContent] = useState(null)
  const [nextPage, setNextPage] = useState(0)
  const [nextPodcastPage, setNextPodcastPage] = useState(null)

  const value = {
    content: content,
    setContent: setContent,
    nextPage: nextPage,
    setNextPage: setNextPage,
    nextPodcastPage: nextPodcastPage,
    setNextPodcastPage: setNextPodcastPage,
  }

  const insightTypeObj = {
    all: <MultipleInsightCategories />,
    caseStudies: <ArticleCategory />,
    industryInsights: <ArticleCategory />,
    healthPodcasts: <HealthPodcasts />,
  }

  return (
    <ContentContext.Provider value={value}>
      <HeroSection
        title=" Latest Studies"
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <StyledContainer>
        {insightTypeObj[currentInsightType.identifier]}
      </StyledContainer>
    </ContentContext.Provider>
  )
}

const ArticleCategory = () => {
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
      <UnalignedItemsContainer>
        {content.map((item, index) => {
          return <ArticlePreviewCard key={index} {...item} />
        })}
      </UnalignedItemsContainer>
    </InfiniteScroll>
  )
}

const HealthPodcasts = () => {
  const { currentInsightType, filters } = useSelector(state => state.filters)
  const { content, setContent, nextPodcastPage, setNextPodcastPage } =
    useContext(ContentContext)
  const [hasMore, setHasMore] = useState(true)

  // Get the initial data from the server
  useEffect(() => {
    const getData = async () => {
      const data = await getPodcasts(
        currentInsightType,
        filters,
        nextPodcastPage
      )

      setNextPodcastPage(data.nextPageLink)

      if (!data.nextPageLink) {
        setHasMore(false)
      } else {
        setHasMore(true)
      }

      setContent(data.cleanData)
    }

    getData()
  }, [filters])

  // This is for infinite scrolling
  const getMorePodcasts = async () => {
    const data = await getPodcasts(currentInsightType, filters, nextPodcastPage)

    setNextPodcastPage(data.nextPageLink)

    if (!data.nextPageLink) {
      setHasMore(false)
    } else {
      setHasMore(true)
    }

    setContent([...content, ...data.cleanData])
  }

  if (!content) {
    return <Spinner />
  }

  return (
    <InfiniteScroll
      dataLength={content.length || 0}
      hasMore={hasMore}
      next={getMorePodcasts}
    >
      <UnalignedItemsContainer>
        {content.map((item, index) => {
          return <PodcastCard key={index} {...item} />
        })}
      </UnalignedItemsContainer>
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
      console.log("This is data", data)
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
      // healthPodcasts: [...content.healthPodcasts, ...data.healthPodcasts],
    })
  }

  if (!content?.industryInsights) {
    return <Spinner />
  }

  return (
    // <InfiniteScroll
    //   dataLength={content.length || 0}
    //   hasMore={true}
    //   next={getMoreInsights}
    // >
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
      <div>
        {content.healthPodcasts.map((podcast, index) => (
          <PodcastCard {...podcast} key={index} />
        ))}
      </div>
    </InsightsContainer>
    // </InfiniteScroll>
  )
}

export default Insights
