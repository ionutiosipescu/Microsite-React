import { dateToShortLocale } from "../utils/dateFormat"

const baseApiUrl = process.env.REACT_APP_BASE_API_URL
const mainWebsite = process.env.REACT_APP_MAIN_WEBSITE_URL

export const cleanInsightsData = (rawData, insightTypeName) => {
  const cleanedData = rawData.map(item => {
    // Get the data for each individual article
    const articlePreview = {
      uuid: item.uuid,
      alias: item.view_node.split("/")[2],
      title: item.title,
      date: dateToShortLocale(item.created),
      teaserText: item.field_teaser_text,
      nid: item.nid,
      insightType: insightTypeName,
    }

    return articlePreview
  })

  return cleanedData
}

// Creates a link with filters to be used on request to the API
export const getLinkWithFilters = (link, selectedFilters) => {
  link += "&"

  // Constructing up the link with the filters
  selectedFilters.forEach(filter => {
    link += getFilterSyntax(filter) + "&"
  })

  return link
}

export const cleanPodcastsData = (rawData, insightType) => {
  const podcasts = rawData.data.map(podcast => {
    const uuid = podcast.id
    const title = podcast.attributes.title
    const teaserText = podcast.attributes.field_teaser_text
    const alias = podcast.attributes.path.alias.split("/")[2]

    let teaserImageUrl
    // Check for null
    if (grabSubIds("field_teaser_image", podcast)) {
      const teaserImageId = grabSubIds("field_teaser_image", podcast)[0]

      teaserImageUrl =
        baseApiUrl +
        getObjectFromIncluded(rawData.included, teaserImageId).uri.url
    }

    let podcastLinks = {}
    // One podcast can actually have more than one "field_bulletin_category". I am grabbing the first one for now
    const bulletinCategoryIds = grabSubIds(
      "field_bulletin_category",
      podcast
    )[0]
    const bulletinObjext = getObjectFromIncluded(
      rawData.included,
      bulletinCategoryIds
    )

    podcastLinks.amazon =
      bulletinObjext.field_podcast_serie_amazon_link?.uri || null
    podcastLinks.apple =
      bulletinObjext.field_podcast_serie_apple_link?.uri || null
    podcastLinks.google =
      bulletinObjext.field_podcast_serie_google_link?.uri || null
    podcastLinks.spotify =
      bulletinObjext.field_podcast_serie_spotify?.uri || null

    const date = dateToShortLocale(
      podcast.attributes.changed || podcast.attributes.created
    )

    return {
      uuid,
      title,
      teaserText,
      alias,
      date,
      insightType: insightType,
      teaserImageUrl: teaserImageUrl,
      podcastLinks,
    }
  })
  return podcasts
}

// Return a list of objects that contain the name, job and link of the associated people
export const grabRelatedPeople = (includedField, object, index) => {
  const peopleIds = grabIds(includedField, object, 0)

  let personData = peopleIds.map(id => {
    const personObject = object.included.find(author => author.id === id)

    if (personObject) {
      const personName = personObject.attributes.title

      const professionalTitleIds = grabSubIds(
        "field_professional_title",
        personObject
      )

      const citiesIds = grabSubIds("field_city", personObject)

      const imageUrlIds = grabSubIds("field_image_background", personObject)

      const professionalTitle = professionalTitleIds.map(title => {
        return object.included.find(item => item.id === title).attributes.name
      })

      const cityNames = citiesIds.map(title => {
        return object.included.find(item => item.id === title).attributes.name
      })

      // This one is bad
      const imageUrl = imageUrlIds
        .map(title => {
          return object.included.find(item => item.id === title).attributes
        })[0]
        .image_style_uri.filter(
          item => item.people_thumbnail_desktop__296x434_ !== undefined
        )[0].people_thumbnail_desktop__296x434_

      const personalPageLink = mainWebsite + personObject.attributes.path.alias

      return {
        personName,
        professionalTitle,
        personalPageLink,
        imageUrl,
        cityNames,
      }
    }
  })

  personData = personData.filter(item => item !== undefined)

  if (personData.length === 0) {
    return null
  }

  return personData
}

// Get array of ids of of a specific field from relationships given the whole data object (res.data)
const grabIds = (includedField, object) => {
  return object.data.relationships[includedField].data.map(id => id.id)
}

// Get the id of a specific field from relationships given a specific object (res.data.singleObject)
const grabSubIds = (fieldName, singleObject) => {
  const data = singleObject.relationships[fieldName].data

  if (!data) {
    return null
  } else {
    return data.id ? [data.id] : data.map(item => item.id)
  }
}

const getObjectFromIncluded = (includedArray, id) => {
  return includedArray.find(item => item.id === id).attributes
}

// Decides what syntax to return for the specific filter
const getFilterSyntax = filter => {
  // All the filters that exist. Add more as needed.
  const filterCases = {
    // Repeating code. Not good
    industries: `${filter.category}[]=${filter.id}`,
    expertise: `${filter.category}[]=${filter.id}`,
    bulletin: `${filter.category}[]=${filter.id}`,
    region: `${filter.category}[]=${filter.id}`,

    userInput: `insight_search=${filter.name}`,

    date: `created[min]=${filter.minDate}&created[max]=${filter.maxDate}`,
  }

  return filterCases[filter.category]
}

// Creates a link with filters to be used on request to the Json API
export const getLinkWithJsonApiFilters = (link, selectedFilters) => {
  link += "&"

  // Constructing up the link with the filters
  selectedFilters.forEach(filter => {
    link += getJsonApiFilterSyntax(filter) + "&"
  })

  return link
}

const getJsonApiFilterSyntax = filter => {
  const filterCases = {
    // Repeating code. Not good
    industries: `filter[field_industry.id]=${filter.uuid}`,
    expertise: `filter[field_expertise.id]=${filter.uuid}`,
    bulletin: `filter[field_.id]=${filter.uuid}`,

    // This one is bad
    region: `filter[field_region.name]=${filter.name}`,

    // No idea how to do it for those 2
    // userInput: `insight_search=${filter.value}`,
    // time: getTimeFilterSyntax(filter),
    // created: `created[min]=${filter.value.split(":")[0]}&created[max]=${
    //   filter.value.split(":")[1]
    // }`,
  }

  return filterCases[filter.category]
}

// The filter with dates is really awkwardly formated.
// I brake it down in more usable stuff here
export const cleanDateFilter = dateFilter => {
  const cleanedDateObject = {}
  cleanedDateObject.months = getDateFields(dateFilter.months)
  cleanedDateObject.years = getDateFields(dateFilter.years)
  cleanedDateObject.period = getDateFields(dateFilter.period)

  return cleanedDateObject
}

const getDateFields = dateObj => {
  return Object.entries(dateObj).map(item => {
    const periods = item[0].split(":")
    if (item[1] === "Today") {
      return {
        name: item[1],
        minDate: `${periods[0]}:${periods[1]}`,
        maxDate: `${periods[2]}:${periods[3]}`,
      }
    }
    return {
      name: item[1],
      minDate: periods[0],
      maxDate: periods[1],
    }
  })
}
