import React, { useState, createContext } from "react";
import { SearchBar } from "../index";
import { Container, MobileDropdown } from "./Filtration.styles";
import SearchBar2 from "./SearchBar2";

export const NavbarContext = createContext(null);

const Navbar = ({
  children,
  searchBar,
  searchBar2,
  spread,
  selectedFilters,
  setSelectedFilters,
}) => {
  const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(false);

  const values = {
    selectedFilters: selectedFilters,
    setSelectedFilters: setSelectedFilters,
  };

  // Handle submit from the search bar
  const handleSubmit = (e, searchBarInput, openBigNavbar) => {
    e.preventDefault();

    if (openBigNavbar && searchBarInput.value === "") {
      setVisible(!visible);
    } else if (searchBarInput.value !== "") {
      selectedFilters.push(searchBarInput);
      setSelectedFilters([...selectedFilters]);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <SearchBar
        visible={!visible}
        handleSubmit={handleSubmit}
        {...searchBar}
      />
      <Container toggle={toggle} spread={spread}>
        <MobileDropdown
          as={"div"}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        >
          <div onClick={handleToggle}>{"Filter results by"}</div>

          {searchBar && (
            <SearchBar
              visible={visible}
              disappearOnMobile
              {...searchBar}
              handleSubmit={handleSubmit}
              openBigNavbar
            />
          )}
        </MobileDropdown>
        <NavbarContext.Provider value={values}>
          <ul>
            {children}
            {searchBar2 && (
              <SearchBar2 {...searchBar2} handleSubmit={handleSubmit} />
            )}
          </ul>
        </NavbarContext.Provider>
        {searchBar && (
          <SearchBar
            disappearOnMobile
            handleSubmit={handleSubmit}
            {...searchBar}
          />
        )}
      </Container>
    </>
  );
};

export default Navbar;
