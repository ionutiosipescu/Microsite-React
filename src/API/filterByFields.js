import Axios from "axios";

const jsonApi = process.env.REACT_APP_BASE_API_URL + "/jsonapi";

export const getExpertiseFields = () => {
  Axios.get(`${jsonApi}/taxonomy_term/expertise`).then((res) => {
    const arr = [];

    // console.log(res.data)
    res.data.data.map((item) => {
      // console.log(item.attributes.name)
      // console.log(item)
      // item.relationships.field_featured_expert.data = null
      if (item.relationships.field_featured_expert.data) {
        // console.log(item.relationships.field_featured_expert.data)
        if (!arr.includes(item.attributes.name)) {
          arr.push(item.attributes.name);
        }
      }
      // arr.push(item.attributes.name)
    });
    // console.log(arr)
    // console.log(arr.length)
  });
};

export const getCountries = () => {
  Axios.get(`${jsonApi}/taxonomy_term/reporting_region_and_countries`).then(
    (res) => {
      const arr = [];

      // console.log(res.data);

      res.data.data.map((item) => {
        // console.log(item.relationships.field_featured_expert.data)

        if (!arr.includes(item.attributes.name)) {
          arr.push(item.attributes.name);
        }
        // arr.push(item.attributes.name)
      });
      // console.log(arr);
      // console.log(arr.length)
    }
  );
};
