import Axios from "axios";
import { grabDataFromIncluded } from "./helper";

const jsonApi = process.env.REACT_APP_BASE_API_URL + "/jsonapi";

export const getPodcasts = (setContent) => {
  const link = `${jsonApi}/node/podcast?include=field_teaser_image,node_type,field_authors&page[limit]=6&sort=-created`;

  Axios.get(link).then((res) => {
    const arr = [];
    res.data.data.map((item, index) => {
      let data = {};

      data.title = item.attributes.title;
      data.teaserText = item.attributes.field_teaser_text;
      data.date = new Date(
        item.attributes.revision_timestamp
      ).toLocaleDateString();
      data.body = item.attributes.body.processed;

      console.log(res.data);
      console.log(index);

      data.image =
        imageLink + grabDataFromIncluded("field_teaser_image", res.data, index);
      // data.type = grabDataFromIncluded("node_type", res.data, index);
      // data.authors = grabDataFromIncluded("field_authors", res.data, index);

      data.id = item.id;

      arr.push(data);
    });
    setContent([...arr]);
    console.table(arr);
  });
};
