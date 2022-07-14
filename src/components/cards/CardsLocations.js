import React from 'react'
import styled from 'styled-components'
import YellowButton from '../buttons/YellowButton'
import { size } from '../../utils/breakpoints'

const Card = styled.div`
    border-radius: 8px;
	background: var(--gray5);
	display: flex;
	flex-direction: column;
	/* justify-content: space-around; */
    width: 100%;
	align-items: flex-start;
	height: auto;
	padding: 16px 26px 34px 16px;
    margin: 0 0 20px;
    @media ${size.md} {
	max-width: 280px;
    margin: 0 20px 20px 0;
	}

	h3 {
	display: block;
    margin-bottom: 1.25rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #000;
	}

	span, ul {
    margin-bottom: .5rem;
    font-size: 1rem;
    line-height: 1.75rem;
    color: #666
	}
    ul {
    list-style-type: none; 
    padding: 0; 
}
button {
	background-color: var(--orange3);
	padding: 0 1.5625rem;
    transition: background-color 0.2s ease-out;
	line-height: 3.125rem;
}
button:hover {
		background-color: var(--hover-blue);
		border-color: var(--hover-blue);
	}
`

const CareersInDigital = () => {
	return (
		<Card>
			<h3>Belo Horizonte</h3>
			<span>Tel: +55 11 93224 4061</span>
            <ul>
                <li>Alameda Oscar Niemeyer, 119 - 4º</li>
                <li>floor - Ste 402</li>
                <li>Vale do Sereno</li>
                <li>Nova Lima-MG</li>
                <li>34006-056</li>
                <li>Brazil</li>
            </ul>
			<YellowButton text="VIEW ON MAP" width={"auto"} height={"50px"} radius={"3px"}/>
		</Card>
	)
}

export default CareersInDigital