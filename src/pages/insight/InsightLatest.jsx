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
import { ArticleContainers } from "./styles/inisghts.style";
import { BreadCrumb, FilterBy, Spinner } from "../../components";
import { getInsightFilters, getInsights, fetchData } from "../../API";
import { StyledContainer } from "../../components/layout/Rows&Collumns/Rows&Collumns.style";
import { useDocumentTitle } from "../../hook";

const InsightLatest = () => {
  let persistedFilters = JSON.parse(
    sessionStorage.getItem("latestInsightsFilters")
  );

  const [selectedFilters, setSelectedFilters] = useState(
    persistedFilters || []
  );

  // Getting the latest articles from server
  const [carouselData, setCarouselData] = useState([]);
  const [insightsContent, setInsightsContent] = useState([]);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    fetchData(setCarouselData);
    getInsights(setInsightsContent, selectedFilters);
    getInsightFilters(setFilters);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "latestInsightsFilters",
      JSON.stringify(selectedFilters)
    );
    getInsights(setInsightsContent, selectedFilters);
  }, [selectedFilters]);

  useDocumentTitle("Insights | Latest Insights | Alvarez & Marsal");
  console.log("those are filters", selectedFilters);

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
          searchBar2={{ placeholder: "Enter Author's Name" }}
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
        <BreadCrumb route={"Insights"} subRoute={"Latest Insights"} />

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
