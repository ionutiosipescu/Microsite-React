import React from 'react'
import styled from 'styled-components'
import { size } from '../../utils/breakpoints'
import { Container, Row, Col } from 'react-bootstrap'
import YellowButton from '../buttons/YellowButton'

// Style Card
const ContainerCard = styled.div`
	#container {
		background: var(--gray1);
	}
`
// Style Links List Container
const LinksContainer = styled.div`
	height: auto;
	width: 100%;
	.listLinks {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		padding-left: 0;
	}
`

const CardCapabilities = () => {
	return (
		<ContainerCard>
			<Container className=" my-4 p-4" id="container">
				<Row>
					<Col>
						{/* TITLE */}
						<h4 className="fw-bold text-primary">{cardData[0].title}</h4>
						<Row className="my-4 fw-bold">
							<LinksContainer>
								{/* Mapping links in a ul */}

								{cardData?.map((element, index) => {
									return (
										<ul className="listLinks" key={index}>
											{/* Mapping every link in a li */}

											{element?.links.map((link, index) => {
												return (
													<li href={'#'} key={index}>
														{link}
													</li>
												)
											})}
										</ul>
									)
								})}
							</LinksContainer>
						</Row>
						<YellowButton
							text={'Read more about our Capabilities'}
						></YellowButton>
					</Col>
				</Row>
			</Container>
		</ContainerCard>
	)
}

// Simulare API
const cardData = [
	{
		title: 'Expertise',
		links: ['Link1', 'Link2', 'Link3', 'Link1', 'Link2', 'Link1'],
	},
]
export default CardCapabilities
