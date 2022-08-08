import Axios from "axios";
import { getLink, grabDataFromIncluded, grabRelatedPeople } from "./helper";
import { dateToShortLocale } from "../utils";

const jsonApi = process.env.REACT_APP_BASE_API_URL + "/jsonapi";
const customApi = process.env.REACT_APP_BASE_API_URL + "/api/v1";

export const getInsightFilters = (setFilters) => {
  const link = `${customApi}/insight/filter-option`;

  Axios.get(link).then((res) => {
    // let cleanData = res.data;
    // console.log(cleanData);
    // There is a None value in industries. Removed it.
    res.data.industries = res.data.industries.filter(
      (industry) => industry.name !== "None"
    );

    setFilters(res.data);

    // console.log(res.data);
  });
};
