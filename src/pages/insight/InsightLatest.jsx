import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PostCard, HeroSection, CarouselSection } from "../../components/cards";
import {
  FiltrationNavbar,
  NavbarDropdown,
} from "../../components/navbarComponents";

import { BreadCrumb, FilterBy, Spinner } from "../../components";
import { filtrationNavbarData, PostsArr } from "../../utils/data";
import { fetchData, getArticles } from "../../API";
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style";
import { useDocumentTitle } from "../../hook";

const PostsContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const InsightLatest = () => {
  const [filterByTags, setFilterByTags] = useState([
    "sunshine",
    "sunshine",
    "sunshine2",
  ]);

  // Getting the latest articles from server
  const [carouselData, setCarouselData] = useState([]);
  const [postsContent, setPostsContent] = useState([]);
  useEffect(() => {
    getArticles(setPostsContent, "insights");
    fetchData(setCarouselData);
  }, []);

  // console.log(postsContent)
  useDocumentTitle("Insights | Latest Insights | Alvarez & Marsal");
  return (
    <>
      <HeroSection
        title=" Latest Studies"
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <FiltrationNavbar
        searchBar2={"search"}
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

        <PostsContainer>
          {postsContent?.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </PostsContainer>
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
