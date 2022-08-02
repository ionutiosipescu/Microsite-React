const baseApiUrl = process.env.REACT_APP_BASE_API_URL;
// 3030696e-0490-483b-94f2-127d13fd3478

// const drupalFieldsIds = {
//   field_authors: "3b257a0e-704f-41fd-b13b-7637d87ada9a",
// };

export const grabDataFromIncluded = (includedField, object, index) => {
  console.log("fuck");
  // console.log(includedField, object, index);
  console.log(object);

  let fieldIds = grabIds(includedField, object, index);

  // let fieldValues = getFieldValues(fieldIds, object);

  // console.log("this is authorids", fieldValues);
};

export const grabAuthors = (includedField, object, index) => {
  let fieldIds = grabIds(includedField, object, index);

  console.log("this is object", object);

  // Ids = grabIds(includedField, object, index);
  // let professionalTitlesIds = grabIds(fieldIds, object);

  // console.log(fieldIds);
  let i = fieldIds.map((id) => {
    let name = object.included.find((item) => item.id === id).attributes.title;

    return { name };
  });
  console.log("this is i", i);
};

// // Returns the correct value from the included array
// export const grabDataFromIncluded = (includedField, object, index) => {
//   if (object.data[index].relationships[includedField].data) {
//     let categoryId = object.data[index].relationships[includedField].data;

//     if (typeof categoryId === "string") {
//       // console.log(typeof categoryId);

//       // console.log(categoryId);

//       let value = object.included.find(
//         (item) => item.id === categoryId
//       ).attributes;

//       value = getValue(includedField, value);

//       return value;
//     } else if (typeof categoryId === "object") {
//       const categoryIds = categoryId.map((item) => {
//         return item.id;
//       });

//       // const values = categoryIds.map((item) => {
//       //   const value = getValue(includedField, item);

//       //   return value;
//       // });
//     }
//   }
//   return null;
// };

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

// const getFieldValues = (fieldIds, object) => {
//   const values = [];

//   fieldIds.map((id) => {
//     let i = object.included.find((item) => item.id === id);

//     console.log(i);
//   });

//   return "fuck you";
// };

// returns a partial path to the desired value
const getValue = (includedField, value) => {
  if (["field_teaser_image"].includes(includedField)) {
    return value.uri.url;
  } else if (["node_type"].includes(includedField)) {
    return value.name;
  } else if (["field_authors"].includes(includedField)) {
    console.log(value);
  }
};

const grabIds = (includedField, object, index) => {
  console.log("this is object", object);

  return object.data[index].relationships[includedField].data.map(
    (id) => id.id
  );
};
