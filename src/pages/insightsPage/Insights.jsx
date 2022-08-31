import React, { useState, useEffect } from "react"
import {
  ArticlePreviewCard,
  HeroSection,
  PodcastCard,
} from "../../components/cards"
import { InsightsContainer } from "./styles/inisghts.style"
import {
  getPodcasts,
  getAllInsightTypes,
  getNextInsights,
  getInsights,
} from "../../API"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import { useSelector } from "react-redux"
import { useDocumentTitle } from "../../hook"
import UnalignedItemsConainer from "../../components/layout/UnalignedItemsContainer"
import { Spinner } from "../../components"
import InfiniteScroll from "react-infinite-scroll-component"

const Insights = () => {
  const { currentInsightType } = useSelector(state => state.filters)

  return (
    <>
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
    </>
  )
}

const OneInsightCategory = () => {
  const [content, setContent] = useState(null)
  const { currentInsightType, filters } = useSelector(state => state.filters)

  useEffect(() => {
    getInsights(setContent, currentInsightType, filters)
  }, [currentInsightType, filters])

  if (!content) {
    return <Spinner />
  }
  const next =
    "https://akamai.alvarezandmarsal.com/jsonapi/node/article?page%5Boffset%5D=10&page%5Blimit%5D=10"

  const loader = (
    <div key="loader" className="loader">
      Loading ...
    </div>
  )

  const getMore = () => {
    console.log("fetching data")
    getInsights(setContent, currentInsightType, filters)
  }
  console.log("This is content", content)

  return (
    <UnalignedItemsConainer>
      {/* <InfiniteScroll
      dataLength={content.length || 0}
      loader={loader}
      hasMore={true}
      // loadMore={getInsights(setContent, currentInsightType, filters, next)}
      next={() =>
        getNextInsights(content, setContent, currentInsightType, next)
      }
    > */}
      {content.map((item, index) => {
        if (currentInsightType === "healthPodcasts") {
          return <PodcastCard {...item} key={index} />
        }
        return <ArticlePreviewCard key={index} {...item} />
      })}
      {/* </InfiniteScroll> */}
    </UnalignedItemsConainer>
  )
}

const MultipleInsightCategories = () => {
  const { currentInsightType, filters } = useSelector(state => state.filters)
  const [allInsightTypes, setAllInsightTypes] = useState(null)

  useEffect(() => {
    getAllInsightTypes(setAllInsightTypes, currentInsightType, filters)
    // getPodcasts()
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
