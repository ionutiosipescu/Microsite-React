import styled from "styled-components";

export const Card = styled.div`
  max-width: 350px;
  /* padding: 1rem; */
  border-bottom: 1px solid var(--gray3);
  margin: 2rem 0;
`;

export const Category = styled.div`
  color: var(--hover-blue);
  text-transform: upperCase;
  margin-bottom: 0;
  font-size: 20px;
`;

export const Title = styled.h2`
  color: var(--darkBlue2);
  margin-bottom: 0;
  font-size: 30px;
`;

export const Date = styled.div`
  color: var(--mutedDate);
  font-size: 0.8rem;
`;

export const Content = styled.p`
  color: var(--darkBlue2);
  margin-bottom: 1rem;
`;
