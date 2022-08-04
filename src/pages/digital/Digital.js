import React, { useState } from "react";
import HeroSection from "../../components/cards/HeroSection";
import {
  Overview,
  Insights,
  Professionals,
  NewsRelease,
  Capabilities,
  Practice,
} from "./subPages";
import {
  NavigationCell,
  NavigationNavbar,
} from "../../components/navbarComponents/";
import { useDocumentTitle } from "../../hook";

const Digital = () => {
  // The index of the of the item clicked in the navbar
  const [clickedNavbarCell, setClickedNavbarCell] = useState(0);

  // The order of the sub pages in the array is important since it is used with the index from above
  const subPages = [
    // <Insights />,
    <Overview />,
    <Capabilities />,
    <NewsRelease />,
    <Insights />,
    <Professionals />,
    <Practice />,
  ];
  useDocumentTitle("Digital | Home | Alvarez & Marsal");
  return (
    <>
      <HeroSection
        title={"a&m digital capabilities"}
        backgroundUrl={
          "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        buttonText="CONTACT US"
      />

      <NavigationNavbar setClickedNavbarCell={setClickedNavbarCell}>
        <NavigationCell>Overview</NavigationCell>
        <NavigationCell> Capabilities</NavigationCell>
        <NavigationCell> {"News"}</NavigationCell>
        <NavigationCell> Insights</NavigationCell>
        <NavigationCell> Professionals</NavigationCell>
        <NavigationCell> Practice</NavigationCell>
      </NavigationNavbar>

      {subPages[clickedNavbarCell]}
    </>
  );
};

export default Digital;
