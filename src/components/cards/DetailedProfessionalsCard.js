import React from 'react'
import styled from 'styled-components'
import Connor from '../../assets/images/ConnorWine'

const Card = styled.div`
	background: var(--gray3);
	height: 600px;
	display: flex;
	padding: 4rem 2rem;
	gap: 2rem;
`
const ImageContainer = styled.div`
	/* background-image: url(${Connor}); */
	background: darkgray;

	flex: 1;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const Content = styled.div`
	flex: 2;
	h4 {
		font-weight: bold;
	}

	/* & :first-child {
		font-weight: bold;
	} */
	& :nth-child(2) {
		font-weight: bold;
		text-transform: uppercase;
	}

	a {
		font-weight: bold;
	}
`

const Info = styled.div`
	flex: 1;
`

const InfoCard = styled.div`
	font-weight: bold;
	border-bottom: 1px solid black;
	padding: 0.5rem 0;

	/* &:first-child {
		font-size: 1.2rem;
		text-transform: uppercase;
	} */
	p {
		font-size: 1.2rem;
		text-transform: uppercase;
		margin: 0;
	}
`

const PersonalInfo = ({ title, content }) => {
	return (
		<InfoCard>
			<p>{title}</p>
			<div>{content}</div>
		</InfoCard>
	)
}

const DetailedProfessionalsCard = ({
	name,
	position,
	country,
	location,
	mail,
	phone,
	twitter,
	LinkedIn,
	description,
}) => {
	// console.log(description)
	return (
		<Card>
			<ImageContainer>
				<img src={Connor}></img>
				{/* <button>Button</button> */}
			</ImageContainer>
			<Content>
				<h4>{name}</h4>
				<p>{position}</p>
				<p>{description}</p>
				<a>Read More</a>
			</Content>
			<Info>
				<PersonalInfo title="locaton" content={country} />
				<PersonalInfo title="email" content={mail} />
				<PersonalInfo title="telephone" content={phone} />
				<PersonalInfo title="twitter" content={twitter} />
				<PersonalInfo title="connet on" content={LinkedIn} />
			</Info>
		</Card>
	)
}

export default DetailedProfessionalsCard
