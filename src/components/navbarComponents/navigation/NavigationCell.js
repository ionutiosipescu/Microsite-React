import React from "react";

const NavigationCell = ({ children, href }) => {
  return (
    <>
      <a href={href}>{children}</a>
    </>
  );
};

export default NavigationCell;
