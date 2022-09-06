import React from "react"
import { InsightsContainer } from "./styles/inisghts.style"
import { insightTypes } from "../../components/navbarComponents/inisightsNavbar/InsightsNavbar"
import HealthPodcasts from "./HealthPodcasts"
import ArticleInsightType from "./ArticleInsightType"

const MultipleInsightTypes = () => {
  return (
    <InsightsContainer>
      <div>
        <ArticleInsightType insightType={insightTypes[1]} columnsNumber={1} />
      </div>
      <div>
        <ArticleInsightType insightType={insightTypes[2]} columnsNumber={1} />
      </div>
      <div>
        <HealthPodcasts columnsNumber={1} />
      </div>
    </InsightsContainer>
  )
}

export default MultipleInsightTypes
