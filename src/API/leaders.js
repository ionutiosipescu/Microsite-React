import Axios from "axios";

const customApi = process.env.REACT_APP_BASE_API_URL + "/api/v1";

export const fetchExpertiseProfessional = (setContent) => {
  const link = `${customApi}/hls`;
  //   const link = "https://akamai.alvarezandmarsal.com/api/v1/hls/quotes";

  Axios.get(link)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const fetchLeadersPage = async (setContent) => {
  const link =
    "http://192.168.0.113:8080/jsonapi/node/profile?include=field_professional_title,field_image_background,field_image,field_region";

  await Axios.get(link)
    .then((res) => {
      const data = res?.data;
      const dataIncluded = data?.included;
      const profiles = data?.data;
      setContent(getInformationOfLeaders(dataIncluded, profiles));
    })
    .catch((err) => console.log(err));
};

export const fetchHLSLeaders = async (setContent) => {
  const link = `https://akamai.alvarezandmarsal.com/jsonapi/taxonomy_term/industries/ca12f9a8-bfed-4fc1-9a04-5cc560a91fff?include=field_featured_expert.field_professional_title,
  field_featured_expert.field_image_background,
  field_featured_expert.field_image,
  field_featured_expert.field_expertise,
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
      // console.log(data);

      const dataIncluded = data?.data.included;

      let profiles = data.data.included?.filter(
        (x) => x.type == "node--profile"
      );
      let expertises = getIdAndNamebyTaxonomyType(
        dataIncluded,
        "taxonomy_term--expertise"
      );
      let global_locations = getIdAndNamebyTaxonomyType(
        dataIncluded,
        "taxonomy_term--global_locations"
      );
      data.data.included?.filter(
        (x) => x.type == "taxonomy_term--global_locations"
      );
      let cities = getIdAndNamebyTaxonomyType(
        dataIncluded,
        "taxonomy_term--cities"
      );

      // var cities = dataIncluded.filter(function (el) {
      //   return el.type == "taxonomy_term--cities";
      // });
      const leaders = getInformationOfLeaders(dataIncluded, profiles);
      obj = {
        leaders: leaders,
        cities: cities,
        expertises: expertises,
        location: global_locations,
      };

      // console.log(obj);
      setContent(obj);

      // return obj;
      // setContent(obj);
    })
    .catch((err) => console.log(err));
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
    let country = dataIncluded?.find((x) => x.id == locationId);
    let imageURL =
      dataIncluded?.find((x) => x.id == imageId)?.attributes.uri.url ||
      dataIncluded?.find((x) => x.id == imageId1)?.attributes.uri.url;

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
        id: country.id,
        name: country?.attributes?.name,
        type: country.type,
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
      linkOurPeople:
        linkOurPeople + firstName.toLowerCase() + "-" + lastName.toLowerCase(),
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
