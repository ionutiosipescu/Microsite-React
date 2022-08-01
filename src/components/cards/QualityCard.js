import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
const Card = styled.div`
  //   border: 2px solid red;
  img {
    height: 40px;
    width: 40px;
    color: aqua;
  }

  .sectionTitle {
    color: #047ebd;
    font-size: 24px;
    font: normal normal bold 24px/28px Roboto;
    text-decoration: none;
    :hover {
      cursor: pointer;
    }
  }
  .sectionDescription {
    color: #171717;
  }
`;

const QualityCard = ({ quality }) => {
  const navigate = useNavigate();
  return (
    <Card className="col-lg-4" id={quality.id}>
      <div className="d-flex m-4">
        <div className="icon d-flex align-items-start my-4">
          <img src={quality.icon} />
        </div>
        <div className="row m-2">
          <h5
            onClick={() => {
              navigate(`/expertise/${quality?.title?.toLowerCase()}`, {
                state: quality,
              });
            }}
            className="sectionTitle"
          >
            {quality.title}
          </h5>
          <span className="sectionDescription">
            {quality?.description?.slice(0, 110)}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default QualityCard;
