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
// import { fetchHLSLeaders, fetchLeadersPage } from "../../API/leaders";

import { useDispatch, useSelector } from "react-redux";
import { fetchHLSLeaders, fetchHLSPersons } from "../../store/actions/leaders";

export const LeaadersContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  position: relative;
`;
const Leadership = () => {
  const dispatch = useDispatch();

  const leaders = useSelector((state) => state.leaders.filteredLeaders);
  const persons = useSelector((state) => state.leaders.industryPersons);
  const cities = useSelector((state) => state.leaders.cities);
  const expertises = useSelector((state) => state.leaders.expertises);
  const location = useSelector((state) => state.leaders.location);

  const [filterByTags, setFilterByTags] = useState([]);
  const [inputText, setInputText] = useState("");
  const [clickedNavbarCell, setClickedNavbarCell] = useState(null);
  const [carouselData, setCarouselData] = useState([]);
  // const [leaders, setLeaders] = useState([]);
  // const [cities, setCities] = useState([]);
  // const [dataObj, setDataObj] = useState();

  //open the detail Section on specific leader

  const [openedState, setOpenedState] = useState(
    Array.from(leaders ?? [], () => false)
  );
  // const [openedState, setOpenedState] = useState(
  //   Array.from(leaders ?? [], () => false)
  // );
  // const [openedState, setOpenedState] = useState();
  // Array.from(leaders, () => false)

  const handleDisplay = (index) => {
    if (leaders) {
      if (!openedState[index]) {
        let arr = Array.from(leaders, () => false);
        arr[index] = true;
        setOpenedState([...arr]);
      } else {
        setOpenedState(Array.from(leaders, () => false));
      }
    }
  };

  let arr = [<YellowButton />, <ProfessionalsCardSmall />];

  useEffect(() => {
    getExpertiseFields();
    getCountries();
    fetchData(setCarouselData);
  }, []);

  useEffect(() => {
    dispatch(fetchHLSLeaders());
    dispatch(fetchHLSPersons());
  }, []);

  let dirty = `<h1><a href="#" onClick="alert(${openedState});">Click Me</a>  </h1>   `;
  let clean = DOMPurify.sanitize(dirty);

  useDocumentTitle("Leadership | Alvarez & Marsal");
  // console.log(leaders);
  return (
    <LeadershipContainer>
      <HeroSection
        title={"helthcare & live sciences leaders"}
        className="heroContainer"
        backgroundUrl={
          "https://images.unsplash.com/photo-1581610186406-5f6e9f9edbc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />

      <FiltrationNavbar
        searchBar={{ placeholder: "enter search here", setInputText }}
        filterByTags={filterByTags}
        setFilterByTags={setFilterByTags}
      >
        <NavbarDropdown data={expertises}>Expertise</NavbarDropdown>
        <NavbarDropdown data={location}>Country</NavbarDropdown>
        <NavbarDropdown data={cities}>City</NavbarDropdown>
      </FiltrationNavbar>

      <FilterBy filterByTags={filterByTags} setFilterByTags={setFilterByTags} />
      <h1 className="p-4"> Leaders</h1>
      {leaders?.length === 10 ? (
        <Spinner />
      ) : (
        <div className="m-4">
          <LeaadersContainer>
            {leaders?.map((cardInfo, index) => {
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
          <h1 className="p-4"> Leaders</h1>
          <LeaadersContainer>
            {persons?.map((cardInfo, index) => {
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
      )}

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
    </LeadershipContainer>
  );
};

export default Leadership;

const LeadershipContainer = styled.div`
  .heroContainer {
    h1 {
      width: 75%;
    }
  }
`;

// console.log(dataObj);
// useEffect(() => {
//   function1();
// }, [dataObj]);

// const function1 = () => {
//   setCities(dataObj?.cities);
//   setLeaders(dataObj?.leaders);
// };
// useEffect(() => {
//   filterLeaders();
//   console.log(filterByTags?.length);
// }, [filterByTags]);

// const filterLeaders = () => {
//   // leaders.filter((leader) => leader.city.name == filterByTags[0]);

//   var myArrayFiltered = [];
//   if (filterByTags.length == 1) {
//     leaders?.forEach((leader) => {
//       filterByTags.forEach((filter) => {
//         if (
//           leader?.country.id == filter.id ||
//           leader?.city.id == filter.id ||
//           leader?.expertise.id == filter.id
//         ) {
//           myArrayFiltered.push(leader);
//         }
//       });
//     });
//     // myArrayFiltered = leaders?.filter((leader) => {
//     //   return filterByTags.some((filter) => {
//     //     return (
//     //       leader?.country.id == filter.id ||
//     //       leader?.city.id == filter.id ||
//     //       leader?.expertise.id == filter.id
//     //     );
//     //   });
//     // });

//     // let uniq = [...new Set(myArrayFiltered)];
//     let uniq = [...new Set(myArrayFiltered)];
//     setDataObj({ ...dataObj, leaders: uniq });
//   } else if (filterByTags.length == 2) {
//     // console.log("2nd if");
//     // console.log(leaders);
//     // console.log(filterByTags);

//     leaders?.map((leader) => {
//       filterByTags.forEach((filter) => {
//         var cityMatch = false;
//         var countryMatch = false;
//         if (
//           filter?.type == "taxonomy_term--cities" &&
//           filter.id == leader?.city.id
//         ) {
//           myArrayFiltered.push(leader);
//         }
//         // if (
//         //   filter?.type == "taxonomy_term--global_locations" &&
//         //   filter?.id == leader?.country.id
//         // ) {
//         //   myArrayFiltered.push(leader);
//         // }
//         // const cityMatch =
//         //   filter.type == "taxonomy_term--cities" &&
//         //   filter.id == leader.city.id;
//         // const countryMatch =
//         //   "taxonomy_term--global_locations" &&
//         //   filter?.id == leader?.country.id;
//         // const expertiseMatch =
//         //   "taxonomy_term--expertise" && filter?.id == leader?.expertise.id;

//         // console.log(filter.id, leader?.city.id);
//         // console.log(filter.id, leader?.country.id);
//         // console.log(cityMatch || (countryMatch && expertiseMatch));
//         // console.log(countryMatch || (cityMatch && expertiseMatch));
//       });
//     });
//     console.log(myArrayFiltered);
//     let uniq = [...new Set(myArrayFiltered)];
//     setDataObj({ ...dataObj, leaders: uniq });
//   } else if (filterByTags.length == 0) {
//     fetchHLSLeaders(setDataObj);
//   }
// };

// console.log(dataObj);
// console.log(filterByTags);
