import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const NewsCell = styled.div`
	border-bottom: 1px solid #e6e6e6;
`

const TestTable = ({post}) => {
	return (
		<>
		<NewsCell>
			<h4>{post?.title}</h4>
			<span className="text-muted"> {post?.date}</span>
		</NewsCell>
		
		</>
	)
}

export default TestTable

