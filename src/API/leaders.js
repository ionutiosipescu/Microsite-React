import Axios from "axios";

export const fetchExpertiseProfessional = (setContent) => {
  const link = "http://192.168.0.113:8080/api/v1/hls";
  //   const link = "https://akamai.alvarezandmarsal.com/api/v1/hls/quotes";

  Axios.get(link)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
