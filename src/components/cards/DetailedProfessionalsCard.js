import React from "react";
import styled from "styled-components";
import Connor from "../../assets/images/ConnorWine";
import YellowButton from "../buttons/YellowButton";

const Card = styled.div`
  background: var(--gray3);
  display: flex;
  padding: 4rem 2rem;
  gap: 2rem;
  min-height: 400px;

  /*Trying to make Card pop up from the row of leaders*/
  position: absolute;
  z-index: 1;
  right: 0;
  left: 0;
  width: 100%;
  /* margin-bottom: 3rem; */
`;
const ImageContainer = styled.div`
  background: darkgray;
  // background-image: url(${Connor});

  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  //it didn't work well 100%
  .buttonContainer {
    position: absolute;
    display: flex;
    bottom: 80px;
    left: 2%;
    width: 80%;
    // justify-content: center;
  }
  .buttonContainer button {
    width: 100%;
  }

  // btn {
  //   top: 20rem;
  // }
`;

const Content = styled.div`
  flex: 2;
  h4 {
    font-weight: bold;
  }

  & :nth-child(2) {
    font-weight: bold;
    text-transform: uppercase;
  }

  a {
    font-weight: bold;
  }
`;

const Info = styled.div`
  flex: 1;
`;

const InfoCard = styled.div`
  font-weight: bold;
  border-bottom: 1px solid black;
  padding: 0.5rem 0;

  /* &:first-child {
		font-size: 1.2rem;
		text-transform: uppercase;
	} */
  p {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 0;
  }
`;

const PersonalInfo = ({ title, content }) => {
  return (
    <InfoCard>
      <p>{title}</p>
      <div>{content}</div>
    </InfoCard>
  );
};

const DetailedProfessionalsCard = ({ content }) => {
  return (
    <Card className="mt-2">
      <ImageContainer className="col-sm-6 col-md-3 ">
        <img src={content?.imageSrc}></img>
        <div className="buttonContainer">
          <YellowButton radius="0" className="w-25 mx-4" text="Connect" />
        </div>
      </ImageContainer>
      <Content className="col-sm-6 col-md-4">
        <h4>{content?.name}</h4>
        <p>{content?.position}</p>
        <p>{content?.description}</p>
        <a>Read More</a>
      </Content>
      <Info className="col-md-3">
        <PersonalInfo title="locaton" content={content?.country} />
        <PersonalInfo title="email" content={content?.mail} />
        <PersonalInfo title="telephone" content={content?.phone} />
        <PersonalInfo title="twitter" content={content?.twitter} />
        <PersonalInfo title="connect on" content={content?.LinkedIn} />
      </Info>
    </Card>
  );
};

export default DetailedProfessionalsCard;
