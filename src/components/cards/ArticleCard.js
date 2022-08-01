import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CustomTitle = styled.h5`
  font-weight: bold;

  :hover {
    color: #0085ca;
    cursor: pointer;
  }
`;

const ArticleCard = ({ title, field_teaser_text, nid, uuid, date }) => {
  const navigate = useNavigate();
  // console.log("this is article card", article);

  return (
    <div className="col-sm-12 col-md-11 col-lg-5 border-bottom h-100 py-3 ">
      <CustomTitle onClick={() => navigate(`/insights/case/${title}`)}>
        {title}
      </CustomTitle>
      <span className="text-muted"> {date}</span>
      <p className="py-2 fs-6">{field_teaser_text}</p>
    </div>
  );
};

export default ArticleCard;
