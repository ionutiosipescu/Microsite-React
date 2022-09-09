import React, { useState, useEffect } from "react"
import { PodcastCard } from "../../components/cards"
import { getPodcasts } from "../../API"
import { useSelector } from "react-redux"
import UnalignedItemsContainer from "../../components/layout/UnalignedItemsContainer"
import { Spinner } from "../../components"
import InfiniteScroll from "react-infinite-scroll-component"

const HealthPodcasts = ({ columnsNumber, insightType }) => {
  const { currentInsightType, filters } = useSelector(state => state.filters)
  const [nextPodcastPage, setNextPodcastPage] = useState(null)
  const [hasMore, setHasMore] = useState(true)

  const [podcasts, setPodcasts] = useState(null)
  // console.log("This is insightType", insightType)

  if (insightType === undefined) {
    insightType = currentInsightType
  }

  // console.log("This is insightType", insightType)

  // Get the initial data from the server
  useEffect(() => {
    const getData = async () => {
      const data = await getPodcasts(insightType, filters, nextPodcastPage)

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
    // console.log("This is getMorePodcasts")
    const data = await getPodcasts(insightType, filters, nextPodcastPage)

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
  // console.log("This is podcasts.length", podcasts.length)
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
