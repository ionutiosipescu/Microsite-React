import React, { useRef, useState, useContext, useEffect } from "react";
import { ChevronUpWhite } from "../../../assets/icons";
import { Cell, Dropdown, DropdownCell } from "./Filtration.styles";
import { NavbarContext } from "./FiltrationNavbar";

// Giving each month a id
const monthIds = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const NavbarDropdown = ({ children, filtersList, filterType }) => {
  const { selectedFilters, setSelectedFilters } = useContext(NavbarContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  // Determines how many columns to show in the dropdown
  let columns;
  if (filtersList.length < 5) {
    columns = 1;
  } else if (filtersList.length < 9) {
    columns = 2;
  } else {
    columns = 3;
  }

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  // Adding new filters to the filter array that is aslo shown on the screen
  const addFilter = (filter, filterType) => {
    // Allows only one filter per category to be selected
    let filteredArr = selectedFilters.filter(
      (filter) => filter.filterType !== filterType
    );

    if ("years" === filterType) {
      filteredArr.push({
        value: filter,
        filterType: filterType,
      });
    } else if ("months" === filterType) {
      filteredArr.push({
        value: filter,
        filterType: filterType,
        id: monthIds[filter],
      });
    } else {
      filteredArr.push({
        id: filter.id,
        value: filter.name,
        filterType: filterType,
      });
    }

    setSelectedFilters([...filteredArr]);
  };
  useEffect(() => {
    dispatch(addFilterTags(filterByTags));
    dispatch(filterLeaders(filterByTags));
  }, [filterByTags]);

  // Closes the dropdown if the user clicks outside of it
  // I am not sure if there is a memory leak with this implementation. Probably not
  // since this is what others were using
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <Cell as={"div"} onClick={handleClick}>
        {children}
        <ChevronUpWhite />
      </Cell>
      <Dropdown show={showDropdown} columns={columns}>
        {["years", "months"].includes(filterType)
          ? Object.values(filtersList[filterType]).map((filter, index) => (
              <DropdownCell
                key={index}
                onClick={() => addFilter(filter, filterType)}
              >
                <div key={index}>{filter}</div>
              </DropdownCell>
            ))
          : filtersList.map((filter, index) => (
              <DropdownCell
                key={index}
                onClick={() => addFilter(filter, filterType)}
              >
                <div>{filter.name}</div>
              </DropdownCell>
            ))}
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
