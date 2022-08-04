import React, { useState, useContext } from "react";
import { ChevronUpWhite } from "../../../assets/icons";
import { Cell, Dropdown, DropdownCell } from "./Filtration.styles";
import { NavbarContext } from "./FiltrationNavbar";

const NavbarDropdown = ({
  children,
  filtersList,
  filterByTime,
  filterType,
}) => {
  const { selectedFilters, setSelectedFilters } = useContext(NavbarContext);

  const [showDropdown, setShowDropdown] = useState(false);
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

  const addFilter = (filter, filterType) => {
    typeof filter === "number"
      ? selectedFilters.push({ name: filter, filterType: filterType })
      : selectedFilters.push({ ...filter, filterType: filterType });
    // selectedFilters.push({ ...filter, filterType: filterType });

    setSelectedFilters([...selectedFilters]);
  };

  return (
    <div onClick={handleClick}>
      <Cell as={"div"}>
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
