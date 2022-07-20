import React from 'react'
import CardProfessionals from '../../../components/cards/CardProfessionals'
import CareersInDigital from '../../../components/cards/CareersInDigital'
import image from '../../../assets/images/ConnorWine'
import {
	StyledCol2,
	StyledCol1,
	StyledRow,
} from '../../../components/layout/Rows&Collumns/Rows&Collumns.style.js'
import CardCapabilities from '../../../components/cards/CardCapabilities'
import RelatedInsight_Table from '../../../components/tables/RelatedInsight-Table'
import Heading_Paragraph from '../../../components/H&P/H&P'

const Practice = () => {
	const cardContent = {
		imageSrc: image,
		name: 'Connor Colquhoun',
		position: 'wine connoisseur',
		country: 'japan',
		buttonText: 'connect',
	}
	return (
		<>
			<StyledRow>
				<StyledCol1>
					<Heading_Paragraph />
					<RelatedInsight_Table />
					<CardCapabilities />
				</StyledCol1>
				<StyledCol2>
					<CardProfessionals {...cardContent} />
					<CardProfessionals {...cardContent} />
					<CareersInDigital />
				</StyledCol2>
			</StyledRow>
		</>
	)
}

export default Practice
