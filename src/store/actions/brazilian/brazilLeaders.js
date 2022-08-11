import Axios from "axios";
export const GET_ALL_LEADERS = "GET_ALL_LEADERS";
export const GET_FILTER_TAGS = "GET_FILTER_TAGS";
export const FILTER_LEADERS = "FILTER_LEADERS";
export const GET_ALL_PERSONS = "GET_ALL_PERSONS";

export const fetchBrazilPersons = () => {
  return async (dispatch) => {
    const link =
      "http://192.168.0.113:8080/jsonapi/node/profile?include=field_professional_title,field_image_background,field_image,field_expertise,field_city&filter[field_region.id]=22b1e094-5617-463a-9f66-5b7237553a05";
    await Axios.get(link)
      .then((data) => {
        const dataIncluded = data?.data.included;
        const leaders = getInformationOfLeaders(dataIncluded, data?.data.data);

        dispatch({
          type: GET_ALL_PERSONS,
          payload: leaders,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const fetchBrazilLeaders = () => {
  return async (dispatch) => {
    // // const link = `https://akamai.alvarezandmarsal.com/jsonapi/taxonomy_term/industries/ca12f9a8-bfed-4fc1-9a04-5cc560a91fff?include=field_professional_title,
    // field_image_background,
    // field_image,
    // field_expertise,
    // field_city,
    // field_region`;
    const link = `http://192.168.0.113:8080/jsonapi/taxonomy_term/global_locations/22b1e094-5617-463a-9f66-5b7237553a05?include=field_featured_expert.field_professional_title,
    field_featured_expert.field_image_background,
    field_featured_expert.field_image,
    field_featured_expert.field_expertise,
    field_featured_expert.field_industry,
    field_featured_expert.field_city,
    field_featured_expert.field_region`;
    // const link = `http://192.168.0.113:8080/jsonapi/taxonomy_term/industries/${industryId}?include=field_featured_expert.field_professional_title,
    // field_featured_expert.field_image_background,
    // field_featured_expert.field_image,
    // field_featured_expert.field_expertise,
    // field_featured_expert.field_city,
    // field_featured_expert.field_region`;

    await Axios.get(link)
      .then((data) => {
        let obj = {};

        const dataIncluded = data?.data.included;

        let profiles = data.data.included?.filter(
          (x) => x.type == "node--profile"
        );
        let expertises = getIdAndNamebyTaxonomyType(
          dataIncluded,
          "taxonomy_term--expertise"
        );

        data.data.included?.filter(
          (x) => x.type == "taxonomy_term--global_locations"
        );
        let cities = getIdAndNamebyTaxonomyType(
          dataIncluded,
          "taxonomy_term--cities"
        );
        let industries = getIdAndNamebyTaxonomyType(
          dataIncluded,
          "taxonomy_term--industries"
        );

        const leaders = getInformationOfLeaders(dataIncluded, profiles);
        obj = {
          leaders: leaders,
          cities: cities,
          expertises: expertises,
          industries: industries,
        };
        // console.log(obj);
        // console.log(obj);
        dispatch({
          type: GET_ALL_LEADERS,
          payload: obj,
        });
        // return obj;
        // setContent(obj);
      })
      .catch((err) => console.log(err));
  };
};

const linkHealtCare =
  "http://192.168.0.113:8080/jsonapi/taxonomy_term/industries/ca12f9a8-bfed-4fc1-9a04-5cc560a91fff?include=field_featured_expert.field_region,field_featured_expert.field_division";

const linkECMAHEALTCARE =
  "http://192.168.0.113:8080/jsonapi/taxonomy_term/industries/c11b8f8f-9d3a-433a-949e-5518b9b24c25?include=field_featured_expert.field_region,field_featured_expert.field_division";

//get information: field_image_background , field_image, field_region
// require includedArray  , and an array of profiles
const getInformationOfLeaders = (dataIncluded, profiles) => {
  const linkOurPeople = "https://www.alvarezandmarsal.com/our-people/";
  const linkLocation = "https://www.alvarezandmarsal.com/global-locations/";
  const liveAM = "https://www.alvarezandmarsal.com/";
  // console.log(profiles);

  let parsedProfiles = [];
  profiles?.map((profile) => {
    let imageId = profile?.relationships?.field_image_background?.data?.id;
    let imageId1 = profile?.relationships?.field_image?.data?.id;

    let professionId =
      profile?.relationships?.field_professional_title?.data[0]?.id;
    let locationId = profile?.relationships?.field_region?.data[0]?.id;

    let firstName = profile.attributes.field_first_name;
    let lastName = profile.attributes.field_last_name;
    let country = dataIncluded?.find((x) => x?.id == locationId);

    // console.log(country);
    let imageURL =
      dataIncluded?.find((x) => x.id == imageId)?.attributes.uri.url ||
      dataIncluded?.find((x) => x.id == imageId1)?.attributes.uri.url;

    //some leaders can have 2 relations with 2 regions
    let locationId1 = profile?.relationships?.field_region?.data[1]?.id;
    let country1 = dataIncluded?.find((x) => x?.id == locationId1) ?? {};
    let person = {
      id: profile.id,
      firstName: firstName,
      lastName: lastName,
      name:
        profile.attributes.field_first_name +
        " " +
        profile.attributes.field_last_name,

      phone: profile.attributes.field_telephone,
      smallDescription: profile.attributes.field_intro_text,
      allDescription: profile.attributes.body.value,
      email: {
        uri: profile.attributes.field_mail.uri,
        title: profile.attributes.field_mail.title,
      },
      twitter: {
        uri: profile.attributes.field_twitter.uri,
        title: profile.attributes.field_twitter.title,
      },
      linkedin: {
        uri: profile.attributes.field_linkedin.uri,
        title: profile.attributes.field_linkedin.title,
      },
      position: dataIncluded?.find((x) => x.id == professionId)?.attributes
        .name,

      // profile?.relationships?.field_professional_title?.data?.id,

      country: {
        id: country?.id,
        name: country?.attributes?.name,
        type: country?.type,
      },
      country1: {
        id: country1?.id,
        name: country1?.attributes?.name,
        type: country1?.type,
      },
      image: liveAM + imageURL,
      // image:
      //   liveAM +
      //     dataIncluded?.find((x) => x.id == imageId)?.attributes.uri.url ||
      //   dataIncluded?.find((x) => x.id == imageId1)?.attributes.uri.url,
      // image1:
      //   liveAM +
      //   dataIncluded?.find((x) => x.id == imageId1)?.attributes.uri.url,
      // image1: imageId1,
      linkLocation:
        linkLocation +
        country?.attributes?.name.split(" ").join("-").toLowerCase(),
      linkOurPeople: liveAM + profile.attributes.path.alias,
      city: profile?.relationships?.field_city?.data[0],
      // city: profile?.relationships?.field_city?.data[0],
      expertise: profile?.relationships?.field_expertise?.data[0],
      // .map((x) => x.image.attributes.uri.url),
    };
    parsedProfiles = [...parsedProfiles, person];
  });
  return parsedProfiles;
};

const getIdAndNamebyTaxonomyType = (dataIncluded, type) => {
  const newArr = dataIncluded
    ?.filter((x) => x.type == type)
    ?.map((city) => {
      let newCity = {
        id: city.id,
        name: city.attributes.name,
        type: type,
      };
      return newCity;
    });
  return newArr;
};

export const addFilterTags = (tag) => {
  return (dispatch) => {
    dispatch({
      type: GET_FILTER_TAGS,
      payload: tag,
    });
  };
};

export const filterLeaders = (filterByTags) => {
  return (dispatch, getState) => {
    const { leaders } = getState().leaders;
    var myArrayFiltered = [];
    if (filterByTags.length == 1) {
      leaders?.forEach((leader) => {
        filterByTags.forEach((filter) => {
          if (
            leader?.country.id == filter.id ||
            leader?.city.id == filter.id ||
            leader?.expertise.id == filter.id
          ) {
            myArrayFiltered.push(leader);
          }
        });
      });
    } else if (filterByTags.length == 2) {
      leaders?.forEach((leader) => {
        if (
          leader?.country.id == filterByTags[0].id ||
          leader?.city.id == filterByTags[0].id ||
          leader?.expertise.id == filterByTags[0].id
        ) {
          let foundendLeader = leader;
          if (
            foundendLeader?.country.id == filterByTags[1].id ||
            foundendLeader?.city.id == filterByTags[1].id ||
            foundendLeader?.expertise.id == filterByTags[1].id
          ) {
            myArrayFiltered.push(foundendLeader);
          }
        }
      });
    } else if (filterByTags.length == 3) {
      leaders?.forEach((leader) => {
        if (
          leader?.country.id == filterByTags[0].id ||
          leader?.city.id == filterByTags[0].id ||
          leader?.expertise.id == filterByTags[0].id
        ) {
          let foundendLeader = leader;
          if (
            foundendLeader?.country.id == filterByTags[1].id ||
            foundendLeader?.city.id == filterByTags[1].id ||
            foundendLeader?.expertise.id == filterByTags[1].id
          ) {
            let foundLeader1 = foundendLeader;
            if (
              foundLeader1?.country.id == filterByTags[2].id ||
              foundLeader1?.city.id == filterByTags[2].id ||
              foundLeader1?.expertise.id == filterByTags[2].id
            ) {
              myArrayFiltered.push(foundLeader1);
            }
          }
        }
      });
    } else if (filterByTags.length == 0) {
      myArrayFiltered = [...leaders];
    } else {
      myArrayFiltered = [];
    }
    dispatch({
      type: FILTER_LEADERS,
      payload: myArrayFiltered,
    });
  };
};
