const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

export const grabDataFromIncluded = (includedField, object, index) => {
  if (object.data[index].relationships[includedField].data) {
    const categoryId = object.data[index].relationships[includedField].data.id;

    let value = object.included.find(
      (item) => item.id === categoryId
    ).attributes;

    value = getValue(includedField, value);

    return value;
  }
  return null;
};

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

const getValue = (includedField, value) => {
  if (["field_teaser_image"].includes(includedField)) {
    return value.uri.url;
  } else if (["node_type"].includes(includedField)) {
    return value.name;
  }
};
