import React from 'react'
import { Card } from 'react-bootstrap'

const NewsCard = ({ title, date, content }) => {
	return (
		<Card className="border-bottom">
			<Card.Body>
				<Card.Title className="fw-bold">{title}</Card.Title>
				<Card.Subtitle className="my-2 text-muted">{date}</Card.Subtitle>
				<Card.Text>{content}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default NewsCard
