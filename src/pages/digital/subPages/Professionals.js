import React, { useState } from "react";
import {
  FiltrationNavbar,
  NavbarDropdown,
} from "../../../components/navbarComponents";
import { FilterBy } from "../../../components";
import { tags, leadersList, arr, links } from "../../../utils/data";
import { ProfessionalsCardSmall } from "../../../components/cards";
import styled from "styled-components";
import { useDocumentTitle } from "../../../hook";

export const LeaadersContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  position: relative;
`;

const Professionals = () => {
  const [openedState, setOpenedState] = useState(
    Array.from(leadersList, () => false)
  );

  const [filterByTags, setFilterByTags] = useState([
    "sunshine",
    "sunshine",
    "sunshine2",
    "sunshine3",
    "sunshine4",
  ]);

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
  useDocumentTitle("Digital | Leadership | Alvarez & Marsal");
  return (
    <>
      <div className="container p-5">
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
      </div>
      <FiltrationNavbar
        searchBar
        filterByTags={filterByTags}
        setFilterByTags={setFilterByTags}
      >
        <NavbarDropdown data={links}>Something</NavbarDropdown>
        <NavbarDropdown data={links}>DropDown</NavbarDropdown>
        <NavbarDropdown data={links}>Something</NavbarDropdown>
        <NavbarDropdown data={links}>Something2</NavbarDropdown>
      </FiltrationNavbar>
      <FilterBy filterByTags={filterByTags} setFilterByTags={setFilterByTags} />
      <h3 className="m-3">Leaders</h3>

      {/* <CardProfessionals /> */}
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
