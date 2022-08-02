import Axios from "axios";
import { getLink } from "./helper";

const jsonApi = process.env.REACT_APP_BASE_API_URL + "/jsonapi";

export const getSingleArticle = (setArticleData, id) => {
  const link = `${jsonApi}/node/article?&include=field_authors.field_professional_title&filter[id]=${id}`;
  console.log(link);

  Axios.get(link).then((res) => {
    console.log(res.data.data[0]);

    const data = res.data.data[0];
    const included = res.data.included;

    let article = {};

    article.content = data.attributes.body.value;

    article.date = new Date(
      data.attributes.revision_timestamp
    ).toLocaleDateString();
    article.title = data.attributes.title;

    // article.authors = included[0].attributes.title;
    // article.professionalTitle = included[1].attributes.name;

    setArticleData(article);
  });
};

export const getArticles = async (setContent, articleType, amount) => {
  const link = getLink(articleType, amount);

  await Axios.get(link).then((res) => {
    const arr = [];

    res.data.data.map((item) => {
      let data = {};

      data.title = item.attributes.title;
      data.teaserText = item.attributes.field_teaser_text;
      data.body = item.attributes.body.value;
      data.date = new Date(
        item.attributes.revision_timestamp
      ).toLocaleDateString();
      data.authorsData = item.relationships.field_authors?.data;
      data.id = item.id;

      arr.push(data);
    });

    setContent([...arr]);
  });
};

export const getCarouselArticles = async (setContent) => {
  const link = `${jsonApi}/node/article?include=field_primary_industry&filter[field_primary_industry.name]=healthcare&page[limit]=6&sort=-created`;
  const arr = [];
  await Axios.get(link)
    .then((res) => {
      const articles = res.data.data;

      articles.forEach((article) => {
        // console.log(article.attributes?.field_metatag);
        let art = {
          // id: article.id,
          title: article?.attributes?.title,
          description: article.attributes?.field_teaser_text,
          category: article.attributes.field_metatag?.keywords,
          date: new Date(
            article.attributes?.revision_timestamp
          ).toLocaleDateString(),
        };
        arr.push(art);
      });
    })
    .catch((err) => console.log(err));

  setContent([...arr]);
};

export const getCaseStudiesArticles = async (setContent) => {
  const link = `${jsonApi}/node/article?include=field_authors,field_primary_industry,field_authors.field_professional_title&filter[field_primary_industry.name]=healthcare&page%5Blimit%5D=8&sort=-created`;
  let parsedArticles = [];
  let allAuthors = [];

  await Axios.get(link)
    .then((res) => {
      const articles = res.data.data;

      allAuthors = res.data.included;
      console.log(allAuthors);
      articles.forEach((article) => {
        // console.log(article.attributes?.field_metatag);
        let art = {
          id: article.id,
          title: article?.attributes?.title,
          teaserText: article.attributes?.field_teaser_text,
          category: article.attributes.field_metatag?.keywords,
          date: new Date(
            article.attributes?.revision_timestamp
          ).toLocaleDateString(),
          authorsData: article.relationships.field_authors?.data,
          body: article.attributes.body.value,
        };
        parsedArticles.push(art);
      });
    })
    .catch((err) => console.log(err));

  parsedArticles.map((article) => {
    article.authorsData.map((author) => {
      allAuthors.forEach((x) => {
        if (x.id == author.id) {
          author.id = x.id;
          author.professionId =
            x?.relationships?.field_professional_title?.data[0]?.id;
          author.firstName = x.attributes.field_first_name;
          author.lastName = x.attributes.field_last_name;
        }
      });
    });
  });
  parsedArticles.map((article) => {
    article.authorsData.map((author) => {
      allAuthors.forEach((x) => {
        if (author.professionId == x.id) {
          author.profession = x?.attributes?.name;
        }
      });
    });
  });

  console.log(parsedArticles);

  setContent(parsedArticles);
};
