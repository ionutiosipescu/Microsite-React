import React from "react";

const IFrame = ({ src, title, width, height }) => {
  return (
    <iframe
      src={
        src ||
        "https://www.youtube.com/embed?v=pxhJIRpLrPE&list=PLzK3tNHBiZt71HrEvPO0sVN16s-Au7yiz&index=22"
      }
      title={title || "Trash Taste"}
      width={width || "100%"}
      height={height || "400px"}
    ></iframe>
  );
};

export default IFrame;
