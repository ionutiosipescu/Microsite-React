import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
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
import { BreadCrumb, FilterBy } from "../../components";
import { filtrationNavbarData, PostsArr } from "../../utils/data";
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style";
import { ArticleContainers } from "./styles/inisghts.style";

import {
  getCaseStudiesArticles,
  fetchHeroSectionDataHome,
  getCarouselArticles,
} from "../../API";

import { useDocumentTitle } from "../../hook";

const InsightCase = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [heroSectionData, setHeroSectionData] = useState();
  const [articles, setArticles] = useState([]);
  const [carouselData, setCarouelData] = useState([]);

  const locationName = location?.pathname.split("/").slice(1, 3);
  const [filterByTags, setFilterByTags] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchHeroSectionDataHome(setHeroSectionData);
    getCaseStudiesArticles(setArticles);
    getCarouselArticles(setCarouelData);
    setLoading(false);
  }, []);

  useDocumentTitle("Insights | Case Studies | Alvarez & Marsal");

  return (
    <>
      <HeroSection
        title={heroSectionData?.title}
        backgroundUrl={heroSectionData?.backgroundUrl}
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
      <div className="breadCrumbContainer px-4 pt-4">
        <BreadCrumb route={"Insights"} subRoute={"Case Studies"} />
      </div>
      <StyledContainer>
        {loading ? (
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <ArticleContainers>
            {articles.map((post, index) => (
              <ArticleCard
                post={post}
                locationName={locationName}
                key={index}
              />
            ))}
          </ArticleContainers>
        )}
      </StyledContainer>
      <CarouselSection
        categoryCarousel={"Healthcare & Live Sciences News"}
        backgroundColor="#002B49"
        arr={carouselData}
        titleColor="#0085CA"
        textColor="#fff"
        textDate="#fff"
        carouselDotBackground="#002b49"
      />
    </>
  );
};

export default InsightCase;
