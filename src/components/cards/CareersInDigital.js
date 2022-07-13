import React from 'react'
import styled from 'styled-components'
import YellowButton from '../buttons/YellowButton'
import { size } from '../../utils/breakpoints'

const Card = styled.div`
	background: var(--gray3);
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	align-items: flex-start;
	height: 400px;
	padding: 3.75rem 0.9375rem 2.8125rem;

	span {
	display: block;
    margin-bottom: 1.25rem;
    text-transform: uppercase;
    font-size: 3.125rem;
    line-height: 2.5rem;
    color: #000;
	}

	p {
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #666
	}
button {
	background-color: var(--orange3);
	padding: 0 1.5625rem;
    transition: background-color 0.2s ease-out;
	line-height: 3.125rem;
}
button:hover {
		background-color: var(--coralBlue);
	}
`

const CareersInDigital = () => {
	return (
		<Card>
			<span>Careers in digital</span>
			<p>
				Mollit non voluptate ipsum cillum. Cillum mollit deserunt nulla sunt et
				enim voluptate. Labore reprehenderit et in aliquip laborum pariatur.
			</p>
			<YellowButton text="SEARCH AND APPLY" width={"auto"} height={"50px"} radius={"3px"}/>
		</Card>
	)
}

export default CareersInDigital
