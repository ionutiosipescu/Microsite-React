import Axios from "axios";

export const fetchData = (setContent) => {
  const link = "http://192.168.0.113:8080/api/v1/hls";
  // const link = "https://akamai.alvarezandmarsal.com/api/v1/hls/quotes";

  Axios.get(link)
    .then((res) => {
      console.log(res.data);
      setContent(res.data);
    })
    .catch((err) => console.log(err));
};

export const fetchRecentRecognition = (setContent) => {
  const link = "https://akamai.alvarezandmarsal.com/api/v1/hls/quotes";
  Axios.get(link)
    .then((res) => {
      console.log(res?.data?.data);
      setContent(res?.data?.data);
    })
    .catch((err) => console.log(err));
};
