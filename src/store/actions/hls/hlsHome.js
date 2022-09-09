import Axios from "axios"
import {
  dateFromSecondsToShortLocale,
  dateToShortLocale,
} from "../../../utils/dateFormat"

export const GET_HERO_SECTION_DATA = "GET_HERO_SECTION_DATA"
export const GET_INDUSTRIES = "GET_INDUSTRIES"
export const GET_EXPERTISES = "GET_EXPERTISES"

export const GET_INDUSTRY = "GET_INDUSTRY"
export const GET_EXPERTISE = "GET_EXPERTISE"
export const GET_INSIGHTS_ARTICLES = "GET_INSIGHTS_ARTICLES"
export const GET_RECENT_RECOGNITION = "GET_RECENT_RECOGNITION"
export const GET_INDUSTRY_ARTICLES = "GET_INDUSTRY_ARTICLES"
// export const GET_OVERVIEW_SECTION_DATA = "GET_OVERVIEW_DATA";

const link = "https://akamai.alvarezandmarsal.com/api/v1/hls"
export const fetchHLSHeroSection = industryId => {
  return async dispatch => {
    // const link = "https://akamai.alvarezandmarsal.com/api/v1/hls";
    const liveLink = "https://www.alvarezandmarsal.com/"
    Axios.get(link)
      .then(data => {
        const industry = data?.data.expertise_parent
        const obj = {
          id: industry.id,
          title: industry.name,
          description: industry.teaser_text,
        }
        // console.log(data);
        dispatch({
          type: GET_HERO_SECTION_DATA,
          payload: obj,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchHLSIndustries = () => {
  return async dispatch => {
    // console.log("fetchHLSIndustries")
    // const link = `http://192.168.0.113:8080/jsonapi/taxonomy_term/industries?filter[parent.id]=${industryId}`;
    await Axios.get(link)
      .then(data => {
        let parsedIndustriesArray = []
        const industries = data?.data.healthcare_industries
        for (const [key, value] of Object.entries(industries)) {
          let industryObj = {
            id: value.id,
            name: value.name,
            description: value.teaser_text,
            uuid: value.uuid,
          }
          parsedIndustriesArray.push(industryObj)
        }

        dispatch({
          type: GET_INDUSTRIES,
          payload: parsedIndustriesArray,
        })
      })
      .catch(err => {
        console.log(err)
      })

    // dispatch({
    //   type: GET_HERO_SECTION_DATA,
    //   payload: industries,
    // });
  }
}
export const fetchIndustry = industryId => {
  return async dispatch => {
    let industry = {}
    Axios.get(link)
      .then(data => {
        const industries = data.data.healthcare_industries
        for (const [key, value] of Object.entries(industries)) {
          if (key === industryId) {
            industry = value
          }
        }

        console.log("This is industry", industry)
        console.log("This is data", data)

        let experts = industry?.featured_expert.map(expert => {
          for (const [key, value] of Object.entries(
            data?.data?.expertise_parent_expert_profile
          )) {
            if (key === expert) {
              return value
            }
          }
        })
        let expertises = industry?.expertise.map(expert => {
          for (const [key, value] of Object.entries(
            data?.data?.expertise_parent_children
          )) {
            if (key === expert) {
              return value
            }
          }
        })

        // awaitfetchIndustryArticles
        industry.expertises = expertises
        industry.experts = experts

        dispatch({
          type: GET_INDUSTRY,
          payload: industry,
        })
      })
      .catch(err => {
        console.log(err)
      })

    // await Axios.gey()
  }
}

export const fetchIndustryArticles = industryUUID => {
  return async dispatch => {
    // const link =`https://akamai.alvarezandmarsal.com/jsonapi/node/article?filter[field_industry.id]=d1bdf615-e445-44aa-ae95-206fbc107bde`
    const link = `https://akamai.alvarezandmarsal.com/jsonapi/node/article?include=field_category&filter[field_industry.id]=${industryUUID}`
    Axios.get(link)
      .then(data => {
        const jsonData = data?.data.data
        const dataIncluded = data?.data.included

        let articles = jsonData?.forach(article => {
          let x = {
            uuid: article.id,
            title: article.attributes.title,
            alias: article.attributes.path?.alias.split("/")[2],
            text_teaser: article.attributes.field_teaser_text,
            date: dateToShortLocale(
              article.attributes.changed || article.attributes.created
            ),
            category: {
              id: article.relationships.field_category.data[0].id,
              type: article.relationships.field_category.data[0].type,
            },
          }
          return x
        })

        articles.forEach(article => {
          dataIncluded.forEach(included => {
            if (article.category.type === included.type) {
              article.categoryName = included.attributes.name
            }
          })
          return article
        })

        dispatch({
          type: GET_INDUSTRY_ARTICLES,
          payload: articles,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchHlsExpertises = () => {
  return async dispatch => {
    Axios.get(link)
      .then(data => {
        const expertises = data?.data.expertise_parent_children
        let expertisesArr = []
        for (const [key, value] of Object.entries(expertises)) {
          let expertise = {
            id: value.id,
            name: value.name,
            description: value.teaser_text,
          }
          expertisesArr.push(expertise)
        }
        dispatch({
          type: GET_EXPERTISES,
          payload: expertisesArr,
        })
      })
      .catch(err => {
        // console.log(err)
      })
  }
}

export const fetchExpertise = expertiseId => {
  return async dispatch => {
    Axios.get(link)
      .then(data => {
        const expertises = data?.data.expertise_parent_children
        let experts = []
        let expertise = {}
        let expertiseIndustries = []

        for (const [key, value] of Object.entries(expertises)) {
          if (key === expertiseId) {
            expertise = value
          }
        }
        expertise?.featured_expert?.map(expert => {
          for (const [key, value] of Object.entries(
            data?.data.expertise_parent_expert_profile
          )) {
            if (key === expert) {
              experts.push(value)
            }
          }
        })

        let articles = expertise?.articles?.map(expert => {
          for (const [key, value] of Object.entries(
            data?.data.expertise_parent_articles
          )) {
            if (key === expert) {
              console.log(key)
              return value
            }
          }
        })

        const industries = data.data.healthcare_industries
        for (const [key, value] of Object.entries(industries)) {
          value?.expertise?.map(expertiseID => {
            if (expertiseId === expertiseID) {
              // console.log(value);
              expertiseIndustries.push(value)
            }
          })
        }

        let formatedArticles = []
        articles?.forEach(article => {
          article.date = dateFromSecondsToShortLocale(article?.updated)
          formatedArticles.push(article)
        })

        expertise.articles = articles
        expertise.experts = experts
        expertise.industries = expertiseIndustries

        // console.log(expertise);
        dispatch({
          type: GET_EXPERTISE,
          payload: expertise,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchInsightsArticles = () => {
  return async dispatch => {
    await Axios.get(link)
      .then(data => {
        // console.log(data.data)
        dispatch({
          type: GET_INSIGHTS_ARTICLES,
          payload: data?.data.block_two,
        })
      })

      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchRecentRecognition = () => {
  return async dispatch => {
    await Axios.get(link)
      .then(data => {
        dispatch({
          type: GET_RECENT_RECOGNITION,
          payload: data?.data.quotes,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
