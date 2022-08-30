import React from "react"
import { ButtonWithAnimation } from "../buttons"
import styled from "styled-components"
import DOMPurify from "dompurify"

const Container = styled.div`
  margin-bottom: 2rem;

  border-bottom: 1px solid var(--hover-blue);

  color: var(--darkBlue2);
  padding-bottom: 1rem;
  padding-right: 20px;
  h3 {
    color: var(--darkBlueHome);
    font-size: 1.5rem;
    font-weight: bold;
    :hover {
      cursor: pointer;
    }
  }

  p {
    color: var(--darkBlueHome);
    font-size: 1rem;
  }
`
const ExpertiseCard = ({ name, content, buttonText, onClick }) => {
  return (
    <Container>
      <div>
        <h3 onClick={() => onClick()}>{name || "Title"}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(content?.substr(0, 200)),
          }}
        >
          {/* {content?.substr(0, 200) || "content"} */}
        </p>
        {/* <p>{content || "content"}</p> */}

        <ButtonWithAnimation
          text={buttonText || "Read more"}
          onClick={onClick}
        />
      </div>
    </Container>
  )
}

export default ExpertiseCard
