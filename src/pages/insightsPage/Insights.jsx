import React, { useState, useEffect } from "react"
import {
  ArticlePreviewCard,
  HeroSection,
  PodcastCard,
} from "../../components/cards"
import Axios from "axios"
import { InsightsContainer } from "./styles/inisghts.style"
import { getAllInsightTypes, getPodcasts, getInsights } from "../../API"
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style"
import { useSelector } from "react-redux"
import { useDocumentTitle } from "../../hook"
import UnalignedItemsConainer from "../../components/layout/UnalignedItemsContainer"
import { Spinner } from "../../components"
import InfiniteScroll from "react-infinite-scroll-component"
import { ButtonWithAnimation } from "../../components/buttons"

const Insights = () => {
  const { currentInsightType, filters } = useSelector(state => state.filters)

  console.log("This is currentInsightType", currentInsightType)

  return (
    <>
      <HeroSection
        title=" Latest Studies"
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      {currentInsightType === "all" ? (
        <MultipleInsightCategories />
      ) : (
        <OneInsightCategory />
      )}
    </>
  )
}

const OneInsightCategory = () => {
  const [content, setContent] = useState(null)
  const { currentInsightType, filters } = useSelector(state => state.filters)

  useEffect(() => {
    getInsights(setContent, currentInsightType)
  }, [])
  console.log("This is content", content)

  return (
    // <div>
    //   <UnalignedItemsConainer>
    //     {/* {articles[currentInsightType].map((item, index) => {
    //       if (currentInsightType === "healthPodcasts") {
    //         return <PodcastCard {...item} key={index} />
    //       }
    //       return <ArticlePreviewCard key={index} articleInfo={item} />
    //     })} */}
    //   </UnalignedItemsConainer>
    // </div>
    <div>'f'</div>
  )
}

const MultipleInsightCategories = () => {
  const [allInsightTypes, setAllInsightTypes] = useState(null)

  useEffect(() => {
    getAllInsightTypes(setAllInsightTypes)
  }, [])

  console.log("This is allInsightsType", allInsightTypes)

  return <div>All</div>
}

export default Insights
