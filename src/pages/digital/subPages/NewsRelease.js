import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { PostCard } from '../../../components/cards'

//data
import { PostsArr } from '../../../utils/data'

const PostsContainer = styled.div`
	padding: 2rem;
	margin: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const NewsRelease = () => {
	return (
		<>
			<Row className="p-3">
				<PostsContainer>
					{PostsArr.map((post, index) => (
						<PostCard post={post} key={index} />
					))}
				</PostsContainer>
			</Row>
		</>
	)
}

export default NewsRelease
