import { size } from "../../../utils/breakpoints";
import styled from "styled-components";

export const Card = styled.div`
  background: var(--darkBlueHome);
  position: absolute;
  z-index: 1;
  right: 0;
  left: 0;
  min-height: 400px;
  padding: 4rem 2rem;
  width: 1532px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
`;
export const XContainer = styled.a`
  display: inline-block;
  margin: 0 0 0 auto;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
    fill: var(--gray4);
  }

  :hover {
    svg {
      fill: #fff;
    }
  }
`;

export const CardBody = styled.div`
  gap: 2rem;

  position: relative;

  @media ${size.lg} {
    display: flex;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 2rem;
  flex: 3;
`;

export const ImageContainer = styled.div`
  background: darkgray;

  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: relative;
    width: 80%;
    margin: 0 10%;
    bottom: 5rem;

    display: none;

    @media ${size.sm} {
      display: initial;
    }
  }
`;
export const ImageTriangleContainer = styled.div`
  .imgTriangle {
    height: 20px;
    padding-left: 42%;
    margin-bottom: -1px;
  }
`;

export const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    font-weight: bold;
    color: #fff;
  }
  h6 {
    font-weight: bold;
    color: var(--hover-blue);
  }

  & :nth-child(2) {
    font-weight: bold;
    text-transform: uppercase;
  }

  a {
    font-weight: bold;
  }
  p {
    color: #fff;
  }
`;

export const Info = styled.div`
  flex: 1;
`;

export const InfoCard = styled.div`
  font-weight: bold;
  border-bottom: 1px solid black;
  padding: 0.5rem 0;

  p {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 0;
  }
`;

export const Dropdown = styled.div`
  display: ${(props) => props.display};

  @media ${size.lg} {
    display: initial;
  }
`;

export const ContactInfo = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;

  border-top: 1px solid black;
  border-bottom: ${(props) =>
    props.borderBottom ? "1px solid black" : "none"};

  text-align: center;

  @media ${size.lg} {
    display: none;
  }
`;

export const PersonalInfo = ({ title, content }) => {
  return (
    <InfoCard>
      <p>{title}</p>
      <div>{content}</div>
    </InfoCard>
  );
};

export const DescriptionDesktop = styled.div`
  display: none;

  @media ${size.sm} {
    display: initial;
  }
`;

export const ContainerMobile = styled.div`
  margin: 2rem 0;

  button {
    margin-bottom: 2rem;
  }

  @media ${size.sm} {
    display: none;
  }
`;
