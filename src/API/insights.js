import Axios from "axios";
const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

export const getInsights = (setInsightsContent) => {
  Axios.get(`${baseApiUrl}/v1/insight-filter`).then((res) => {
    setInsightsContent(res.data);
  });
};
