import Axios from "axios";

export const GET_HERO_SECTION_DATA = "GET_HERO_SECTION_DATA";
export const GET_INDUSTRIES = "GET_INDUSTRIES";
// export const GET_OVERVIEW_SECTION_DATA = "GET_OVERVIEW_DATA";

export const fetchHLSHeroSection = () => {
  return async (dispatch) => {
    const link =
      "http://192.168.0.113:8080/jsonapi/taxonomy_term/industries/c11b8f8f-9d3a-433a-949e-5518b9b24c25";
    const liveLink = "https://www.alvarezandmarsal.com/";
    const liveLinkImage =
      "https://www.alvarezandmarsal.com/sites/default/files/";
    const data = await fetchIndustry("c11b8f8f-9d3a-433a-949e-5518b9b24c25");
    const attributes = data?.data.attributes;
    const included = data?.included;
    const imageBg = getImageFromInclude(included, "file--file");

    const obj = {
      title: attributes?.name,
      description: attributes?.description.value,
      backgroundUrl: liveLinkImage + imageBg[0]?.attributes.filename,
    };
    dispatch({
      type: GET_HERO_SECTION_DATA,
      payload: obj,
    });
  };
};

export const fetchHLSIndustries = () => {
  return async (dispatch) => {
    const link =
      "http://192.168.0.113:8080/jsonapi/taxonomy_term/industries?filter[parent.id]=c11b8f8f-9d3a-433a-949e-5518b9b24c25";
    await Axios.get(link)
      .then((data) => {
        var parsedIndustriesArray = [];
        const industries = data?.data.data;
        industries.map((industry) => {
          const attributes = industry?.attributes;

          let industryObj = {
            id: industry.id,
            name: attributes.name,
            description: attributes.field_teaser_text,
          };
          parsedIndustriesArray.push(industryObj);
        });

        dispatch({
          type: GET_INDUSTRIES,
          payload: parsedIndustriesArray,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // dispatch({
    //   type: GET_HERO_SECTION_DATA,
    //   payload: industries,
    // });
  };
};
// export const fetchBrazilianOverview = () => {
//   return async (dispatch) => {
//     const link =
//       "https://akamai.alvarezandmarsal.com/jsonapi/taxonomy_term/global_locations/22b1e094-5617-463a-9f66-5b7237553a05?include=field_featured_background_image";
//     await Axios.get(link)
//       .then((data) => {
//         const attributes = data?.data.data.attributes;
//         const included = data?.data.included;

//         // console.log(attributes);

//         const obj = {
//           title: attributes?.description.value,
//           descriptionBody: attributes?.field_overview_body.value,
//           careersText: attributes?.field_overview_careers_desc,
//         };
//         // console.log(obj);
//         dispatch({
//           type: GET_OVERVIEW_SECTION_DATA,
//           payload: obj,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

const getImageFromInclude = (dataIncluded, type) => {
  const newArr = dataIncluded?.filter((x) => x.type == type);

  return newArr;
};

const fetchIndustry = async (industryId) => {
  const link = `http://192.168.0.113:8080/jsonapi/taxonomy_term/industries/${industryId}?include=field_image`;
  var industryInfo;
  await Axios.get(link)
    .then((data) => {
      industryInfo = data;
    })
    .catch((err) => {
      console.log(err);
    });
  return industryInfo.data;
};
