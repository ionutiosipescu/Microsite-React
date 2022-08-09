import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: ${({ margin }) => margin + "px" || 0};
  cursor: pointer;
  /* max-height: 300px; */
`;

export const Card = styled.div`
  display: flex;
  background: #002b49;
  min-height: 200px;
  margin-bottom: 2rem;
`;

export const ImageContainer = styled.div`
  background: gray;
  flex: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2.2;
`;

export const Content = styled.div`
  padding: 20px;
  text-transform: uppercase;
  color: var(--orange2);
  font-weight: bold;
  height: 100%;
  width: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h5 {
    padding: 0;
    margin: 0;
    color: white;

    font-weight: bold;
    line-height: 1.2;
    text-transform: uppercase;
    font-size: 1.1rem;
  }

  div {
    font-size: 1rem;
  }
`;
