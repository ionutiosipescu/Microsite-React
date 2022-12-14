import Axios from "axios"

const customApi = process.env.REACT_APP_BASE_API_URL + "/api/v1"

export const fetchData = setContent => {
  const link = `${customApi}/hls`

  Axios.get(link)
    .then(res => {
      setContent(res.data)
    })
    .catch(err => console.log(err))
}

export const fetchRecentRecognition = setContent => {
  const link = `${customApi}/hls/quotes`
  Axios.get(link)
    .then(res => {
      console.log(res?.data?.data)
      setContent(res?.data?.data)
    })
    .catch(err => console.log(err))
}
