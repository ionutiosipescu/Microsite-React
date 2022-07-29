import React, { useState } from "react";
import { Row } from "react-bootstrap";

//images
import image from "../../../assets/images/ConnorWine";

//data
import { leadersList, links, arr } from "../../../utils/data";

// costum components
import { StyledContainer } from "../../../components/layout/Rows&Collumns/Rows&Collumns.style";
import TranslateButton from "../../../components/buttons/TranslateButton";
import { LeaadersContainer } from "../../leadership/Leadership";
import { ProfessionalsCardSmall } from "../../../components/cards";
import {
  FiltrationNavbar,
  NavbarDropdown,
} from "../../../components/navbarComponents";
import FilterBy from "../../../components/FilterBy";
import { useDocumentTitle } from "../../../hook";

const Professionals = () => {
  //state of modal
  const [openedState, setOpenedState] = useState(
    Array.from(leadersList, () => false)
  );

  const [filterByTags, setFilterByTags] = useState([
    "sunshine",
    "sunshine2",
    "sunshine3",
    "sunshine4",
    "sunshine",
    "sunshine2",
  ]);

  //handle position of modal
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
  useDocumentTitle("Brazil | Leadership | Alvarez & Marsal");
  return (
    <>
      <StyledContainer>
        <TranslateButton text1={"English"} text2={"Portuguese"} />
        <h2>
          Qui excepteur aute dolore proident adipisicing ullamco laborum.
          consectetur.
        </h2>
        <p>
          Et enim ex magna aliqua deserunt aliqua nisi cupidatat. Sit irure
          aliqua aute aliquip ea nisi culpa aliqua nisi quis nostrud cillum
          culpa nulla. Cillum do incididunt eu cupidatat. Velit reprehenderit
          eiusmod anim amet id aliquip enim eiusmod culpa. Consequat quis ut
          incididunt duis nulla magna eiusmod est nulla eiusmod elit laborum do.
        </p>
      </StyledContainer>
      <FiltrationNavbar
        searchBar
        filterByTags={filterByTags}
        setFilterByTags={setFilterByTags}
      >
        <NavbarDropdown data={links}>Country</NavbarDropdown>
        <NavbarDropdown data={links}>DropDown</NavbarDropdown>
        <NavbarDropdown data={links}>Something</NavbarDropdown>
        <NavbarDropdown data={links}>Something2</NavbarDropdown>
      </FiltrationNavbar>
      <FilterBy filterByTags={filterByTags} setFilterByTags={setFilterByTags} />

      <h3 className="m-3">Leaders</h3>
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
    </>
  );
};

export default Professionals;
