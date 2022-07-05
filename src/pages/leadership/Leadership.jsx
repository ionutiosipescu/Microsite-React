import React, { useState } from 'react'
import {
	HeroSection,
	ProfessionalsCardSmall,
	CarouselSection,
	DetailedProfessionalsCard,
	CardProfessionals,
} from '../../components/cards'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { arr } from '../../utils/data'

const LeaadersContainer = styled.div`
	display: flex;
	margin: 2rem 0;
	/* padding: 0; */
	gap: 3rem;
	flex-wrap: wrap;
	position: relative;

	div {
		/* flex-s */
	}
`

const Play = styled.div`
	display: flex;
	height: 300px;
`

const Leadership = () => {
	const [open, setOpen] = useState(Array.from(cardContentList, () => false))
	const [content, setContent] = useState()

	const handleClick = cardContent => {
		setContent(cardContent)
		console.log(cardContent)
	}
	const toggle = index => {
		const newOpenState = [false]
		newOpenState[index] = !newOpenState[index]
		setOpen(newOpenState)
	}

	return (
		<>
			<HeroSection title={'helthcare & live sciences leaders'} />

			<h4 className="m-4 fw-bold">LEADERS</h4>
			<div onClick={() => console.log('hello')}>Hello</div>
			<div
				style={{
					position: 'relative',
				}}
			>
				{/* <ProfessionalsCardSmall /> */}
			</div>
			<LeaadersContainer>
				{cardContentList.map((card, index) => (
					<ProfessionalsCardSmall
						card={card}
						index={index}
						open={open}
						toggle={toggle}
						content={content}
					/>
				))}
			</LeaadersContainer>
			<CarouselSection
				categoryCarousel={'Healthcare & Live Sciences News'}
				backgroundColor="var(--darkBlue)"
				arr={arr}
				titleColor="aqua"
			/>
		</>
	)
}

export default Leadership
const cardContentList = [
	{
		id: 1,
		name: 'Connor Colquhoun',
		position: 'wine ',
		country: 'japan',
		location: 'New York, USA',
		mail: 'Connor.Wine@gmail.com',
		phone: '+1 (555) 555-5555',
		twitter: '@ConnorWine',
		LinkedIn: 'LinkedIn',
		description:
			'Occaecat officia esse ut laborum est Lorem laborum ad nisi consectetur. Reprehenderit nostrud irure incididunt nulla magna in aute .',
	},
	{
		id: 2,
		name: 'Connor Colquhoun',
		position: 'wine lover',
		country: 'japan',
		location: 'New York, USA',
		mail: 'Connor.Wine@gmail.com',
		phone: '+1 (555) 555-5555',
		twitter: '@ConnorWine',
		LinkedIn: 'LinkedIn',
		description:
			'Occaecat officia esse ut laborum est Lorem laborum ad nisi consectetur. Reprehenderit nostrud irure incididunt nulla magna in aute .',
	},
	{
		id: 3,
		name: 'Connor Colquhoun',
		position: 'wine enjoyer',
		country: 'japan',
		location: 'New York, USA',
		mail: 'Connor.Wine@gmail.com',
		phone: '+1 (555) 555-5555',
		twitter: '@ConnorWine',
		LinkedIn: 'LinkedIn',
		description:
			'Occaecat officia esse ut laborum est Lorem laborum ad nisi consectetur. Reprehenderit nostrud irure incididunt nulla magna in aute .',
	},
	{
		id: 4,
		name: 'Connor Colquhoun',
		position: 'wine ',
		country: 'japan',
		location: 'New York, USA',
		mail: 'Connor.Wine@gmail.com',
		phone: '+1 (555) 555-5555',
		twitter: '@ConnorWine',
		LinkedIn: 'LinkedIn',
		description:
			'Occaecat officia esse ut laborum est Lorem laborum ad nisi consectetur. Reprehenderit nostrud irure incididunt nulla magna in aute .',
	},
	{
		id: 5,
		name: 'Connor Colquhoun',
		position: 'wine lover',
		country: 'japan',
		location: 'New York, USA',
		mail: 'Connor.Wine@gmail.com',
		phone: '+1 (555) 555-5555',
		twitter: '@ConnorWine',
		LinkedIn: 'LinkedIn',
		description:
			'Occaecat officia esse ut laborum est Lorem laborum ad nisi consectetur. Reprehenderit nostrud irure incididunt nulla magna in aute .',
	},
	{
		id: 6,
		name: 'Connor Colquhoun',
		position: 'wine enjoyer',
		country: 'japan',
		location: 'New York, USA',
		mail: 'Connor.Wine@gmail.com',
		phone: '+1 (555) 555-5555',
		twitter: '@ConnorWine',
		LinkedIn: 'LinkedIn',
		description:
			'Occaecat officia esse ut laborum est Lorem laborum ad nisi consectetur. Reprehenderit nostrud irure incididunt nulla magna in aute .',
	},
]
