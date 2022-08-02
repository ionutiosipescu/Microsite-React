import Axios from "axios";

const customApi = process.env.REACT_APP_BASE_API_URL + "/api";

export const getInsights = (setInsightsContent) => {
  Axios.get(`${customApi}/v1/insight-filter`).then((res) => {
    setInsightsContent(res.data);
  });
};
