import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
	//   border: 2px solid red;
	img {
		height: 40px;
		width: 40px;
		color: aqua;
		// background-color: aqua;
	}

	.sectionTitle {
		color: aqua;
	}
`

const QualityCard = ({ quality }) => {
	return (
		<Card className="col-lg-4" id={quality.id}>
			<div className="d-flex m-4">
				<div className="icon d-flex align-items-start my-4">
					<img src={quality.iconUrl} />
				</div>
				<div className="row m-2">
					<h4 className="sectionTitle">{quality.sectionTitle}</h4>
					<span className="sectionDescription">
						{quality.sectionDescription}
					</span>
				</div>
			</div>
		</Card>
	)
}

export default QualityCard
