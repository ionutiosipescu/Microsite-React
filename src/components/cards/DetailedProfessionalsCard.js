import React, { useState, useRef, useEffect } from 'react'
import { XIcon, Twitter } from '../../assets/icons'
import YellowButton from '../buttons/YellowButton'
import Connor from '../../assets/images/ConnorWine'
import {
	Card,
	Header,
	Info,
	ContainerMobile,
	ContactInfo,
	Dropdown,
	PersonalInfo,
	XContainer,
	CardBody,
	ImageContainer,
	Content,
	DescriptionDesktop,
} from './styles/DetailedProfessionalsCard.styles'

const DetailedProfessionalsCard = ({
	content,
	handleDisplay,
	index,
	setMargin,
	showDetails,
}) => {
	const [display, setDisplay] = useState('none')
	const [borderBottom, setBorderBottom] = useState(true)
	const detailedCard = useRef(null)

	useEffect(() => {
		if (showDetails) {
			setMargin(detailedCard.current.clientHeight)
		}
	})

	const handleClick = () => {
		if (display === 'none') {
			setDisplay('initial')
		} else {
			setDisplay('none')
		}

		setBorderBottom(!borderBottom)
	}

	return (
		<Card ref={detailedCard}>
			<div className="d-flex">
				<XContainer onClick={() => handleDisplay(index)}>
					<XIcon className={'x-icon'} />
				</XContainer>
			</div>
			<CardBody>
				<Header>
					<ImageContainer>
						<img src={Connor}></img>
						<YellowButton text="Connect" radius={'0'} />
					</ImageContainer>
					<Content>
						<h4>{content?.name}</h4>
						<p>{content?.position}</p>
						<DescriptionDesktop>{content?.description}</DescriptionDesktop>
						<a>Read More</a>
					</Content>
				</Header>

				<Info>
					<ContainerMobile>
						<YellowButton text={'connect'} width={'100%'} />
						<div>{content?.description}</div>
					</ContainerMobile>

					<ContactInfo onClick={handleClick} borderBottom={borderBottom}>
						{'contact info'}
					</ContactInfo>
					<Dropdown display={display}>
						<PersonalInfo title="locaton" content={content?.country} />
						<PersonalInfo title="email" content={content?.mail} />
						<PersonalInfo title="telephone" content={content?.phone} />
						<PersonalInfo title="twitter" content={content?.twitter} />
						<PersonalInfo title="connect on" content={content?.LinkedIn} />
					</Dropdown>
				</Info>
			</CardBody>
		</Card>
	)
}

export default DetailedProfessionalsCard
