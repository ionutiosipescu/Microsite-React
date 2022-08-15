import React, { useEffect, useState } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import { fetchBrazilianHeroSection } from "../../store/actions/brazilian/brazilianOverview";

const Brazil = () => {
  const dispatch = useDispatch();
  const heroSectionData = useSelector(
    (state) => state.brazilianOverview.heroSection
  );

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

  // const heroSectionData = {
  //   title: "Brazil",
  //   backgroundUrl:
  //     "https://www.alvarezandmarsal.com/sites/default/files/styles/wide_3_2_desktop/public/countrypage_brazil.jpg?itok=XVXwKdCi",
  // };
  useEffect(() => {
    dispatch(fetchBrazilianHeroSection());
  }, []);
  // console.log(clickedNavbarCell)
  useDocumentTitle("Brazil | Home | Alvarez & Marsal");
  return (
    <>
      <HeroSection
        title={heroSectionData?.title}
        backgroundUrl={heroSectionData?.backgroundUrl}
        transparent
        heroBrazilianText={heroSectionData?.rightSectionText}
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
