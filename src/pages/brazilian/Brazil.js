import React, { useState } from "react";
import HeroSection from "../../components/cards/HeroSection";
import {
  NavigationCell,
  NavigationNavbar,
} from "../../components/navbarComponents/";
import { useDocumentTitle } from "../../hook";
import {
  Overview,
  Services,
  News,
  Insights,
  Professionals,
  Locations,
} from "./subPages";

const Brazil = () => {
  // The index of the of the item clicked in the navbar
  const [clickedNavbarCell, setClickedNavbarCell] = useState(0);

  // The order of the sub pages in the array is important since it is used with the index from above
  const subPages = [
    <Overview />,
    <Services />,
    <News />,
    <Insights />,
    <Professionals />,
    <Locations />,
  ];

  const heroSectionData = {
    title: "Brazil",
    backgroundUrl:
      "https://www.alvarezandmarsal.com/sites/default/files/styles/wide_3_2_desktop/public/countrypage_brazil.jpg?itok=XVXwKdCi",
  };

  // console.log(clickedNavbarCell)
  useDocumentTitle("Brazil | Home | Alvarez & Marsal");
  return (
    <>
      <HeroSection
        title={heroSectionData.title}
        backgroundUrl={heroSectionData.backgroundUrl}
        transparent
      />

      <NavigationNavbar setClickedNavbarCell={setClickedNavbarCell}>
        <NavigationCell>Overview</NavigationCell>
        <NavigationCell> Services</NavigationCell>
        <NavigationCell> Brazil in The News</NavigationCell>
        <NavigationCell> Brazil Insights</NavigationCell>
        <NavigationCell> Our People</NavigationCell>
        <NavigationCell> Locations</NavigationCell>
      </NavigationNavbar>

      {subPages[clickedNavbarCell]}
    </>
  );
};

export default Brazil;
