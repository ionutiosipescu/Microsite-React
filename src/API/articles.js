import Axios from "axios";

const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

export const getArticle = async (setContent) => {
  const link =
    baseApiUrl +
    "/node/article?include=field_primary_industry&filter[field_primary_industry.name]=healthcare&page[limit]=6&sort=-created";

  await Axios.get(link).then((res) => {
    const arr = [];

    res.data.data.map((item) => {
      let data = {};
      data.title = item.attributes.title;
      data.teaserText = item.attributes.field_teaser_text;
      data.date = item.attributes.created;
      data.id = item.id;

      arr.push(data);
    });
    setContent([...arr]);
  });
};

export const getCarouselArticles = async (setContent) => {
  const link =
    baseApiUrl +
    "/node/article?include=field_primary_industry&filter[field_primary_industry.name]=healthcare&page[limit]=6&sort=-created";
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
  const link =
    baseApiUrl +
    "/node/article?include=field_authors,field_primary_industry,field_authors.field_professional_title&filter[field_primary_industry.name]=healthcare&page%5Blimit%5D=8&sort=-created";
  let parsedArticles = [];
  var allAuthors = [];

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
