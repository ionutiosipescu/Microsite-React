import Axios from "axios";

export const getInsights = (setInsightsContent) => {
  //   console.log("happy noised");
  Axios.get("http://192.168.0.113:8080/api/v1/insight-filter").then((res) => {
    console.log(res);

    setInsightsContent(res.data);
  });
};
