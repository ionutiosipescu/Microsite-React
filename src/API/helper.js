const baseApiUrl = process.env.REACT_APP_BASE_API_URL;
const mainWebsite = process.env.REACT_APP_MAIN_WEBSITE_URL;

// Returns a filter syntax snippet to be included in the link
const getFilterSyntax = (link, filter) => {
  // All the filters that exist. Add more as needed.
  const filterCases = {
    // Repeting code. Not good
    industries: `${filter.filterType}[]=${filter.id}`,
    expertise: `${filter.filterType}[]=${filter.id}`,
    bulletin: `${filter.filterType}[]=${filter.id}`,
    region: `${filter.filterType}[]=${filter.id}`,

    // The time is not really good. Need to think of something else
    years: `created[min]=AA${filter.name}-01-01&created[max]=${filter.name}-12-31`,
  };
  // const categories = ["region", "industries", "expertise", "bulletin"];
  // const time = ["years"];

  return filterCases[filter.filterType];
};

// Creates a link with filters to be used on request to the API
export const getLinkWithFilters = (link, selectedFilters) => {
  link += "?";

  console.log("this is selectedFilters", selectedFilters);

  // Bunch up together the time filters if they exists
  let timeFilter = {
    filterType: "time",
  };

  const newFilterArr = [];

  selectedFilters.forEach((filter) => {
    if (filter.filterType === "years") {
      timeFilter.years = filter.name;
    } else if (filter.filterType === "months") {
      timeFilter.months = filter.name;
    } else if (filter.filterType === "days") {
      timeFilter.days = filter.name;
    } else {
      newFilterArr.push(filter);
    }
  });

  newFilterArr.push(timeFilter);
  console.log("this is timeFilter", timeFilter);

  console.log("this is selectedFilters", selectedFilters);

  newFilterArr.forEach((filter) => {
    link += getFilterSyntax(link, filter) + "&";
  });

  return link;
};

// Return a list of objects that contain the name, job and link of the associated people
export const grabRelatedPeople = (includedField, object, index) => {
  const peopleIds = grabIds(includedField, object, 0);

  let personData = peopleIds.map((id) => {
    const personObject = object.included.find((author) => author.id === id);
    console.log(personObject);

    if (personObject) {
      const personName = personObject.attributes.title;

      const professionalTitleIds = grabSubId(
        "field_professional_title",
        personObject
      );

      const professionalTitle = professionalTitleIds.map((title) => {
        return object.included.find((item) => item.id === title).attributes
          .name;
      });

      const personalPageLink = mainWebsite + personObject.attributes.path.alias;

      return { personName, professionalTitle, personalPageLink };
    }
  });

  personData = personData.filter((item) => item !== undefined);

  if (personData.length === 0) {
    return null;
  }
  // console.log("authorData", authorData);

  return personData;
};

// Get the id of the desired field
const grabIds = (includedField, object, index) => {
  return object.data[index].relationships[includedField].data.map(
    (id) => id.id
  );
};

const grabSubId = (fieldName, singleObject) => {
  return singleObject.relationships[fieldName].data.map((item) => item.id);

  // return singleObject.relationships[fieldName].data.map((item) => item.id);
};

// get the link that should be called bysed on what is provided
export const getLink = (articleType, amount) => {
  if (amount == null) {
    amount = "&page[limit]=6";
  } else {
    amount = `&page[limit]=${amount}`;
  }

  switch (articleType.toLowerCase()) {
    case "news":
      return `${baseApiUrl}/node/article?include=field_category&filter[field_category.id]=9fe2a194-380a-4c67-886d-93f945c30a5f${amount}&sort=-created`;
    case "insights":
      return `${baseApiUrl}/node/article?include=field_primary_industry&filter[field_primary_industry.name]=healthcare${amount}&sort=-created${amount}`;
    default:
      return "default";
  }
};
