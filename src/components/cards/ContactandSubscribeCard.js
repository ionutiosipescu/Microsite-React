import React from "react";
import styled from "styled-components";
import { size } from "../../utils/breakpoints";
import { ButtonWithAnimation } from "../buttons";

const Card = styled.div`
background-color: var(--gray6);
width: auto;
height: auto;
padding: 20px;
margin: 20px 0;
.buttons{
    .button1 {
        padding-bottom: 20px;
    }
}
`

const ContactandSubscribeCard = ({
    black
}) => {
    return (
        <Card>
            <div class="buttons">
                <div class="button1">
                    <ButtonWithAnimation text={"CONTACT US TODAY"}/>
                </div>
                <div class="button2">
                    <ButtonWithAnimation text={"SUBSCRIBE TO OUR BULLETIN"} black={"black"}/>
                </div>
            </div>
        </Card>
    )
}

export default ContactandSubscribeCard;