import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { test } from "../../store/actions/test";
import { Hero } from "./about.style";
import { Container } from "react-bootstrap";
import { CustomNavbar, NavItem } from "./about.style";
import SubPage from "./subPages/";
import YellowButton from "../../components/buttons/YellowButton";
import HeroSection from "../../components/cards/HeroSection";
import digital from "../../assets/images/digital";

const About = () => {
  const dispatch = useDispatch();
  const testReducer = useSelector((state) => state.test);
  const [subPage, setSubPage] = useState("overview");
  // console.log(testReducer)

  const handleSubPage = (name) => {
    console.log(name);
    setSubPage(name);
  };

  //
  const subPages = {
    overview: "overview",
    services: "services",
    news: "news",
    insights: "insights",
    professionals: "professionals",
    locations: "locations",
    // capabilities: "capabilities",
    // newsRelease: "newsRelease",
    // insights: "insights",
  };
  const heroSectionData = {
    title: "Brazil",
    backgroundUrl:
      "https://www.alvarezandmarsal.com/sites/default/files/styles/wide_3_2_desktop/public/countrypage_brazil.jpg?itok=XVXwKdCi",
  };
  return (
    <>
      <HeroSection
        title={heroSectionData.title}
        backgroundUrl={heroSectionData.backgroundUrl}
        handleSubPage={handleSubPage}
      />

      <CustomNavbar bg="light" expand="lg">
        <NavItem
          onClick={() => handleSubPage(subPages.overview)}
          clicked={subPage === subPages.overview}
        >
          {"Overview"}
        </NavItem>
        <NavItem
          onClick={() => handleSubPage(subPages.services)}
          clicked={subPage === subPages.services}
        >
          {"Services"}
        </NavItem>
        <NavItem
          onClick={() => handleSubPage(subPages.news)}
          clicked={subPage === subPages.news}
        >
          {"Brazil in The News"}
        </NavItem>
        <NavItem
          onClick={() => handleSubPage(subPages.insights)}
          clicked={subPage === subPages.insights}
        >
          {"Brazil Insights"}
        </NavItem>
        <NavItem
          onClick={() => handleSubPage(subPages.professionals)}
          clicked={subPage === subPages.professionals}
        >
          {"Our people"}
        </NavItem>
        <NavItem
          onClick={() => handleSubPage(subPages.locations)}
          clicked={subPage === subPages.locations}
        >
          {"Locations"}
        </NavItem>
      </CustomNavbar>
      <SubPage subPage={subPage} handleSubPage={handleSubPage} />
    </>
  );
};

export default About;
