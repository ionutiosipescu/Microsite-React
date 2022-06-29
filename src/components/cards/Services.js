import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
	border-bottom: 1px solid gray;
	margin: 1.5rem 0;

	h5 {
		font-weight: bold;
	}
	p {
		margin: 1rem 0;
	}
`

const Services = ({ title, conntent }) => {
	return (
		<Card>
			<h5>{title}</h5>
			<p>{conntent}</p>
		</Card>
	)
}

export default Services
