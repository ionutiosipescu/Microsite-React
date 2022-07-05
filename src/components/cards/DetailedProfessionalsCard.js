import React from "react";
import styled from "styled-components";
import Connor from "../../assets/images/ConnorWine";

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
  background-image: url(${Connor});

  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  btn {
    top: 20rem;
  }
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
  // console.log(description)
  return (
    <Card>
      <ImageContainer>
        {/* <img src={Connor}></img> */}
        <button>Button</button>
      </ImageContainer>
      <Content>
        <h4>{content?.name}</h4>
        <p>{content?.position}</p>
        <p>{content?.description}</p>
        <a>Read More</a>
      </Content>
      <Info>
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
