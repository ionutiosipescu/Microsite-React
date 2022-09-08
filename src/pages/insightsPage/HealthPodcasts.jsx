import React, { useState, useEffect, useContext } from "react"
import { PodcastCard } from "../../components/cards"
import { getPodcasts } from "../../API"
import { useSelector } from "react-redux"
import UnalignedItemsContainer from "../../components/layout/UnalignedItemsContainer"
import { Spinner } from "../../components"
import InfiniteScroll from "react-infinite-scroll-component"
import { ContentContext } from "./Insights"

const HealthPodcasts = ({ columnsNumber }) => {
  const { currentInsightType, filters } = useSelector(state => state.filters)
  const { nextPodcastPage, setNextPodcastPage } = useContext(ContentContext)
  const [hasMore, setHasMore] = useState(true)

  const [podcasts, setPodcasts] = useState(null)

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

      setPodcasts(data.cleanData)
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

    setPodcasts([...podcasts, ...data.cleanData])
  }

  if (!podcasts) {
    return <Spinner />
  }

  console.log("This is podcasts", podcasts)

  return (
    <InfiniteScroll
      dataLength={podcasts.length || 0}
      hasMore={hasMore}
      next={getMorePodcasts}
    >
      <UnalignedItemsContainer columnsNumber={columnsNumber}>
        {podcasts.map((item, index) => {
          return <PodcastCard key={index} {...item} />
        })}
      </UnalignedItemsContainer>
    </InfiniteScroll>
  )
}

export default HealthPodcasts
