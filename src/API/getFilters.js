import Axios from "axios";
import { getLink, grabDataFromIncluded, grabRelatedPeople } from "./helper";
import { dateToShortLocale } from "../utils";

const jsonApi = process.env.REACT_APP_BASE_API_URL + "/jsonapi";
const customApi = process.env.REACT_APP_BASE_API_URL + "/api/v1";

// https://akamai.alvarezandmarsal.com/api/v1/insight/filter-option

export const getInsightFilters = (setFilters) => {
  const link = `${customApi}/insight/filter-option`;

  Axios.get(link).then((res) => {
    setFilters(res.data);

    // console.log(res.data);
  });
};
