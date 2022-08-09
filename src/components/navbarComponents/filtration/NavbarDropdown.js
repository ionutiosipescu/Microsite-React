import React, { useState, useContext, useEffect } from "react";
import { ChevronUpWhite } from "../../../assets/icons";
import { Cell, Dropdown, DropdownCell } from "./Filtration.styles";
import { NavbarContext } from "./FiltrationNavbar";

import { useDispatch } from "react-redux/es/exports";
import { addFilterTags, filterLeaders } from "../../../store/actions/leaders";

const NavbarDropdown = ({ children, data }) => {
  const dispatch = useDispatch();
  const { filterByTags, setFilterByTags } = useContext(NavbarContext);

  const [showDropdown, setShowDropdown] = useState(false);
  let columns;

  if (data?.length < 5) {
    columns = 1;
  } else if (data?.length < 9) {
    columns = 2;
  } else {
    columns = 3;
  }

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const addTag = (link) => {
    filterByTags.push(link);
    console.log(link);
    setFilterByTags([...filterByTags]);
  };
  useEffect(() => {
    dispatch(addFilterTags(filterByTags));
    dispatch(filterLeaders(filterByTags));
  }, [filterByTags]);

  return (
    <div onClick={handleClick}>
      <Cell as={"div"}>
        {children}
        <ChevronUpWhite />
      </Cell>
      <Dropdown show={showDropdown} columns={columns}>
        {data?.map((link, index) => (
          <DropdownCell key={index} onClick={() => addTag(link)}>
            <a href={link.href}>{link.name}</a>
          </DropdownCell>
        ))}
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
