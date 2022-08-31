import styled from "styled-components/macro"

export const Card = styled.div`
  border-bottom: 1px solid var(--gray3);

  margin-bottom: 2rem;
  color: var(--darkBlueHome);
`

export const Category = styled.div`
  color: var(--hover-blue);
  text-transform: upperCase;
  margin-bottom: 0;
  font-size: 1rem;
`

export const Title = styled.h2`
  color: var(--darkBlue2);
  margin-bottom: 0;
  font-size: 30px;
  cursor: pointer;
`

export const Date = styled.div`
  color: var(--mutedDate);
  font-size: 0.8rem;
`

export const Content = styled.p`
  color: var(--darkBlue2);
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`
export const BorderBottom = styled.div`
  border-bottom: 2px solid ${props => props.color || ""};
`
