import Axios from "axios";

export const GET_HERO_SECTION_DATA = "GET_HERO_SECTION_DATA";
export const GET_OVERVIEW_SECTION_DATA = "GET_OVERVIEW_DATA";

export const fetchBrazilianHeroSection = () => {
  return async (dispatch) => {
    const link =
      "https://akamai.alvarezandmarsal.com/jsonapi/taxonomy_term/global_locations/22b1e094-5617-463a-9f66-5b7237553a05?include=field_featured_background_image";
    const liveLink = "https://www.alvarezandmarsal.com";
    await Axios.get(link)
      .then((data) => {
        const attributes = data?.data.data.attributes;
        const included = data?.data.included;
        const imageBg = getImageFromInclude(included, "file--file");
        // console.log(attributes);

        const obj = {
          title: attributes?.name,
          rightSectionText: attributes?.field_sub_header,
          backgroundUrl: liveLink + imageBg[0]?.attributes.uri.url,
        };
        // console.log(obj);
        dispatch({
          type: GET_HERO_SECTION_DATA,
          payload: obj,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchBrazilianOverview = () => {
  return async (dispatch) => {
    const link =
      "https://akamai.alvarezandmarsal.com/jsonapi/taxonomy_term/global_locations/22b1e094-5617-463a-9f66-5b7237553a05?include=field_featured_background_image";
    await Axios.get(link)
      .then((data) => {
        const attributes = data?.data.data.attributes;
        const included = data?.data.included;

        // console.log(attributes);

        const obj = {
          title: attributes?.description.value,
          descriptionBody: attributes?.field_overview_body.value,
          careersText: attributes?.field_overview_careers_desc,
        };
        // console.log(obj);
        dispatch({
          type: GET_OVERVIEW_SECTION_DATA,
          payload: obj,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getImageFromInclude = (dataIncluded, type) => {
  const newArr = dataIncluded?.filter((x) => x.type == type);

  return newArr;
};
