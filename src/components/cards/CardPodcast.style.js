import styled from "styled-components";

export const Card = styled.div`
  max-width: 350px;
  /* padding: 1rem; */
  border-bottom: 1px solid var(--gray3);
  margin-bottom: 2rem;
  gap: 17px;
    display: flex;
    flex-direction: column;
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
  font-size: 22px;
`;

export const Date = styled.div`
  color: var(--mutedDate);
  font-size: 0.8rem;
`;

export const Content = styled.p`
  color: var(--darkBlue2);
  margin-bottom: 6px;
`;
export const Socials = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 35px;
img {
    height: 32px;
    width: auto;
}
`
export const View = styled.div`
img {
    width: 220px;
    height: 124px;
}
`