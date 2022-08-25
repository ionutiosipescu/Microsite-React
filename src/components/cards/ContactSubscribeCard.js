import React from "react"
import styled from "styled-components"
import { ButtonWithAnimation } from "../buttons"

const Card = styled.div`
  background-color: var(--graySections);
  width: auto;
  height: auto;
  padding: 20px;
  margin: 20px 0;
  .buttons-container {
    .button1 {
      padding-bottom: 20px;
    }
  }
`

const ContactSubscribeCard = () => {
  return (
    <Card>
      <div className="buttons-container">
        <div className="button1">
          <ButtonWithAnimation text={"CONTACT US TODAY"} />
        </div>
        <div className="button2">
          <ButtonWithAnimation text={"SUBSCRIBE TO OUR BULLETIN"} black />
        </div>
      </div>
    </Card>
  )
}

export default ContactSubscribeCard
