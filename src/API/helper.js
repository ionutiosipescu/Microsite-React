const baseApiUrl = process.env.REACT_APP_BASE_API_URL
const mainWebsite = process.env.REACT_APP_MAIN_WEBSITE_URL

export const cleanInsights = (rawData, insightType) => {
  console.log("This is rawData", rawData)
  console.log("This is insightType", insightType)
}

// Creates a link with filters to be used on request to the API
export const getLinkWithFilters = (link, selectedFilters) => {
  link += "&"

  // Create a single object for the time filter
  let timeFilter = {
    filterType: "time",
  }

  const newFilterArr = []

  // Adding properties to the time filter object and pushiing everything to the newFilterArr
  selectedFilters.forEach(filter => {
    if (filter.filterType === "years") {
      timeFilter.years = filter.value
      timeFilter.yearsList = filter.yearsList
    } else if (filter.filterType === "months") {
      timeFilter.months = filter.id
    } else if (filter.filterType === "days") {
      timeFilter.days = filter.value
    } else {
      newFilterArr.push(filter)
    }
  })

  if (Object.keys(timeFilter).length > 1) {
    newFilterArr.push(timeFilter)
  }

  // Constructing up the link with the filters
  newFilterArr.forEach(filter => {
    link += getFilterSyntax(filter) + "&"
  })

  return link
}

// Return a list of objects that contain the name, job and link of the associated people
export const grabRelatedPeople = (includedField, object, index) => {
  const peopleIds = grabIds(includedField, object, 0)

  // console.log("This is ids", peopleIds)

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

      // console.log("This is imageUrl", imageUrlId)
      // console.log(professionalTitleIds)

      const professionalTitle = professionalTitleIds.map(title => {
        return object.included.find(item => item.id === title).attributes.name
      })

      const cityNames = citiesIds.map(title => {
        return object.included.find(item => item.id === title).attributes.name
      })

      // This one is bad
      // const imageUrl = imageUrlIds.map(title => {
      //   return object.included.find(item => item.id === title).attributes
      // })[0].image_style_uri[5].article_image_small__576x322_
      const imageUrl = imageUrlIds
        .map(title => {
          return object.included.find(item => item.id === title).attributes
        })[0]
        .image_style_uri.filter(
          item => item.people_thumbnail_desktop__296x434_ !== undefined
        )[0].people_thumbnail_desktop__296x434_

      // console.log("This is imageUrl", imageUrl)

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

  return data.id ? [data.id] : data.map(item => item.id)
}

// Decides what syntax to return for the specific filter
const getFilterSyntax = filter => {
  // All the filters that exist. Add more as needed.
  // const filterCases = {
  //   // Repeating code. Not good
  //   industries: `${filter.filterType}[]=${filter.id}`,
  //   expertise: `${filter.filterType}[]=${filter.id}`,
  //   bulletin: `${filter.filterType}[]=${filter.id}`,
  //   region: `${filter.filterType}[]=${filter.id}`,

  //   userInput: `insight_search=${filter.value}`,

  //   time: getTimeFilterSyntax(filter),
  // }

  const filterCases = {
    // Repeating code. Not good
    industries: `filter[field_industry.id]=${filter.uuid}`,
    expertise: `filter[field_expertise.id]=${filter.uuid}`,
    bulletin: `filter[field_.id]=${filter.uuid}`,

    // This one is bad
    region: `filter[field_region.name]=${filter.name}`,

    // userInput: `insight_search=${filter.value}`,

    // time: getTimeFilterSyntax(filter),
    // created: `created[min]=${filter.value.split(":")[0]}&created[max]=${
    //   filter.value.split(":")[1]
    // }`,
  }

  return filterCases[filter.category]
}

// The time filter is more complicated. It's a range of dates. Plus, we need to keep in mind if a month, year or month and year are selected.
// I put some logic for the days filer just case we will need it for the future.
const getTimeFilterSyntax = filter => {
  const minYear = filter.years ? filter.years : 2014
  const maxYear = filter.years ? filter.years : new Date().getFullYear()
  const minMonth = filter.months ? filter.months : 1
  const maxMonth = filter.months ? filter.months : 12

  const minDay = filter.days ? filter.days : 1
  const maxDay = filter.days ? filter.days : daysInMonth(maxMonth, maxYear)

  // return `created[min]=${minYear}-${minMonth}-${minDay}&created[max]=${maxYear}-${maxMonth}-${maxDay}`
}

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
// Get how many days are in a specific month of the year
const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate()
}
