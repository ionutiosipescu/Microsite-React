import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ArticleCard,
  HeroSection,
  CarouselSection,
} from "../../components/cards";
import {
  FiltrationNavbar,
  NavbarDropdown,
} from "../../components/navbarComponents";
import { ArticleContainers } from "./styles/inisghts.style";
import { BreadCrumb, FilterBy, Spinner } from "../../components";
import { filtrationNavbarData, PostsArr } from "../../utils/data";
import {
  getArticles,
  getSingleArticle,
  getInsights,
  fetchData,
} from "../../API";
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style";
import { useDocumentTitle } from "../../hook";

const InsightLatest = () => {
  const [filterByTags, setFilterByTags] = useState([
    "sunshine",
    "sunshine",
    "sunshine2",
  ]);

  // Getting the latest articles from server
  const [carouselData, setCarouselData] = useState([]);
  const [postsContent, setPostsContent] = useState([]);
  const [insightsContent, setInsightsContent] = useState([]);
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    getArticles(setPostsContent, "insights");
    fetchData(setCarouselData);
    getSingleArticle(setArticleData, "3030696e-0490-483b-94f2-127d13fd3478");

    getInsights(setInsightsContent);
  }, []);

  console.log(articleData);

  useDocumentTitle("Insights | Latest Insights | Alvarez & Marsal");

  return (
    <>
      <HeroSection
        title=" Latest Studies"
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <FiltrationNavbar
        searchBar2={{ placeholder: "enter search here" }}
        setFilterByTags={setFilterByTags}
        filterByTags={filterByTags}
      >
        {filtrationNavbarData.map((item, index) => (
          <NavbarDropdown data={item.tagNames} key={index}>
            {item.title}
          </NavbarDropdown>
        ))}
      </FiltrationNavbar>
      <FilterBy setFilterByTags={setFilterByTags} filterByTags={filterByTags} />

      <StyledContainer>
        <BreadCrumb route={"Insights"} subRoute={"Latest Insights"} />

        <ArticleContainers>
          {/* {postsContent?.map((post, index) => (
            <ArticleCard post={post} key={index} />
          ))} */}
          {insightsContent?.map((article, index) => (
            <ArticleCard {...article} key={index} />
          ))}
        </ArticleContainers>
      </StyledContainer>
      {carouselData.length == 0 ? (
        <Spinner />
      ) : (
        <CarouselSection
          categoryCarousel={carouselData?.block_two?.title}
          backgroundColor="#002B49"
          arr={carouselData?.block_two?.data}
          titleColor="#0085CA"
          textColor="#fff"
          textDate="#FFFFFF"
          carouselDotBackground="#002b49"
        />
      )}
    </>
  );
};

export default InsightLatest;
