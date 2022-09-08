import React, { useState, useEffect, createContext, useContext } from "react"
import { ArticlePreviewCard } from "../../components/cards"
import { getInsights } from "../../API"
import { useSelector } from "react-redux"
import UnalignedItemsContainer from "../../components/layout/UnalignedItemsContainer"
import { Spinner } from "../../components"
import InfiniteScroll from "react-infinite-scroll-component"

const ArticleInsightType = ({ insightType, columnsNumber }) => {
  const { currentInsightType, filters } = useSelector(state => state.filters)
  const [hasMore, setHasMore] = useState(true)
  const [articles, setArticles] = useState(null)

  const [nextPage, setNextPage] = useState(0)

  if (insightType === undefined) {
    insightType = currentInsightType
  }

  // Get the initial data from the server
  useEffect(() => {
    console.log("This is ")
    const getData = async () => {
      const data = await getInsights(insightType, filters, nextPage)
      setArticles(data)

      if (data.length === 0) {
        setHasMore(false)
      } else {
        setArticles(data)
        setHasMore(true)
      }
    }
    getData()
  }, [filters])

  useEffect(() => {
    setNextPage(0)
  }, [filters])

  // This is for infinite scrolling
  const getMoreArticles = async () => {
    setNextPage(nextPage + 1)
    const data = await getInsights(insightType, filters, nextPage + 1)
    setArticles([...articles, ...data])

    if (data.length === 0) {
      setHasMore(false)
    } else {
      setHasMore(true)
    }
  }

  if (!articles) {
    return <Spinner />
  }

  console.log("This is articles", articles)

  return (
    <InfiniteScroll
      dataLength={articles.length || 0}
      hasMore={hasMore}
      next={getMoreArticles}
    >
      <UnalignedItemsContainer columnsNumber={columnsNumber}>
        {articles.map((item, index) => {
          return <ArticlePreviewCard key={index} {...item} />
        })}
      </UnalignedItemsContainer>
    </InfiniteScroll>
  )
}

export default ArticleInsightType
