import React from "react"
import { ButtonWithAnimation } from "../buttons"
import styled from "styled-components"

const Container = styled.div`
  /* display: inline-block; */
  margin-bottom: 2rem;
  /* padding-right: 0.4rem; */
  /* border: 2px solid red; */

  color: var(--darkBlue2);
  padding-bottom: 1rem;
  padding-right: 20px;
  h3 {
    color: var(--darkBlueHome);
    font-size: 1.5rem;
    font-weight: bold;
  }
  p {
    color: var(--darkBlueHome);
    font-size: 1rem;
  }
`
const BorderBottom = styled.div`
  padding-top: 1rem;
  border-bottom: 1px solid var(--hover-blue);
`

const ExpertiseCard = ({ name, content, buttonText, border, onClick }) => {
  return (
    <Container className="">
      <div className="">
        <h3 onClick={() => onClick()}>{name || "Title"}</h3>
        <p>{content?.substr(0, 200) || "content"}</p>
        {/* <p>{content || "content"}</p> */}

        <ButtonWithAnimation text={buttonText || "Read more"} />
        {border && <BorderBottom />}
      </div>
    </Container>
  )
}

export default ExpertiseCard
