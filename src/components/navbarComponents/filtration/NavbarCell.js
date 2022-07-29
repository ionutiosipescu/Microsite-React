import React from "react";
import { Cell } from "./Filtration.styles";

const NavbarCell = ({ children, href }) => {
  return (
    <Cell>
      <a href={href}>{children}</a>
    </Cell>
  );
};

export default NavbarCell;
