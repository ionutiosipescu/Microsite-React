import styled from "styled-components/macro"

export const Card = styled.div`
  max-width: 350px;
  border-bottom: 1px solid var(--gray3);
  margin-bottom: 2rem;
  gap: 1.063rem;
  display: flex;
  flex-direction: column;
`

export const Category = styled.div`
  color: var(--hover-blue);
  text-transform: upperCase;
  margin-bottom: 0;
  font-size: 1.25rem;
`
export const View = styled.div`
  img {
    width: 220px;
    height: 124px;
  }
`
export const Title = styled.h2`
  color: var(--darkBlue2);
  margin-bottom: 0;
  font-size: 1.375rem;
`

export const Date = styled.div`
  color: var(--mutedDate);
  font-size: 0.8rem;
`

export const Content = styled.p`
  color: var(--darkBlue2);
  margin-bottom: 0.375rem;
`
export const Socials = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-bottom: 2.188rem;
  img {
    height: 2rem;
    width: auto;
  }
`
