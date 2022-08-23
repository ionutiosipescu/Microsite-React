import styled from "styled-components"

export const Card = styled.div`
  /* max-width: 32%; */
  /* padding: 1rem; */

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
