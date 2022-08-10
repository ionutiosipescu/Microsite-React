import Axios from "axios";

const customApi = process.env.REACT_APP_BASE_API_URL + "/api/v1";

export const getInsightFilters = (setFilters) => {
  const link = `${customApi}/insight/filter-option`;

  Axios.get(link).then((res) => {
    // There is a None value in industries. Removed it.
    res.data.industries = res.data.industries.filter(
      (industry) => industry.name !== "None"
    );

    setFilters(res.data);
  });
};
