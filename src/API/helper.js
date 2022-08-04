const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

// Return a list of objects the name and job title of the people
export const grabRelatedPeople = (includedField, object, index) => {
  // console.table("this is object", object);

  const authorIds = grabIds(includedField, object, 0);

  let personData = authorIds.map((id) => {
    const personObject = object.included.find((author) => author.id === id);

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

      return { personName, professionalTitle };
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
