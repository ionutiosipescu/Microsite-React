import React, { useEffect, useState } from 'react'
import connor from '../../assets/images/ConnorWine'
import YellowButton from '../buttons/YellowButton'
import DetailedProfessionalsCard from './DetailedProfessionalsCard'
import {
	Container,
	Card,
	ImageContainer,
	CardBody,
	Content,
} from './styles/ProfessionalsCardSmall.styles'

const ProfessionalsCardSmall = ({
	cardInfo,
	index,
	handleDisplay,
	showDetails,
}) => {
	const [margin, setMargin] = useState(0)

	useEffect(() => {
		if (!showDetails) {
			setMargin(0)
		}
	}, [showDetails])

	return (
		<Container margin={margin}>
			<Card onClick={() => handleDisplay(index)}>
				<ImageContainer>
					<img src={cardInfo?.image || connor} alt="portrait"></img>
				</ImageContainer>

				<CardBody>
					<Content>
						<h5>{cardInfo?.name || 'Connor Colquhoun'}</h5>
						<div>
							<div>{cardInfo?.position || 'wine connoisseur'}</div>
							<div>{cardInfo?.country} </div>
						</div>
					</Content>
				</CardBody>
			</Card>
			{showDetails && (
				<DetailedProfessionalsCard
					content={cardInfo}
					index={index}
					handleDisplay={handleDisplay}
					setMargin={setMargin}
					showDetails={showDetails}
				/>
			)}
		</Container>
	)
}

export default ProfessionalsCardSmall
