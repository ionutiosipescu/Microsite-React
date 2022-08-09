import React, { useState, useEffect } from "react";
import {
  ArticleCard,
  HeroSection,
  CarouselSection,
} from "../../components/cards";
import {
  FiltrationNavbar,
  NavbarDropdown,
} from "../../components/navbarComponents";
import { BreadCrumb, FilterBy, Spinner } from "../../components";
import { filtrationNavbarData, PostsArr } from "../../utils/data";
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style";
import { ArticleContainers } from "./styles/inisghts.style";

import {
  getCaseStudiesArticles,
  fetchHeroSectionDataHome,
  fetchData,
} from "../../API";

import { useDocumentTitle } from "../../hook";

const InsightCase = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [heroSectionData, setHeroSectionData] = useState();
  const [articles, setArticles] = useState([]);
  const [carouselData, setCarouelData] = useState([]);

  const locationName = location?.pathname.split("/").slice(1, 3);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchHeroSectionDataHome(setHeroSectionData);
    getCaseStudiesArticles(setArticles);
    fetchData(setCarouelData);
    setLoading(false);
  }, []);

  useDocumentTitle("Insights | Case Studies | Alvarez & Marsal");

  return (
    <>
      <HeroSection
        title=" Latest Studies"
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      {!filters ? (
        <Spinner />
      ) : (
        <FiltrationNavbar
          searchBar2={{
            placeholder: "Enter Author's Name",
            filterType: "userInput",
          }}
          setSelectedFilters={setSelectedFilters}
          selectedFilters={selectedFilters}
        >
          <NavbarDropdown
            filtersList={filters.expertise}
            filterType={"expertise"}
          >
            {"Expertise"}
          </NavbarDropdown>

          <NavbarDropdown
            filtersList={filters.industries}
            filterType={"industries"}
          >
            {"Industry"}
          </NavbarDropdown>

          <NavbarDropdown filtersList={filters.region} filterType={"region"}>
            {"Country"}
          </NavbarDropdown>

          <NavbarDropdown filtersList={filters.created} filterType={"years"}>
            {"Year"}
          </NavbarDropdown>

          <NavbarDropdown
            filtersList={filters.bulletin}
            filterType={"bulletin"}
          >
            {"Bulletin Type"}
          </NavbarDropdown>
          {/* 
          <NavbarDropdown
            // filtersList={filters.industries}
            // filterType={"media?"}
            filtersList={filters.industries}
            filterType={"months"}
          >
            {"Media Type"}
          </NavbarDropdown> */}

          <NavbarDropdown filtersList={filters.created} filterType={"months"}>
            {"Months"}
          </NavbarDropdown>
        </FiltrationNavbar>
      )}
      {selectedFilters && (
        <FilterBy
          setSelectedFilters={setSelectedFilters}
          selectedFilters={selectedFilters}
          setInsightsContent={setInsightsContent}
        />
      )}

      <StyledContainer>
        <BreadCrumb route={"Insights"} subRoute={"Case Studies"} />

        <ArticleContainers>
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
