import React, { useState, useContext } from "react";
import { ChevronUpWhite } from "../../../assets/icons";
import { Cell, Dropdown, DropdownCell } from "./Filtration.styles";
import { NavbarContext } from "./FiltrationNavbar";

const NavbarDropdown = ({ children, data }) => {
  const { filterByTags, setFilterByTags } = useContext(NavbarContext);

  const [showDropdown, setShowDropdown] = useState(false);
  let columns;

  if (data.length < 5) {
    columns = 1;
  } else if (data.length < 9) {
    columns = 2;
  } else {
    columns = 3;
  }

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const addTag = (link) => {
    filterByTags.push(link.name);

    setFilterByTags([...filterByTags]);
  };

  return (
    <div onClick={handleClick}>
      <Cell as={"div"}>
        {children}
        <ChevronUpWhite />
      </Cell>
      <Dropdown show={showDropdown} columns={columns}>
        {data.map((link, index) => (
          <DropdownCell key={index} onClick={() => addTag(link)}>
            <a href={link.href}>{link.name}</a>
          </DropdownCell>
        ))}
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
