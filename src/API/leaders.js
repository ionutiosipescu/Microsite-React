import Axios from "axios";

const customApi = process.env.REACT_APP_BASE_API_URL + "/api";

export const fetchExpertiseProfessional = (setContent) => {
  const link = `${customApi}/v1/hls`;
  //   const link = "https://akamai.alvarezandmarsal.com/api/v1/hls/quotes";

  Axios.get(link)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
