import React, { useState, useEffect } from "react";
import {
  HeroSection,
  ProfessionalsCardSmall,
  CarouselSection,
} from "../../components/cards";
import styled from "styled-components";
import { tags, leadersList, arr, links } from "../../utils/data";
import {
  FiltrationNavbar,
  NavbarCell,
  NavbarDropdown,
  SearchBar,
  NavigationCell,
  NavigationNavbar,
} from "../../components/navbarComponents";
import BreadCrumb from "../../components/BreadCrumb";
import FilterBy from "../../components/FilterBy";
import YellowButton from "../../components/buttons/YellowButton";
import {
  getCaseStudiesArticles,
  fetchHeroSectionDataHome,
  getCarouselArticles,
  getExpertiseFields,
  getCountries,
  fetchData,
} from "../../API";
import DOMPurify from "dompurify";
import { useDocumentTitle } from "../../hook";
import { Spinner } from "../../components";

export const LeaadersContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  position: relative;
`;

const Leadership = () => {
  const [filterByTags, setFilterByTags] = useState(["sunshine", "sunshine"]);
  const [inputText, setInputText] = useState("");
  const [clickedNavbarCell, setClickedNavbarCell] = useState(null);
  const [carouselData, setCarouselData] = useState([]);

  //open the detail Section on specific leader
  const [openedState, setOpenedState] = useState(
    Array.from(leadersList, () => false)
  );

  const handleDisplay = (index) => {
    console.log("this is the index", index);

    if (!openedState[index]) {
      let arr = Array.from(leadersList, () => false);
      arr[index] = true;
      setOpenedState([...arr]);
    } else {
      setOpenedState(Array.from(leadersList, () => false));
    }
  };

  let arr = [<YellowButton />, <ProfessionalsCardSmall />];

  useEffect(() => {
    getExpertiseFields();
    getCountries();
    fetchData(setCarouselData);
  }, []);

  let dirty = `<h1><a href="#" onClick="alert(${openedState});">Click Me</a>  </h1>   `;
  let clean = DOMPurify.sanitize(dirty);

  // console.log(inputText)
  useDocumentTitle("Leadership | Alvarez & Marsal");
  return (
    <>
      <HeroSection title={"helthcare & live sciences leaders"} />

      <FiltrationNavbar
        searchBar={{ placeholder: "enter search here", setInputText }}
        filterByTags={filterByTags}
        setFilterByTags={setFilterByTags}
      >
        <NavbarDropdown data={links}>Something</NavbarDropdown>
        <NavbarDropdown data={links}>DropDown</NavbarDropdown>
        <NavbarDropdown data={links}>Something</NavbarDropdown>
        <NavbarDropdown data={links}>Something2</NavbarDropdown>
      </FiltrationNavbar>

      <FiltrationNavbar
        searchBar2={{ placeholder: "enter search here", setInputText }}
        spread
        filterByTags={filterByTags}
        setFilterByTags={setFilterByTags}
      >
        <NavbarDropdown data={links}>Something</NavbarDropdown>
        <NavbarDropdown data={links}>DropDown</NavbarDropdown>
        <NavbarDropdown data={links}>Something</NavbarDropdown>
        <NavbarDropdown data={links}>Something2</NavbarDropdown>
      </FiltrationNavbar>

      <NavigationNavbar setClickedNavbarCell={setClickedNavbarCell}>
        <NavigationCell> First</NavigationCell>
        <NavigationCell> First1</NavigationCell>
        <NavigationCell> First2</NavigationCell>
      </NavigationNavbar>

      <FilterBy filterByTags={filterByTags} setFilterByTags={setFilterByTags} />
      {arr[clickedNavbarCell]}
      <div
        className="pt-3 text-decoration-none"
        dangerouslySetInnerHTML={{ __html: dirty }}
      ></div>
      <div
        className="pt-3 text-decoration-none"
        dangerouslySetInnerHTML={{ __html: clean }}
      ></div>

      <div className="m-4">
        <LeaadersContainer>
          {leadersList.map((cardInfo, index) => {
            return (
              <ProfessionalsCardSmall
                key={index}
                cardInfo={cardInfo}
                index={index}
                openedState={openedState}
                handleDisplay={handleDisplay}
                showDetails={openedState[index]}
              />
            );
          })}
        </LeaadersContainer>
      </div>
      {carouselData.length === 0 ? (
        <Spinner />
      ) : (
        <CarouselSection
          categoryCarousel={carouselData?.block_two?.title}
          backgroundColor="#002B49"
          arr={carouselData?.block_two?.data}
          titleColor="#0085CA"
          textColor="#fff"
          textDate="#FFF"
          carouselDotBackground="#002b49"
        />
      )}
    </>
  );
};

export default Leadership;
